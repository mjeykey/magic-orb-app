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
