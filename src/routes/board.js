import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const messages = await req.context.models.Board.find();
  return res.send(messages);
});

router.get('/:boardId', async (req, res) => {
  const message = await req.context.models.Board.findById(
    req.params.boardId,
  );
  return res.send(message);
});

router.post('/', async (req, res) => {
  const boards = req.body;

  let newBoards = [];
  await Promise.all(
    boards.map(async (board) => {
      const result = await req.context.models.Board.create({
        title: board.title,
      });
      newBoards = [
        ...newBoards,
        { ...result._doc, previous_id: board._id },
      ];
    }),
  );

  return res.send(newBoards);
});

router.delete('/:boardId', async (req, res) => {
  const board = await req.context.models.Board.findById(
    req.params.boardId,
  );

  let result = null;
  if (board) {
    result = await board.remove();
  }

  return res.send(result);
});

export default router;
