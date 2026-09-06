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

            finish(null);

        };

        request.onsuccess = () => {

            const db = request.result;

            if (!db.objectStoreNames.contains(STORE)) {

                db.close();

                finish(null);

                return;

            }

            const transaction = db.transaction(STORE, "readonly");

            const objectStore = transaction.objectStore(STORE);

            const getRequest = objectStore.getAll();

            getRequest.onsuccess = () => {

                const records = getRequest.result;

                db.close();

                finish(records);

            };

            getRequest.onerror = () => {

                db.close();

                finish(null);

            };

            transaction.onerror = () => {

                db.close();

                finish(null);

            };

        };

    } catch (error) {

        finish(null);

    }

};