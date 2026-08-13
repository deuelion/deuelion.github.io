export const PARTISION = (TEXT,CALLBACK) => {
  if (typeof TEXT !== 'number' || !Number.isFinite(TEXT)) {
    console.log("Input must be a valid number.");
    CALLBACK('');
    return;
  };
  const formatted = TEXT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  if (typeof callback === 'function') {
    CALLBACK(formatted);
  };
};