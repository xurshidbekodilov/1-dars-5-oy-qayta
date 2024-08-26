/*1-Masala: Sonlardan iborat massiv berilgan. Shu massivdagi faqat toq
 sonlarning yig'indisini hisoblovchi funksiya yozing.*/
/*
 function func(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 !== 0) {
            sum += num;
        }
    }
    return sum;
}
*/
/*
const func = function(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 !== 0) {
            sum += num;
        }
    }
    return sum;
};
*/
/*
const func = (arr) => {
    return arr.reduce((sum, num) => num % 2 !== 0 ? sum + num : sum, 0);
};
*/


/*2-Masala: Sonlardan iborat massiv berilgan. Shu massivdagi eng kichik elementni topuvchi funksiya yozing.*/
/*
function func(arr) {
    return Math.min(...arr);
}
*/
/*
const func = function(arr) {
    return Math.min(...arr);
};
*/
/*
const func = (arr) => Math.min(...arr);
*/


/*3-Masala: Berilgan matndan faqat raqamlarni ajratib olish funksiyasini yozing.*/
/*
function func(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= '0' && char <= '9') {
            res += char;
        }
    }
    return res;
}
*/
/*
const func = function(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= '0' && char <= '9') {
            res += char;
        }
    }
    return res;
};
*/
/*
const func = (str) => {
    let res = '';
    for (let char of str) {
        if (char >= '0' && char <= '9') {
            res += char;
        }
    }
    return res;
};
*/


/*4-Masala: Berilgan sonning kvadratini hisoblaydigan funksiya yozing.*/
/*
function func(num) {
    return num * num;
}
*/
/*
const func = function(num) {
    return num * num;
};
*/
/*
const func = (num) => num * num;
*/


/*5-Masala: Berilgan matn satridagi so'zlarni teskari tartibda chiqaradigan funksiya yozing.
 Masalan, “salom bolalar” => “ralalob molas”.*/
/*
 function func(str) {
    return str.split('').reverse().join('');
}
*/
/*
const func = function(str) {
    return str.split('').reverse().join('');
};
*/
/*
const func = (str) => str.split('').reverse().join('');
*/


/*6-Masala: Berilgan matn satridagi faqat harflarni sanaydigan funksiya yozing*/
/*
function func(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            count++;
        }
    }
    return count;
}
*/
/*
const func = function(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            count++;
        }
    }
    return count;
};
*/
/*
const func = (str) => {
    let count = 0;
    for (let char of str) {
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            count++;
        }
    }
    return count;
};
*/


/*7-Masala: Sonlardan iborat massiv berilgan. 
Shu massivdagi har bir sonning kubini hisoblaydigan funksiya yozing.*/
/*
function func(arr) {
    return arr.map(num => num ** 3);
}
*/
/*
const func = function(arr) {
    return arr.map(num => num ** 3);
};
*/
/*
const func = (arr) => arr.map(num => num ** 3);
*/


/*8-Masala: Berilgan matn satridagi unli harflarni teskari tartibda chiqaradigan funksiya yozing*/
/*
function func(str) {
    let vowels = [];
        for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                vowels.push(str[i]);
                break;
        }
    }
        vowels.reverse();
        return vowels;
}
*/
/*
const func = function(str) {
    let vowels = [];
        for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                vowels.push(str[i]);
                break;
        }
    }
        vowels.reverse();
        return vowels;
};
*/
/*
const func = (str) => {
    let vowels = [];
        for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                vowels.push(str[i]);
                break;
        }
    }
        vowels.reverse();
        return vowels;
};
*/

/*9-Masala: Sonlar massivi berilgan. Shu massivdagi sonlarning o'rta arifmetik qiymatini topuvchi funksiya yozing*/
/*
function func(arr) {
    let sum = 0;
        for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
        return sum / arr.length;
}
*/
/*
const func = function(arr) {
    let sum = 0;
        for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
        return sum / arr.length;
};
*/
/*
const func = (arr) => {
    let sum = 0;
        for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
        return sum / arr.length;
};
*/

/*10-Masala: Matn satri va so'z berilgan. Shu matndan berilgan so'zni o'chiradigan funksiya yozing.*/
/*
function func(text, word) {
    let arr = text.split(' ');
    let resultArr = [];
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== word) {
            resultArr.push(arr[i]);
        }
    }
        return resultArr.join(' ');
}
*/
/*
const func = function(text, word) {
    let arr = text.split(' ');
    let resultArr = [];
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== word) {
            resultArr.push(arr[i]);
        }
    }
        return resultArr.join(' ');
};
*/
/*
const func = (text, word) => {
    let arr = text.split(' ');
    let resultArr = [];
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== word) {
            resultArr.push(arr[i]);
        }
    }
        return resultArr.join(' ');
};
*/




/*1. Quyidagi massivdan name, age, va city o'zgaruvchilarini destructuring orqali ajratib oling:*/
/*
const info = ["Ali", 30, "Toshkent"];
const [name, age, city] = info;
console.log(name);
console.log(age);
console.log(city);
*/

/*2. colors massivining birinchi ikkita elementini
 alohida o'zgaruvchilarga, qolganlarini esa yangi massivga o'zlashtiring:*/
/*
const colors = ["red", "green", "blue", "yellow", "purple"];
const [firstColor, secondColor, ...restColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(restColors);
*/

/*3. Funksiya yarating, u massiv qabul qiladi va destrukturatsiya orqali birinchi va oxirgi
 elementlarini alohida o'zgaruvchilarga ajratadi. Keyin ularni qaytaradi:*/
/*
function firstAndLast(arr) {
  const [firstElement, , , , lastElement] = arr;
  return [firstElement, lastElement];
}
const result = firstAndLast([10, 20, 30, 40]);
console.log(result);
*/

/*4. Destructuring yordamida massivdan faqat kerakli elementlarni olib, ularga qiymat
 o'zlashtiring va qolgan elementlarni inkor eting:*/
/*
const numbers = [1, 2, 3, 4, 5, 6];
const [, second, , , fifth] = numbers;
console.log(second);
console.log(fifth);
*/



/*1. Quyidagi obyektning title va author qiymatlarini alohida o'zgaruvchilarga o'zlashtiring:*/
/*
const book = {
    title: "JavaScript for Beginners",
    author: "John Doe",
    year: 2021
  };
  const { title, author } = book;
  console.log(title);
  console.log(author);
*/

/*2. Quyidagi obyektning ichida mavjud bo'lgan latitude, 
longitude qiymatlarini alohida o'zgaruvchilarga destructuring orqali oling*/
/*
const location = {
    city: "Toshkent",
    coordinates: {
      latitude: 41.2995,
      longitude: 69.2401
    }
  };
  const { coordinates: { latitude, longitude } } = location;
  console.log(latitude);
  console.log(longitude);
*/

/*3. Destructuring yordamida obyektning qiymatlariga yangi nomlar bering
 va shu nomlar bilan o'zgaruvchilarga o'zlashtiring:*/
/*
 const person = {
    firstName: "Ali",
    lastName: "Valiyev",
    age: 28
  };
  const { firstName: fName, lastName: lName, age } = person;
  console.log(fName);
  console.log(lName);
  console.log(age);
*/

/*4. Quyidagi obyektning ba'zi qiymatlariga default (standart) qiymatlar o'rnating va destructuring qiling:*/
/*
const settings = {
    theme: "dark",
    language: "uz"
  };
  const { theme, language, mode = "light", fontSize = "16px" } = settings;
  console.log(theme);
  console.log(language);
  console.log(mode);
  console.log(fontSize);
*/