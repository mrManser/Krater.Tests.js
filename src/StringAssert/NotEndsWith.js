var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет (с учетом регистра) не заканчивается ли строка указанной подстрокой. 
 * Если строка заканчивается указанной подстрокой, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.StringAssert.NotEndsWith
 * 
 * @param {string} expected - Проверяемая строка.
 * @param {string} substring - Подстрока.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function NotEndsWith(expected, substring, message) {
    if (typeof expected !== 'string') throw new TypeError('expected: Параметр не является строкой');
    if (typeof substring !== 'string') throw new TypeError('substring: Параметр не является строкой');
    
    if (!expected.endsWith(substring)) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Строка заканчивается указанной подстрокой! '
        + `Проверяемая строка: ${expected}. `
        + `Подстрока: ${substring}.`
    );
}

module.exports = NotEndsWith;