var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет генерирует ли указанная функция при выполнении ошибку.
 * Если функция при выполнении не генерирует ошибку, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.Assert.ThrowError
 * 
 * @param {*} func - Выполняемая функция.
 * @param {*|*[]} [args] - Параметры, передаваемые в функцию при её выполнении.
 * @param {*} [thisArg] - Контекст выполнения функции.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function ThrowError(func, args, thisArg, message) {
    if (typeof func != 'function') throw TypeError('func: Параметр не является функцией');
    if (!Array.isArray(args)) args = [args];

    try {
        func.call(thisArg, ...args);
    } catch (e) {
        return;
    }

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Функция выполняется без ошибок! '
        + `Функция: ${func.name || "''"}. `
        + `Аргументы: ${args}. `
        + `Контекст: ${thisArg}.`
    );
}

module.exports = ThrowError;