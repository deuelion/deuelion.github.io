export const NAWERIPAYMENT=(HOLDER,NAME,NUMBER,EMAIL,SELLING,DETAILS,TOTAL)=>{
    //https://mybiz.ug/success?paymentStatus=successful&internalRef=pictona-106346634434366411&orderReference=1788418996904
    DISPLAY(HOLDER,`
        <form id="PaymentForm" action="https://wallet.naweriindustries.com/endpoints/payment-endpoint.php" method="post">
            <input type="hidden" name="customerName" value="${NAME}">
            <input type="hidden" name="customerPhone" value="${NUMBER}">
            <input type="hidden" name="customerEmail" value="${EMAIL}">
            <input type="hidden" name="itemId" value="INV-1029">
            <input type="hidden" name="orderCurrency" value="UGX">
            <input type="hidden" name="merchantKey" value="kGsTfPOn4RxVGiASzPxtSc1DxODYmx">
            <input type="hidden" name="customerAddress" value="${localStorage.getItem("TIMEZONE")}">
            <input type="hidden" name="itemName" value="${SELLING}">
            <input type="hidden" name="orderDate" value="${Date.now()}">
            <input type="hidden" name="orderReference" value="${Date.now()}">
            <input type="hidden" name="successUrl" value="https://eliterobustontologygroup.github.io/success.html">
            <input type="hidden" name="failedUrl" value="https://eliterobustontologygroup.github.io/fail.html">
            <label style="display:none;" class="label">Invoice Quantity</label>
            <input style="display:none;" class="input" type="number" readonly value="1">
            <label style="display:none;" class="label">Total Payable</label>
            <input style="display:none;" class="input" id="payAmount" value="${TOTAL}">
            <input style="display:none;" type="hidden" name="totalPrice" value="${TOTAL}">
            <div style="display:none;" class="summary">
                <div>
                    <h4>Outstanding Balance</h4>
                    <div class="small">Auto-calculated from invoice</div>
                </div>
                <strong>UGX ${TOTAL}</strong>
            </div>
            <label style="display:none;" class="label">Description</label>
            <textarea style="display:none;" class="input" rows="3" readonly>${DETAILS}</textarea>
            <button id="PayButton" class="btn" name="intNaweri">ELITE PAY</button>
        </form> 
    `);
    const style=`
        input{
            display:none;
        }
        #PayButton{
            display:block;
            width:95%;
            height:50px;
            background:forestgreen;
            margin:2%;
            border-radius:10px;
            color:white;
        }
    `;
    INJECTCSS(style);
};