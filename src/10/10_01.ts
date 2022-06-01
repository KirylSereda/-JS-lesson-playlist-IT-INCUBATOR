export type UserType = {
  name: string;
  hair: number;
  address: {
    city: string;
    house: number;
  };
};

export type LaptopType = {
  title: string;
};
export type UserWithLaptopType = UserType & {
  laptop: LaptopType;
};

export type UserWithBooksType = UserType & {
  books: Array<string>;
};

export type CompanyType = {
  id: number;
  title: string;
};

export type WithCompanieType = {
  companies: Array<CompanyType>;
};

export function makeHairstyle(u: UserType, power: number) {
  const copy = { ...u, hair: u.hair / power };
  return copy;
}

export function moveUser(u: UserWithLaptopType, city: string) {
  return { ...u, address: { ...u.address, city } };
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
  return { ...u, address: { ...u.address, house } };
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
  return { ...u, laptop: { ...u.laptop, title: laptop } };
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, books: Array<string>) {
  return { ...u, books: [...u.books.concat(books)] };
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
  return { ...u, books: [...u.books.map((b) => (b != oldBook ? b : newBook))] };
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, removeBook: string) {
  return { ...u, books: [...u.books.filter((b) => b != removeBook)] };
}

export function updateCompanyTitle(u: UserWithLaptopType & WithCompanieType, newTitle: string) {
  return { ...u, companies: [...u.companies.map((c) => (c.title == newTitle ? c : { ...c, title: newTitle }))] };
}

export const updateCompanyTitle2 = (companies: { [key: string]: Array<CompanyType> }, userName: string, companyId: number, newTitle: string) => {
  let companyCopy = { ...companies };
  companyCopy[userName] = companyCopy[userName].map((c) => (c.id === companyId ? { ...c, title: newTitle } : c));
  return companyCopy
};
