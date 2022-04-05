import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02.02";

export const sum = (a: number, b: number) => {
    return a + b;
};

export function sum2(a: number, b: number) {
    return a + b;
}

export const addSkils = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill,
    });
};

export function addSkils2(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill,
    });
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true;
}

export function doesStudentLiveIn(s: StudentType, city: string) {
    return s.address.city.title === city;
}

export const addMoneyToBudget = (Building: GovernmentBuildingsType, budget: number) => {
    Building.budget += budget;
};

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
};

export const toFireStaff = (Building: GovernmentBuildingsType, staffCountToFire: number) => {
    Building.staffCount -= staffCountToFire
}

export const toHireStaff = (Building: GovernmentBuildingsType, staffCountToHire: number) => {
    Building.staffCount += staffCountToHire
}

export const createMesssage = (city: CityType) => {
return `Hello ${city.title}.I want you be happy. All ${city.citizensNumber}`
}