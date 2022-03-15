var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет равенство указанного значения и true (значение == true).
 * Если значение не равно true, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.Assert.IsTrue
 * 
 * @param {*} expected - Проверяемое значение.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function IsTrue(expected, message) {
    if (Boolean(expected) == true) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Значение не равно true! '
        + `Проверяемое значение: ${expected}.`
    );
}

module.exports = IsTrue;