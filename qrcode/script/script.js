const url = document.querySelector("#url");
const urlButton = document.querySelector("#btn");
const qrcode = document.querySelector('#qr');



urlButton.addEventListener("click",QRgenerate);


function QRgenerate()
{
    qrcode.innerHTML = "";
    
    const qr = new QRCode(qrcode, {
        text: url.value,
        width: 300,
        height: 300,
        colorDark : "gray",
        colorLight : "#ffffff",        
    });    
    qrcode.style.display = "block";
    url.value = "";
}