export const RANDOMCODE = (CALLBACK) => {
  const code = Math.floor(100000 + Math.random() * 900000);
  if (typeof callback === "function") {
    CALLBACK(code);
  };
};