export const DATETODAY=(CALLBACK)=>{
    const now = new Date();
    console.log(`Date: ${now.toLocaleDateString()}`);
    console.log(`Day: ${now.toLocaleDateString('en-US', { weekday: 'long' })}`);
    console.log(`Time: ${now.toLocaleTimeString()}`);
    const futureDate = new Date(now);
    futureDate.setDate(now.getDate());
    const result = {
        date: futureDate.toLocaleDateString(),
        day: futureDate.toLocaleDateString('en-US', { weekday: 'long' }),
        time: futureDate.toLocaleTimeString()
    };
    CALLBACK(result);
};