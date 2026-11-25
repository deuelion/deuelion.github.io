
import { ICONLOADER } from "./ASSETS/Icons.js";
import { PROJECTLOADER } from "./CONNECTION/index.js";
import { UPDATER } from "./Update.js";
window.UPDATER = UPDATER;window.ICONLOADER = ICONLOADER;
window.PROJECTLOADER = PROJECTLOADER;
const CONNECTIONAPI ="https://script.google.com/macros/s/AKfycbwVVCXggozy1TROqhSoKGG0jJ5UKVgGI-IhockoG-veI9wOhqavoYe8sTV4YyC0r2KwKQ/exec";
const BASEAPI ="https://docs.google.com/spreadsheets/d/16xyQdW2hKnXD6Vlggfsuclt4ZVgfZ3xYPnUSI76r4VE/edit?usp=sharing";
const BASENAME = "VERSIONS";
const TARGET_ID = "Elinton01";
const DATA = {
    spreadsheetUrl: BASEAPI,
    sheetName: BASENAME
};
async function LOAD_DATA() {
    try {
        const response = await fetch(CONNECTIONAPI, {
            method: "POST",
            body: JSON.stringify(DATA)
        });
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const result = await response.json();

        if (!Array.isArray(result) || result.length === 0) {
            throw new Error("No spreadsheet data received");
        }
        const HEADERS = Object.keys(result[0]);
        const ALLDATA = [...result].sort((a, b) =>
            String(a.ID ?? a.id ?? "").localeCompare(
                String(b.ID ?? b.id ?? ""),
                undefined,
                { numeric: true }
            )
        );
        const MATCHING_DATA = ALLDATA.find(item =>
            String(item.ID ?? item.id) === String(TARGET_ID)
        );
        if (!MATCHING_DATA) {
            console.warn("Matching ID not found:", TARGET_ID);
            return null;
        }
        HEADERS.forEach(header => {
            localStorage.setItem(header,MATCHING_DATA[header] == null? "": String(MATCHING_DATA[header]));
            localStorage.setItem("Native","True");
            UPDATER();PROJECTLOADER();ICONLOADER();
        });
        return MATCHING_DATA;
    } catch (error) {
        console.error("Loading Error:", error);
        return null;
    }
};
LOAD_DATA();