var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет эквивалентность указанного значения и null (значение === null). 
 * Если значение не эквивалентно null, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.Assert.IsNull
 * 
 * @param {*} expected - Проверяемое значение.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function IsNull(expected, message) {
    if (expected === null) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Значение не эквивалентно null! '
        + `Проверяемое значение: ${expected}.`
    );
}

module.exports = IsNull;