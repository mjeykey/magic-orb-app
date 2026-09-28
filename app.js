const orb = document.getElementById("orb");
const answer = document.getElementById("answer");
const sparkLayer = document.getElementById("sparkLayer");
const thought = document.getElementById("thought");
const thoughtWrap = document.getElementById("thoughtWrap");
const orbArt = document.getElementById("orbArt");
const secretNote = document.getElementById("secretNote");
const sealCaption = document.getElementById("sealCaption");

const ORB_IMAGE = "assets/orb.webp";
const BOX_OPEN = "data:image/webp;base64,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";
const BOX_MESSAGE = "assets/box-message.webp";
const LOCK_IMAGE = "assets/lock-closed.webp";
const hint = document.getElementById("hint");
const reflectionSequence = document.getElementById("reflectionSequence");
const revealLines = [
  document.getElementById("reveal1"),
  document.getElementById("reveal2"),
  document.getElementById("reveal3"),
  document.getElementById("reveal4")
];
const innerAnswerWrap = document.getElementById("innerAnswerWrap");
const innerAnswer = document.getElementById("innerAnswer");
const releaseButton = document.getElementById("releaseButton");
const sealedMessage = document.getElementById("sealedMessage");

let ritualTimers = [];

const responses = {
  heartbreak: [
    "Du darfst vermissen, ohne zurückzugehen.",
    "Nicht jede Sehnsucht ist ein Weg zurück.",
    "Auch ein gebrochenes Herz bewegt sich weiter.",
    "Was vorbei ist, darf trotzdem Bedeutung gehabt haben.",
    "Manchmal ist Loslassen auch eine Form von Liebe.",
    "Dein Herz heilt nicht auf Befehl, aber es heilt.",
    "Die Erinnerung darf bleiben, ohne dich festzuhalten.",
    "Was du vermisst, ist nicht immer das, was dir guttut.",
    "Manche Türen schließen sich, damit du dich wiederfindest.",
    "Du musst heute noch nicht aufhören zu fühlen.",
    "Auch Sehnsucht wird irgendwann leiser.",
    "Du darfst traurig sein und trotzdem weitergehen.",
    "Nicht alles, was fehlt, gehört zurück in dein Leben.",
    "Das Ende einer Geschichte ist nicht das Ende von dir.",
    "Dein Herz darf langsam verstehen, was dein Kopf schon weiß.",
    "Liebe kann echt gewesen sein und trotzdem vorbei sein.",
    "Du musst dich nicht an Schmerz festhalten, um Liebe zu beweisen.",
    "Manchmal vermisst du die Hoffnung mehr als den Menschen.",
    "Was dich verlassen hat, nimmt deinen Wert nicht mit.",
    "Du darfst an schöne Momente denken, ohne dorthin zurückzumüssen.",
    "Heilung beginnt oft dort, wo du nicht mehr nach Antworten jagst.",
    "Dein Herz lernt gerade eine neue Richtung.",
    "Eines Tages wird diese Erinnerung mehr Geschichte als Wunde sein."
  ],
  anxiety: [
    "Nicht alles, was dringend wirkt, ist Gefahr.",
    "Die Zukunft darf noch einen Moment warten.",
    "Du musst nicht alles jetzt lösen.",
    "Dieser Moment ist kleiner als deine Angst behauptet.",
    "Atme dort, wo dein Kopf schon vorausrennt.",
    "Du bist gerade hier, nicht in all den Möglichkeiten.",
    "Angst ist laut, aber nicht allwissend.",
    "Du musst dem schlimmsten Gedanken nicht glauben.",
    "Ein Gedanke ist noch kein Ereignis.",
    "Du darfst dir Zeit zurückholen.",
    "Nicht jede innere Alarmanlage meldet echtes Feuer.",
    "Dein Körper darf sich wieder beruhigen.",
    "Der nächste Atemzug reicht für jetzt.",
    "Du musst nicht gegen jeden Gedanken kämpfen.",
    "Auch Ungewissheit kann vorbeiziehen.",
    "Du darfst langsam werden, auch wenn dein Kopf rennt.",
    "Das Morgen braucht dich heute noch nicht.",
    "Du kannst Angst spüren und trotzdem sicher sein.",
    "Nicht jede Frage braucht heute eine Antwort.",
    "Lass den nächsten Moment zu dir kommen.",
    "Du bist mehr als das Szenario in deinem Kopf.",
    "Es darf erst stiller werden, bevor es klarer wird.",
    "Gerade jetzt reicht es, hier zu bleiben."
  ],
  lonely: [
    "Du bist nicht unsichtbar.",
    "Einsamkeit beschreibt einen Moment, nicht deinen Wert.",
    "Verbindung kann mit einem kleinen Hallo beginnen.",
    "Du musst nicht von allen gesehen werden, um wichtig zu sein.",
    "Auch stille Tage gehen vorbei.",
    "Nähe beginnt manchmal mit einem einzigen Namen.",
    "Du bist nicht weniger wert, nur weil es gerade still um dich ist.",
    "Manchmal fehlt Verbindung, nicht Liebe.",
    "Ein leerer Raum sagt nichts über deinen Platz in der Welt.",
    "Du darfst jemanden vermissen und trotzdem bei dir bleiben.",
    "Du gehörst auch dann dazu, wenn du es gerade nicht fühlst.",
    "Ein kleiner Kontakt kann mehr verändern, als du denkst.",
    "Du musst nicht warten, bis jemand zuerst schreibt.",
    "Dein Herz sucht Nähe, nicht Beweise gegen dich.",
    "Stille ist nicht dasselbe wie Ablehnung.",
    "Du darfst dich zeigen, auch ganz leise.",
    "Nicht jede Distanz bedeutet, dass du vergessen bist.",
    "Verbindung findet oft kleine Wege zurück.",
    "Du bist jemand, den man kennenlernen kann.",
    "Heute muss nicht für immer so still bleiben.",
    "Es gibt Menschen, die deine Wärme noch nicht kennen.",
    "Ein Moment von Nähe kann einen ganzen Abend verändern.",
    "Du bist nicht allein mit dem Gefühl, allein zu sein."
  ],
  burnout: [
    "Heute darf klein genug sein.",
    "Du musst nicht alles gleichzeitig tragen.",
    "Ruhe ist auch ein Schritt.",
    "Nicht jede Aufgabe verdient heute deine ganze Kraft.",
    "Du darfst Dinge unfertig lassen.",
    "Dein Wert sinkt nicht, wenn du langsamer wirst.",
    "Erschöpfung ist kein persönliches Versagen.",
    "Manchmal ist weniger genau richtig.",
    "Du musst nicht produktiv sein, um einen guten Tag zu haben.",
    "Dein Körper darf zuerst kommen.",
    "Eine Pause ist keine verlorene Zeit.",
    "Du kannst später weitermachen.",
    "Nicht alles ist heute dringend.",
    "Du darfst dich aus dem Tempo herausnehmen.",
    "Ein kleiner Schritt zählt auch.",
    "Du musst nicht stark aussehen, um stark zu sein.",
    "Deine Energie ist kein unendliches Konto.",
    "Es ist erlaubt, etwas einfacher zu machen.",
    "Du darfst ausruhen, bevor alles erledigt ist.",
    "Heute muss nicht beeindruckend sein.",
    "Du bist nicht deine To-do-Liste.",
    "Manchmal ist Aufhören für heute die richtige Entscheidung.",
    "Morgen darf etwas von heute übernehmen."
  ],
  selfdoubt: [
    "Ein Fehler ist kein Urteil über dich.",
    "Nicht wissen ist der Anfang von Lernen.",
    "Du musst nicht perfekt sein, um fähig zu sein.",
    "Unsicherheit bedeutet nicht Unfähigkeit.",
    "Du darfst etwas noch lernen.",
    "Ein schwieriger Moment definiert deinen Kopf nicht.",
    "Du bist nicht weniger klug, nur weil etwas schwer ist.",
    "Auch gute Menschen zweifeln an sich.",
    "Du musst dir nicht jeden Schritt schon beweisen.",
    "Dein Tempo sagt nichts über dein Potenzial.",
    "Ein Nein von außen ist kein Beweis gegen dich.",
    "Du darfst dich irren und trotzdem weitergehen.",
    "Nicht alles, was du noch nicht kannst, bleibt so.",
    "Du bist mehr als dein letzter Fehler.",
    "Dein Zweifel kennt nicht deine ganze Geschichte.",
    "Du darfst ausprobieren, ohne sicher zu sein.",
    "Kompetenz fühlt sich nicht immer selbstbewusst an.",
    "Du musst nicht bereit wirken, um anfangen zu dürfen.",
    "Auch Unsicherheit kann neben Mut existieren.",
    "Du darfst dich selbst noch überraschen.",
    "Ein schlechter Moment löscht deine Fortschritte nicht.",
    "Du musst dich nicht kleiner denken, um vorsichtig zu sein.",
    "Vielleicht kannst du mehr, als dein Zweifel gerade zugibt."
  ],
  worthless: [
    "Dein Wert ist schon da.",
    "Du musst deinen Platz nicht verdienen.",
    "Dein Wert wartet nicht auf Leistung.",
    "Du bist nicht die Summe deiner schlechten Tage.",
    "Du musst nicht nützlich sein, um wichtig zu sein.",
    "Dein Dasein braucht keine Rechtfertigung.",
    "Auch ohne Applaus bleibt dein Wert bestehen.",
    "Du bist mehr als das, was du heute geschafft hast.",
    "Niemand muss jeden Tag beweisen, dass er zählen darf.",
    "Dein Wert sinkt nicht durch einen Fehler.",
    "Du darfst existieren, ohne etwas zurückzahlen zu müssen.",
    "Ein schwieriger Tag nimmt dir nichts Wesentliches.",
    "Du bist nicht weniger wert, wenn jemand dich nicht erkennt.",
    "Dein Wert gehört nicht in fremde Hände.",
    "Du musst niemandem beweisen, dass du genug bist.",
    "Auch Müdigkeit macht dich nicht weniger wertvoll.",
    "Du darfst Platz einnehmen.",
    "Du bist kein Problem, das gelöst werden muss.",
    "Dein Wert verändert sich nicht mit deiner Stimmung.",
    "Du darfst freundlich mit dir sein, bevor du es glaubst.",
    "Es gibt nichts, was du leisten musst, um Mensch sein zu dürfen.",
    "Dein Wert ist nicht verhandelbar.",
    "Heute darfst du einfach da sein."
  ],
  general: [
    "Der nächste kleine Schritt kennt den Weg.",
    "Du musst die ganze Antwort noch nicht kennen.",
    "Etwas in dir weiß schon, was leichter werden darf.",
    "Die Zukunft darf noch warten.",
    "Heute darf klein genug sein.",
    "Dein Wert ist schon da.",
    "Manchmal kommt Klarheit erst nach der Ruhe."
  ]
};

const keywords = {
  heartbreak: [
    "liebeskummer","herzschmerz","trennung","getrennt","verlassen","ex ","ex-",
    "exfreund","ex-freund","exfreundin","ex-freundin","vermiss","sehnsucht",
    "schluss gemacht","beziehung vorbei","liebe vorbei","herz gebrochen",
    "gebrochenes herz","heartbreak","broke up","breakup"
  ],
  anxiety: [
    "angst","panik","panic","anxiety","ängstlich","aengstlich","nervös","nervoes",
    "sorge","sorgen","überdenken","ueberdenken","overthinking","unruhe","unruhig",
    "ich habe angst","ich bekomme panik","herzrasen"
  ],
  lonely: [
    "einsam","allein","niemand","keiner","keine freunde","lonely","alone",
    "verlassen fühlen","verlassen fuehlen","isoliert","niemand schreibt",
    "keiner schreibt","niemand da"
  ],
  burnout: [
    "überfordert","ueberfordert","erschöpft","erschoepft","ausgebrannt","burnout",
    "stress","zu viel","alles zu viel","keine energie","kraftlos","müde","muede",
    "überlastet","ueberlastet","overwhelmed"
  ],
  selfdoubt: [
    "selbstzweifel","dumm","nicht gut genug","ich kann das nicht","versager",
    "unfähig","unfaehig","stupid","failure","ich schaffe das nicht","zu schlecht",
    "bin ich gut genug","zweifel an mir"
  ],
  worthless: [
    "wertlos","nutzlos","unnötig","unnoetig","egal","niemand braucht mich",
    "ich bin nichts","worthless","useless","kein wert","nicht wichtig",
    "ich bin unwichtig"
  ]
};

let busy = false;

function normalizeText(value){
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function detectTheme(text){
  const normalized = normalizeText(text);
  for (const theme of ["heartbreak","anxiety","lonely","burnout","selfdoubt","worthless"]) {
    if (keywords[theme].some(keyword => normalized.includes(normalizeText(keyword)))) {
      return theme;
    }
  }
  return "general";
}

function chooseLine(lines){
  return lines[Math.floor(Math.random() * lines.length)];
}

function makeSparks(){
  sparkLayer.innerHTML = "";
  const rect = sparkLayer.getBoundingClientRect();
  const cx = rect.width / 2;
  const cy = rect.height * 0.42;

  for(let i = 0; i < 26; i++){
    const s = document.createElement("span");
    s.className = "spark";
    const angle = Math.random() * Math.PI * 2;
    const dist = 45 + Math.random() * 120;
    s.style.left = (cx + (Math.random() * 26 - 13)) + "px";
    s.style.top = (cy + (Math.random() * 18 - 9)) + "px";
    s.style.setProperty("--dx", Math.cos(angle) * dist + "px");
    s.style.setProperty("--dy", Math.sin(angle) * dist + "px");
    s.style.animationDelay = (Math.random() * 0.22) + "s";
    sparkLayer.appendChild(s);
  }
}

function clearRitualTimers(){
  ritualTimers.forEach(clearTimeout);
  ritualTimers = [];
}

function resetRitual(){
  clearRitualTimers();
  orb.classList.remove("wild-glow","box-mode","seal-glitter");
  orbArt.src = ORB_IMAGE;
  orbArt.alt = "Magische Kugel";
  orbArt.classList.remove("frame-swap");
  secretNote.classList.remove("fly-in");
  secretNote.textContent = "";
  sealCaption.textContent = "";
  thoughtWrap.classList.remove("hidden");
  reflectionSequence.classList.add("hidden");
  revealLines.forEach(line => line.classList.remove("visible"));
  innerAnswerWrap.classList.remove("visible");
  innerAnswer.value = "";
  releaseButton.disabled = false;
  sealedMessage.classList.add("hidden");
  sealedMessage.classList.remove("visible");
  hint.classList.remove("hidden");
}

function startHiddenReflection(){
  clearRitualTimers();

  // Nothing happens for several seconds after the answer.
  // Then the orb suddenly becomes much brighter before revealing anything else.
  ritualTimers.push(setTimeout(() => {
    orb.classList.add("wild-glow");
    makeSparks();
  }, 4500));

  ritualTimers.push(setTimeout(makeSparks, 5150));
  ritualTimers.push(setTimeout(makeSparks, 5800));

  ritualTimers.push(setTimeout(() => {
    orb.classList.remove("wild-glow");
    reflectionSequence.classList.remove("hidden");
    hint.classList.add("hidden");
  }, 6800));

  const revealAt = [7300, 9700, 12100, 14500];
  revealAt.forEach((delay, index) => {
    ritualTimers.push(setTimeout(() => {
      revealLines[index].classList.add("visible");
    }, delay));
  });

  ritualTimers.push(setTimeout(() => {
    innerAnswerWrap.classList.add("visible");
  }, 17100));
}

async function cast(){
  if (busy || orb.classList.contains("box-mode")) return;

  const text = thought.value.trim();
  if (!text) {
    thought.focus();
    return;
  }

  busy = true;
  resetRitual();
  answer.textContent = "";
  orb.classList.remove("has-answer");
  orb.classList.add("casting");
  makeSparks();

  await new Promise(resolve => setTimeout(resolve, 1700));

  orb.classList.remove("casting");

  const theme = detectTheme(text);
  answer.textContent = chooseLine(responses[theme]);

  orb.classList.add("has-answer");
  busy = false;
  startHiddenReflection();
}

async function wait(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function swapFrame(src, caption, alt){
  sealCaption.textContent = caption || "";
  orbArt.classList.remove("frame-swap");
  void orbArt.offsetWidth;
  orbArt.classList.add("frame-swap");
  orbArt.src = src;
  orbArt.alt = alt || "";
  await wait(700);
  orbArt.classList.remove("frame-swap");
}

async function playSealingRitual(secretText){
  busy = true;
  reflectionSequence.classList.add("hidden");
  sealedMessage.classList.add("hidden");
  sealedMessage.classList.remove("visible");
  thoughtWrap.classList.add("hidden");
  hint.classList.add("hidden");
  orb.classList.remove("has-answer");
  orb.classList.add("box-mode");

  await swapFrame(BOX_OPEN, "Die Box öffnet sich …", "Geöffnete magische Box");
  makeSparks();
  await wait(1400);

  await swapFrame(BOX_MESSAGE, "Deine Nachricht wird hineingelegt …", "Magische Box mit Nachricht");
  secretNote.textContent = secretText;
  secretNote.classList.remove("fly-in");
  void secretNote.offsetWidth;
  secretNote.classList.add("fly-in");
  await wait(2000);
  secretNote.classList.remove("fly-in");
  secretNote.textContent = "";
  await wait(500);

  await swapFrame(LOCK_IMAGE, "Das Schloss schließt sich …", "Magisches Schloss");
  orb.classList.add("seal-glitter");
  makeSparks();
  ritualTimers.push(setTimeout(makeSparks, 350));
  ritualTimers.push(setTimeout(makeSparks, 750));
  ritualTimers.push(setTimeout(makeSparks, 1100));
  await wait(2200);

  orb.classList.remove("seal-glitter");
  sealCaption.textContent = "";
  sealedMessage.classList.remove("hidden");
  requestAnimationFrame(() => sealedMessage.classList.add("visible"));
  innerAnswer.value = "";
  busy = false;
}

releaseButton.addEventListener("click", async () => {
  const secretText = innerAnswer.value.trim();
  if (!secretText) {
    innerAnswer.focus();
    return;
  }

  releaseButton.disabled = true;
  innerAnswerWrap.classList.remove("visible");
  await wait(650);
  await playSealingRitual(secretText);
});

orb.addEventListener("click", cast);

thought.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    cast();
  }
});
