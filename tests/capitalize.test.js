// import { capitalize } from '../src/capitalize.js';

// if (capitalize('hello') !== 'Hello') {
// throw new Error('Функция работает неверно!');
// }

// if (capitalize('') !== '') {
// throw new Error('Функция работает неверно!');
// }

// console.log('Все тесты пройдены!');

// Такой необычный импорт связан с тем,
// что assert, экспортируемый по умолчанию, считается устаревшим
// Правильно использовать strict

import { strict as assert } from 'node:assert';
// при использовании strict-режима
// проверка equal равносильна strictEqual

import { capitalize } from '../src/capitalize.js';

// Проверка сменилась с отрицательной на положительную
assert.equal(capitalize(''), '');
// Первый параметр actual – то, что пришло
// Второй параметр expected – то, что ожидает тест
// Правильный порядок аргументов имеет большое значение при анализе ошибки
assert.equal(capitalize('hello'), 'Hello');
