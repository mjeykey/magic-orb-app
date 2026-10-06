const assert=require('node:assert/strict');const fs=require('node:fs');const vm=require('node:vm');const {webcrypto}=require('node:crypto');const M=require('./memory.js');
assert.equal(M.signals('Ich liebe das Meer.')[0].topic,'sea');
assert.equal(M.signals('Ich liebe das Meer?').length,0);
assert.equal(M.signals('Wenn ich das Meer lieben würde.').length,0);
assert.equal(M.signals('Emily liebt das Meer.').length,0);
assert.equal(M.signals('Ich mag das Meer nicht.')[0].kind,'avoid');
let h=M.add([],'Ich liebe das Meer.','de','1',1);
assert.match(M.echo(h,'Wie kann ich zur Ruhe kommen?','de').text,/Wasser/);
h=M.add(h,'Ich mag das Meer nicht mehr.','de','2',2);
assert.equal(M.echo(h,'Wie kann ich zur Ruhe kommen?','de').text,'');
assert.throws(()=>M.parse('{"line":"x","sources":["unknown"]}','x',[]));
assert.throws(()=>M.parse('{"line":"x","hints":[{"kind":"wish","label":"money","quote":"not said"}]}','x',[]));
assert.equal(M.parse('{"line":"Ein kleiner Schritt.","hints":[{"kind":"wish","label":"Ruhe","quote":"Ruhe"}]}','Ich möchte Ruhe.',[]).hints.length,1);
class N{constructor(){this.children=[];this.value='';this.textContent='';this.classes=new Set();this.classList={add:(...a)=>a.forEach(x=>this.classes.add(x)),remove:(...a)=>a.forEach(x=>this.classes.delete(x)),contains:x=>this.classes.has(x)};}append(n){this.children.push(n)}replaceChildren(){this.children=[]}setAttribute(){}addEventListener(){}focus(){}}
const nodes=new Map(),get=id=>{if(!nodes.has(id))nodes.set(id,new N());return nodes.get(id)};const store=new Map();let shown='';
const s={OrbMemory:M,crypto:webcrypto,localStorage:{getItem:k=>store.get(k),setItem:(k,v)=>store.set(k,v)},document:{body:new N(),getElementById:get,createElement:()=>new N(),addEventListener(){}},window:{},navigator:{},confirm:()=>true,console,SpeechSynthesisUtterance:class{},busy:false,thought:get('thought'),orb:get('orb'),answer:get('answer'),ensureAudio(){},unlockBoxOpenSound(){},playOrbLoadingSound(){},resetRitual(){},makeSparks(){},wait:async()=>{},detectInputLanguageCore:()=> 'de',isHighRiskQuestion:t=>t==='risk',highRiskReply:()=> 'human help',chooseQuestionAnswer:()=> 'Ein kleiner Schritt.',chooseLine:a=>a[0],findExternalEmotionCore:()=>null,detectTheme:()=> 'general',responses:{general:['Ein Schritt.']},revealOrbLine:t=>shown=t,startHiddenReflection(){}};
vm.createContext(s);vm.runInContext(fs.readFileSync('level-2/level-2.js','utf8'),s);
(async()=>{
 s.thought.value='Ich liebe das Meer.';await s.window.MagicOrbLevel2.ask();assert.equal(JSON.parse(store.get('magic-orb-level-2-v1')).history.length,1);
 s.thought.value='Wie kann ich zur Ruhe kommen?';await s.window.MagicOrbLevel2.ask();assert.match(get('level-echo').textContent,/Wasser/);
 assert.equal(shown,'Ein kleiner Schritt.');assert.equal(JSON.parse(store.get('magic-orb-level-2-v1')).history[1].usedSources[0],JSON.parse(store.get('magic-orb-level-2-v1')).history[0].id);
 s.thought.value='risk';await s.window.MagicOrbLevel2.ask();assert.equal(shown,'human help');assert.equal(JSON.parse(store.get('magic-orb-level-2-v1')).history.length,2);
 get('orb-forget').onclick();assert.equal(JSON.parse(store.get('magic-orb-level-2-v1')).history.length,0);
 console.log('Passed: preferences vs questions, negation/correction, uncertain hints, memory transfer through orb ritual, source tracking, deletion and safety bypass.');
})().catch(e=>{console.error(e);process.exitCode=1});
