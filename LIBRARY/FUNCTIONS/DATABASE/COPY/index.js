export const COPY = async (DATA) => {
  try {
    await navigator.clipboard.writeText(DATA);
    console.log("Copied to clipboard");
  } catch (err) {
    console.log("Failed to copy:", err);
  };
};