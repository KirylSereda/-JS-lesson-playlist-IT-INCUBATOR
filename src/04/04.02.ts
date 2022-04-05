import {CityType, GovernmentBuildingsType, HouseType} from "../02/02.02";

export const demolishHousesOnTheStreet = (city: CityType, happyStreet: string) => {
    return city.houses = city.houses.filter(h => h.address.street.title !== happyStreet)
}

export const getHousesOnTheStreet = (houses: Array<HouseType>, whiteStreet: string) => {
    return houses.filter(h => h.address.street.title == whiteStreet)
}

export const getBuildingsWitchStaffCountGreaterThen = (Buildings: Array<GovernmentBuildingsType>, staffCount: number) => {
    return Buildings.filter(b => b.staffCount > staffCount)
}