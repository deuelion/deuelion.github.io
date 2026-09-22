let GOOGLEDRIVETHUMBNAILAPI;
if (localStorage.getItem("Native")) {
    GOOGLEDRIVETHUMBNAILAPI = "'https://drive.google.com/thumbnail?id='";
} else {
    GOOGLEDRIVETHUMBNAILAPI = "https://drive.google.com/thumbnail?id=";
};
export { GOOGLEDRIVETHUMBNAILAPI };