const STATUS="Active";
const TITLE = document.title;
const REJECTED="EliteBuilder";
let Env;
if (localStorage.getItem("ENV") === "ANDROID" ) {
  Env="Mobile Application";
} else {
  if (localStorage.getItem("ENV") === "DESKTOP") {
    Env="Desktop Application";  
  } else {
    Env="Website";
  };
};
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
const UPDATES=()=>{
  let Date="Soon";
  const Body=document.querySelector("body");
  Body.innerHTML=`
    <div style="position:absolute;width:100%;height:100%;background:transparent;overflow:hidden;overflowY:auto;">
      <br>
      <h1 style="color:red;font-size:25px;">ATTENTION</h1>
      <br>
      <hr style="border:1px solid brown;">
      <br>
      <p style="width:90%;text-align:left;margin-left:5%;">This is a Public Announcement That The Services of This ${Env||"Website"} are Temporarily Off line Undergoing Maintaince and Updates.</p>
      <br>
      <h1 style="color:teal;font-size:20px;" >APOLOGIES</h1>
      <br>
      <p style="width:90%;text-align:left;margin-left:5%;">Sorry For Any Inconviences Caused.</p>
      <br>
      <h1 style="color:orange;font-size:20px;">EXPECTATIONS</h1>
      <br>
      <p style="width:90%;text-align:left;margin-left:5%;">The ${Env},Will Be Back Online On</p>
      <br> 
      <p><b style="color:forestgreen;font-size:23px;text-align:center;">${Date}.</b></p>
      <br>
      <h1>ELITE DEVELOPER TEAM</h1>
      <br>
      <p>All Rights Reserved.</p>
      <br>
      <hr style="border:1px solid brown;">
      <br>
      <a style="color:white;" href="mailto:eliterobustontology@gmail.com">Contact Us</a><br><br><br><br>
    <div>
  `;
}; 
const HOSTEXPIREDMESSAGE=`
  <br><br>
  <h1 style="color:red;font-size:25px;">ATTENTION</h1>
  <br>
  <p style="text-align:left;width:99%;margin:1%;">The Hosting To This ${Env},Has Expired.</p>
  <p style="text-align:left;width:99%;margin:1%;">No More Access To The Server Until.</p>
  <br>
  <h3>Please Pay To Get Back Online.</h3>
  <br>
  <button style="width:90%;height:50px;color:white;border-radius:20px;background:green;">PAY</button>
  <br><br>
`;
localStorage.setItem("ExpiredMessage",HOSTEXPIREDMESSAGE);
if (localStorage.getItem("Expired")) {
  DISPLAY("",HOSTEXPIREDMESSAGE);RUNNER();
} else {
  if (STATUS === "Active") {
    RUNNER();
  }else{
    UPDATES();
  };
};