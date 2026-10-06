(function(root){
 'use strict';
 const normalize=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
 const topics=[
 {id:'sea',words:/\b(meer|strand|ocean|beach|sea|mar|praia)\b/},
 {id:'nature',words:/\b(natur|wald|nature|forest|natureza|floresta)\b/},
 {id:'quiet',words:/\b(ruhe|ruhig|stille|quiet|calm|silence|calma|sossego|silencio)\b/},
 {id:'connection',words:/\b(liebe|partner|beziehung|love|relationship|amor|relacao|namorad\w*)\b/},
 {id:'work',words:/\b(arbeit|job|firma|interview|work|company|trabalho|empresa)\b/},
 {id:'home',words:/\b(wohnung|umzug|wohnen|home|moving|casa|mudar)\b/},
 {id:'loop',words:/\b(grubel\w*|gedankenschleife\w*|overthink\w*|rumina\w*)\b/}
 ];
 const preference=/\b(ich (?:mag|liebe|geniesse|bevorzuge)|i (?:love|like|enjoy|prefer)|(?:eu )?(?:adoro|gosto de|prefiro))\b/;
 const wish=/\b(ich (?:mochte|wunsche mir|will)|i (?:want|wish|hope)|(?:eu )?(?:quero|desejo))\b/;
 const negative=/\b(nicht|kein\w*|nie|not|never|dont|don't|nao|nunca|sem)\b/;
 function signals(text){
  // Explicit first-person statements only. Questions and quoted/hypothetical speech remain questions.
  const clauses=(String(text||'').match(/[^.!?\n]+[.!?]?/g)||[]);
  const hits=[];
  for(const clause of clauses){
   const n=normalize(clause);if(clause.trim().endsWith('?'))continue;if(/["“”«»]/.test(clause)||/\b(wenn|falls|if|talvez|se eu)\b/.test(n))continue;
   const kind=preference.test(n)?'preference':wish.test(n)?'wish':null;
   if(!kind)continue;
   const actualKind=negative.test(n)?'avoid':kind;
   for(const topic of topics)if(topic.words.test(n))hits.push({topic:topic.id,kind:actualKind,quote:clause.trim().slice(0,300)});
  }
  return hits.filter((h,i,a)=>a.findIndex(x=>x.topic===h.topic&&x.kind===h.kind)===i);
 }
 function tags(text){const n=normalize(text);return topics.filter(t=>t.words.test(n)).map(t=>t.id);}
 function keywords(text){return new Set(normalize(text).match(/[a-z]{4,}/g)||[]);}
 function select(history,text){
  const q=keywords(text),ts=tags(text);
  return history.map((e,i)=>({e,i,score:[...keywords(e.text)].filter(w=>q.has(w)).length+e.topics.filter(t=>ts.includes(t)).length*3})).filter(x=>x.score>0||x.e.signals.length).sort((a,b)=>b.score-a.score||b.i-a.i).slice(0,4).map(x=>x.e);
 }
 function add(history,text,lang,id,at){return [...history,{id,at,text:String(text).slice(0,700),lang,topics:tags(text),signals:signals(text),answered:false}].slice(-60);}
 function echo(history,text,lang){
  const relevant=select(history,text);const ts=tags(text);
  if(ts.includes('loop')&&relevant.some(e=>e.topics.includes('loop'))){return {text:{de:'Diese Frage ist schon einmal aufgetaucht. Ohne neue Information darf sie für heute ruhen.',en:'This question has surfaced before. Without new information, you can let it rest today.',pt:'Esta pergunta ja surgiu antes. Sem nova informacao, pode descansar por hoje.'}[lang]||'',sources:relevant.filter(e=>e.topics.includes('loop')).map(e=>e.id)};}
  const latest=new Map();for(const e of history.slice().reverse())for(const s of e.signals)if(!latest.has(s.topic))latest.set(s.topic,{...s,id:e.id});
  const pref=[...latest.values()].find(s=>s.kind==='preference'&&['sea','nature','quiet'].includes(s.topic));
  if(pref&&(/\b(ruhe|ruhig|pause|entspann\w*|calm|quiet|rest|relax\w*|calma|descans\w*)\b/.test(normalize(text)))){
   const line={sea:{de:'Vielleicht führt dein nächster kleiner Schritt ans Wasser — das Meer hast du selbst als etwas Schönes genannt.',en:'Perhaps your next small step leads to the water — you mentioned enjoying the sea.',pt:'Talvez o proximo pequeno passo te leve ate a agua — falaste do teu gosto pelo mar.'},nature:{de:'Vielleicht wartet deine Pause draußen im Grünen — die Natur kam in deinen eigenen Worten vor.',en:'Perhaps your pause is waiting outdoors — nature appeared in your own words.',pt:'Talvez a tua pausa esteja ao ar livre — a natureza apareceu nas tuas palavras.'},quiet:{de:'Vielleicht braucht dieser Moment weniger Reize — Ruhe war dir in deinen Worten wichtig.',en:'Perhaps this moment needs fewer distractions — quiet mattered in your own words.',pt:'Talvez este momento precise de menos estimulos — a calma foi importante nas tuas palavras.'}};
   return {text:line[pref.topic][lang]||line[pref.topic].de,sources:[pref.id]};
  }
  return {text:'',sources:[]};
 }
 function parse(text,current,history){
  const clean=text.trim().replace(/^```(?:json)?\s*/,'').replace(/\s*```$/,'');const r=JSON.parse(clean);
  if(typeof r.line!=='string'||!r.line.trim()||r.line.length>260)throw new Error('Invalid orb line');
  const sources=r.sources||[];if(!Array.isArray(sources)||sources.some(id=>!history.some(e=>e.id===id)))throw new Error('Unknown memory');
  const hints=(r.hints||[]);if(!Array.isArray(hints))throw new Error('Invalid hints');
  for(const h of hints)if(!h||!['preference','wish','open'].includes(h.kind)||typeof h.quote!=='string'||!h.quote.trim()||!current.includes(h.quote)||typeof h.label!=='string')throw new Error('Ungrounded hint');
  return {line:r.line,echo:typeof r.echo==='string'?r.echo.slice(0,360):'',sources,hints:hints.slice(0,3).map(h=>({...h,label:h.label.slice(0,160)}))};
 }
 const api={normalize,signals,tags,select,add,echo,parse};root.OrbMemory=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
