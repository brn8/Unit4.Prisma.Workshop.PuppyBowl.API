const prisma = require("../prisma");
const seed = async () => {
  const addPLayers = async () => {
    const players = [
      { name: "lincoln", breed: "Golden Retriver", status: "FIELD" },
      { name: "chase", breed: "Poodle" },
      { name: "Dog 3", breed: "German Shepherd", status: "FIELD" },
      { name: "Dog 4", breed: "Beagle" },
      { name: "Dog 5", breed: "Bulldog", status: "FIELD" },
      { name: "Dog 6", breed: "Dachshund" },
      { name: "Dog 7", breed: "French Bulldog", status: "FIELD" },
      { name: "Dog 8", breed: "Cartoon" },
      { name: "Dog 9", breed: "Australian Cattle Dog", status: "FIELD" },
      { name: "Dog 10", breed: "Husky" },
    ];
    await prisma.Player.createMany({ data: players });
  };
  await addPLayers();
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
