var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет является ли массив подмножеством указанного множества.
 * Если массив не является подмножеством указанного множества, 
 * то генерируется ошибка AssertFailedError.
 * 
 * @function Krater.Tests.ArrayAssert.IsSubsetOf
 * 
 * @param {Array} expected - Проверяемый массив.
 * @param {Array} superset - Контрольное множество.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function IsSubsetOf(expected, superset, message) {
    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');
    if (!Array.isArray(superset)) throw new TypeError('superset: Параметр не является массивом');

    let result = true;
    if (result) {
        for (let i = 0; i < expected.length; i++) {
            if (superset.indexOf(expected[i]) < 0) {
                result = false;
                break;
            }
        }
    }
    if (result) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Массив не является подмножеством указанного множества!'
    );
}

module.exports = IsSubsetOf;