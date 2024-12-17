const router = require("express").Router();
module.exports = router;
const prisma = require("../prisma");

router.get("/", async (req, res, next) => {
  try {
    const players = await prisma.player.findMany();
    res.json(players);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    console.log(id);
    const players = await prisma.player.findUnique({ where: { id } });
    res.json(players);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, breed, status } = req.body;
    const players = await prisma.player.create({
      data: { name, breed, status: status || "BENCH" },
    });
    res.json(players);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { name, breed, status } = req.body;
    const players = await prisma.player.update({
      where: { id },
      data: { name, breed, status },
    });
    res.json(players);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    await prisma.player.delete({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});
