export const PAYTOTA=(EMAIL,NAME,NUMBER,AMOUNT,CALLBACK)=>{
    const DATA={
        "email":EMAIL,
        "phone":NUMBER,
        "name":NAME,
        "price":AMOUNT
    };
    FETCH(PAYTOTAONEAPI,DATA,(Data)=>{
        SESSIONSTORE("PaymentLink",Data.checkout_url);
        WEBSITE(Data.checkout_url);
    });
};