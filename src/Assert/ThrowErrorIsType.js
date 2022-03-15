var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет генерирует ли указанная функция при выполнении ошибку указанного типа.
 * Если функция при выполнении не генерирует ошибку указанного типа, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.Assert.ThrowErrorIsType
 * 
 * @param {*} func - Выполняемая функция.
 * @param {*|*[]} [args] - Параметры, передаваемые в функцию при её выполнении.
 * @param {*} [thisArg] - Контекст выполнения функции.
 * @param {*} [errorType] - Тип ошибки.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function ThrowErrorIsType(func, args, thisArg, errorType, message) {
    if (typeof func != 'function') throw TypeError('func: Параметр не является функцией');
    if (!Array.isArray(args)) args = [args];
    errorType = errorType || Error; 

    try {
        func.call(thisArg, ...args);
    } catch (e) {
        if (e.name === errorType.name) return;
    }

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + `Функция не генерирует ошибку ${errorType.name}! `
        + `Функция: ${func.name || "''"}. `
        + `Аргументы: ${args}. `
        + `Контекст: ${thisArg}. `
        + `Тип ошибки: ${errorType.name}.`
    );
}

module.exports = ThrowErrorIsType;