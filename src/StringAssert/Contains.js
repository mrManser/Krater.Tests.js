var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет (с учетом регистра) содержит ли строка указанную подстроку. 
 * Если строка не содержит указанную подстроку, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.StringAssert.Contains
 * 
 * @param {string} expected - Проверяемая строка.
 * @param {string} substring - Подстрока.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function Contains(expected, substring, message) {
    if (typeof expected !== 'string') throw new TypeError('expected: Параметр не является строкой');
    if (typeof substring !== 'string') throw new TypeError('substring: Параметр не является строкой');

    if (expected.indexOf(substring) >= 0) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Строка не содержит указанную подстроку! '
        + `Проверяемая строка: ${expected}. `
        + `Подстрока: ${substring}.`
    );
}

module.exports = Contains;