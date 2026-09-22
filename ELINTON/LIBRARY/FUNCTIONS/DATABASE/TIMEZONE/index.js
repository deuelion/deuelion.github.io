export const TIMEZONE = () => {
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offsetMinutes = new Date().getTimezoneOffset();
    const offsetHours = -offsetMinutes / 60;
    const data = {
      timeZone,
      offsetHours,
      offsetMinutes: -offsetMinutes,
      detectedAt: new Date().toISOString()
    };
    localStorage.setItem("USER_TIMEZONE", JSON.stringify(data));
    localStorage.setItem("TIMEZONE", JSON.stringify(data.timeZone));
    return data;
  } catch (error) {
    console.error("Timezone detection failed:", error);
  };
};