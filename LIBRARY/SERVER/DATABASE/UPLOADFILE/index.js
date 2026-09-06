export const UPLOADFILE=(NAME,BASEFILE,TYPE,CALLBACK)=>{
    const DATA = {
        id: "UPLOAD-001",
        fileName: NAME||"Upload.jpg",
        mimeType:TYPE||"image/jpeg",
        file: BASEFILE
    };
    FETCH(GOOGLEDRIVEAPI,DATA,(Data)=>{
        const HEADERS=["DATABASENAME","DATABASELINK","DATE","ACCESS","ADMIN"];
        const INFO=[Data.fileId,Data.fileUrl,new Date(),"Approved","Elite"];
        INSERTDATA(MAINCONNECTIONAPI,"UPLOADS",HEADERS,INFO,(InsBack)=>{
            CHECK(InsBack.error === false,()=>{
                CALLBACK(Data);
            });
        });
    });
};