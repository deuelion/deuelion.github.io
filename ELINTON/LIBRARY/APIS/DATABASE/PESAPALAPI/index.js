let PESAPALAPI;
if (localStorage.getItem("Native")) {
    PESAPALAPI = "'https://script.google.com/macros/s/AKfycbxQ_u4e8yAcb3zEZOh_vCtveoA8kYMDqeHHfl3D94UO-kx14M6_3A_e6UBDTbD-sPw7_w/exec'";
} else {
    PESAPALAPI = "https://script.google.com/macros/s/AKfycbxQ_u4e8yAcb3zEZOh_vCtveoA8kYMDqeHHfl3D94UO-kx14M6_3A_e6UBDTbD-sPw7_w/exec";
};
export { PESAPALAPI };