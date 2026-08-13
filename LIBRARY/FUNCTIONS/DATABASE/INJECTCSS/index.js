export const INJECTCSS = (STYLES) => {
  const style = document.createElement("style");
  style.type = "text/css";
  style.textContent = STYLES;
  document.head.appendChild(style);
};