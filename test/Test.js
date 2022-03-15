var Test = require('../src/Test');
var UnitTest = require('../src/UnitTest');

class Class1 { }
class Test1 extends UnitTest {
    func = function() {
        console.log('func');
        console.log('%cfunc()', 'color: orange');
    }
    OnInit() {
        console.log('start testing');
        // throw new Error('Test1.OnInit error');
    }
    OnEnd() {
        console.log('end testing');
        // throw new Error('Test1.OnEnd error');
    }
    OnTestStart() {
        console.log('start test class');
        // throw new Error('Test1.OnTestStart error');
    }
    OnTestEnd() {
        console.log('end test class');
        // throw new Error('Test1.OnTestEnd error');
    }
    OnTestMethodStart() {
        console.log('start test method');
        // throw new Error('Test1.OnTestMethodStart error');
    }
    OnTestMethodEnd() {
        console.log('end test method');
        // throw new Error('Test1.OnTestMethodEnd error');
    }
    Test1_1 = function() {
        console.log('%cTest1_1 body', 'color: darkblue');
    }
    Test1_2 = function() {
        console.log('%cTest1_2 body', 'color: darkblue');
        // throw new Error('Test1_2 error');
    }
    constructor() {
        super();
    }
}

console.group('Test');

Test.Add(Test1, UnitTest);
// Test.RunAll();
// Test.Run([Test1, UnitTest, Test1, Class1]);
Test.Run([Test1, UnitTest, Test1, Class1], true);

console.groupEnd('Test');