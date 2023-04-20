'use strict';

// Напишите функцию, которая принимает массив чисел и возвращает true, если каждый элемент массива является четным числом.

const arrNumbersOne = [2, 4, 6, 8];
const arrNumbersTwo = [2, 4, 6, 7];

const even = (element) => element % 2 === 0;

console.log(arrNumbersOne.every(even));
console.log(arrNumbersTwo.every(even));

// Напишите функцию, которая принимает массив объектов, каждый из которых имеет свойство "name", и возвращает true, если каждый объект 
// имеет уникальное имя.

const arrUniquqPeopleOne = [
  {
    name: 'Kirill',
    age: 31
  },
  {
    name: 'Igor',
    age: 17
  },
  {
    name: 'Elena',
    age: 25
  }
];

const arrUniquqPeopleTwo = [
  {
    name: 'Kirill',
    age: 31
  },
  {
    name: 'Igor',
    age: 17
  },
  {
    name: 'Igor',
    age: 25
  }
];

const unique = function(arr) {
  let first = [];
  let second = [];

  for (let str of arr) {
    first.push(str.name)
  }

  for (let str of arr) {
    if (!second.includes(str.name)) {
      second.push(str.name);
    }
  }
  
  if(JSON.stringify(first) === JSON.stringify(second)) {
    return true;
  } else {
    return false;
  }
}

console.log(unique(arrUniquqPeopleOne));
console.log(unique(arrUniquqPeopleTwo));

// Напишите функцию, которая принимает два массива и возвращает true, если первый массив содержит все элементы второго массива.

const arrOne = ['Apple', 'Orange', 'Pineapple', 'Watermelon', 'Melon', 'Strawberry'];
const arrTwo = ['Apple', 'Orange', 'Pineapple', 'Watermelon', 'Melon'];
const arrThree = ['Apple', 'Orange', 'Pineapple', 'Watermelon', 'Strawberry', 'Blackberry'];

const containsAll = function(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      return false;
    }
  }
  return true;
}

console.log(containsAll(arrOne, arrTwo));
console.log(containsAll(arrOne, arrThree));

// Напишите функцию, которая принимает массив строк и возвращает новый массив, отсортированный в алфавитном порядке.

const arrStrings = ['Apple', 'Orange', 'Pineapple', 'Watermelon', 'Melon'];

console.log(arrStrings.sort());

// Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий только те объекты, которые имеют свойство 
// "age" больше или равное 18.

const arrPeople = [
  {
    name: 'Kirill',
    age: 31
  },
  {
    name: 'Igor',
    age: 17
  },
  {
    name: 'Elena',
    age: 25
  },
  {
    name: 'Roman',
    age: 18
  },
  {
    name: 'Irina',
    age: 9
  }
];

const adultPeople = (item) => item.age >= 18

console.log(arrPeople.filter(adultPeople));

