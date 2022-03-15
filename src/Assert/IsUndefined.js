var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет эквивалентность указанного значения и undefined (значение === undefined). 
 * Если значение не эквивалентно undefined, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.Assert.IsUndefined
 * 
 * @param {*} expected - Проверяемое значение.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function IsUndefined(expected, message) {
    if (expected === undefined) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Значение не эквивалентно undefined! '
        + `Проверяемое значение: ${expected}.`
    );
}

module.exports = IsUndefined;