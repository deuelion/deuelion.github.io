const CONNECTIONAPIS="https://script.google.com/macros/s/AKfycbyY9vJAPO1fkxtxWXkVIqdb7qbwDKjMeit8JgE0Dj54KAg6coSCNVVGn9GbyqOLMBv6MA/exec";
const BASEAPIS="https://docs.google.com/spreadsheets/d/16xyQdW2hKnXD6Vlggfsuclt4ZVgfZ3xYPnUSI76r4VE/edit?usp=sharing";
const BASENAMES="VERSIONS";
const PROJECTS=["Hello"];
const DATA={
    "Action":"Update",
    "spreadsheetUrl":BASEAPIS,
    "sheetName":BASENAMES,
    "ID":"Elinton01",
    "Data":PROJECTS
}
fetch(CONNECTIONAPIS,{
    method:"POST",
    headers: {
        "Content-Type": "text/plain;charset=utf-8"
    },
    body:JSON.stringify(DATA)
})
.then(res =>res.json())
.then(data =>{
    localStorage.setItem("Date",new Date())
})
.catch(error =>{
    console.log(error)
})