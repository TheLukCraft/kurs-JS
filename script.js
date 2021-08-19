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

for(let i =0; i < 10; i++)
{
    console.log(i);
}