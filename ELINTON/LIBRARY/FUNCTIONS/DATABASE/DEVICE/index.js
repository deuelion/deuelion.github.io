export const DEVICE = () => {
    const deviceInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screen: {
            width: screen.width,
            height: screen.height,
            availWidth: screen.availWidth,
            availHeight: screen.availHeight,
            colorDepth: screen.colorDepth,
            pixelDepth: screen.pixelDepth,
        },
        online: navigator.onLine,
        memory: navigator.deviceMemory ?? "Unknown",
        cores: navigator.hardwareConcurrency ?? "Unknown",
    };
    JSONIFICATION(deviceInfo,(Ddata)=>{
        LOCALSTORE("Device", Ddata);
    });
    return deviceInfo;
};