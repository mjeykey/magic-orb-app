import React, { useMemo, useRef, useState } from "react";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const RESPONSES = {
  heartbreak: [
    "Du darfst jemanden vermissen und trotzdem weitergehen.",
    "Loslassen macht das Vergangene nicht bedeutungslos.",
    "Manchmal ist Abstand bereits eine Antwort.",
    "Dein Herz darf langsamer sein als deine Entscheidung."
  ],
  anxiety: [
    "Was du fürchtest, ist noch keine Tatsache.",
    "Du musst nur den nächsten echten Moment tragen.",
    "Nicht jeder innere Alarm ist eine Warnung.",
    "Angst spricht schnell. Wahrheit darf langsamer sein."
  ],
  lonely: [
    "Stille um dich ist nicht dasselbe wie Leere in dir.",
    "Du brauchst nicht viele Menschen. Du brauchst echte.",
    "Ein stiller Abend ist kein Urteil über dein Leben.",
    "Verbindung kann mit einem kleinen ehrlichen Schritt beginnen."
  ],
  burnout: [
    "Heute darf genug kleiner sein als sonst.",
    "Pause ist kein Umweg.",
    "Vielleicht brauchst du weniger Aufgaben, nicht mehr Disziplin.",
    "Deine Energie ist eine Grenze, kein Charaktertest."
  ],
  selfdoubt: [
    "Unsicherheit ist kein Beweis gegen deine Fähigkeit.",
    "Mut fühlt sich oft wie Unsicherheit mit Bewegung an.",
    "Du darfst lernen, während du schon unterwegs bist.",
    "Manchmal kommt Selbstvertrauen erst nach dem Schritt."
  ],
  general: [
    "Vielleicht weißt du längst, welche Antwort du hoffst zu hören.",
    "Nicht jeder nächste Schritt muss groß sein. Nur ehrlich.",
    "Manches wird klarer, sobald du aufhörst, es zu zwingen.",
    "Was würdest du wählen, wenn niemand zuschaut?",
    "Vielleicht brauchst du weniger Zeichen und mehr Ehrlichkeit mit dir selbst.",
    "Die leise Antwort ist nicht immer die schwächere."
  ]
};

const KEYWORDS = {
  heartbreak: ["trennung","ex","liebeskummer","herz","vermiss","beziehung","liebe"],
  anxiety: ["angst","panik","sorge","nervös","nervoes","unruhe","overthinking"],
  lonely: ["einsam","allein","niemand","lonely","isoliert"],
  burnout: ["überfordert","ueberfordert","erschöpft","erschoepft","stress","burnout","müde","muede"],
  selfdoubt: ["selbstzweifel","nicht gut genug","versager","unfähig","unfaehig","schaffe das nicht"]
};

function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function detectTheme(text) {
  const value = normalize(text);
  for (const [theme, words] of Object.entries(KEYWORDS)) {
    if (words.some((word) => value.includes(normalize(word)))) return theme;
  }
  return "general";
}

function choose(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function playTone(kind = "soft") {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    const gain = ctx.createGain();
    const osc = ctx.createOscillator();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    if (kind === "boom") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(95, now);
      osc.frequency.exponentialRampToValueAtTime(42, now + 0.45);
      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.48);
      osc.start(now);
      osc.stop(now + 0.5);
    } else if (kind === "creak") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.55);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.58);
      osc.start(now);
      osc.stop(now + 0.6);
    } else {
      osc.type = "sine";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(760, now + 0.8);
      gain.gain.setValueAtTime(0.025, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
      osc.start(now);
      osc.stop(now + 0.9);
    }
  } catch {
    // Audio is enhancement only.
  }
}

function Mist() {
  return (
    <>
      <span className="mist mist-a" />
      <span className="mist mist-b" />
      <span className="mist mist-c" />
      <span className="stars" />
    </>
  );
}

export default function App() {
  const [thought, setThought] = useState("");
  const [phase, setPhase] = useState("idle");
  const [orbText, setOrbText] = useState("Berühre die Kugel");
  const [orbTextVisible, setOrbTextVisible] = useState(true);
  const [reflection, setReflection] = useState("");
  const [secret, setSecret] = useState("");
  const [boxOpen, setBoxOpen] = useState(false);
  const [status, setStatus] = useState("Schreib deinen Gedanken auf und berühre dann die Kugel.");
  const runId = useRef(0);

  const busy = phase !== "idle" && phase !== "sealed";

  const answer = useMemo(() => {
    const theme = detectTheme(thought);
    return choose(RESPONSES[theme] || RESPONSES.general);
  }, [thought]);

  async function showOrbLine(text, visibleFor = 3200) {
    setOrbTextVisible(false);
    await delay(620);
    setOrbText(text);
    setOrbTextVisible(true);
    await delay(visibleFor);
  }

  async function begin() {
    if (busy) return;
    if (!thought.trim()) {
      setStatus("Schreib zuerst deinen Gedanken hinein.");
      await showOrbLine("Erzähl mir deinen Gedanken …", 2200);
      setOrbText("Berühre die Kugel");
      return;
    }

    const id = ++runId.current;
    setPhase("casting");
    setReflection("");
    setSecret("");
    setBoxOpen(false);
    setStatus("Die Kugel hört dir zu …");
    playTone("soft");

    const lines = [
      "Ich höre dich.",
      "Der Nebel sammelt deinen Gedanken.",
      answer,
      "Lass die Antwort einen Moment bei dir.",
      "Was bleibt jetzt in dir zurück?"
    ];

    for (const line of lines) {
      if (id !== runId.current) return;
      await showOrbLine(line, line === answer ? 4300 : 3400);
      await delay(950);
    }

    setOrbTextVisible(false);
    await delay(800);
    setPhase("reflection");
    setStatus("Die Kugel wartet auf deine ehrliche Antwort.");
  }

  async function continueToSecret() {
    if (!reflection.trim()) return;
    setPhase("release");
    setStatus("Lass es jetzt gehen …");

    const lines = [
      "Du musst es nicht länger festhalten.",
      "Du darfst es hierlassen.",
      "Es gehört nicht mehr in deinen Kopf."
    ];

    for (const line of lines) {
      await showOrbLine(line, 3500);
      await delay(1000);
    }

    setOrbTextVisible(false);
    setStatus("Die Box öffnet sich …");
    playTone("creak");
    setBoxOpen(true);
    await delay(1100);
    setPhase("secret");
  }

  async function sealSecret() {
    if (!secret.trim()) return;
    setPhase("sealing");
    setStatus("Das Geheimnis wird verschlossen …");
    await delay(450);
    setBoxOpen(false);
    await delay(700);
    playTone("boom");
    await delay(950);

    const finalLines = [
      "Dein Geheimnis ist fort.",
      "Für immer verschlossen.",
      "Ans Universum übergeben."
    ];

    for (const line of finalLines) {
      await showOrbLine(line, 3800);
      await delay(1050);
    }

    setSecret("");
    setThought("");
    setReflection("");
    setPhase("sealed");
    setStatus("Es ist abgeschlossen. Du musst es nicht mitnehmen.");
  }

  function reset() {
    runId.current += 1;
    setThought("");
    setReflection("");
    setSecret("");
    setBoxOpen(false);
    setPhase("idle");
    setOrbText("Berühre die Kugel");
    setOrbTextVisible(true);
    setStatus("Schreib deinen Gedanken auf und berühre dann die Kugel.");
  }

  return (
    <main className="app-shell">
      <section className="ritual-card" aria-live="polite">
        <div className={`orb-wrap ${phase === "casting" || phase === "release" || phase === "sealing" ? "casting" : ""}`}>
          <button className="orb" onClick={begin} disabled={busy} aria-label="Magische Kugel fragen">
            <Mist />
            <span className={`orb-answer ${orbTextVisible ? "visible" : ""}`}>{orbText}</span>
          </button>
        </div>

        {phase === "idle" && (
          <div className="thought-cloud">
            <textarea
              value={thought}
              onChange={(e) => setThought(e.target.value)}
              placeholder="Dein Gedanke …"
              aria-label="Dein Gedanke"
            />
            <p className="microcopy">Gedanke eingeben → auf die Kugel tippen</p>
          </div>
        )}

        {phase === "reflection" && (
          <div className="reveal-panel">
            <p className="question">Was hat die Antwort in dir ausgelöst?</p>
            <textarea
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="Nur für dich …"
              autoFocus
            />
            <button className="ritual-btn" onClick={continueToSecret} disabled={!reflection.trim()}>
              Weiter
            </button>
          </div>
        )}

        {(phase === "secret" || phase === "sealing") && (
          <div className={`secret-box ${boxOpen ? "open" : "closed"}`}>
            <div className="box-lid"><span>✦</span></div>
            <div className="box-body">
              {boxOpen && (
                <div className="box-inner">
                  <p>Schreib hinein, was für immer hierbleiben soll.</p>
                  <textarea
                    value={secret}
                    onChange={(e) => setSecret(e.target.value)}
                    placeholder="Dein Geheimnis …"
                    autoFocus
                  />
                  <button className="ritual-btn" onClick={sealSecret} disabled={!secret.trim()}>
                    Für immer verschließen
                  </button>
                </div>
              )}
              <div className="lock">⌾</div>
            </div>
          </div>
        )}

        {phase === "sealed" && (
          <div className="sealed-card">
            <div className="sealed-lock">✧</div>
            <p>Für immer verschlossen.</p>
            <p>Ans Universum übergeben.</p>
            <button className="ritual-btn" onClick={reset}>Glaskugel nochmal fragen</button>
          </div>
        )}

        <p className="status">{status}</p>
      </section>
    </main>
  );
}
