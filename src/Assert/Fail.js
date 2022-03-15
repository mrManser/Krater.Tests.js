var AssertFailedError = require('../AssertFailedError');

/**
 * Генерирует ошибку AssertFailedError.
 * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.
 * 
 * @function Krater.Tests.Assert.Fail
 * 
 */
 function Fail( message) {
    throw new AssertFailedError('Ошибка!' + ((message == null) ? '' : ` ${String(message)}.`));
}

module.exports = Fail;