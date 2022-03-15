var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет являются ли все элементы массива значениями указанного типа.
 * Если не все элементы массива являются значениями указанного типа, 
 * то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.ArrayAssert.AllItemsTypeOf
 * 
 * @param {Array} expected - Проверяемый массив.
 * @param {string} type - Тип.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function AllItemsTypeOf(expected, type, message) {
    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');
    if (typeof type != 'string') throw new TypeError('type: Параметр не является строкой');

    let result = true;
    for (const el of expected) {
        if (typeof el != type) {
            result = false;
            break;
        }
    }
    if (result) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + `Не все элементы массива являются значениями типа '${type}'!`
    );
}

module.exports = AllItemsTypeOf;