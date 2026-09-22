export const PROTECT = () => {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  ["copy", "cut", "paste"].forEach((event) => {
    document.addEventListener(event, (e) => {
      e.preventDefault();
    });
  });
  document.addEventListener("selectstart", (e) => {
    e.preventDefault();
  });
  document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    if (
      (e.ctrlKey || e.metaKey) &&
      ["c", "x", "a", "u", "s", "p"].includes(key)
    ) {
      e.preventDefault();
    }
    if (
      e.key === "F12" ||
      ((e.ctrlKey || e.metaKey) && e.shiftKey && ["i", "j", "c"].includes(key))
    ) {
      e.preventDefault();
    }
  });
  document.addEventListener("dragstart", (e) => {
    e.preventDefault();
  });
  document.body.style.userSelect = "none";
  document.body.style.webkitUserSelect = "none";
  document.body.style.msUserSelect = "none";
};