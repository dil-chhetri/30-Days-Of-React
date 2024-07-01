class Person {
    constructor(
        firstName = 'Dil',
         lastName = 'Chhetri',
          age = 24,
           country = 'Nepal',
            city = 'Lalitpur'){
        console.log(this)
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }

    get getScore() {
        return this.score
    }

    get getSkills() {
        return this.skills
    }

    set setScore(score) {
        this.score += score
    }

    set setSkill(skills) {
        this.skills.push(skills)
    }


}

const person1 = new Person()
const person2 = new Person('pri','karn',22)

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

console.log(person1)
console.log(person1.score)
console.log(person1.skills)
console.log(person1.getFullName())


person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person2)
console.log(person2.score)
console.log(person2.skills)
console.log(person2.getFullName())


class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
        super(firstName, lastName, age, country, city)
        this.gender = gender
    }
    saySomething() {
        console.log( ' I am a child learning to play with a man toy')
    }
}


const student1 = new Student('sexy','maxy',10,'nepal','city','male')
student1.setScore = 10
student1.setSkill = 'Jerking'

console.log(student1)
console.log(student1.getFullName())