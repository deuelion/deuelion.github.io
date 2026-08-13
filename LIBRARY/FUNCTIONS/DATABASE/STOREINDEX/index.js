export const STOREINDEX = (DATABASE, STORE, DATA, CALLBACK) => {
    try {
        const request = indexedDB.open(DATABASE, 1);
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE)) {
                db.createObjectStore(STORE, {
                    keyPath: "id",
                    autoIncrement: true
                });
            };
        };
        request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction(STORE, "readwrite");
            const objectStore = transaction.objectStore(STORE);
            if (DATA.id !== undefined) {
                const putRequest = objectStore.put(DATA);
                putRequest.onsuccess = () => {
                    CALLBACK(DATA);
                    db.close();
                };
                putRequest.onerror = () => {
                    CALLBACK(putRequest.error.message);
                    db.close();
                };
                return;
            };
            const getAllRequest = objectStore.getAll();
            getAllRequest.onsuccess = () => {
                const existing = getAllRequest.result.find(item => {
                    const a = { ...item };
                    const b = { ...DATA };
                    delete a.id;
                    delete b.id;
                    return JSON.stringify(a) === JSON.stringify(b);
                });
                let saveRequest;
                if (existing) {
                    DATA.id = existing.id;
                    saveRequest = objectStore.put(DATA);
                } else {
                    saveRequest = objectStore.add(DATA);
                };
                saveRequest.onsuccess = () => {
                    CALLBACK(DATA);
                    db.close();
                };
                saveRequest.onerror = () => {
                    CALLBACK(saveRequest.error.message);
                    db.close();
                };
            };
            getAllRequest.onerror = () => {
                CALLBACK(getAllRequest.error.message);
                db.close();
            };
        };
        request.onerror = () => {
            CALLBACK(request.error.message);
        };
    } catch (error) {
        CALLBACK(error.message);
    };
};