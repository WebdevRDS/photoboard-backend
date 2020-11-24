import { Router } from 'express';
import request from 'request';

const router = Router();

const getTagsAsnycFunc = (url) => {
  return new Promise(function (resolve, reject) {
    request(url, function (error, res, body) {
      if (!error && res.statusCode == 200) {
        resolve(JSON.parse(body));
      } else {
        reject(error);
      }
    }).auth(
      process.env.IMAGGA_API_KEY,
      process.env.IMAGGA_SECREAT_KEY,
      true,
    );
  });
};

router.post('/', async (req, res) => {
  const images = req.body;
  let newImages = [];

  await Promise.all(
    images.map(async (image) => {
      try {
        if (!image.tags || !image.tags.length) {
          const { result } = await getTagsAsnycFunc(
            'https://api.imagga.com/v2/tags?image_url=' +
              encodeURIComponent(image.url),
          );
          newImages = [...newImages, { ...image, tags: result.tags }];
        }
      } catch (err) {
        return res.status(500).send({ error: err });
      }
    }),
  );

  return res.status(200).send(newImages);
});

export default router;
