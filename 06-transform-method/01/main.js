const array1 = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
array1.map(element => element*2)

const array2 = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
array2.map(element => '' + element)

const array3 = [1, '1', 2, {}];
// result: ["number", "string", "number", "object"]
array3.map(element => typeof element)

const array4 = ['apple', 'banana', 'orange'];
// result: ["APPLE", "BANANA", "ORANGE"]
array4.map(element => element.toUpperCase())

const array5 = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
array5.map(element => element % 2 === 0 ? 'even' : 'odd')

const array6 = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]

array6.map(element => Math.abs(element))

const array7 = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
array7.map(element => element.toFixed(2) + "")

const array8 = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]


    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    array8.map(element => monthName[element])


const array9 = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
array9.map(element => element**4)

const array10 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: ["apple", "banana", "watermelon"]
array10.map(element => element.name)

const array11 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: [14, 18, 32]
array11.map(element => element.age)


const array12 = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]
array12.map(element => element.name + " " + element.surname)

const array13 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]

array13.map(element => {
    today = new Date();
    bd = element.birth.split('-')

    date = today.getDate();
    month = today.getMonth() + 1;
    year = today.getFullYear()

    age = year - +element.birth[0]
    if(month > +element[1]) age --;
    else if(month === +element[1] && date > +element[2]) age --

    element.age = age
})

const array14 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];

// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]
function convtMonth(monthNumber) {
    let i = 0
    
}

function covtDate(date) {
    date.split('-').map(element => 
        `${element[2] ${}}`
        )
}

array14.map(element => (
    `<tr><td>${element.name}</td></tr>`
))
