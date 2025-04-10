
// Spark Router — дихання свідомості
const states = [
  "spark.html",
  "transcend.html",
  "origin.html",
  "meta.html",
  "zen.html",
  "drift.html"
];

let current = 0;
let paused = false;

function nextState() {
  if (paused) return;
  current = (current + 1) % states.length;
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = states[current];
  }, 2000);
}

setTimeout(() => {
  document.body.style.transition = "opacity 2s ease";
  document.body.style.opacity = "0";
}, 18000);

setTimeout(() => {
  if (!paused) nextState();
}, 20000);

// При дотику — затримка переходу
["mousemove", "keydown", "touchstart"].forEach(event => {
  window.addEventListener(event, () => {
    paused = true;
    setTimeout(() => { paused = false; nextState(); }, 30000);
  });
});
