function doPost(e) {
  try {
    // Parse incoming JSON body
    const requestData = JSON.parse(e.postData.contents);
    const amount = requestData.amount;
    const email = requestData.email;
    const consumer_key = requestData.consumer_key;
    const consumer_secret = requestData.consumer_secret;
    const url = requestData.url;
    const description = requestData.description;
    const phone_number = requestData.phone_number;
    const first_name = requestData.first_name;
    const city = requestData.city;

    if (!amount || !email) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: "Amount and email are required" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Step 1: Request token
    const tokenUrl = "https://pay.pesapal.com/v3/api/Auth/RequestToken";
    const payload = {
      consumer_key: consumer_key,
      consumer_secret: consumer_secret
    };

    const tokenOptions = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };

    const tokenResponse = UrlFetchApp.fetch(tokenUrl, tokenOptions);
    const tokenData = JSON.parse(tokenResponse.getContentText());
    if (!tokenData.token) throw new Error("No token returned");
    const bearerToken = tokenData.token;

    // Step 2: Register IPN
    const ipnUrl = "https://pay.pesapal.com/v3/api/URLSetup/RegisterIPN";
    const ipnPayload = {
      url: url,
      ipn_notification_type: "GET"
    };

    const ipnOptions = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(ipnPayload),
      headers: { Authorization: "Bearer " + bearerToken },
      muteHttpExceptions: true
    };

    const ipnResponse = UrlFetchApp.fetch(ipnUrl, ipnOptions);
    const ipnData = JSON.parse(ipnResponse.getContentText());
    if (!ipnData.ipn_id) throw new Error("No IPN ID returned");
    const ipnId = ipnData.ipn_id;

    // Step 3: Create a unique order ID
    const uniqueOrderId = "order-" + new Date().getTime();

    // Step 4: Submit Order Request
    const orderUrl = "https://pay.pesapal.com/v3/api/Transactions/SubmitOrderRequest";
    const orderPayload = {
      id: uniqueOrderId,
      currency: "UGX",
      amount: amount,
      description: description,
      callback_url: url,
      notification_id: ipnId,
      billing_address: {
        email_address: email,
        phone_number: phone_number,
        country_code: "",
        first_name: first_name,
        middle_name: "",
        last_name: "",
        line_1: "",
        line_2: "",
        city: city,
        state: "",
        postal_code: "",
        zip_code: ""
      }
    };

    const orderOptions = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(orderPayload),
      headers: { Authorization: "Bearer " + bearerToken },
      muteHttpExceptions: true
    };

    const orderResponse = UrlFetchApp.fetch(orderUrl, orderOptions);
    const orderData = JSON.parse(orderResponse.getContentText());

    // Return JSON response
    return ContentService.createTextOutput(
      JSON.stringify(orderData)
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}