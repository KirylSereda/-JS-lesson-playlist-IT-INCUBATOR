import { StudentType } from "../02/02";
import {
  addSkils,
  addSkils2,
  doesStudentLiveIn,
  makeStudentActive,
} from "./03";

const student: StudentType = {
  id: 1,
  name: "Dimych",
  age: 32,
  isActive: false,
  address: {
    streetTitle: "Surganova 2",
    city: {
      title: "Minsk",
      countryTitle: "Belarus",
    },
  },
  technologies: [
    {
      id: 1,
      title: "HTML",
    },
    {
      id: 2,
      title: "CSS",
    },
    {
      id: 3,
      title: "React",
    },
  ],
};

test("new tech skill should be added to student", () => {
  expect(student.technologies.length).toBe(3);
  addSkils(student, "JS");
  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].title).toBe("JS");
  expect(student.technologies[3].title).toBeDefined();
});

test("student should be made active", () => {
  expect(student.isActive).toBe(false);
  makeStudentActive(student);
  expect(student.isActive).toBe(true);
});

test("does student live in city", () => {
  let result1 = doesStudentLiveIn(student, "Moscow");
  let result2 = doesStudentLiveIn(student, "Minsk");
  expect(result1).toBe(false);
  expect(result2).toBe(true);
});
