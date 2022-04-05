test('Should take old ,en older 90', () => {
    const ages = [18, 20, 1, 100, 90, 14];

    const oldAges = ages.filter(age => age > 99)
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('Should take courses chipper 160', () => {
    const courses = [
        {title: "CSS", price: 100},
        {title: "JS", price: 200},
        {title: "React", price: 150}
    ]

    const chipCourses = courses.filter(cours => cours.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].price).toBe(100)
})
test("get only completed tasks", () => {

    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 1, title: 'Milk', isDone: true},
        {id: 1, title: 'Solt', isDone: false},
        {id: 1, title: 'Sugar', isDone: true}
    ]

    const completedTasks=tasks.filter(task=>task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe('Milk')


})