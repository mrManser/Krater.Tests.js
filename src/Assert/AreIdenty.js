var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет эквивалентность двух значений (значение1 === значение2). 
 * Если значения не эквивалентны, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.Assert.AreIdenty
 * 
 * @param {*} expected - Проверяемое значение.
 * @param {*} actual - Необходимое значение.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function AreIdenty(expected, actual, message) {
    if (expected === actual) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Значения не эквивалентны! '
        + `Проверяемое значение: ${expected}. `
        + `Необходимое значение: ${actual}.`
    );
}

module.exports = AreIdenty;