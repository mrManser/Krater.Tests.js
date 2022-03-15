let o1 = {n: 3, r: 5};
let o2 = {n: 3, r: 7};
let o3 = {a: 23};
let o4 = {a: 17};
let o5 = {a: 5};

let a = [1,2,3,4,5];
let b = [o1,o2,o3,o4];
let c = [[],[],[],[]];
let d = [3,5, null,'f'];
let e = [4,5,undefined,7,8];
let f = [4,5,5,7,8];

let funcs = [
    {n:'AllItemsInstenceOf',nArgs: [], eArgs: [[''],Number]},
    {n:'AllItemsInstenceOf',nArgs: [c, Array], eArgs: [a, Array]},
    {n:'AllItemsTypeOf',nArgs: [], eArgs: [[]]},
    {n:'AllItemsTypeOf',nArgs: [a, 'number'], eArgs: [a, 'boolean']},
    {n:'AllItemsIsNotNull',nArgs: [a], eArgs: []},
    {n:'AllItemsIsNotNull',nArgs: [e], eArgs: [d, 'error func']},
    {n:'AllItemsIsNotUndefined',nArgs: [d], eArgs: [e]},
    {n:'AllItemsIsNotNullOrUndefined',nArgs: [a], eArgs: [d]},
    {n:'AllItemsIsNotNullOrUndefined',nArgs: [c], eArgs: [e]},
    {n:'AllItemsAreUnique',nArgs: [a], eArgs: []},
    {n:'AllItemsAreUnique',nArgs: [b], eArgs: [f]},
    {n:'AreIdenty',nArgs: [], eArgs: [b]},
    {n:'AreIdenty',nArgs: [b,[o1,o2,o3,o4]], eArgs: [b,[o1,o2,o3,o2]]},
    {n:'AreNotIdenty',nArgs: [b,[o1,o2,o3,o2]], eArgs: [b,[o1,o2,o3,o4]]},
    {n:'AreEqual',nArgs: [a,[1,2,3,4,5]], eArgs: [a,[1,2,3,4,5,6]]},
    {n:'AreEqual',nArgs: [[o1,o2],[o2,o2],(a,b)=>a.n==b.n], eArgs: [[o1,o2],[o2,o3],(a,b)=>a.a==b.a]},
    {n:'AreEqual',nArgs: [[o1,o2],[o1,o2]], eArgs: [[o1,o2],[o2,o1]]},
    {n:'AreNotEqual',nArgs: [a,[1,2,3,4,5,6]], eArgs: [a,[1,2,3,4,5]]},
    {n:'AreEquivalent',nArgs: [a,[1,2,3,4,5]], eArgs: [a,[1,2,3,4,5,6]]},
    {n:'AreEquivalent',nArgs: [[o1,o2],[o2,o2],(a,b)=>a.n==b.n], eArgs: [[o3,o4],[o3,o5],(a,b)=>a.a==b.a]},
    {n:'AreEquivalent',nArgs: [[o1,o2],[o2,o1]], eArgs: [[o1,o2],[o1,o2,o3]]},
    {n:'AreNotEquivalent',nArgs: [a,[1,2,3,4,5,6]], eArgs: [a,[1,2,3,4,5]]},
    {n:'Contains',nArgs: [], eArgs: [a]},
    {n:'Contains',nArgs: [a,3], eArgs: [a,9]},
    {n:'Contains',nArgs: [b,o3], eArgs: [b,9]},
    {n:'NotContains',nArgs: [a,9], eArgs: [a,3]},
    {n:'IsSubsetOf',nArgs: [], eArgs: [a]},
    {n:'IsSubsetOf',nArgs: [a,[1,2,3,4,5,6]], eArgs: [a,[1,2,3,4]]},
    {n:'IsSubsetOf',nArgs: [[1,2,3,2,1],[1,2,3,4,3,4,5]], eArgs: [[1,2,3,4,8],[1,2,3,4,5]]},
    {n:'IsNotSubsetOf',nArgs: [a,[1,2,3,4]], eArgs: [a,[1,2,3,4,5,6]]},
];

console.log('\n');
console.group('ArrayAssert');
for (const f of funcs) {
    console.log('\n');
    console.log('ArrayAssert.'+ f.n);
    console.group();
    let func = require(`../src/ArrayAssert/${f.n}.js`);
    console.log('norm: ');
    try{ func.call(null, ...f.nArgs); }catch(e){ console.error(`${e}`);}
    console.log('error: ');
    try{ func.call(null, ...f.eArgs); }catch(e){ console.error(`${e}`);}
    console.groupEnd();
}
console.groupEnd('ArrayAssert');