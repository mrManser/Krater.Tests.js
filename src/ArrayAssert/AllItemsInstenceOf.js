var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет являются ли все элементы массива объектами указанного типа.
 * Если не все элементы массива являются объектами указанного типа, 
 * то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.ArrayAssert.AllItemsInstenceOf
 * 
 * @param {Array} expected - Проверяемый массив.
 * @param {*} type - Тип.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function AllItemsInstenceOf(expected, type, message) {
    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');

    let result = true;
    for (const el of expected) {
        if (typeof el != 'object' || !(el instanceof type)) {
            result = false;
            break;
        }
    }
    if (result) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + `Не все элементы массива являются объектами типа '${type.name}'!`
    );
}

module.exports = AllItemsInstenceOf;