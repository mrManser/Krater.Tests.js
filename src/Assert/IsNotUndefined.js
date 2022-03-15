var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет неэквивалентность указанного значения и undefined (значение !== undefined). 
 * Если значение эквивалентно undefined, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.Assert.IsNotUndefined
 * 
 * @param {*} expected - Проверяемое значение.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function IsNotUndefined(expected, message) {
    if (expected !== undefined) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Значение эквивалентно undefined! '
        + `Проверяемое значение: ${expected}.`
    );
}

module.exports = IsNotUndefined;