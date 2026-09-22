export const OPERATINGSYSTEM = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let os = "Unknown OS";
    let deviceType = "Unknown Device";
    let deviceName = "Unknown Device";
    if (/windows phone/i.test(userAgent)) {
        os = "Windows Phone";
        deviceType = "Mobile";
    } 
    else if (/win/i.test(userAgent)) {
        os = "Windows";
        deviceType = "Desktop";
    } 
    else if (/android/i.test(userAgent)) {
        os = "Android";
        deviceType = /mobile/i.test(userAgent) ? "Mobile" : "Tablet";
        if (/samsung/i.test(userAgent)) deviceName = "Samsung Device";
        else if (/huawei/i.test(userAgent)) deviceName = "Huawei Device";
        else if (/xiaomi/i.test(userAgent)) deviceName = "Xiaomi Device";
        else deviceName = "Android Device";
    } 
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        os = "iOS";
        if (/iPhone/.test(userAgent)) {
            deviceType = "Mobile";
            deviceName = "iPhone";
        } 
        else if (/iPad/.test(userAgent)) {
            deviceType = "Tablet";
            deviceName = "iPad";
        } 
        else {
            deviceType = "Mobile";
            deviceName = "iOS Device";
        }
    } 
    else if (/Macintosh/i.test(userAgent)) {
        os = "MacOS";
        deviceType = "Desktop";
        deviceName = "Mac";
    } 
    else if (/Linux/i.test(userAgent)) {
        os = "Linux";
        deviceType = "Desktop";
        deviceName = "Linux Device";
    }
    const deviceData = {
        os,
        deviceType,
        deviceName,
        userAgent,
        detectedAt: new Date().toISOString()
    };
    localStorage.setItem("OperatingSystem", JSON.stringify(deviceData));
    return deviceData;
};