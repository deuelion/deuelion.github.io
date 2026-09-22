export const GROUP = (DATA,CALLBACK) => {
  let parsedData;
  try {
    parsedData = typeof data === "string" ? JSON.parse(DATA) : DATA;
  } catch {
    parsedData = [];
  };
  if (!Array.isArray(parsedData)) {
    CALLBACK([]);
    return;
  };
  const idMap = new Map();
  parsedData.forEach(item => {
    const id = item.ID;
    if (idMap.has(id)) {
      idMap.get(id).quantity += 1;
    } else {
      const newItem = { ...item, quantity: 1 };
      idMap.set(id, newItem);
    };
  });
  const finalArray = Array.from(idMap.values());
  CALLBACK(finalArray);
};