function doGet(e) {
  return ContentService
    .createTextOutput("GET request received")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    Logger.log(JSON.stringify(data));

    return ContentService
      .createTextOutput(
        JSON.stringify({
          success: true,
          message: "POST request received",
          data: data
        })
      )
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("Error in doPost: " + error.message);

    return ContentService
      .createTextOutput(
        JSON.stringify({
          success: false,
          error: error.message
        })
      )
      .setMimeType(ContentService.MimeType.JSON);
  }
}