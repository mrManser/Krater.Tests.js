var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет не содержит ли массив элемент, являющийся null или undefined.
 * Если массив содержит элемент, являющийся null или undefined, 
 * то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.ArrayAssert.AllItemsIsNotNullOrUndefined
 * 
 * @param {Array} expected - Проверяемый массив.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function AllItemsIsNotNullOrUndefined(expected, message) {
    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');

    let result = true;
    let type = null;
    for (const el of expected) {
        if (el === null) type = 'null';
        else if (el === undefined) type = 'undefined';
        if (type) {
            result = false;
            break;
        }
    }
    if (result) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + `Массив содержит элемент, являющийся ${type}!`
    );
}

module.exports = AllItemsIsNotNullOrUndefined;