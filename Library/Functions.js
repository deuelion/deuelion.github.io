const DISPLAY=(HOLDER,DATA)=>{
    const BODIER=document.querySelector("body");
    if (HOLDER) {
        HOLDER.innerHTML=DATA;
    } else {
        BODIER.innerHTML=DATA;
    };
};
const INJECTCSS = (STYLES) => {
  const style = document.createElement("style");
  style.type = "text/css";
  style.textContent = STYLES;
  document.head.appendChild(style);
};