const DISPLAY=(ELEMENT,DATA)=>{
    const BODY=document.querySelector("body");
    if (ELEMENT) {
        ELEMENT.innerHTML=DATA;
    } else {
        BODY.innerHTML=DATA;
    };
};
const INJECTCSS = (STYLES) => {
  const style = document.createElement("style");
  style.type = "text/css";
  style.textContent = STYLES;
  document.head.appendChild(style);
};