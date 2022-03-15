var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет не содержит ли массив элемент, являющийся null.
 * Если массив содержит элемент, являющийся null, 
 * то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.ArrayAssert.AllItemsIsNotNull
 * 
 * @param {Array} expected - Проверяемый массив.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function AllItemsIsNotNull(expected, message) {
    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');

    let result = true;
    for (const el of expected) {
        if (el === null) {
            result = false;
            break;
        }
    }
    if (result) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + `Массив содержит элемент, являющийся null!`
    );
}

module.exports = AllItemsIsNotNull;