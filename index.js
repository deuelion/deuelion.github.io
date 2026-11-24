const CONNECTIONAPI="https://script.google.com/macros/s/AKfycbwVVCXggozy1TROqhSoKGG0jJ5UKVgGI-IhockoG-veI9wOhqavoYe8sTV4YyC0r2KwKQ/exec";
const BASEAPI="https://docs.google.com/spreadsheets/d/16xyQdW2hKnXD6Vlggfsuclt4ZVgfZ3xYPnUSI76r4VE/edit?usp=sharing";
const BASENAME="VERSIONS";
const DATA={
    "spreadsheetUrl":BASEAPI,
    "sheetName":BASENAME
}
fetch(CONNECTIONAPI,{
    method:"POST",
    body:JSON.stringify(DATA)
})
.then(res =>res.json())
.then(data =>{
    console.log(data)
} )
.catch(error =>{
    console.log(error)
})