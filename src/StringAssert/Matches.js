var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет соответствует ли строка регулярному выражению. 
 * Если строка не соответствует регулярному выражению, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.StringAssert.Matches
 * 
 * @param {string} expected - Проверяемая строка.
 * @param {string} regexp - Регулярное выражение.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function Matches(expected, regexp, message) {
    if (typeof expected !== 'string') throw new TypeError('expected: Параметр не является строкой');
    // if (typeof regexp !== 'string') throw new TypeError('regexp: Параметр не является строкой');

    if (regexp.test(expected)) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Строка не соответствует регулярному выражению! '
        + `Проверяемая строка: ${expected}. `
        + `Регулярное выражение: ${regexp}.`
    );
}

module.exports = Matches;