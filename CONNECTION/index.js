export const PROJECTLOADER = () => {

    const CONNECTIONAPIS = "https://script.google.com/macros/s/AKfycbyY9vJAPO1fkxtxWXkVIqdb7qbwDKjMeit8JgE0Dj54KAg6coSCNVVGn9GbyqOLMBv6MA/exec";

    const BASEAPIS = "https://docs.google.com/spreadsheets/d/16xyQdW2hKnXD6Vlggfsuclt4ZVgfZ3xYPnUSI76r4VE/edit?usp=sharing";

    const BASENAMES = localStorage.getItem("ENV");
    const STOREID = localStorage.getItem("ADMIN");

    if (!STOREID || !BASENAMES) {
        console.error("ADMIN or ENV not found in Local Storage");
        return;
    }

    const DATA = {
        spreadsheetUrl: BASEAPIS,
        sheetName: BASENAMES
    };

    const PAGEHEADERS = [
        "PAGEONE", "PAGETWO", "PAGETHREE", "PAGEFOUR",
        "PAGEFIVE", "PAGESIX", "PAGESEVEN", "PAGEEIGHT",
        "PAGENINE", "PAGETEN", "PAGEELEVEN", "PAGETWELVE",
        "PAGETHIRTEEN", "PAGEFOURTEEN", "PAGEFIFTEEN",
        "PAGESIXTEEN", "PAGESEVENTEEN", "PAGEEIGHTEEN",
        "PAGENINETEEN", "PAGETWENTY"
    ];

    const STYLEHEADERS = [
        "STYLEONE",
        "STYLETWO",
        "STYLETHREE"
    ];

    return fetch(CONNECTIONAPIS, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(DATA)
    })

    .then(res => {
        if (!res.ok) {
            throw new Error("Failed to fetch spreadsheet");
        }

        return res.json();
    })

    .then(data => {

        const ROWS = Array.isArray(data)
            ? data
            : data.data;

        if (!Array.isArray(ROWS) || ROWS.length === 0) {
            throw new Error("No spreadsheet records found");
        }

        const MATCHED = ROWS.find(row =>
            String(row.ID ?? row.id ?? "").trim() ===
            String(STOREID).trim()
        );

        if (!MATCHED) {
            console.warn("No matching Store ID found:", STOREID);
            return null;
        }

        // Collect all 20 pages together
        const PROJECTS = Object.fromEntries(
            PAGEHEADERS.map(header => [
                header,
                MATCHED[header] ?? ""
            ])
        );

        // Collect all 3 styles together
        const PROJECTSCSS = Object.fromEntries(
            STYLEHEADERS.map(header => [
                header,
                MATCHED[header] ?? ""
            ])
        );

        // Save project pages
        localStorage.setItem(
            "PROJECTS",
            JSON.stringify(PROJECTS)
        );

        // Save project styles
        localStorage.setItem(
            "PROJECTSCSS",
            JSON.stringify(PROJECTSCSS)
        );

        // Save remaining information separately
        localStorage.setItem(
            "NAME",
            MATCHED.NAME ?? ""
        );

        localStorage.setItem(
            "ACCESS",
            MATCHED.ACCESS ?? ""
        );

        return {
            PROJECTS,
            PROJECTSCSS
        };

    })
    .catch(error => {
        console.error("PROJECT LOADER ERROR:", error);
        return null;
    });
};