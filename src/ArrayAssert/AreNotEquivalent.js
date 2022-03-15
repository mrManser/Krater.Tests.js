var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет неравенство двух массивов.
 * Если массивы равны, то генерируется ошибка AssertFailedError.
 * Равенство определяется как наличие одних и тех же (равных) элементов 
 * в обоих массивах в одном и том же количестве, их порядок не важен.
 * 
 * @function Krater.Tests.ArrayAssert.AreNotEquivalent
 * 
 * @param {Array} expected - Проверяемый массив.
 * @param {Array} actual - Контрольный массив.
 * @param {function} [comparer=(a,b)=>a==b] - Функция, которая будет савнивать элементы массивов.
 * Функция должна иметь вид (a, b) => result, где a и b - элементы массивов, 
 * result - результат сравнения типа boolean.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function AreNotEquivalent(expected, actual, comparer, message) {
    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');
    if (!Array.isArray(actual)) throw new TypeError('actual: Параметр не является массивом');
    if (comparer == null) comparer = (a, b) => a == b;
    if (typeof comparer !== 'function') throw new TypeError('comparer: Параметр не является функцией');

    let result = expected.length == actual.length;
    if (result) {
        for (let i = 0; i < expected.length; i++) {
            if (actual.find(e => comparer(e, expected[i])) === undefined) {
                result = false;
                break;
            }
        }
    }
    if (!result) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Массивы равны!'
    );
}

module.exports = AreNotEquivalent;