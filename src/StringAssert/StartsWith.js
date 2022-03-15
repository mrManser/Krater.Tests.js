var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет (с учетом регистра) начинается ли строка с указанной подстроки. 
 * Если строка не начинается с указанной подстроки, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.StringAssert.StartsWith
 * 
 * @param {string} expected - Проверяемая строка.
 * @param {string} substring - Подстрока.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function StartsWith(expected, substring, message) {
    if (typeof expected !== 'string') throw new TypeError('expected: Параметр не является строкой');
    if (typeof substring !== 'string') throw new TypeError('substring: Параметр не является строкой');
    
    if (expected.startsWith(substring)) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Строка не начинается с указанной подстроки! '
        + `Проверяемая строка: ${expected}. `
        + `Подстрока: ${substring}.`
    );
}

module.exports = StartsWith;