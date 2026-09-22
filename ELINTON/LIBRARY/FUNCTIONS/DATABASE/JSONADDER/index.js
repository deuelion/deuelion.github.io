export const JSONADDER = (DATA,NEWDATA,CALLBACK) => {
    try {
        let CurrentData =Array.isArray(DATA)?DATA:[DATA];
        let AddedData =Array.isArray(NEWDATA)?NEWDATA:[NEWDATA];
        const Result = [...CurrentData,...AddedData];
        CALLBACK(Result);
    } catch {
        CALLBACK([]);
    };
};