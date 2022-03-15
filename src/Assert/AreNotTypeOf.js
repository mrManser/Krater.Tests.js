var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет несоответствие типа значения и указанного типа (typeof <значение> !== <тип>). 
 * Если тип значения соответствует указанному типу, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.Assert.AreNotTypeOf
 * 
 * @param {*} expected - Проверяемое значение.
 * @param {string} type - Необходимый тип.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function AreNotTypeOf(expected, type, message) {
    if (typeof type != 'string') throw TypeError('type: Параметр не является строкой');
    
    if (typeof expected !== type) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + `Тип значения соответствует' ${type}'! `
        + `Проверяемое значение: ${expected}. `
        + `Необходимый тип: ${type}.`
    );
}

module.exports = AreNotTypeOf;