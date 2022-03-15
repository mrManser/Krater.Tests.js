/**
 * Ошибка тестирования.
 */
class AssertFailedError extends Error {

    /**
     * Создаёт новую ошибку тестирования.
     * @param {*} message - Сообщение.
     */
    constructor(message) {
        super(message);
        this.name = "AssertFailedError";
    }
}

module.exports = AssertFailedError;