var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет (с учетом регистра) не содержит ли строка указанную подстроку. 
 * Если строка содержит указанную подстроку, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.StringAssert.NotContains
 * 
 * @param {string} expected - Проверяемая строка.
 * @param {string} substring - Подстрока.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function NotContains(expected, substring, message) {
    if (typeof expected !== 'string') throw new TypeError('expected: Параметр не является строкой');
    if (typeof substring !== 'string') throw new TypeError('substring: Параметр не является строкой');
    
    if (expected.indexOf(substring) < 0) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Строка содержит указанную подстроку! '
        + `Проверяемая строка: ${expected}. `
        + `Подстрока: ${substring}.`
    );
}

module.exports = NotContains;