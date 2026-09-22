export const JSONREMOVER = (DATA,ITEM,CALLBACK) => {
    try {
        const CurrentData =Array.isArray(DATA)?DATA:[DATA];
        const Result =CurrentData.filter(data => {
            return JSON.stringify(data) !==JSON.stringify(ITEM);
        });
        CALLBACK(Result);
    } catch {
        CALLBACK([]);
    };
};