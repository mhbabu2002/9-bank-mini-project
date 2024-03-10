document.getElementById("submitBtn").addEventListener('click',function (){
    document.getElementById("login").style.display = "none";
    document.getElementById("transaction-area").style.display = "block"
});

document.getElementById("deposit-button").addEventListener('click', function(){
    const depositInputNum = inputAmount("deposit-count");
    updateSpanText("current-deposit", depositInputNum);
    updateSpanText("current-balance",depositInputNum);
    document.getElementById('deposit-count').value = "";
});
document.getElementById("withdraw-button").addEventListener('click', function(){
    const withdrawInputNum = inputAmount("withdraw-count");
    updateSpanText("current-withdraw", withdrawInputNum);
    updateSpanText("current-balance",withdrawInputNum * -1);
    document.getElementById('withdraw-count').value = "";
})
function inputAmount(id){
    const input = document.getElementById(id).value;
    const inputNum = parseFloat(input);
    return inputNum;
}
function updateSpanText(id,depositInputNum){
    const current = document.getElementById(id).innerText;
    const currentNum = parseFloat(current);
    const total = depositInputNum + currentNum;
    document.getElementById(id).innerText = total;
}