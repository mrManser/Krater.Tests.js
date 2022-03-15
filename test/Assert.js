let funcs = [
    {n:'AreEqual',          nArgs: [5,5], eArgs: [5,3],},
    {n:'AreNotEqual',       nArgs: [5,3], eArgs: [5,5],},
    {n:'AreIdenty',         nArgs: [5,5], eArgs: [5,true],},
    {n:'AreNotIdenty',      nArgs: [5,true], eArgs: [5,5],},
    {n:'AreTypeOf',          nArgs: [], eArgs: [],},
    {n:'AreTypeOf',          nArgs: [5, 'number'], eArgs: [5, 'object'],},
    {n:'AreNotTypeOf',       nArgs: [5, 'object'], eArgs: [5, 'number'],},
    {n:'AreInstenceOf',      nArgs: [{}, Object], eArgs: [],},
    {n:'AreInstenceOf',      nArgs: [{}, Object], eArgs: [{}, Array],},
    {n:'AreNotInstenceOf',   nArgs: [{}, Array], eArgs: [{}, Object],},
    {n:'Fail',              nArgs: [], eArgs: ['Текст ошибки'],},
    {n:'IsTrue',            nArgs: [5], eArgs: [],},
    {n:'IsFalse',           nArgs: [], eArgs: [5],},
    {n:'IsNull',            nArgs: [null], eArgs: [],},    
    {n:'IsNotNull',         nArgs: [], eArgs: [null],},
    {n:'IsUndefined',       nArgs: [], eArgs: [null],},
    {n:'IsNotUndefined',    nArgs: [null], eArgs: [],},
    {n:'ThrowError',        nArgs: [], eArgs: [()=>{}]},
    {n:'ThrowError',        nArgs: [()=>{throw new Error();}], eArgs: [()=>{}]},
    {n:'ThrowErrorIsType',  nArgs: [()=>{throw new TypeError();},null,null,TypeError], eArgs: [()=>{throw new Error();},[5,7,10],null,TypeError],},
];

console.log('\n');
console.group('Assert');
for (const f of funcs) {
    console.log('\n');
    console.log('Assert.'+ f.n);
    console.group();
    let func = require(`../src/Assert/${f.n}.js`);
    console.log('norm: ');
    try{ func.call(null, ...f.nArgs); }catch(e){ console.error(`${e}`);}
    console.log('error: ');
    try{ func.call(null, ...f.eArgs); }catch(e){ console.error(`${e}`);}
    console.groupEnd();
}
console.groupEnd('Assert');