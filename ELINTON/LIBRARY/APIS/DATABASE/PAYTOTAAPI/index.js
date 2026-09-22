let PAYTOTAAPI;
if (localStorage.getItem("Native")) {
    PAYTOTAAPI = "'https://script.google.com/macros/s/AKfycbwxIUwkkXgPoj6xng1SI1h420S63hLCZ3eSoBPIoGSeOuiAy-rm8AWVvdpVYAbYbqiY/exec'";
} else {
    PAYTOTAAPI = "https://script.google.com/macros/s/AKfycbwxIUwkkXgPoj6xng1SI1h420S63hLCZ3eSoBPIoGSeOuiAy-rm8AWVvdpVYAbYbqiY/exec";
};
export { PAYTOTAAPI };