import {CityType} from "../02/02.02";
import {demolishHousesOnTheStreet, getBuildingsWitchStaffCountGreaterThen, getHousesOnTheStreet} from "./04.02";
import exp from "constants";

let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            id: 1,
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "White street"
                },
            },
        }, {
            id: 2,
            buildedAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "Happy street"
                },
            },
        }, {
            id: 3,
            buildedAt: 2020,
            repaired: false,
            address: {
                number: 101,
                street: {
                    title: "Happy street"
                },
            },
        }],
        governmentBuildings: [{
            type: 'HOSPITAL',
            budget: 200000,
            staffCount: 200,
            address: {
                number: 5,
                street: {
                    title: "Central Str"
                }
            },
        }, {
            type: "FIRE-STATION",
            budget: 500000,
            staffCount: 1000,
            address: {
                street: {
                    title: "South Str"
                }
            },
        }],
        citizensNumber: 1000000
    }
})

test("Houses should be destroyes", () => {


    demolishHousesOnTheStreet(city, 'Happy street');
    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

test("list of streets titles of houses", () => {
    let happyHouses = getHousesOnTheStreet(city.houses, "White street")
    let whiteHouses = getHousesOnTheStreet(city.houses, 'Happy street')

    expect(happyHouses.length).toBe(1)
    expect(whiteHouses.length).toBe(2)
})

test("buildings with correct staff count",()=>{
    let buildings = getBuildingsWitchStaffCountGreaterThen(city.governmentBuildings,500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe("FIRE-STATION")
})

