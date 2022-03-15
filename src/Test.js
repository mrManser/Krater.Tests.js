var UnitTest = require('./UnitTest');

const COLOR_ACTION_TITLE = 'color: darkviolet';
const COLOR_ACTION_END = 'color: gray';
const COLOR_INFO = 'color: navy';
const COLOR_SUCESS = 'color: darkgreen';
const COLOR_WARN = 'color: orange';
const COLOR_ERROR = 'color: red';

/**
 * @classdesc
 * Предоставляет методы управления юнит-тестами.
 * 
 * @class Test
 * @memberof Krater.Tests
 */
class Test {
    static #tests = []

    /**
     * Проверяет, является ли указанный ресурс тестом.
     * 
     * @param {*} source - Ресурс.
     * @return {boolean} true если указанный ресурс является тестом, иначе - false.
     */
    static IsTest(source) {
        if (typeof source != 'function') return false;

        let proto = source;
        while (proto) {
            if (proto === UnitTest) return true;
            proto = proto.__proto__;
        }
        return false;
    }

    /**
     * Добавляет указанные тесты в общую очередь тестирования.
     * 
     * @param  {...any} tests - Классы тестов для добавления. 
     * Все указанные классы должны наследовать от класса `Test`.
     * @return {number} Количество добавленных тестов.
     */
    static Add(...tests) {
        let count = 0;
        console.group(`%cДобавление тестов...`, COLOR_ACTION_TITLE);
        for (const tst of tests) {
            Test.#Validate(tst);
            let testName = Test.#GetSourceName(tst);

            if (Test.#tests.indexOf() < 0) {
                Test.#tests.push(tst);
                count++;
                console.log(`%c${testName}... %cУспешно`, COLOR_INFO, COLOR_SUCESS);
            } else {
                console.group(`%c${testName}... %cПопытка повторного добавления теста`, COLOR_INFO, COLOR_WARN);
                console.log(`${testName} будет добавлен только один раз`, COLOR_WARN);
                console.groupEnd();
            }
        }
        console.log(`%cВыполнено`, COLOR_ACTION_END);
        console.groupEnd();
        return count;
    }

    /**
     * Запускает указанные тесты.
     * @param {*|*[]} tests - Классы тестов для запуска. 
     * @param {*} [force=false] - Если true, тесты не прошедшие проверку будут проигнорированы, 
     * а всел остальные тесты запустятся в штатном режиме. 
     */
    static Run(tests, force) {
        force = force || false;
        if (!Array.isArray(tests)) tests = [tests];
        
        console.log('%cЗапуск тестирования', COLOR_ACTION_TITLE);
        console.group('%cПроверка...', COLOR_ACTION_TITLE);
        if (force) console.log('%cВключен режим игнорирования ошибок', COLOR_INFO);
        let runTestes = [];
        for (const tst of tests) {
            var tstName = Test.#GetSourceName(tst);
            try {
                Test.#Validate(tst);
                if (runTestes.indexOf(tst) < 0) {
                    console.log(`%c${tstName}... %cУспешно`, COLOR_INFO, COLOR_SUCESS);
                    runTestes.push(tst);
                } else {
                    console.group(`%c${tstName}... %cПопытка повторного определения теста!`, COLOR_INFO, COLOR_WARN);
                    console.log(`%c${tstName} будет выполнен только один раз`, COLOR_WARN);
                    console.groupEnd();
                }

            } catch (e) {
                if (force) {
                    console.group(`%c${tstName}... %cОшибка! ${e}`, COLOR_INFO, COLOR_ERROR);
                    console.log(`%c${tstName} будет проигнорирован!`, COLOR_WARN);
                    console.groupEnd();
                } else {
                    console.log(`%c${tstName}... %cОшибка! ${e}`, COLOR_INFO, COLOR_ERROR);
                    console.groupEnd();
                    console.log('%cТестирование прервано!', COLOR_ERROR);
                    return;
                }
            }
        }
        console.log('%cПроверка завершена', COLOR_ACTION_END);
        console.groupEnd();
        Test.#DoRun(runTestes);
    }

    /**
     * Запускает все тесты из общей очереди тестирования.
     */
    static RunAll() {
        console.log('%cЗапуск тестирования', COLOR_ACTION_TITLE);
        console.group('%cПроверка...', COLOR_ACTION_TITLE);
        for (const tst of Test.#tests) {
            console.log(`%c${tst.name}... %cУспешно`, COLOR_INFO, COLOR_SUCESS);
        }
        console.log('%cПроверка завершена', COLOR_ACTION_END);
        console.groupEnd();
        Test.#DoRun(Test.#tests);
    }

    
    static #DoRun = function(tests) {
        if (tests.length == 0) {
            console.log('%cОтсутсвуют тесты для запуска', COLOR_WARN);
            console.log('%cТестирование завершено.', COLOR_ACTION_END);
            return;
        }

        let statistic = {
            all: 0,
            success: 0,
            errors: 0,
        }
        let testList = Test.#CreateTestList(tests);

        if (!Test.#Init(testList)) return;
        Test.#Testing(testList, statistic);
        if (!Test.#Shutdown(testList, statistic)) return;
    }
    static #CreateTestList = function(tests) {
        let result = [];
        console.group('%cПостроение очереди тестирования...', COLOR_ACTION_TITLE);
        for (const tst of tests) {
            var t = new tst();
            result.push(t);
            console.log(`%c${tst.name}... %cдобавлен в очередь`, COLOR_INFO, COLOR_SUCESS);
        }
        console.log('%cВыполнено', COLOR_ACTION_END);
        console.groupEnd();
        
        return result;
    }
    static #Init = function(tests) {
        try {
            console.group('%cИнициализация...', COLOR_ACTION_TITLE);
            for (const tst of tests) {
                tst.OnInit();
            }
            console.log('%cВыполнено', COLOR_ACTION_END);
            console.groupEnd();
            return true;
        } catch (e) {
            console.log(`%cОшибка инициализации теста `, COLOR_ERROR);
            console.error(' ' + e.stack);
            console.groupEnd();
            console.log('%cТестирование прервано!', COLOR_ERROR);
            return false;
        }
    }
    static #Testing = function(tests, statistic) {
        console.group('%cТестирование...', COLOR_ACTION_TITLE);
        for (const tst of tests) {
            let tstName = tst.__proto__.constructor.name;
            let success = 0;
            let errors = 0;
            try {
                let testKeys = Object.keys(tst);
                testKeys = testKeys.filter(t => typeof tst[t] == 'function' && t.startsWith('Test'));
                statistic.all += testKeys.length;
                console.group(`%c${tstName} Старт`, COLOR_INFO);
                tst.OnTestStart();
                for (const key of testKeys) {
                    try {
                        console.log(`%c${tstName}.${key}...`, COLOR_INFO);
                        tst.OnTestMethodStart();
                        tst[key]();
                        tst.OnTestMethodEnd();
                        success++;
                        console.log(`%cУспешно`, COLOR_SUCESS);
                    } catch (e) {
                        errors++;
                        console.error(e.stack);
                        console.log(`%cПровален`, COLOR_ERROR);
                    }
                }
                tst.OnTestEnd();
                console.log(`%c${tstName} выполнен. %cУспешно ${success}. %cПровалено ${errors}.`, COLOR_ACTION_END, COLOR_SUCESS, COLOR_ERROR);
                console.groupEnd();
                
                statistic.success += success;
                statistic.errors += errors;
            } catch (e) {
                console.error(e.stack);
                console.log(`%c${tstName} не выполнен!`, COLOR_ERROR);
            }
        }
        console.log();
        console.groupEnd();
    }
    static #Shutdown = function(tests, statistic) {
        try {
            console.group('%cЗавершение...', COLOR_ACTION_TITLE);
            for (const tst of tests) {
                tst.OnEnd();
            }
            console.log('%cВыполнено', COLOR_ACTION_END);
            console.groupEnd();
            console.log(`%cТестирование завершено. %cВсего ${statistic.all}. %cУспешно ${statistic.success}. `
                      + `%cПровалено ${statistic.errors}.`, 
                      COLOR_ACTION_END, COLOR_INFO, COLOR_SUCESS, COLOR_ERROR);
            return true;
        } catch (e) {
            console.log(`%cОшибка завершения теста `, COLOR_ERROR);
            console.error(' ' + e.stack);
            console.groupEnd();
            console.log('%cТестирование прервано!', COLOR_ERROR);
            return false;
        }
    }

    static #GetSourceName = function(source) {
        return (typeof source == 'function')
            ? source.name || "function ''"
            : source;
    }
    static #Validate = function(source) {
        if (Test.#tests.indexOf(source) >= 0) return;
        if (Test.IsTest(source)) return;

        let name = Test.#GetSourceName(source);
        throw new TypeError(name + ' не является тестом');
    }
}

module.exports = Test;