let ELITEEMAILSENDER;
if (localStorage.getItem("Native")) {
  ELITEEMAILSENDER=" 'https://script.google.com/macros/s/AKfycbwgaeEzmZ6ACKgOIwZWix0Gum_Ciip-WVxCoqLx0fknHjdXJwLCpwA3tZqwgP4VHuIR/exec' ";
} else {
  ELITEEMAILSENDER="https://script.google.com/macros/s/AKfycbwgaeEzmZ6ACKgOIwZWix0Gum_Ciip-WVxCoqLx0fknHjdXJwLCpwA3tZqwgP4VHuIR/exec";
};
export{ELITEEMAILSENDER};