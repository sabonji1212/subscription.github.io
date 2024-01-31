const mycheckbox = document.getElementById("mycheckbox");
const visa = document.getElementById("visabtn");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const submit = document.getElementById("submit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");
const choose = document.getElementById("choose");



submit.onclick = function(){

    if(mycheckbox.checked){
        subresult.textContent = " You Are Subscribed!";
        choose.textContent = "";
        if(visa.checked){paymentresult.textContent = "you are paying using visa"}
        if(mastercard.checked){paymentresult.textContent = "you are paying using mastercard"}
        if(paypal.checked){paymentresult.textContent = "you are paying using paypal"}




    }else{
        subresult.textContent = "You Are Not Subscribed "; 
        choose.textContent = "Subscribe And Select A Payment Methode";
    }
    














}