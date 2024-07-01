// // // // // // scope 
// // // // // // window scope
// // // // // // a = 'JavaScript' // is a window scope varaible 
// // // // // // b = 10  // this is a window scope variable

// // // // // // function letsLearnScope() {
// // // // // //     console.log(a, b)
// // // // // //     if (true) {
// // // // // //         console.log(a, b)
// // // // // //     }
// // // // // // }

// // // // // // console.log(a, b)

// // // // // //global scope 

// // // // // // let a = 'JavaScript'
// // // // // // let b = '10'
// // // // // // function newFunction() {
// // // // // //     console.log(a,b)
// // // // // //     if (true) {
// // // // // //         let a = 'Python'
// // // // // //         let b = 100
// // // // // //         console.log(a, b)
// // // // // //     }
// // // // // //     console.log(a, b)
// // // // // // }

// // // // // // newFunction()
// // // // // // console.log(a, b)


// // // // // //local scopt 

// // // // // // let a = 'JavaScript'
// // // // // // let b = 10 
// // // // // // function localScope() {
// // // // // //     console.log(a, b)
// // // // // //     if (true) {
// // // // // //         let a = 'Python'
// // // // // //         let b = 100
// // // // // //         let c = 'new mewww'
// // // // // //         console.log(a, b, c)
// // // // // //     }
// // // // // //     console.log(a, b)
// // // // // // }
// // // // // // console.log(a, b)
// // // // // // localScope()


// // // // // //object

// // // // // const rectangle = {
// // // // //     length: 20,
// // // // //     width: 20,
// // // // // }

// // // // // console.log(rectangle)

// // // // // const person = {
// // // // //     firstName: 'Asabeneh',
// // // // //     lastName: 'Yetayeh',
// // // // //     age: 250,
// // // // //     country: 'Finland',
// // // // //     city: 'Helsinki',
// // // // //     skills: [
// // // // //       'HTML',
// // // // //       'CSS',
// // // // //       'JavaScript',
// // // // //       'React',
// // // // //       'Node',
// // // // //       'MongoDB',
// // // // //       'Python',
// // // // //       'D3.js',
// // // // //     ],
// // // // //     getFullName: function () {
// // // // //         return `${this.firstName}${this.lastName}`
// // // // //     },
// // // // //     isMarried: true,
// // // // //     'phonw number': '238940',
// // // // // }

// // // // // person.country = 'Nepal'
// // // // // person.firstName = 'Dil'
// // // // // person.lastName = 'Chhetri'
// // // // // person.age = 24

// // // // // person.personInfo = function () {
// // // // //     let skillsWithoutLastSkill = this.skills
// // // // //     .slice(0, this.skills.length - 1)
// // // // //     .join(', ')
// // // // //     let lastSkill = this.skills.slice(this.skills.length - 1)
// // // // //     let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
// // // // //     let fullName = this.getFullName()
// // // // //     let statement = `${fullName} is a ${this.age} old man. \nHe lives in ${this.country}.\nHe teaches ${skills}`
// // // // //     return statement
// // // // // }
// // // // // console.log(person.personInfo())
// // // // // console.log(person.firstName)
// // // // // console.log(person.lastName)
// // // // // console.log(person.age)
// // // // // console.log(person.country)
// // // // // console.log(person.city)
// // // // // person.skills.forEach((item, i)=>{
// // // // //     console.log("skills: " + i , item)
// // // // // })
// // // // // console.log(person.getFullName())

// // // // // console.log(person['phonw number'])



// // // // const person = {
// // // //     firstName: 'Asabeneh',
// // // //     age: 250,
// // // //     country: 'Finland',
// // // //     city: 'Helsinki',
// // // //     skills: ['HTML', 'CSS', 'JS'],
// // // //     title: 'teacher',
// // // //     address: {
// // // //       street: 'Heitamienkatu 16',
// // // //       pobox: 2002,
// // // //       city: 'Helsinki',
// // // //     },
// // // //     getPersonInfo: function() {
// // // //         return `I am ${this.firstName}. I am ${this.age} years old. I live in ${this.city} in ${this.country}. I work as a ${this.title}.My skills are ${this.skills.join(', ')}.And my address is ${this.address.street}`
// // // //     }
// // // // }

// // // // console.log(person.getPersonInfo())
// // // // console.log(Object.keys(person))
// // // // console.log(Object.values(person))
// // // // console.log(Object.entries(person))

// // // // console.log(person.hasOwnProperty('address'))
// // // // console.log(person.address.hasOwnProperty('street'))



// // // // function declararion

// // // // function square() {
// // // //     let num = 2
// // // //     let sq = num * num 
// // // //     console.log(sq)
// // // // }

// // // // square()

// // // // function addTwoNumbers() {
// // // //     let numOne = 10
// // // //     let numTwo = 20
// // // //     let sum = numOne + numTwo
// // // //     return sum
// // // // }

// // // // console.log(addTwoNumbers())


// // // // function areaOfCircle(r){
// // // //     let area = Math.PI * r * r
// // // //     return area
// // // // }
// // // // console.log(areaOfCircle(5))

// // // // function square(number){
// // // //     return number * number 
// // // // }

// // // // console.log(square(2))

// // // function sumTwoNumbers(num1, num2) {
// // //     return num1 + num2
// // // }

// // // console.log(sumTwoNumbers(10, 15))


// // // function printFullName(firstName, lastName) {
// // //     return `My name is ${firstName} ${lastName}. `
// // // }

// // // console.log(printFullName('Dil', 'Chhetri'))

// // // function sumOfArray(arr) {
// // //     let sum = 0
// // //     for(let i = 0; i < arr.length; i++){
// // //         sum += arr[i]
// // //     }
// // //     return sum
// // // }

// // // console.log(sumOfArray([1,2,3,4]))

// // // function sumOfAllNumbers() {
// // //     let sum = 0
// // //     for(let i = 1; i < arguments.length; i++){
// // //         sum += arguments[i]
// // //     }

// // //     return sum
// // // }

// // // console.log(sumOfAllNumbers(1,2,3,5,5,10))

// // // const sumNumbers = (...args) => {
// // //     console.log(args)
// // //     let sum = 0 
// // //    for (const element of args){
// // //     sum += element
// // //    }

// // //    return sum
// // // }

// // // console.log(sumNumbers(1,1,3))

// // // const obj = {'apple':1, 'mango':2}
// // // for(const key in obj){
// // //     console.log(obj[key],key)
// // // }

// // // //anonymous fucntion 

// // // const anonymousFun = function () {
// // //     console.log('I am a ananomous fucntions store in a anoynomous fuction')
// // // }

// // // const newSquare = function (n) {
// // //     return n * n 
// // // }

// // // anonymousFun()
// // // console.log(newSquare(2))

// // // ;(function (n) {
// // //     console.log(n * n)
// // // })(2)

// // // let squareNum = (function(n) {
// // //     console.log(n * n)
// // // })(10)

// // // squareNum

// // // // arrow function 

// // // const changeToUpperCase = function(string) {
// // //     return string.toUpperCase()
// // // }

// // // console.log(changeToUpperCase('i am sexy'))
// // // const changeToNewUpperCase = function(arr) {
// // //     const newarr = []
// // //     for (const element of arr){
// // //         newarr.push(element.toUpperCase())
// // //     }

// // //     return newarr
// // // }
// // // console.log(changeToNewUpperCase(['mwwwwe','chewew']))


// // // function greetings(name = 'Peter') {
// // //     let message = `${name}, welcome to 30 days of learning`
// // //     return message
// // // }

// // // console.log(greetings())
// // // console.log(greetings('dil'))


// // // const greetingsNew = (name = 'Peter') => {
// // //     return `${name}, welcome to my house`
// // // }

// // // console.log(greetingsNew())
// // // console.log(greetingsNew('dil'))

// // // //callback

// // // const callback = (n) => {
// // //     return n ** 2
// // // }

// // // function cube(callback, n){
// // //     return callback(n) * n
// // // }

// // // console.log(cube(callback, 3))
// // // console.log(callback(2))

// // // // Higher order function returning an other function
// // // const higherOrder = m => {
// // //     const doSomething = n => {
// // //         const doAnything = t =>{
// // //             return m * n * t
// // //         }
// // //         return doAnything
// // //     }
// // //     return doSomething
// // // }

// // // console.log(higherOrder(2)(4)(6))


// // // // setting time 

// // // function sayHello() {
// // //     console.log('Hello')
// // // }
// // // setInterval(sayHello, 2000)

// // // 

// // const numbers = [1, 2, 3,4,5,6,7,8,9,10]
// // const [num1, num2, num3, ...rest] = numbers
// // console.log(num1, num2, num3, ...rest)
// // console.log(rest)


// // const countries = [
// //     'Germany',
// //     'France',
// //     'Belgium',
// //     'Finland',
// //     'Sweden',
// //     'Norway',
// //     'Denmark',
// //     'Iceland',
// //   ]
  

// //   let [ger, framce, , ...nordicCountries] = countries
// //   console.log(ger, framce, nordicCountries)
// //   console.log(nordicCountries)


// // const evens = [2,4,6,8,10]
// // const evenNumbers = [...evens]
// // console.log(evenNumbers)

// // const objs = {'first':'dil','last':'chhetri'}
// // const personInformation = {...objs}

// // console.log(personInformation)

// //functional programming 

// const countries = ['finland','nepal','china']

// const newCountries = countries.map(function (country,i){
//   return `${i + country.toUpperCase()}`
// })

// console.log(newCountries)

// const countriesNew = ['nepal','finland','iceland']
// const countriesWithLand = countriesNew.filter((country)=>{
//  return country.includes('land')
// })

// const countriesWithOutLand = countriesNew.filter((country)=>{
//   return !country.includes('land')
// })
// console.log(countriesWithLand)
// console.log(countriesWithOutLand)



// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const sum = numbers.reduce((acc, cur)=> acc + cur)
// console.log(sum)


// const firstEvenNumber = numbers.find((n) => n % 2 === 0)
// const firstOddNumber = numbers.find((n)=> n % 2 !== 0)

// console.log(firstEvenNumber)
// console.log(firstOddNumber)

// const firstCountryWithLand = countriesNew.find((country) => country.includes('land'))
// console.log(firstCountryWithLand)