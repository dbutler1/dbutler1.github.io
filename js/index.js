const button = document.getElementById('submit');
const heading = document.getElementById('top-header');

const colors = ['yellow', 'green','blue','purple','red','orange']

function onSubmitButtonClick() {
    heading.style.color = colors[Math.floor(
        Math.random() * Math.floor(colors.length - 1)
    )] ;
}
button.addEventListener('click', onSubmitButtonClick)



// let name = "Bruce Wayne"
// let age = 35
// let home = "Gotham"

// // alskdfjlskjdf comment'

// name = "Clark Kent"
// age = 32
// home = "Metropolis"

// let greeting = `Good morning ${name}!`
// console.log(greeting)

// let firstName = "Han"
// let lastName = "Solo"
// //let fullName = firstName + lastName
// let fullName = `${firstName} ${lastName}`

// console.log(fullName)

// let noun = 'ghost'
// let number = 6

// if (number > 1) {
// console.log(`${number} ${noun}s`)
// }
// else {
//   console.log(`${number} ${noun}`)
// }
// let noun = 'sheep'
// let number = -8

// if (number > 1) {
//   console.log(`${number} ${noun}s`)
// } else if (number === 0) {
//   console.log(`No ${noun}s`)
// } else if (number < 0) {
//   console.log(`${number} ${noun}s`)
// } else {
//     console.log(`${number} ${noun}`)
// }
// let noun = 'dog'
// let number = 1
// // Refactoring
// if (number > 1 || number <= 0) {
//   console.log(`${number} ${noun}s`)
// } else {
//   console.log(`${number} ${noun}`)
// }
// console.log(prices[prices.length - 1])

// for (let i=2; i <= 5000; i+=2)
//   {
//     console.log (`The number is ${i}`)
//   }
//   const gradesArray = [100, 90, 100, 89, 100, 100]

//   // <60 F
//   // <70 D
//   // <80 C
//   // <90 B
//   // A
  
//   let total = 0
  
//   for (let i = 0; i <= gradesArray.length - 1; i++) {
//     total += gradesArray[i]
//   }
  
//   const average = total / gradesArray.length 
  
//   if (average < 60) {
//     console.log('The average letter grade is F')
//   } else if (average < 70) {
//       console.log('The average letter grade is D')
//   } else if (average < 80) {
//       console.log('The average letter grade is C')
//   } else if (average < 90) {
//       console.log('The average letter grade is B')
//   } else {
//     console.log('The average letter grade is A')
//   }


//   /* 
// #1. create a list of books, where each book has a title,
// author, and a boolean for whether you have read it or not.

// #2. loop through your list of books and print out the title,
// author for each one

// */

// let book1 = {
//     title: 'Caste',
//     author: 'Isabel Wilkerson',
//     haveRead: true,
//   }
//   let book2 = {
//     title: 'The One And Only Ivan',
//     author: 'Catherine Applegate',
//     haveRead: true,
//   }
//   let book3 = {
//     title: 'Mistress of the Ritz',
//     author: 'Melanie Benjamin',
//     haveRead: false,
//   }
  
//   let books = [book1, book2, book3]
  
//   for (let i = 0; i <= books.length - 1; i++) {
//     console.log(books[i].title)
//     console.log(books[i].author)
//   }

