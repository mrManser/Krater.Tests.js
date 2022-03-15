var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет не содержит ли массив указанный элемент.
 * Если массив содержит указанный элемент, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.ArrayAssert.NotContains
 * 
 * @param {Array} expected - Проверяемый массив.
 * @param {*} element - Элемент.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function NotContains(expected, element, message) {
    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');

    if (expected.indexOf(element) < 0) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + `Массив содержит указанный элемент!`
    );
}

module.exports = NotContains;