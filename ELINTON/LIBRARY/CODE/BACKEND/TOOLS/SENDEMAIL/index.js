function doPost(e) {
  
    var jsonData = JSON.parse(e.postData.contents);
    
    var recipientEmail = jsonData.recipientEmail;
    var subject = jsonData.subject;
    var body = jsonData.body;
    
    try {

        GmailApp.sendEmail(recipientEmail, subject, body);
  
        var response = {
          status: "success",
          message: "Email sent successfully."
        };
        
        return ContentService.createTextOutput(JSON.stringify(response))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
       
      var errorResponse = {
        status: "error",
        message: "Failed to send email: " + error.toString()
      };
        
      return ContentService.createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
    }
}
