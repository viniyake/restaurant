function generateReceipt() {
    let item = document.getElementById("foodItem").value;
    let receiptDiv = document.getElementById("receipt");
    receiptDiv.innerHTML = `<h3>Receipt</h3><p>Item Ordered: ${item}</p><p>Total: $10.00</p>`;
}
