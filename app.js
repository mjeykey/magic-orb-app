const orb = document.getElementById("orb");
const answer = document.getElementById("answer");
const sparkLayer = document.getElementById("sparkLayer");
const thought = document.getElementById("thought");
const thoughtWrap = document.getElementById("thoughtWrap");
const orbArt = document.getElementById("orbArt");
const secretNote = document.getElementById("secretNote");
const sealCaption = document.getElementById("sealCaption");

const ORB_IMAGE = "assets/orb.webp";
const BOX_OPEN = "assets/box-open.webp";
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
