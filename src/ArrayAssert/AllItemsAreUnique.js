var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет являются ли все элементы массива уникальными.
 * Если любые два элемента массива равны, то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.ArrayAssert.AllItemsAreUnique
 * 
 * @param {Array} expected - Проверяемый массив.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function AllItemsAreUnique(expected, message) {
    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');

    let buf = [];
    let result = true;
    for (const el of expected) {
        if (buf.indexOf(el) < 0) {
            buf.push(el);
        } else {
            result = false;
            break;
        }
    }
    if (result) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + `Не все элементы массива являются уникальными!`
    );
}

module.exports = AllItemsAreUnique;