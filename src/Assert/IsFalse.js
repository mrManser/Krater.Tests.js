var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет равенство указанного значения и false (значение == false).
 * Если значение не равно false, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.Assert.IsFalse
 * 
 * @param {*} expected - Проверяемое значение.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function IsFalse(expected, message) {
    if (Boolean(expected) == false) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Значение не равно false! '
        + `Проверяемое значение: ${expected}.`
    );
}

module.exports = IsFalse;