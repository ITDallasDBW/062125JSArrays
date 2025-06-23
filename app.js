// let arr = [20, 30, 40, 50, 100]

// //First element of array
// console.log(ara[0])
// //Last element of array
// console.log(ara[ara.length - 1])
// //Add element to array
// ara.push(200)

// let newArr = arr.filter((element) => {
//     console.log(element)
//     if (element <50) {
//         return true;
//     }
// })
// console.log(newArr)

// let grades = ['A+', 'A', 'FAIL']
// let grades = ['FAIL', 'FAIL', 'B']
// let grades = ['FAIL']

// let newGrades = grades.filter ((grade) => {
//     console.log(grade)
//     if (grade != 'FAIL')
//         return true;
// })
// console.log(newGrades)


// let grades = ['A+', 'A', 'FAIL']

// let newGrades = grades.filter(grade => grade != 'FAIL')
// console.log(newGrades)

//Looping through arrays at 18:00

// let grades = ['A+', 'A', 'FAIL']
// let goodGrades = []

// for (let i = 0; i < grades.length; ++i) {
// console.log(i);
// if (grades[i] !== 'FAIL') {
//     goodGrades.push(grades[i])
// }
// }
// console.log(goodGrades)

//Array.map at 22:45
// let arr = [1,4,9,16]

// let newArray = arr.map((element) => {
//     console.log(element)
//     return undefined;
// })
// console.log(newArray)

// let dollars = [1,5,10,3]

// let cents = dollars.map((dollar) => {
//     console.log(dollar)
//     return dollar*100;
// })
// console.log(cents)

// let dollars = [1,5,10,3]

// let cents = dollars.map(dollar => dollar*100)
// console.log(cents)

// WITHOUT USING MAP:
let dollars = [1,5,10,3]
let cents = []

for (let i=0; i < dollars.length; ++i) {
    console.log(dollars[i])
    cents.push(dollars[i]*100);
}
console.log(cents);
//28:38