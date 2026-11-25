
export const UPDATER = async () => {
    const CONNECTIONAPIS = "https://script.google.com/macros/s/AKfycbyY9vJAPO1fkxtxWXkVIqdb7qbwDKjMeit8JgE0Dj54KAg6coSCNVVGn9GbyqOLMBv6MA/exec";
    const BASEAPIS = "https://docs.google.com/spreadsheets/d/16xyQdW2hKnXD6Vlggfsuclt4ZVgfZ3xYPnUSI76r4VE/edit?usp=sharing";
    const BASENAMES = "VERSIONS";
    const CSSNAME = [
        "STYLES/Main.css",
        "STYLES/Classes.css",
        "STYLES/ID.css",
        "STYLES/Templates.css"
    ];
    const JSNAME = [
        "FUNCTIONS/Main.js",
        "FUNCTIONS/Classes.js",
        "FUNCTIONS/ID.js",
        "FUNCTIONS/Templates.js"
    ];
    const PAGENAME = [
        "PAGES/Main.js",
        "PAGES/Classes.js",
        "PAGES/ID.js",
        "PAGES/Templates.js"
    ];
    const CONSTANTSNAME = [
        "CONSTANTS/index.js",
        "CONSTANTS/links.js",
        "CONSTANTS/Run.js",
        "CONSTANTS/BackEnd.js",
        "CONSTANTS/MiniAssets.js",
        "CONSTANTS/Logo.js",
        "CONSTANTS/Tools.js"
    ];
    const CSS_URL = "https://deuelion.github.io/";
    const MAPS = [
        ...CSSNAME,
        ...JSNAME,
        ...PAGENAME,
        ...CONSTANTSNAME
    ];
    try {
        const RESULTS = await Promise.all(
            MAPS.map(async file => {
                const response = await fetch(CSS_URL + file);
                if (!response.ok) {
                    throw new Error(
                        `Failed to fetch ${file}: ${response.status}`
                    );
                }
                return {
                    filename: file,
                    content: await response.text()
                };
            })
        );
        RESULTS.forEach(item => {
            sessionStorage.setItem(
                item.filename,
                item.content
            );
        });
        const PROJECTS = [
            "Elinton",
            ...CSSNAME.map(file =>
                sessionStorage.getItem(file)
            )
        ];
        const DATA = {
            Action: "Update",
            spreadsheetUrl: BASEAPIS,
            sheetName: BASENAMES,
            ID: "Elinton01",
            Data: PROJECTS
        };
        const RESPONSE = await fetch(CONNECTIONAPIS, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(DATA)
        });
        if (!RESPONSE.ok) {
            throw new Error(
                `Update failed: ${RESPONSE.status}`
            );
        }
        const RESULT = await RESPONSE.json();
        const NOW = new Date().toISOString();
        localStorage.setItem("UPDATED", NOW);
        sessionStorage.clear();
        return RESULT;
    } catch (error) {
        console.error("Updater Error:", error);
        throw error;
    }
};