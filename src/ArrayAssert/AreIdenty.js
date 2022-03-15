var AssertFailedError = require('../AssertFailedError');

/**
 * Проверяет эквивалентность двух массивов.
 * Если массивы не эквивалентны, то генерируется ошибка AssertFailedError.
 * Эквивалентность определяется как наличие одних и тех же (эквивалентных) элементов 
 * в обоих массивах в одном и том же порядке и количестве.
 * 
 * @function Krater.Tests.ArrayAssert.AreIdenty
 * 
 * @param {Array} expected - Проверяемый массив.
 * @param {Array} actual - Контрольный массив.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 */
function AreIdenty(expected, actual, message) {
    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');
    if (!Array.isArray(actual)) throw new TypeError('actual: Параметр не является массивом');

    let result = expected.length == actual.length;
    if (result) {
        for (let i = 0; i < expected.length; i++) {
            if (!(expected[i] === actual[i])) {
                result = false;
                break;
            }
        }
    }
    if (result) return;

    throw new AssertFailedError(
        ((message == null) ? '' : `${String(message)}. `)
        + 'Массивы не эквивалентны!'
    );
}

module.exports = AreIdenty;