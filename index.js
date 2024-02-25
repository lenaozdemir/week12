//Задание 2

const text = document.querySelector(".text").textContent;
console.log(`1. Количество символов в тексте: ${text.length}`);
//2. Добавьте перенос строки после каждого символа ; и сохраните результат в переменную result.
const result = text.replace(/;/g, ";\n");
console.log(`2. Текст с переносами строк: \n ${result}`);
//3. Удалите все пробелы в переменной result и сохраните результат в переменную substring.
const substring = result.replace(/ /g, "");
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
//4. Извлеките подстроку из переменной result, начиная с 28-го символа и до 50-го символа (не включая), из текста и сохраните в переменную newText.
const newText = result.slice(28, 50);
console.log(`4. Извлечение подстроки: ${newText}`);
//5. Замените в извлеченной подстроке (newText) все вхождения слова клён на дубе и сохраните результат в переменную replacedText.
const replacedText = newText.replace(/клён/g, "дуб");
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
//6. Приведите текст в переменной result к верхнему регистру и сохраните результат в переменную replacedText2.
const replacedText2 = result.toUpperCase();
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
//7. Замените все вхождения слова клён на дуб в переменной result и сохраните результат в переменную replacedText3.
const replacedText3 = result.replace(/клён/g, "дуб");
console.log(
  `7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`
);
//8. Найдите индекс первого вхождения слова моря в тексте и сохраните в переменную index.
const index = result.indexOf("моря");
console.log(`8. Индекс первого вхождения "моря": ${index}`);
//9. Измените только первую букву в переменной replacedText на заглавную без использования регулярных выражений и сохраните результат в переменную modifiedText.
const modifiedText = replacedText[0].toUpperCase() + replacedText.slice(1);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);

//Задание 3
const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
const random = document.querySelector("#random-result");
const buttonRandom = document.querySelector("#random_button");

function makeRandom() {
  random.textContent =
    alphabet[Math.floor(Math.random() * 33)] +
    alphabet[Math.floor(Math.random() * 33)] +
    alphabet[Math.floor(Math.random() * 33)] +
    alphabet[Math.floor(Math.random() * 33)];
}

buttonRandom.addEventListener("click", makeRandom);
