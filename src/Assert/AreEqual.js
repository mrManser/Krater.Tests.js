var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет равенство двух значений (значение1 == значение2). 
 * Если значения не равны, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.Assert.AreEqual
 * 
 * @param {*} expected - Проверяемое значение.
 * @param {*} actual - Необходимое значение.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function AreEqual(expected, actual, message) {
    if (expected == actual) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Значения не равны! '
        + `Проверяемое значение: ${expected}. `
        + `Необходимое значение: ${actual}.`
    );
}

module.exports = AreEqual;