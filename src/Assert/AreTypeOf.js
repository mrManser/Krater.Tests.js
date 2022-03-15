var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет соответствие типа значения и  указанного типа (typeof <значение> === <тип>). 
 * Если тип значения не соответствует указанному типу, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.Assert.AreTypeOf
 * 
 * @param {*} expected - Проверяемое значение.
 * @param {string} type - Необходимый тип.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function AreTypeOf(expected, type, message) {
    if (typeof type != 'string') throw TypeError('type: Параметр не является строкой');
    
    if (typeof expected === type) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + `Тип значения не соответствует '${type}'! `
        + `Проверяемое значение: ${expected}. `
        + `Необходимый тип: ${type}.`
    );
}

module.exports = AreTypeOf;