var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет неэквивалентность двух значений (значение1 !== значение2). 
 * Если значения эквивалентны, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.Assert.AreNotIdenty
 * 
 * @param {*} expected - Проверяемое значение.
 * @param {*} actual - Необходимое значение.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function AreNotIdenty(expected, actual, message) {
    if (expected !== actual) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Значения эквивалентны! '
        + `Проверяемое значение: ${expected}. `
        + `Необходимое значение: ${actual}.`
    );
}

module.exports = AreNotIdenty;