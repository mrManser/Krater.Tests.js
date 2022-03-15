var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет содержит ли массив указанный элемент.
 * Если массив не содержит указанный элемент, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.ArrayAssert.Contains
 * 
 * @param {Array} expected - Проверяемый массив.
 * @param {*} element - Элемент.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function Contains(expected, element, message) {
    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');

    if (expected.indexOf(element) >= 0) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + `Массив не содержит указанный элемент!`
    );
}

module.exports = Contains;