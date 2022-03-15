/**
 * @namespace Krater.Tests.Assert
 */

var Assert = {
    AreEqual: require('./AreEqual'),
    AreNotEqual: require('./AreNotEqual'),
    AreIdenty: require('./AreIdenty'),
    AreNotIdenty: require('./AreNotIdenty'),
    Fail: require('./Fail'),
    IsTrue: require('./IsTrue'),
    IsFalse: require('./IsFalse'),
    IsNull: require('./IsNull'),
    IsNotNull: require('./IsNotNull'),
    IsUndefined: require('./IsUndefined'),
    IsNotUndefined: require('./IsNotUndefined'),
    AreTypeOf: require('./AreTypeOf'),
    AreNotTypeOf: require('./AreNotTypeOf'),
    AreInstenceOf: require('./AreInstenceOf'),
    AreNotInstenceOf: require('./AreNotInstenceOf'),
    ThrowError: require('./ThrowError'),
    ThrowErrorIsType: require('./ThrowErrorIsType'),
}

module.exports = Assert;