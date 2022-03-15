var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет неравенство двух значений (значение1 != значение2). 
 * Если значения равны, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.Assert.AreNotEqual
 * 
 * @param {*} expected - Проверяемое значение.
 * @param {*} actual - Необходимое значение.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function AreNotEqual(expected, actual, message) {
    if (expected != actual) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Значения равны! '
        + `Проверяемое значение: ${expected}. `
        + `Необходимое значение: ${actual}.`
    );
}

module.exports = AreNotEqual;