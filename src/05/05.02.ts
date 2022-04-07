import { GovernmentBuildingsType, HouseType } from "../02/02.02";

export const getStreetsTitlesOfGovermentsBuildings = (bildings: Array<GovernmentBuildingsType>) => {
  return bildings.map((b) => b.address.street.title);
};

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
  return houses.map((h) => h.address.street.title);
};

export const createMessages = (city: Array<HouseType>) => {
  return city.map((c) => `Hello guys from ${c.address.street.title}`);
};
