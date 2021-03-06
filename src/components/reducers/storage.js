const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const initialState = {
  isAuth: false,
  data: [
    {
      id: 1,
      name: `Mike`,
      check: getRandomInt(100, 1000),
      capacity: getRandomInt(1, 20),
      total: getRandomInt(1000, 100000),
    },
    {
      id: 2,
      name: `Guy`,
      check: getRandomInt(100, 1000),
      capacity: getRandomInt(1, 20),
      total: getRandomInt(1000, 100000),
    },
    {
      id: 3,
      name: `Chris`,
      check: getRandomInt(100, 1000),
      capacity: getRandomInt(1, 20),
      total: getRandomInt(1000, 100000),
    },
    {
      id: 4,
      name: `Anna`,
      check: getRandomInt(100, 1000),
      capacity: getRandomInt(1, 20),
      total: getRandomInt(1000, 100000),
    },
    {
      id: 5,
      name: `Dima`,
      check: getRandomInt(100, 1000),
      capacity: getRandomInt(1, 20),
      total: getRandomInt(1000, 100000),
    },
    {
      id: 6,
      name: `Alesha`,
      check: getRandomInt(100, 1000),
      capacity: getRandomInt(1, 20),
      total: getRandomInt(1000, 100000),
    },
    {
      id: 7,
      name: `Mike`,
      check: getRandomInt(100, 1000),
      capacity: getRandomInt(1, 20),
      total: getRandomInt(1000, 100000),
    },
    {
      id: 8,
      name: `Guy`,
      check: getRandomInt(100, 1000),
      capacity: getRandomInt(1, 20),
      total: getRandomInt(1000, 100000),
    },
    {
      id: 9,
      name: `Oleg`,
      check: getRandomInt(100, 1000),
      capacity: getRandomInt(1, 20),
      total: getRandomInt(1000, 100000),
    },
    {
      id: 10,
      name: `Kristina`,
      check: getRandomInt(100, 1000),
      capacity: getRandomInt(1, 20),
      total: getRandomInt(1000, 100000),
    },
    {
      id: 11,
      name: `Galya`,
      check: getRandomInt(100, 1000),
      capacity: getRandomInt(1, 20),
      total: getRandomInt(1000, 100000),
    },
    {
      id: 12,
      name: `Aibek`,
      check: getRandomInt(100, 1000),
      capacity: getRandomInt(1, 20),
      total: getRandomInt(1000, 100000),
    },
    {
      id: 13,
      name: `Andrei`,
      check: getRandomInt(100, 1000),
      capacity: getRandomInt(1, 20),
      total: getRandomInt(1000, 100000),
    },
    {
      id: 14,
      name: `Mike`,
      check: getRandomInt(100, 1000),
      capacity: getRandomInt(1, 20),
      total: getRandomInt(1000, 100000),
    },
    {
      id: 15,
      name: `Guy`,
      check: getRandomInt(100, 1000),
      capacity: getRandomInt(1, 20),
      total: getRandomInt(1000, 100000),
    },
  ],
  terminals: [],
  user: null,
  searchArr: [],
};
