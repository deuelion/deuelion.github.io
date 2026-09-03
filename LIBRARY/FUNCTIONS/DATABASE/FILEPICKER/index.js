export const FILEPICKER = (HOLDER,CALLBACK) => {
  CLICK(HOLDER, () => {
    const input = document.createElement("input");
    input.type = "file";
    input.style.display = "none";
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const rawPath = input.value || file.name;
        const path = rawPath.replace(/\\/g, "/");
        CALLBACK({
          name: file.name,
          type: file.type,
          size: file.size,
          path: path,
          data: reader.result,
          base64: reader.result.split(",")[1]
        });
        input.remove();
      };
      reader.onerror = (err) => {
        console.error("Failed to read file:", err);
        input.remove();
      };
      reader.readAsDataURL(file);
    };
    document.body.appendChild(input);
    input.click();
  });
};