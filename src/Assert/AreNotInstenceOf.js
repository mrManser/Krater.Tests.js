var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет соответствие типа объекта и указанного типа (!(<значение> instanceof <тип>)). 
 * Если тип объекта соответствует указанному типу, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.Assert.AreNotInstenceOf
 * 
 * @param {object} expected - Проверяемый объект.
 * @param {*} type - Необходимый тип.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function AreNotInstenceOf(expected, type, message) {
    if (typeof expected != 'object') throw TypeError('expected: Параметр не является объектом');
    
    if (!(expected instanceof type)) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + `Тип объекта соответствует '${type.name}'! `
        + `Проверяемое значение: ${expected}. `
        + `Необходимый тип: ${type.name}.`
    );
}

module.exports = AreNotInstenceOf;