const CONNECTIONAPIS="https://script.google.com/macros/s/AKfycbyY9vJAPO1fkxtxWXkVIqdb7qbwDKjMeit8JgE0Dj54KAg6coSCNVVGn9GbyqOLMBv6MA/exec";
const BASEAPIS="https://docs.google.com/spreadsheets/d/16xyQdW2hKnXD6Vlggfsuclt4ZVgfZ3xYPnUSI76r4VE/edit?usp=sharing";
const BASENAMES="VERSIONS";
const DATA={
    "Action":"Update",
    "spreadsheetUrl":BASEAPIS,
    "sheetName":BASENAMES,
    "ID":"Elinton01",
    "Data":PROJECTS
}

const CSSNAME = ["Main.css","Classes.css","ID.css","Templates.css"];
const CSS_URL = "https://deuelion.github.io/STYLES/";
Promise.all(
    CSSNAME.map(file =>
        fetch(CSS_URL + file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${file}: ${response.status}`);
            }
            return response.text();
        })
        .then(css => ({
            filename: file,
            content: css
        }))
    )
)
.then(results => {
    results.forEach(item => {
        sessionStorage.setItem(item.filename, item.content);
    });
    sessionStorage.setItem("CSS_Date", new Date().toISOString());
})
.catch(error => {
    console.error("CSS Fetch Error:", error);
});


const PROJECTS=["Elinton",sessionStorage.getItem("Main.css"),sessionStorage.getItem("Classes.css"),sessionStorage.getItem("ID.css"),sessionStorage.getItem("Templates.css")];
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