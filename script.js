// alert("elo");
//komentarz
console.log("RED"); 

const name= "Łukasz";
let age =23;
const meal = "Rosół";

console.log(name + " " + age + " " + meal);
//nie powinniśmy używać VAR'a, ponieważ 
//można 2 razy nazwać tak samą zmienną, a nie wywali błędu

//template string, to jest pod esc ``
console.log(`Cześć, jestem ${name}`);

//typy danych 
const test = "to jest stering";
console.log(typeof test);
//sprawdza co to jest za typ danych;

const num = 13;
//typ number

/*metody*/
console.log(name.lenght);
console.log(name.toUpperCase());
console.log(name.charAt(0));

/*ZADANIE*/
const text1='powiększ mnie!'
const text2='ZAPISZ MNIE MAŁYMI LITERAMI'
const text3='#$$#@ wytnij te dziwne znaki na początku!'
const text4='sprawdź, czy słowo zawiera "czy"'
const text5='wyLoguj w konsoli literę "L", która znajduje się w wyrazie "Wyloguj"'
const text6='pies zamień każde słowo pies, na słowo kot pies'
const text7='podziel, ten, sting, od, przecinków'

console.log(text1.toUpperCase());
console.log(text2.toLowerCase());
console.log(text3.slice(6));
console.log(text4.includes('czy'));
console.log(text5.charAt('2'));
console.log(text6.replaceAll('pies','kot'));
console.log(text7.split(','));

//number typ
const num1 = 23
const num2 = '54'

//kontanetacja stringów, czyli 2354
console.log(num1+num2);
//pomnoży razy 1
console.log(num2 *1);
//obcina do 2 miejsc po przecinku
const num4 = 1351.123
console.log(num4.toFixed(2));
//parsowanie ze stringa na inta
const num5 = '123'
console.log(parseInt(num5));

//Boolean
let a = true;
let b = false
console.log(a);
// te wartości zawsze zwrócą false: false, undefined, null, 0, NaN, '' (pusty string)
//undefined - brak przypisanej wartości

//typy złożone
//tablice
const colors =['blue', 'red','green']
console.log(colors);

//funkcje
function func(){
    console.log('Cześć, jestem w funkcji');
}
func()

//obiekt
const person ={
    name: 'Klaudia',
    age: 23,
    faColor: null
}
console.log(person)
//modulo 
const modulo = 10 % 3
console.log(modulo)

//przypisanie
let x = 15
let y = 10
x = x + y
console.log(x)

x += y
console.log(x)

x = x - y
console.log(x);

x -= y 
console.log(x);

x *= y
console.log(x)

x / y
console.log(x)

x % y
console.log(x)

//operatory porównania
console.log(10 == '10');
console.log(10 === '10');
console.log(10 === 10);
// == porównuje zawartość
// === porównuje zawartość i typ danych
console.log(!true);
console.log(10 != '10');
console.log(10 > 5);
console.log(5 <= 5);

//operatory logiczne
// &&  i
// ||  lub
// ! zaprzeczenie 

if(5>0 && 10 >5)
{
    console.log('ok');
}else
{
    console.log('not ok');
}

const pass = "fsfddfsdfddf!"

if(pass.length > 10 && pass.includes('!'))
{
    console.log('ok');
}else
{
    console.log('not ok');
}
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

//operator waunkowy
console.log(10 > 20 ? 'jest większy' : 'jest mniejszy');

/* ZADANIA */
let c =50
let d = 30
console.log(c > d ? `${c} jest większe od ${d}` : `${d} jest większe od ${c}`);

let blue = 'blue'
let green = 'green'
if(blue == green)
{
    console.log('kolory się zgadzają');
}else
{
    console.log('kolory się nie zgadzają');
}

let f = 100
let g = 50
if(f>g)
{
    console.log('f > g');
}else if (f == g)
{
    console.log('f = g');
}else
{
    console.log('f < g');
}

let promo = '50%';
switch(promo)
{
    case '10%':
        console.log('Dziś mamy 10% zniżki');
        break;
    case '20%':
        console.log('Dziś mamy 20% zniżki');
        break;
    case '30%':
        console.log('Dziś mamy 30% zniżki');
        break;
    default:
        console.log(`Dziś mamy ${promo} zniżki`);
}

// let u = 10
// (u % 2 === 0) ? `Tak, wartość ${u} jest parzysta` : `Nie, wartość ${u} nie jest parzysta`

/*PĘTLE*/

for(let i =0; i < 10; i++)
{
    console.log(i);
}

let i = 0;
while( i < 5)
{
    console.log(i);
    i++
}

do{
    i++
    console.log(i);
} while (i < 2)

//for of - nie korzystać kiedy chcemy się dostać do konkretnego indeksu
const numbers = [1,2,3,4]
for (const number of numbers)
{
    console.log(number * 2);
}

//ZADANIE 
const tab = ['Kraków', 'Katowice', 'Chorzów']
for (let p = 0; p < tab.length; p++)
{
    console.log(`To miasto nazywa się ${tab[p].toUpperCase()}`);
}

let mm = 0;
while(mm < 10)
{
    mm += 2
    console.log(mm);
}

let xx = 20
do{
   xx -= 3
} while(xx > 0)
console.log(xx);

let tab2 = [5, 8, 10, 23, 48, 60]
for (const num of tab2)
{
    num % 2 == 0 ? console.log(`Liczba ${num} jest parzysta`) : console.log(`Liczba ${num} nie jest parzysta`); 
}

/* TABLICE */
//metoda unshift dodaje elementy na początku tablicy
//metoda shift usuwa element z indeksem 0 
//metoda push dodaje elementy na koniec tablicy
//metoda pop usuwa ostatni element z tablicy
//unshifta praktycznie się nie używa, bo zmienia indeksy

const tab3 = [1,2,3,4]
tab3.unshift('123')
console.log(tab3);

tab3.shift();
console.log(tab3);

tab3.push('555')
console.log(tab3);

tab3.pop();
console.log(tab3);

//Metody na tablicach
function multiply (dd)
{
    return dd * 2
}

//metoda map służy do tego, że działa podobnie jak foreach, czyli przechodzi po każdym elemencie 
const varMap = tab3.map(multiply)
console.log(tab3);
console.log(varMap);

//konkatencja dwóch tablic
const abc = ['a', 'b', 'c'] 
const xyz = abc.concat('x', 'y', 'z')
console.log(xyz);

//spread - rozmarować
console.log(abc);
console.log(...abc);

//przykład konkatenacji i spreada
const meals = ['schabowy', 'mielone']
const drinks = ['pepsi', 'cola', 'fanta']
const menu = [...meals, ...drinks]
console.log(menu);


const menu2 = meals.concat(drinks)
console.log(menu2);

//ZADANIE
const num123 = [0,0,1,1,2,2,2]
const colors2 = ['red', 'green', 'blue', 'true', 123]
const cars = [123, 'true', 'audi', 'bmw', 'mercedes', 'ferrari' , '😅', '😂']

console.log(num123);

const numTest = num123.slice(0, 2)
console.log(numTest);

//wycinanie 2 ostatnich itemów w tablicy
const numTest2 = num123.slice(num123.length-3, num123.length)
console.log(numTest2);

//wycinanie 2 ostatnich itemów w tablicy
const colorTest = colors2.splice(colors2.length-2, colors2.length)
console.log(colorTest);

const carsTest = cars.splice(2,4)
console.log(carsTest);

//foreach
num123.forEach()