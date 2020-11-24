import { Router } from 'express';
import isImageURL from 'image-url-validator';

const router = Router();

router.get('/', async (req, res) => {
  const images = await req.context.models.Image.find();
  return res.send(images);
});

router.get('/check', async (req, res) => {
  const { imageUrl } = req.query;

  res.send(await isImageURL(imageUrl));
});

router.get('/:imageId', async (req, res) => {
  const image = await req.context.models.Image.findById(
    req.params.imageId,
  );
  return res.send(image);
});

router.post('/', async (req, res) => {
  const images = req.body;
  let newImages = [];
  await Promise.all(
    images.map(async (image) => {
      try {
        const _image = await req.context.models.Image.find({
          url: image.url,
          board: image.board,
        });
        let result;
        if (_image.length) {
          await _image[0].remove();
        }
        result = await req.context.models.Image.create({
          url: image.url,
          board: image.board,
          tags: image.tags,
        });
        newImages = [...newImages, result];
      } catch (e) {
        console.log(e, 'error');
      }
    }),
  );

  return res.send(newImages);
});

router.delete('/:imageId', async (req, res) => {
  const image = await req.context.models.Image.findById(
    req.params.imageId,
  );

  let result = null;
  if (image) {
    result = await image.remove();
  }

  return res.send(result);
});

export default router;
