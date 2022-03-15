/**
 * @namespace Krater.Tests.ArrayAssert
 */

var ArrayAssert = {
    AllItemsInstenceOf: require('./AllItemsInstenceOf'),
    AllItemsTypeOf: require('./AllItemsTypeOf'),
    AllItemsIsNotNull: require('./AllItemsIsNotNull'),
    AllItemsIsNotUndefined: require('./AllItemsIsNotUndefined'),
    AllItemsIsNotNullOrUndefined: require('./AllItemsIsNotNullOrUndefined'),
    AllItemsAreUnique: require('./AllItemsAreUnique'),
    AreIdenty: require('./AreIdenty'),
    AreNotIdenty: require('./AreNotIdenty'),
    AreEqual: require('./AreEqual'),
    AreNotEqual: require('./AreNotEqual'),
    AreEquivalent: require('./AreEquivalent'),
    AreNotEquivalent: require('./AreNotEquivalent'),
    Contains: require('./Contains'),
    NotContains: require('./NotContains'),
    IsSubsetOf: require('./IsSubsetOf'),
    IsNotSubsetOf: require('./IsNotSubsetOf'),
}

module.exports = ArrayAssert;