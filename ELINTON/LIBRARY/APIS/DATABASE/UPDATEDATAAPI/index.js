let UPDATEDATAAPI;
if (localStorage.getItem("Native")) {
    UPDATEDATAAPI = "'https://script.google.com/macros/s/AKfycbyY9vJAPO1fkxtxWXkVIqdb7qbwDKjMeit8JgE0Dj54KAg6coSCNVVGn9GbyqOLMBv6MA/exec'";
} else {
    UPDATEDATAAPI = "https://script.google.com/macros/s/AKfycbyY9vJAPO1fkxtxWXkVIqdb7qbwDKjMeit8JgE0Dj54KAg6coSCNVVGn9GbyqOLMBv6MA/exec";
};
export { UPDATEDATAAPI };