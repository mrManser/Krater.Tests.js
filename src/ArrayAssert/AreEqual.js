var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет равенство двух массивов.
 * Если массивы не равны, то генерируется ошибка AssertFailedError.
 * Равенство определяется как наличие одних и тех же (равных) элементов 
 * в обоих массивах в одном и том же порядке и количестве.
 * 
 * @function Krater.Tests.ArrayAssert.AreEqual
 * 
 * @param {Array} expected - Проверяемый массив.
 * @param {Array} actual - Контрольный массив.
 * @param {function} [comparer=(a,b)=>a==b] - Функция, которая будет савнивать элементы массивов.
 * Функция должна иметь вид (a, b) => result, где a и b - элементы массивов, 
 * result - результат сравнения типа boolean.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function AreEqual(expected, actual, comparer, message) {
    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');
    if (!Array.isArray(actual)) throw new TypeError('actual: Параметр не является массивом');
    if (comparer == null) comparer = (a, b) => a == b;
    if (typeof comparer !== 'function') throw new TypeError('comparer: Параметр не является функцией');

    let result = expected.length == actual.length;
    if (result) {
        for (let i = 0; i < expected.length; i++) {
            if (!comparer(expected[i], actual[i])) {
                result = false;
                break;
            }
        }
    }
    if (result) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Массивы не равны!'
    );
}

module.exports = AreEqual;