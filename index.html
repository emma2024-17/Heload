import { useState, useRef, useCallback, useEffect } from "react";

const G = {
  ink: "#0c0e12", ink2: "#2d3142", ink3: "#6b7280", ink4: "#9ca3af",
  bg: "#f0ede8", surface: "#ffffff", surface2: "#f8f7f4", surface3: "#f2f0ec",
  border: "#e2dfd8", border2: "#d0ccc3",
  g0: "#064e2d", g1: "#0a6b3d", g2: "#0f9454", g3: "#13b866", g4: "#16d675",
  gtint: "#edf7f2",
  r1: "#c0392b", rtint: "#fef2f2",
  a1: "#b85c00", atint: "#fff8ed",
  vtint: "#eef2ff", v0: "#3730a3",
};

const sColor = c => c === "green" ? G.g1 : c === "red" ? G.r1 : G.a1;
const vClass = v => v === "high" ? G.r1 : v === "mod" ? G.a1 : G.g1;
const vLabel = v => v === "high" ? "High ⚠" : v === "mod" ? "Moderate" : "Good ✓";

function useLocalStorage(key, init) {
  const [val, setVal] = useState(() => {
    try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : init; } catch { return init; }
  });
  const set = useCallback(v => {
    setVal(v);
    try { localStorage.setItem(key, JSON.stringify(v)); } catch {}
  }, [key]);
  return [val, set];
}

function ScoreRing({ score, color, size = 88 }) {
  const r = 38, circ = 2 * Math.PI * r;
  const dash = (Math.min(score, 100) / 100) * circ;
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} viewBox="0 0 88 88" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="44" cy="44" r={r} fill="none" stroke="#e2dfd8" strokeWidth="7" />
        <circle cx="44" cy="44" r={r} fill="none" stroke={color} strokeWidth="7"
          strokeDasharray={`${dash.toFixed(1)} ${circ.toFixed(1)}`} strokeLinecap="round" />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "Georgia, serif", fontSize: 24, fontWeight: 700, color }}>
        {score}
      </div>
    </div>
  );
}

function Card({ children, style = {} }) {
  return (
    <div style={{ background: G.surface, border: `1px solid ${G.border}`, borderRadius: 18,
      padding: "16px 18px", marginBottom: 12, ...style }}>
      {children}
    </div>
  );
}

function CardLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: G.ink4 }}>
        {children}
      </span>
      <div style={{ flex: 1, height: 1, background: G.border }} />
    </div>
  );
}

function Alert({ type, icon, children }) {
  const bg = type === "danger" ? G.rtint : G.atint;
  const col = type === "danger" ? G.r1 : G.a1;
  return (
    <div style={{ display: "flex", gap: 10, padding: "10px 12px", borderRadius: 10, marginBottom: 7,
      background: bg, color: col, border: `1px solid ${col}22`, fontSize: 13, lineHeight: 1.5 }}>
      <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{icon}</span>
      <div>{children}</div>
    </div>
  );
}

function Loader() {
  return (
    <Card style={{ textAlign: "center", padding: "36px 24px" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 18 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: [G.g3, G.g2, G.g1][i],
            animation: "ldot 0.9s ease-in-out infinite", animationDelay: `${i * 0.16}s` }} />
        ))}
      </div>
      <div style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 600, color: G.ink, marginBottom: 4 }}>
        Analyzing label…
      </div>
      <div style={{ fontSize: 12.5, color: G.ink4 }}>Claude is reading every ingredient</div>
      <style>{`@keyframes ldot{0%,100%{transform:scale(.6);opacity:.4}50%{transform:scale(1.2);opacity:1}}`}</style>
    </Card>
  );
}

function IngredientItem({ g, idx }) {
  const [open, setOpen] = useState(false);
  const sevIcon = g.severity === "red" ? "🚫" : g.severity === "amber" ? "⚠️" : "✅";
  const sevBg = g.severity === "red" ? G.rtint : g.severity === "amber" ? G.atint : G.gtint;
  const tagStyle = g.tag === "Avoid"
    ? { background: G.rtint, color: G.r1 }
    : g.tag === "Limit"
      ? { background: G.atint, color: G.a1 }
      : { background: G.gtint, color: G.g0 };
  return (
    <div style={{ border: `1px solid ${G.border}`, borderRadius: 10, marginBottom: 8, overflow: "hidden" }}>
      <div onClick={() => setOpen(o => !o)} style={{ display: "flex", alignItems: "center", gap: 10,
        padding: "12px 14px", cursor: "pointer", background: G.surface, userSelect: "none" }}>
        <div style={{ width: 32, height: 32, borderRadius: 9, background: sevBg,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>
          {sevIcon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: G.ink, letterSpacing: "-0.01em" }}>{g.name}</div>
          <div style={{ fontSize: 11.5, color: G.ink4, marginTop: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {g.one_liner}
          </div>
        </div>
        <span style={{ fontSize: 9.5, fontWeight: 700, padding: "3px 9px", borderRadius: 20,
          letterSpacing: "0.04em", textTransform: "uppercase", flexShrink: 0, ...tagStyle }}>
          {g.tag}
        </span>
        <span style={{ fontSize: 10, color: G.ink4, transform: open ? "rotate(180deg)" : "none",
          transition: "transform 0.25s", marginLeft: 4 }}>▼</span>
      </div>
      {open && (
        <div style={{ padding: "14px", background: G.surface3, borderTop: `1px solid ${G.border}` }}>
          {[["What is it?", g.what_is_it], ["Why it matters", g.why_it_matters], ["Safe intake", g.how_much_is_safe]].map(([t, v]) => v && (
            <div key={t} style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 9.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em",
                color: G.ink4, marginBottom: 4 }}>{t}</div>
              <p style={{ fontSize: 13, color: G.ink2, lineHeight: 1.6, margin: 0 }}>{v}</p>
            </div>
          ))}
          {g.who_should_avoid && (
            <div style={{ display: "flex", gap: 7, background: G.atint, border: `1px solid ${G.a1}22`,
              borderRadius: 6, padding: "8px 11px", marginTop: 9, fontSize: 12, color: G.a1, lineHeight: 1.55 }}>
              ⚠️ <span>{g.who_should_avoid}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ScanResult({ result, onReset }) {
  const col = sColor(result.score_color || "amber");
  return (
    <div>
      <Card>
        <CardLabel>Health Score</CardLabel>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <ScoreRing score={result.overall_score || 0} color={col} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "inline-flex", alignItems: "center", fontSize: 10, fontWeight: 700,
              padding: "3px 10px", borderRadius: 20, marginBottom: 6, letterSpacing: "0.04em",
              textTransform: "uppercase", background: `${col}18`, color: col }}>
              {result.score_label}
            </div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 600, color: G.ink,
              letterSpacing: "-0.02em", marginBottom: 2 }}>
              {result.product_name || "Product"}
            </div>
            {result.brand && <div style={{ fontSize: 12, color: G.ink4, fontStyle: "italic", marginBottom: 5 }}>{result.brand}</div>}
            <div style={{ fontSize: 12.5, color: G.ink3, lineHeight: 1.55 }}>{result.score_reason}</div>
            {result.serving_size && (
              <div style={{ display: "inline-flex", alignItems: "center", gap: 5, marginTop: 10,
                fontSize: 11.5, color: G.ink3, background: G.surface2, border: `1px solid ${G.border}`,
                borderRadius: 20, padding: "4px 11px", fontWeight: 500 }}>
                📏 {result.serving_size}
              </div>
            )}
          </div>
        </div>
      </Card>

      {(result.allergen_alerts || []).filter(a => a?.ingredient).length > 0 && (
        <Card>
          <CardLabel>Allergy Alerts</CardLabel>
          {result.allergen_alerts.filter(a => a?.ingredient).map((a, i) => (
            <Alert key={i} type={a.severity === "danger" ? "danger" : "warn"}
              icon={a.severity === "danger" ? "⛔" : "⚠️"}>
              <strong>{a.ingredient}</strong> — {a.reason}
            </Alert>
          ))}
        </Card>
      )}

      <Card>
        <CardLabel>Nutritional Breakdown</CardLabel>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {(result.nutrients || []).map((n, i) => {
            const vc = vClass(n.verdict);
            const pct = n.verdict === "high" ? 85 : n.verdict === "mod" ? 55 : 30;
            return (
              <div key={i} style={{ background: G.surface2, borderRadius: 10, padding: "11px 13px",
                border: `1px solid ${G.border}` }}>
                <div style={{ fontSize: 10, color: G.ink4, marginBottom: 3, fontWeight: 700,
                  letterSpacing: "0.06em", textTransform: "uppercase" }}>{n.name}</div>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 600,
                  lineHeight: 1, marginBottom: 4, color: vc }}>{n.value || "—"}</div>
                <div style={{ height: 3, background: G.border, borderRadius: 2, marginBottom: 5, overflow: "hidden" }}>
                  <div style={{ height: "100%", borderRadius: 2, width: `${pct}%`, background: vc }} />
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.03em", color: vc }}>{vLabel(n.verdict)}</div>
                <div style={{ fontSize: 10.5, color: G.ink4, lineHeight: 1.45, marginTop: 3 }}>{n.plain_english}</div>
              </div>
            );
          })}
        </div>
      </Card>

      {(result.ingredient_breakdown || []).filter(g => g?.name).length > 0 && (
        <Card>
          <CardLabel>Ingredient Deep-Dive</CardLabel>
          <p style={{ fontSize: 13, color: G.ink3, marginBottom: 12, lineHeight: 1.6 }}>
            Tap any ingredient to understand what it is and who should be careful.
          </p>
          {result.ingredient_breakdown.filter(g => g?.name).map((g, i) => (
            <IngredientItem key={i} g={g} idx={i} />
          ))}
        </Card>
      )}

      {(result.nutritionist_insights || []).filter(Boolean).length > 0 && (
        <Card>
          <CardLabel>Nutritionist Insights</CardLabel>
          {result.nutritionist_insights.filter(Boolean).map((x, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "10px 0",
              borderBottom: i < result.nutritionist_insights.length - 1 ? `1px solid ${G.border}` : "none",
              fontSize: 13, color: G.ink2, lineHeight: 1.6 }}>
              <div style={{ width: 20, height: 20, borderRadius: 6, background: G.gtint,
                border: `1px solid ${G.g3}33`, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, fontWeight: 700, color: G.g1, flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
              {x}
            </div>
          ))}
        </Card>
      )}

      {result.did_you_know && (
        <div style={{ background: "linear-gradient(135deg,#eef2ff,#f0f5ff)", border: "1px solid #c7d2fe",
          borderRadius: 18, padding: 18, marginBottom: 12 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            color: G.v0, marginBottom: 7, opacity: 0.7 }}>Did you know?</div>
          <p style={{ fontSize: 13, color: "#312e81", lineHeight: 1.65, margin: 0 }}>{result.did_you_know}</p>
        </div>
      )}

      {result.verdict_for_user && (
        <div style={{ background: "linear-gradient(135deg,#ecfdf5,#d1fae5)", border: "1px solid rgba(16,185,129,.2)",
          borderRadius: 18, padding: 18, marginBottom: 12 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            color: G.g1, marginBottom: 7, opacity: 0.8 }}>Verdict for you</div>
          <p style={{ fontSize: 13.5, color: "#064e3b", lineHeight: 1.7, margin: 0 }}>{result.verdict_for_user}</p>
        </div>
      )}

      {result.better_alternatives && (
        <Card>
          <CardLabel>Better Alternatives</CardLabel>
          <p style={{ fontSize: 13, color: G.ink2, lineHeight: 1.65, margin: 0 }}>{result.better_alternatives}</p>
        </Card>
      )}

      <button onClick={onReset} style={{ width: "100%", padding: "11px", border: `1px solid ${G.border}`,
        borderRadius: 10, background: G.surface, fontFamily: "inherit", fontSize: 13, fontWeight: 600,
        color: G.ink3, cursor: "pointer", marginTop: 4 }}>
        ← Scan another product
      </button>
    </div>
  );
}

function ScanTab({ profile }) {
  const [phase, setPhase] = useState("idle"); // idle | preview | loading | result | error
  const [imgData, setImgData] = useState(null);
  const [result, setResult] = useState(null);
  const [errMsg, setErrMsg] = useState("");
  const fileRef = useRef();
  const videoRef = useRef();
  const canvasRef = useRef();
  const streamRef = useRef(null);
  const facingRef = useRef("environment");
  const [cameraOn, setCameraOn] = useState(false);

  const stopCam = useCallback(() => {
    if (streamRef.current) { streamRef.current.getTracks().forEach(t => t.stop()); streamRef.current = null; }
    setCameraOn(false);
  }, []);

  const openCam = useCallback(async () => {
    stopCam();
    try {
      const st = await navigator.mediaDevices.getUserMedia({ video: { facingMode: facingRef.current, width: { ideal: 1280 } } });
      streamRef.current = st;
      videoRef.current.srcObject = st;
      setCameraOn(true);
      setImgData(null);
      setPhase("camera");
    } catch (e) { alert("Camera unavailable: " + e.message); }
  }, [stopCam]);

  const snap = useCallback(() => {
    const v = videoRef.current, c = canvasRef.current;
    c.width = v.videoWidth; c.height = v.videoHeight;
    c.getContext("2d").drawImage(v, 0, 0);
    const url = c.toDataURL("image/jpeg", 0.88);
    setImgData(url);
    stopCam();
    setPhase("preview");
  }, [stopCam]);

  const onFile = useCallback(e => {
    const f = e.target.files[0]; if (!f) return;
    stopCam();
    const reader = new FileReader();
    reader.onload = async ev => {
      const resized = await resizeImg(ev.target.result, 1280, 0.9);
      setImgData(resized);
      setPhase("preview");
    };
    reader.readAsDataURL(f);
    e.target.value = "";
  }, [stopCam]);

  const profileContext = () => {
    const p = profile; let s = "";
    if (p.al?.length) s += `ALLERGIES — CHECK EVERY INGREDIENT: ${p.al.join(", ")}. `;
    if (p.go?.length) s += `HEALTH GOALS: ${p.go.join(", ")}. `;
    if (p.co?.length) s += `MEDICAL CONDITIONS: ${p.co.join(", ")}. `;
    if (p.no) s += `EXTRA: ${p.no}. `;
    return s || "General healthy adult, no restrictions.";
  };

  const doScan = useCallback(async () => {
    if (!imgData) return;
    setPhase("loading");
    const b64 = imgData.split(",")[1];
    const prompt = `You are an expert nutritionist analyzing a food product label.
PATIENT PROFILE: ${profileContext()}
Study this image carefully. Read ALL text: product name, brand, ingredients, nutrition facts, serving size, allergens.
RESPOND WITH ONLY A VALID JSON OBJECT starting with { ending with }. No markdown, no text outside JSON. Keep all string values concise (under 120 chars each).
{"product_name":"","brand":"","overall_score":0,"score_label":"Good","score_color":"green","score_reason":"","serving_size":"","allergen_alerts":[{"ingredient":"","reason":"","severity":"danger"}],"nutrients":[{"name":"Calories","value":"","verdict":"good","plain_english":""},{"name":"Total Fat","value":"","verdict":"good","plain_english":""},{"name":"Saturated Fat","value":"","verdict":"good","plain_english":""},{"name":"Sugar","value":"","verdict":"good","plain_english":""},{"name":"Sodium","value":"","verdict":"good","plain_english":""},{"name":"Protein","value":"","verdict":"good","plain_english":""},{"name":"Fibre","value":"","verdict":"good","plain_english":""},{"name":"Carbs","value":"","verdict":"good","plain_english":""}],"ingredient_breakdown":[{"name":"","severity":"amber","one_liner":"","what_is_it":"","why_it_matters":"","how_much_is_safe":"","who_should_avoid":"","tag":"Limit"}],"nutritionist_insights":["","",""],"verdict_for_user":"","better_alternatives":"","did_you_know":""}
Rules: score 0-100; score_color green>=70,amber 40-69,red<40; verdict: good/mod/high; include 3-5 notable ingredients only; keep all text fields brief and plain-language; did_you_know = one short surprising fact.`;
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-opus-4-5",
          max_tokens: 4000,
          messages: [{ role: "user", content: [
            { type: "image", source: { type: "base64", media_type: "image/jpeg", data: b64 } },
            { type: "text", text: prompt }
          ]}]
        })
      });
      const d = await res.json();
      if (!res.ok || d.error) throw new Error(d.error?.message || `HTTP ${res.status}`);
      const txt = d.content?.find(b => b.type === "text")?.text || "";
      const parsed = parseJ(txt);
      setResult(parsed);
      setPhase("result");
    } catch (e) {
      setErrMsg(e.message);
      setPhase("error");
    }
  }, [imgData, profile]);

  const reset = () => { stopCam(); setPhase("idle"); setImgData(null); setResult(null); };

  return (
    <div>
      {phase !== "result" && (
        <>
          <div style={{ background: G.ink, borderRadius: 18, overflow: "hidden", marginBottom: 12,
            position: "relative", minHeight: 200, display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 12px 40px rgba(0,0,0,.15)" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#0c1a14,#0f2d1e,#091510)", zIndex: 0 }} />
            <div style={{ position: "absolute", inset: 0, zIndex: 1,
              backgroundImage: "linear-gradient(rgba(19,184,102,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(19,184,102,.05) 1px,transparent 1px)",
              backgroundSize: "28px 28px" }} />
            {phase === "idle" && (
              <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column",
                alignItems: "center", gap: 10, padding: "36px 24px", textAlign: "center" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", border: `2px solid rgba(19,184,102,.3)`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30 }}>🔬</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,.8)" }}>Scan a nutrition label</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>Use camera or upload an image below</div>
              </div>
            )}
            {phase === "camera" && (
              <>
                <video ref={videoRef} autoPlay playsInline muted
                  style={{ width: "100%", maxHeight: 260, objectFit: "cover", position: "relative", zIndex: 2, display: "block" }} />
                <div style={{ position: "absolute", bottom: 14, left: 0, right: 0, display: "flex",
                  justifyContent: "center", alignItems: "center", gap: 16, zIndex: 5 }}>
                  <button onClick={() => { facingRef.current = facingRef.current === "environment" ? "user" : "environment"; openCam(); }}
                    style={{ width: 42, height: 42, borderRadius: "50%", background: "rgba(0,0,0,.55)",
                      border: "1px solid rgba(255,255,255,.15)", cursor: "pointer", color: "#fff",
                      fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>🔄</button>
                  <button onClick={snap}
                    style={{ width: 62, height: 62, borderRadius: "50%", background: "#fff",
                      border: "4px solid rgba(255,255,255,.25)", cursor: "pointer", position: "relative",
                      boxShadow: "0 4px 20px rgba(0,0,0,.5)" }}>
                    <div style={{ position: "absolute", inset: 5, borderRadius: "50%", background: "#fff" }} />
                  </button>
                </div>
              </>
            )}
            {phase === "preview" && imgData && (
              <img src={imgData} alt="" style={{ width: "100%", maxHeight: 260, objectFit: "cover",
                display: "block", position: "relative", zIndex: 2 }} />
            )}
            <canvas ref={canvasRef} style={{ display: "none" }} />
          </div>

          <div style={{ display: "flex", gap: 6, marginBottom: 12, overflowX: "auto" }}>
            {["📸 Flat & in frame", "💡 Good lighting", "🔤 Full label visible"].map(t => (
              <div key={t} style={{ flexShrink: 0, fontSize: 11, fontWeight: 600, padding: "5px 11px",
                borderRadius: 20, background: G.surface, border: `1px solid ${G.border}`, color: G.ink3 }}>{t}</div>
            ))}
          </div>

          {phase !== "preview" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
              <button onClick={openCam} style={btnStyle()}>📷 Camera</button>
              <button onClick={() => fileRef.current.click()} style={btnStyle()}>🖼 Upload</button>
            </div>
          )}
          {phase === "preview" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 10 }}>
              <button onClick={openCam} style={btnStyle()}>📷 Retake</button>
              <button onClick={() => fileRef.current.click()} style={btnStyle()}>🖼 Upload</button>
              <button onClick={reset} style={btnStyle()}>✕ Clear</button>
            </div>
          )}
          <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={onFile} />

          {phase === "preview" && (
            <button onClick={doScan} style={{ width: "100%", padding: 15,
              background: `linear-gradient(135deg,${G.g0},${G.g1},${G.g2})`,
              color: "#fff", border: "none", borderRadius: 10,
              fontFamily: "Georgia, serif", fontSize: 18, fontStyle: "italic", fontWeight: 600,
              cursor: "pointer", marginBottom: 12, boxShadow: "0 8px 32px rgba(10,107,61,.25)" }}>
              Analyze this label →
            </button>
          )}
          {phase === "loading" && <Loader />}
          {phase === "error" && (
            <div style={{ background: G.rtint, border: `1px solid ${G.r1}33`, borderRadius: 18,
              padding: "16px 18px", fontSize: 13, color: G.r1, lineHeight: 1.6 }}>
              <strong style={{ display: "block", marginBottom: 6, fontSize: 14.5 }}>Analysis failed</strong>
              {errMsg}
              <div style={{ background: G.surface, border: `1px solid ${G.border}`, borderRadius: 6,
                padding: 10, fontSize: 12, color: G.ink3, marginTop: 8 }}>
                💡 Try uploading a clearer photo of the label.
              </div>
              <button onClick={reset} style={{ ...btnStyle(), width: "100%", marginTop: 10 }}>← Try again</button>
            </div>
          )}
        </>
      )}
      {phase === "result" && result && <ScanResult result={result} onReset={reset} />}
    </div>
  );
}

function CompareTab({ profile }) {
  const [slots, setSlots] = useState({ a: null, b: null });
  const [phase, setPhase] = useState("idle");
  const [result, setResult] = useState(null);
  const [errMsg, setErrMsg] = useState("");
  const fileA = useRef(), fileB = useRef();

  const onFile = (slot, e) => {
    const f = e.target.files[0]; if (!f) return;
    const reader = new FileReader();
    reader.onload = async ev => {
      const resized = await resizeImg(ev.target.result, 1000, 0.85);
      setSlots(s => ({ ...s, [slot]: resized }));
    };
    reader.readAsDataURL(f);
    e.target.value = "";
  };

  const profileContext = () => {
    const p = profile; let s = "";
    if (p.al?.length) s += `ALLERGIES: ${p.al.join(", ")}. `;
    if (p.go?.length) s += `GOALS: ${p.go.join(", ")}. `;
    if (p.co?.length) s += `CONDITIONS: ${p.co.join(", ")}. `;
    return s || "General healthy adult.";
  };

  const doCompare = async () => {
    setPhase("loading");
    const prompt = `Compare these two food products nutritionally for: ${profileContext()}
Image 1=Product A, Image 2=Product B.
RESPOND WITH ONLY VALID JSON:
{"product_a":"","product_b":"","winner":"A","winner_reason":"","score_a":0,"score_b":0,"score_color_a":"green","score_color_b":"amber","allergen_alerts":[{"product":"A","ingredient":"","reason":""}],"comparison":[{"nutrient":"Calories","a_val":"","b_val":"","a_num":0,"b_num":0,"lower_better":true,"winner":"A"},{"nutrient":"Sugar","a_val":"","b_val":"","a_num":0,"b_num":0,"lower_better":true,"winner":"A"},{"nutrient":"Protein","a_val":"","b_val":"","a_num":0,"b_num":0,"lower_better":false,"winner":"A"},{"nutrient":"Sodium","a_val":"","b_val":"","a_num":0,"b_num":0,"lower_better":true,"winner":"A"},{"nutrient":"Sat.Fat","a_val":"","b_val":"","a_num":0,"b_num":0,"lower_better":true,"winner":"A"},{"nutrient":"Fibre","a_val":"","b_val":"","a_num":0,"b_num":0,"lower_better":false,"winner":"A"}],"key_differences":["","",""],"recommendation":""}`;
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-opus-4-5",
          max_tokens: 4000,
          messages: [{ role: "user", content: [
            { type: "image", source: { type: "base64", media_type: "image/jpeg", data: slots.a.split(",")[1] } },
            { type: "image", source: { type: "base64", media_type: "image/jpeg", data: slots.b.split(",")[1] } },
            { type: "text", text: prompt }
          ]}]
        })
      });
      const d = await res.json();
      if (!res.ok || d.error) throw new Error(d.error?.message || `HTTP ${res.status}`);
      const txt = d.content?.find(b => b.type === "text")?.text || "";
      setResult(parseJ(txt));
      setPhase("result");
    } catch (e) {
      setErrMsg(e.message);
      setPhase("error");
    }
  };

  const reset = () => { setSlots({ a: null, b: null }); setPhase("idle"); setResult(null); };
  const ready = !!(slots.a && slots.b);

  if (phase === "loading") return <Loader />;
  if (phase === "result" && result) {
    const cA = sColor(result.score_color_a || "amber"), cB = sColor(result.score_color_b || "amber");
    const gA = result.score_a >= result.score_b, gB = result.score_b > result.score_a;
    return (
      <div>
        <Card>
          <CardLabel>Head to Head</CardLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 36px 1fr", gap: 8, alignItems: "center", marginBottom: 16 }}>
            {/* Product A */}
            {[["A", result.product_a, result.score_a, cA, gA], ["B", result.product_b, result.score_b, cB, gB]].reduce((acc, [ltr, name, score, col, won], i) => {
              const card = (
                <div key={ltr} style={{ padding: "14px 10px", borderRadius: 12, textAlign: "center",
                  border: won ? `2px solid ${G.g3}` : `1px solid ${G.border}`,
                  background: won ? G.gtint : G.surface2, minWidth: 0 }}>
                  <div style={{ fontSize: 9, color: G.ink4, textTransform: "uppercase", letterSpacing: ".08em",
                    marginBottom: 5, fontWeight: 700 }}>Product {ltr}</div>
                  <div style={{ fontSize: 11, color: G.ink3, fontStyle: "italic", marginBottom: 6,
                    lineHeight: 1.3, wordBreak: "break-word", minHeight: 28 }}>{name || ltr}</div>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 32, fontWeight: 700,
                    color: col, lineHeight: 1, marginBottom: won ? 6 : 0 }}>{score}</div>
                  {won && (
                    <div style={{ fontSize: 9, fontWeight: 700, color: G.g1, background: "rgba(19,184,102,.15)",
                      border: `1px solid ${G.g3}55`, borderRadius: 20, padding: "3px 10px",
                      display: "inline-block", letterSpacing: ".06em", marginTop: 2 }}>WINNER</div>
                  )}
                </div>
              );
              if (i === 0) return [card];
              return [...acc,
                <div key="vs" style={{ textAlign: "center", fontFamily: "Georgia, serif",
                  fontSize: 15, fontStyle: "italic", color: G.ink4 }}>vs</div>,
                card
              ];
            }, [])}
          </div>
          <p style={{ fontSize: 13, color: G.ink2, lineHeight: 1.65, margin: 0 }}>{result.winner_reason}</p>
        </Card>
        <Card>
          <CardLabel>Nutrient Comparison</CardLabel>
          {(result.comparison || []).map((c, i) => {
            const mx = Math.max(c.a_num || 0, c.b_num || 0, 1);
            const pA = Math.round((c.a_num / mx) * 100), pB = Math.round((c.b_num / mx) * 100);
            return (
              <div key={i} style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: G.ink2 }}>{c.nutrient}</span>
                  <span style={{ fontSize: 10.5, color: G.ink4 }}>{c.lower_better ? "lower = better" : "higher = better"}</span>
                </div>
                {[["A", pA, c.a_val, c.winner === "A", `linear-gradient(90deg,${G.g2},${G.g4})`],
                  ["B", pB, c.b_val, c.winner === "B", `linear-gradient(90deg,${G.a1},#f59e0b)`]].map(([l, pct, val, w, grad]) => (
                  <div key={l} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                    <span style={{ fontSize: 11, fontWeight: w ? 800 : 500, width: 14, color: w ? G.g1 : G.ink4 }}>{l}</span>
                    <div style={{ flex: 1, height: 9, background: G.surface2, borderRadius: 6,
                      overflow: "hidden", border: `1px solid ${G.border}` }}>
                      <div style={{ height: "100%", borderRadius: 6, width: `${pct}%`, background: grad,
                        transition: "width 0.8s cubic-bezier(.34,1.4,.64,1)" }} />
                    </div>
                    <span style={{ fontSize: 11, color: G.ink3, minWidth: 46, textAlign: "right",
                      fontFamily: "monospace" }}>{val}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </Card>
        {(result.key_differences || []).filter(Boolean).length > 0 && (
          <Card>
            <CardLabel>Key Differences</CardLabel>
            {result.key_differences.filter(Boolean).map((d, i) => (
              <div key={i} style={{ display: "flex", gap: 10, padding: "10px 0",
                borderBottom: i < result.key_differences.length - 1 ? `1px solid ${G.border}` : "none",
                fontSize: 13, color: G.ink2, lineHeight: 1.6 }}>
                <div style={{ width: 20, height: 20, borderRadius: 6, background: G.gtint,
                  border: `1px solid ${G.g3}33`, display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 10, fontWeight: 700, color: G.g1, flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                {d}
              </div>
            ))}
          </Card>
        )}
        {result.recommendation && (
          <div style={{ background: "linear-gradient(135deg,#ecfdf5,#d1fae5)", border: "1px solid rgba(16,185,129,.2)",
            borderRadius: 18, padding: 18, marginBottom: 12 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: G.g1, marginBottom: 7, opacity: 0.8 }}>Recommendation for you</div>
            <p style={{ fontSize: 13.5, color: "#064e3b", lineHeight: 1.7, margin: 0 }}>{result.recommendation}</p>
          </div>
        )}
        <button onClick={reset} style={{ width: "100%", padding: 11, border: `1px solid ${G.border}`,
          borderRadius: 10, background: G.surface, fontFamily: "inherit", fontSize: 13,
          fontWeight: 600, color: G.ink3, cursor: "pointer", marginTop: 4 }}>← Compare different products</button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
        {["a", "b"].map(s => (
          <div key={s} onClick={() => (s === "a" ? fileA : fileB).current.click()}
            style={{ border: `1.5px ${slots[s] ? "solid" : "dashed"} ${slots[s] ? G.g2 : G.border2}`,
              borderRadius: 18, padding: "16px 12px", textAlign: "center", cursor: "pointer",
              minHeight: 120, display: "flex", flexDirection: "column", alignItems: "center",
              justifyContent: "center", gap: 6, background: slots[s] ? G.gtint : G.surface,
              transition: "all 0.2s" }}>
            {slots[s]
              ? <><img src={slots[s]} alt="" style={{ width: "100%", maxHeight: 70, objectFit: "cover", borderRadius: 10 }} />
                  <div style={{ fontSize: 12, fontWeight: 700, color: G.g1 }}>Product {s.toUpperCase()}</div>
                  <div style={{ fontSize: 10.5, color: G.ink4 }}>Tap to replace</div></>
              : <><div style={{ width: 36, height: 36, borderRadius: 10, background: G.surface2,
                  border: `1px solid ${G.border}`, display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 600, color: G.ink3 }}>{s.toUpperCase()}</div>
                <div style={{ fontSize: 11.5, color: G.ink4, fontWeight: 500 }}>Add Product {s.toUpperCase()}</div></>}
          </div>
        ))}
      </div>
      <input ref={fileA} type="file" accept="image/*" style={{ display: "none" }} onChange={e => onFile("a", e)} />
      <input ref={fileB} type="file" accept="image/*" style={{ display: "none" }} onChange={e => onFile("b", e)} />
      <button onClick={doCompare} disabled={!ready}
        style={{ width: "100%", padding: 15, background: ready
          ? `linear-gradient(135deg,${G.g0},${G.g1},${G.g2})` : G.border,
          color: ready ? "#fff" : G.ink4, border: "none", borderRadius: 10,
          fontFamily: "Georgia, serif", fontSize: 18, fontStyle: "italic", fontWeight: 600,
          cursor: ready ? "pointer" : "default", boxShadow: ready ? "0 8px 32px rgba(10,107,61,.25)" : "none",
          opacity: ready ? 1 : 0.5 }}>
        Compare Products →
      </button>
      {phase === "error" && (
        <div style={{ background: G.rtint, border: `1px solid ${G.r1}33`, borderRadius: 18,
          padding: "14px 18px", fontSize: 13, color: G.r1, marginTop: 12, lineHeight: 1.6 }}>
          <strong style={{ display: "block", marginBottom: 4 }}>Comparison failed</strong>{errMsg}
        </div>
      )}
    </div>
  );
}

function HistoryTab({ history, onView }) {
  if (!history.length) return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "56px 24px", textAlign: "center" }}>
      <div style={{ width: 72, height: 72, borderRadius: 20, background: G.surface, border: `1px solid ${G.border}`,
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, marginBottom: 14 }}>📋</div>
      <div style={{ fontSize: 15, fontWeight: 600, color: G.ink3, marginBottom: 4 }}>No scans yet</div>
      <p style={{ fontSize: 13, color: G.ink4, lineHeight: 1.6 }}>Scan a product label and it will appear here</p>
    </div>
  );
  return (
    <div>
      {history.map(h => {
        const col = sColor(h.color || "amber");
        return (
          <div key={h.id} onClick={() => onView(h)}
            style={{ background: G.surface, border: `1px solid ${G.border}`, borderRadius: 18,
              padding: 13, marginBottom: 9, cursor: "pointer", display: "flex", alignItems: "center",
              gap: 12, boxShadow: "0 1px 3px rgba(0,0,0,.04),0 2px 8px rgba(0,0,0,.06)" }}>
            {h.thumb
              ? <img src={h.thumb} alt="" style={{ width: 52, height: 52, borderRadius: 12, objectFit: "cover", flexShrink: 0 }}
                  onError={e => e.target.style.display = "none"} />
              : <div style={{ width: 52, height: 52, borderRadius: 12, background: G.surface2,
                  border: `1px solid ${G.border}`, display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, flexShrink: 0 }}>🍽</div>}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: G.ink, whiteSpace: "nowrap",
                overflow: "hidden", textOverflow: "ellipsis" }}>{h.name}</div>
              <div style={{ fontSize: 11, color: G.ink4, marginTop: 2, fontWeight: 500 }}>{h.date}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 24, fontWeight: 700, color: col, lineHeight: 1 }}>{h.score}</div>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase",
                color: col, marginTop: 1, opacity: 0.6 }}>/ 100</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ProfileTab({ profile, setProfile }) {
  const [saved, setSaved] = useState(false);
  const ALLERGIES = ["Peanuts","Tree nuts","Dairy","Gluten","Eggs","Soy","Shellfish","Fish","Sesame","Mustard"];
  const GOALS = ["Weight loss","Muscle gain","Heart health","Gut health","Low sugar","High protein","Low sodium","Keto","Energy"];
  const CONDITIONS = ["Diabetes","Hypertension","High cholesterol","PCOD/PCOS","Thyroid","Kidney disease","IBS/IBD","Pregnancy","Anaemia"];

  const toggle = (arr, item) => arr.includes(item) ? arr.filter(x => x !== item) : [...arr, item];

  const TagGroup = ({ items, field, onColor, offColor, onBg, offBg, onBorder }) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {items.map(item => {
        const on = (profile[field] || []).includes(item);
        return (
          <button key={item} onClick={() => setProfile(p => ({ ...p, [field]: toggle(p[field] || [], item) }))}
            style={{ fontSize: 12.5, padding: "5px 13px", borderRadius: 20, cursor: "pointer",
              fontFamily: "inherit", fontWeight: on ? 700 : 500, letterSpacing: ".01em",
              background: on ? onBg : G.surface2, color: on ? onColor : G.ink3,
              border: `1px solid ${on ? onBorder : G.border}`, transition: "all 0.15s" }}>
            {item}
          </button>
        );
      })}
    </div>
  );

  const save = () => {
    try { localStorage.setItem("nl_profile", JSON.stringify(profile)); } catch {}
    setSaved(true); setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div>
      <Card>
        {[
          ["Allergies & intolerances", ALLERGIES, "al", G.r0, G.rtint, "rgba(192,57,43,.25)"],
          ["Health goals", GOALS, "go", G.g0, G.gtint, "rgba(10,107,61,.25)"],
          ["Medical conditions", CONDITIONS, "co", G.a0, G.atint, "rgba(184,92,0,.25)"],
        ].map(([label, items, field, onColor, onBg, onBorder]) => (
          <div key={field} style={{ marginBottom: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase", color: G.ink4 }}>{label}</span>
              <div style={{ flex: 1, height: 1, background: G.border }} />
            </div>
            <TagGroup items={items} field={field} onColor={onColor} offColor={G.ink3} onBg={onBg} offBg={G.surface2} onBorder={onBorder} />
          </div>
        ))}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase", color: G.ink4 }}>Diet & notes</span>
            <div style={{ flex: 1, height: 1, background: G.border }} />
          </div>
          <textarea value={profile.no || ""} onChange={e => setProfile(p => ({ ...p, no: e.target.value }))}
            placeholder="E.g. vegetarian, lactose sensitive, lowering A1C…"
            style={{ width: "100%", border: `1px solid ${G.border}`, borderRadius: 10, padding: "11px 13px",
              fontFamily: "inherit", fontSize: 13, background: G.surface2, color: G.ink,
              resize: "vertical", minHeight: 80, outline: "none", lineHeight: 1.55 }} />
        </div>
      </Card>
      <button onClick={save} style={{ width: "100%", padding: 15,
        background: `linear-gradient(135deg,${G.g0},${G.g1},${G.g2})`, color: "#fff", border: "none",
        borderRadius: 10, fontFamily: "Georgia, serif", fontSize: 18, fontStyle: "italic", fontWeight: 600,
        cursor: "pointer", boxShadow: "0 8px 32px rgba(10,107,61,.25)" }}>
        Save my profile
      </button>
      {saved && <div style={{ textAlign: "center", fontSize: 12.5, fontWeight: 700, color: G.g1, padding: 9 }}>✓ Profile saved</div>}
    </div>
  );
}

// ── helpers ──────────────────────────────────────────────
function btnStyle() {
  return { display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "11px 10px",
    borderRadius: 10, border: `1px solid ${G.border}`, background: G.surface, cursor: "pointer",
    fontFamily: "inherit", fontSize: 13, fontWeight: 600, color: G.ink2 };
}

function resizeImg(dataUrl, maxPx, q) {
  return new Promise(res => {
    const img = new Image(); img.onload = () => {
      let w = img.width, h = img.height;
      if (w > maxPx || h > maxPx) { const s = maxPx / Math.max(w, h); w = Math.round(w * s); h = Math.round(h * s); }
      const c = document.createElement("canvas"); c.width = w; c.height = h;
      c.getContext("2d").drawImage(img, 0, 0, w, h);
      res(c.toDataURL("image/jpeg", q || 0.88));
    }; img.src = dataUrl;
  });
}

function parseJ(raw) {
  raw = raw.replace(/```json|```/g, "").trim();
  const a = raw.indexOf("{"); if (a < 0) throw new Error("No JSON in response");
  let depth = 0, end = -1;
  for (let i = a; i < raw.length; i++) { if (raw[i] === "{") depth++; else if (raw[i] === "}") { depth--; if (depth === 0) { end = i; break; } } }
  const chunk = end > 0 ? raw.substring(a, end + 1) : raw.substring(a);
  try { return JSON.parse(chunk); } catch {
    let fix = chunk;
    const op = (fix.match(/\[/g) || []).length - (fix.match(/\]/g) || []).length;
    const ob = (fix.match(/\{/g) || []).length - (fix.match(/\}/g) || []).length;
    if ((fix.match(/"/g) || []).length % 2 !== 0) fix += '"';
    for (let i = 0; i < op; i++) fix += "]";
    for (let i = 0; i < ob; i++) fix += "}";
    return JSON.parse(fix);
  }
}

// ── ROOT ──────────────────────────────────────────────────
const TABS = ["scan", "compare", "history", "profile"];
const TAB_ICONS = ["🔬", "⚖️", "📋", "👤"];
const TAB_LABELS = ["Scan", "Compare", "History", "Profile"];

export default function App() {
  const [tab, setTab] = useState("scan");
  const [profile, setProfile] = useLocalStorage("nl_profile", { al: [], go: [], co: [], no: "" });
  const [history, setHistory] = useLocalStorage("nl_history", []);
  const [histResult, setHistResult] = useState(null);

  const addHistory = useCallback(entry => {
    setHistory(h => [entry, ...h].slice(0, 20));
  }, [setHistory]);

  const viewHist = useCallback(h => {
    setHistResult(h);
    setTab("scan");
  }, []);

  return (
    <div style={{ maxWidth: 430, margin: "0 auto", minHeight: "100vh", display: "flex",
      flexDirection: "column", background: "#f0ede8", fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      WebkitFontSmoothing: "antialiased" }}>

      {/* HEADER */}
      <div style={{ background: G.ink, padding: "18px 20px 14px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -40, width: 200, height: 200, borderRadius: "50%",
          background: "radial-gradient(circle,rgba(19,184,102,.18) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 18, background: `linear-gradient(135deg,${G.g1},${G.g3})`,
                boxShadow: "0 4px 12px rgba(19,184,102,.4)" }}>🔬</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 600, color: "#fff", letterSpacing: "-0.4px" }}>
                Nutri<span style={{ color: G.g4, fontStyle: "italic" }}>Lens</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.07)",
              border: "1px solid rgba(255,255,255,.1)", borderRadius: 20, padding: "5px 11px" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: G.g4,
                boxShadow: `0 0 6px ${G.g4}`, animation: "pulse 2s infinite" }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.7)", letterSpacing: ".04em" }}>AI Powered</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.05)",
            border: "1px solid rgba(255,255,255,.08)", borderRadius: 10, padding: "9px 12px" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: G.g4,
              boxShadow: `0 0 8px rgba(22,214,117,.4)`, flexShrink: 0 }} />
            <span style={{ fontSize: 11.5, color: "rgba(255,255,255,.5)", fontWeight: 500 }}>
              Powered by Claude — ready to scan
            </span>
          </div>
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(.85)}}`}</style>
      </div>

      {/* CONTENT */}
      <div style={{ flex: 1, padding: "18px 16px 90px", overflowY: "auto" }}>
        {tab === "scan" && !histResult && <ScanTab profile={profile} onAddHistory={addHistory} />}
        {tab === "scan" && histResult && (
          <div>
            <ScanResult result={histResult.result} onReset={() => setHistResult(null)} />
          </div>
        )}
        {tab === "compare" && <CompareTab profile={profile} />}
        {tab === "history" && <HistoryTab history={history} onView={viewHist} />}
        {tab === "profile" && <ProfileTab profile={profile} setProfile={setProfile} />}
      </div>

      {/* NAV */}
      <div style={{ display: "flex", background: G.surface, borderTop: `1px solid ${G.border}`,
        position: "sticky", bottom: 0, zIndex: 30 }}>
        {TABS.map((t, i) => (
          <button key={t} onClick={() => { setTab(t); if (t === "scan") setHistResult(null); }}
            style={{ flex: 1, padding: "10px 4px 8px", border: "none", background: "none", cursor: "pointer",
              fontFamily: "inherit", fontSize: 10, fontWeight: 600, color: tab === t ? G.g1 : G.ink4,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
              position: "relative", letterSpacing: ".03em", textTransform: "uppercase" }}>
            {tab === t && <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
              width: 32, height: 2, background: `linear-gradient(90deg,${G.g2},${G.g4})`, borderRadius: "0 0 3px 3px" }} />}
            <div style={{ width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: 7, background: tab === t ? G.gtint : "transparent", fontSize: 16 }}>
              {TAB_ICONS[i]}
            </div>
            {TAB_LABELS[i]}
          </button>
        ))}
      </div>
    </div>
  );
}
