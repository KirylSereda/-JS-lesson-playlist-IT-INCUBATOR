const ages = [18, 20, 22, 1, 100, 98, 14]

const predicate = (age: number) => {
    return age > 90
}

const oldAges = [100]

type courseType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 100},
    {title: "JS", price: 200},
    {title: "React", price: 150}
]

const cheapCourses = (course: courseType) => {
    return course.price < 160
}
const chipCourses = [
    {title: 'CSS', price: 110},
    {title: "React", price: 150}
]