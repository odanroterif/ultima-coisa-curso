const url = document.querySelector("#url");
const urlButton = document.querySelector("#btn");
const qrcode = document.querySelector('#qr');



urlButton.addEventListener("click",QRgenerate);


function QRgenerate()
{
    qrcode.innerHTML = "";
    
    if(url.value !== ""){
        const qr = new QRCode(qrcode, {
            text: url.value,
            width: 300,
            height: 300,
            colorDark : "#7e7e7e",
            colorLight : "rgba(0,0,0,0)",                    
        });           
    }

    url.value = "";
}
