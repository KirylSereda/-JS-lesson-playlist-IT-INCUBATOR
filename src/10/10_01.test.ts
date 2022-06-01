import {
  addNewBooksToUser,
  makeHairstyle,
  moveUser,
  moveUserToOtherHouse,
  removeBook,
  updateBook,
  updateCompanyTitle,
  updateCompanyTitle2,
  upgradeUserLaptop,
  UserType,
  UserWithBooksType,
  UserWithLaptopType,
  WithCompanieType,
} from "./10_01";

test("reference type test", () => {
  let user: UserType = {
    name: "Kiryll",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
  };

  const awesomeUser = makeHairstyle(user, 2);

  expect(user.hair).toBe(32);
  expect(awesomeUser.hair).toBe(16);
  expect(awesomeUser.address).toBe(user.address);
});

test("change address", () => {
  let user: UserWithLaptopType = {
    name: "Kiryll",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "Zenbook",
    },
  };

  const userMoved = moveUser(user, "Kiev");

  expect(user).not.toBe(userMoved);
  expect(user.address).not.toBe(userMoved.address);
  expect(user.address.city).toBe("Minsk");
  expect(userMoved.address.city).toBe("Kiev");
  expect(user.laptop).toBe(userMoved.laptop);
});

test("upgrade laptop to macbook", () => {
  let user: UserWithLaptopType = {
    name: "Kiryll",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "Zenbook",
    },
  };

  const newLaptop = upgradeUserLaptop(user, "Macbook");

  expect(user).not.toBe(newLaptop);
  expect(user.address).toBe(newLaptop.address);
  expect(user.laptop).not.toBe(newLaptop.laptop);
  expect(user.laptop.title).toBe("Zenbook");
  expect(newLaptop.laptop.title).toBe("Macbook");
});

test("upgrade house", () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: "Kiryll",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "Zenbook",
    },
    books: ["css", "html", "js", "react"],
  };

  const newHouses = moveUserToOtherHouse(user, 99);

  expect(user).not.toBe(newHouses);
  expect(user.books).toBe(newHouses.books);
  expect(user.laptop).toBe(newHouses.laptop);
  expect(user.address).not.toBe(newHouses.address);
  expect(user.address.house).toBe(12);
  expect(newHouses.address.house).toBe(99);
});

test("add new books to user", () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: "Kiryll",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "Zenbook",
    },
    books: ["css", "html", "js", "react"],
  };

  const newBooks = addNewBooksToUser(user, ["TS", "REST API"]);

  expect(user).not.toBe(newBooks);
  expect(user.books).not.toBe(newBooks.books);
  expect(user.address).toBe(newBooks.address);
  expect(user.laptop).toBe(newBooks.laptop);
  expect(newBooks.books[4]).toBe("TS");
  expect(newBooks.books[5]).toBe("REST API");
});

test("update js to ts", () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: "Kiryll",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "Zenbook",
    },
    books: ["css", "html", "js", "react"],
  };

  const changeBook = updateBook(user, "js", "ts");

  expect(user).not.toBe(changeBook);
  expect(user.laptop).toBe(changeBook.laptop);
  expect(user.address).toBe(changeBook.address);
  expect(user.books).not.toBe(changeBook.books);
  expect(changeBook.books[2]).toBe("ts");
});

test("update js to ts", () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: "Kiryll",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "Zenbook",
    },
    books: ["css", "html", "js", "react"],
  };

  const changeBook = removeBook(user, "js");

  expect(user).not.toBe(changeBook);
  expect(user.laptop).toBe(changeBook.laptop);
  expect(user.address).toBe(changeBook.address);
  expect(user.books).not.toBe(changeBook.books);
  expect(changeBook.books[2]).toBe("react");
});

test("update title company ", () => {
  let user: UserWithLaptopType & WithCompanieType = {
    name: "Kiryll",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "Zenbook",
    },
    companies: [
      { id: 1, title: "Eppam" },
      { id: 2, title: "IT-ICUBATOR" },
    ],
  };

  const changeCompanyTitle = updateCompanyTitle(user, "EPAM");

  expect(user).not.toBe(changeCompanyTitle);
  expect(user.address).toBe(changeCompanyTitle.address);
  expect(user.companies).not.toBe(changeCompanyTitle.companies);
  expect(changeCompanyTitle.companies[0].title).toBe("EPAM");
});

test("update company", () => {
  //formatOnSave
  const companies = {
    kiryll: [
      { id: 1, title: "Azot" },
      { id: 2, title: "IT-ICNUBATOR" },
    ],
    Artem: [{ id: 2, title: "IT-ICNUBATOR" }],
  };

  const changeCompanyTitle = updateCompanyTitle2(companies, "kiryll", 1, "EPAM");
  expect(changeCompanyTitle["kiryll"]).not.toBe(companies["kiryll"]);
  expect(changeCompanyTitle["Artem"]).toBe(companies["Artem"]);
  expect(changeCompanyTitle["kiryll"][0].title).toBe("EPAM");
});
