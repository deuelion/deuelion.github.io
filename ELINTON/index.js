const TITLE = document.title;
localStorage.setItem("Activers","");
localStorage.setItem("AppName",TITLE);
const RUNNER=()=>{
  if (localStorage.getItem("Native")) {
    if (TITLE === "EliteBuilder" ) {
      const script = document.createElement("script");
      script.type = "module";
      script.defer=true;
      script.src = "./CONNECTION/Direct.js";
      document.head.appendChild(script);
    } else {
      const script = document.createElement("script");
      script.type = "module";
      script.defer=true;
      script.src = "https://deuelion.github.io/CONNECTION/Direct.js";
      document.head.appendChild(script);
    };
  } else {
    if (TITLE === "EliteBuilder" ) {
      const script = document.createElement("script");
      script.type = "module";
      script.defer=true;
      script.src = "./CONNECTION/Live.js";
      document.head.appendChild(script);
    } else {
      const script = document.createElement("script");
      script.type = "module";
      script.defer=true;
      script.src = "https://deuelion.github.io/CONNECTION/Live.js";
      document.head.appendChild(script);
    };
  };
};  
RUNNER();