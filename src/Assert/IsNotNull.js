var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет неэквивалентность указанного значения и null (значение !== null). 
 * Если значение эквивалентно null, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.Assert.IsNotNull
 * 
 * @param {*} expected - Проверяемое значение.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function IsNotNull(expected, message) {
    if (expected !== null) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Значение эквивалентно null! '
        + `Проверяемое значение: ${expected}.`
    );
}

module.exports = IsNotNull;