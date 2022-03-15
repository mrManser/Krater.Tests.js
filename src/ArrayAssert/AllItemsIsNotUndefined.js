var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет не содержит ли массив элемент, являющийся undefined.
 * Если массив содержит элемент, являющийся undefined, 
 * то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.ArrayAssert.AllItemsIsNotUndefined
 * 
 * @param {Array} expected - Проверяемый массив.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function AllItemsIsNotUndefined(expected, message) {
    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');

    let result = true;
    for (const el of expected) {
        if (el === undefined) {
            result = false;
            break;
        }
    }
    if (result) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + `Массив содержит элемент, являющийся undefined!`
    );
}

module.exports = AllItemsIsNotUndefined;