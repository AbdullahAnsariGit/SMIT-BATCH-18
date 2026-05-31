import React, { useEffect, useRef, useState } from "react";

export default function FullscreenQuizApp() {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      id: 2,
      question: "Which language is used for React?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },
    {
      id: 3,
      question: "2 + 2 = ?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      id: 4,
      question: "React is developed by?",
      options: ["Google", "Meta", "Microsoft", "Apple"],
      answer: "Meta",
    },
  ];

  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60);
  const [cancelled, setCancelled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [warning, setWarning] = useState("");

  const devToolsOpen = useRef(false);

  // =======================
  // FULLSCREEN START
  // =======================
  const enterFullScreen = async () => {
    try {
      const el = document.documentElement;

      if (el.requestFullscreen) {
        await el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) {
        await el.webkitRequestFullscreen();
      } else if (el.msRequestFullscreen) {
        await el.msRequestFullscreen();
      }
    } catch (err) {
      console.log("Fullscreen blocked");
    }
  };

  useEffect(() => {
    enterFullScreen();
  }, []);

  // =======================
  // CANCEL QUIZ
  // =======================
  const cancelQuiz = (reason) => {
    if (cancelled || submitted) return;

    setCancelled(true);
    console.log("Cancelled:", reason);
  };

  const showWarning = (msg) => {
    setWarning(msg);
    setTimeout(() => setWarning(""), 2500);
  };

  // =======================
  // TIMER
  // =======================
  useEffect(() => {
    if (cancelled || submitted) return;

    if (timeLeft <= 0) {
      submitQuiz();
      return;
    }

    const t = setInterval(() => {
      setTimeLeft((p) => p - 1);
    }, 1000);

    return () => clearInterval(t);
  }, [timeLeft, cancelled, submitted]);

  // =======================
  // TAB SWITCH / BLUR
  // =======================
  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) cancelQuiz("Tab switch");
    };

    const onBlur = () => cancelQuiz("Window blur");

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("blur", onBlur);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  // =======================
  // EXIT FULLSCREEN
  // =======================
  useEffect(() => {
    const onFullscreenChange = () => {
      if (!document.fullscreenElement) {
        cancelQuiz("Exited fullscreen");
      }
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  // =======================
  // COPY / SELECT / RIGHT CLICK
  // =======================
  useEffect(() => {
    const block = (e) => {
      e.preventDefault();
      showWarning("Action blocked");
    };

    document.addEventListener("copy", block);
    document.addEventListener("cut", block);
    document.addEventListener("contextmenu", block);
    document.addEventListener("selectstart", block);

    return () => {
      document.removeEventListener("copy", block);
      document.removeEventListener("cut", block);
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("selectstart", block);
    };
  }, []);

  // =======================
  // KEY SHORTCUT BLOCK
  // =======================
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "F12") cancelQuiz("Devtools");

      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i")
        cancelQuiz("Inspect");

      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j")
        cancelQuiz("Console");

      if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
        showWarning("Blocked");
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // =======================
  // DEVTOOLS CHECK (basic)
  // =======================
  useEffect(() => {
    const id = setInterval(() => {
      const open =
        window.outerWidth - window.innerWidth > 160 ||
        window.outerHeight - window.innerHeight > 160;

      if (open && !devToolsOpen.current) {
        devToolsOpen.current = true;
        cancelQuiz("Devtools detected");
      }
    }, 1000);

    return () => clearInterval(id);
  }, []);

  // =======================
  // SUBMIT QUIZ
  // =======================
  const submitQuiz = () => {
    let s = 0;

    questions.forEach((q) => {
      if (answers[q.id] === q.answer) s++;
    });

    setScore(s);
    setSubmitted(true);
  };

  const handleAnswer = (id, val) => {
    setAnswers((p) => ({ ...p, [id]: val }));
  };

  // =======================
  // SCREENS
  // =======================
  if (cancelled) {
    return (
      <div style={{ textAlign: "center", padding: 50, color: "red" }}>
        <h1>Quiz Cancelled</h1>
        <p>Suspicious activity detected</p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: 50 }}>
        <h1>Quiz Completed</h1>
        <h2>
          Score: {score} / {questions.length}
        </h2>
      </div>
    );
  }

  // =======================
  // MAIN UI
  // =======================
  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: 20,
        userSelect: "none",
      }}
    >
      {warning && (
        <div style={{ background: "#ffdddd", padding: 10 }}>⚠ {warning}</div>
      )}

      <h1>Fullscreen Quiz</h1>

      <h3>Time Left: {timeLeft}s</h3>

      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: 20 }}>
          <h3>
            {q.id}. {q.question}
          </h3>

          {q.options.map((opt) => (
            <label key={opt} style={{ display: "block" }}>
              <input
                type="radio"
                name={q.id}
                checked={answers[q.id] === opt}
                onChange={() => handleAnswer(q.id, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <button onClick={submitQuiz}>Submit</button>
    </div>
  );
}
