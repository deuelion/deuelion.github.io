export const GETINDEX = (DATABASE, STORE, CALLBACK) => {
    let completed = false;
    const finish = (data) => {
        if (completed) return;
        completed = true;
        CALLBACK(data);
    };
    try {
        const request = indexedDB.open(DATABASE);
        request.onerror = () => {
            finish([]);
        };
        request.onsuccess = () => {
            const db = request.result;
            if (!db.objectStoreNames.contains(STORE)) {
                db.close();
                finish([]);
                return;
            };
            const transaction = db.transaction(STORE, "readonly");
            const objectStore = transaction.objectStore(STORE);
            const getRequest = objectStore.getAll();
            getRequest.onsuccess = () => {
                const records = getRequest.result || [];
                db.close();
                if (records.length > 0 && Array.isArray(records[0].Data)) {
                    finish(records[0].Data);
                } else {
                    finish([]);
                };
            };
            getRequest.onerror = () => {
                db.close();
                finish([]);
            };
            transaction.onerror = () => {
                db.close();
                finish([]);
            };
        };
    } catch (error) {
        finish([]);
    };
};