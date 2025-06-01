const url = document.querySelector("#url");
const urlButton = document.querySelector("#btn");
const qrcode = document.querySelector('#qr');


urlButton.addEventListener("click", QRgenerate);
url.addEventListener("keydown", (event) => { if (event.key === 'Enter') { QRgenerate() } });

function QRgenerate() {
    qrcode.innerHTML = "";

    var verify = 0;

    if (/[À-ž]/.test(url.value)) {
        verify = 1;
        alert("FRANCISCO NÃO ACEITA CARACTER ESPECIAL");
    }

    if (url.value !== "" && verify === 0) {
        const qr = new QRCode(qrcode, {
            text: url.value,
            width: 300,
            height: 300,
            colorDark: "#7e7e7e",
            colorLight: "rgba(0,0,0,0)",
        });
    }
    url.value = "";
}
