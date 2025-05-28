const url = document.querySelector("#url");
const urlButton = document.querySelector("#btn");
const qrcode = document.querySelector('#qr');



urlButton.addEventListener("click", QRgenerate);
url.addEventListener("keydown", (event) => { if (event.key === 'Enter') { QRgenerate() } });


function QRgenerate() {
    qrcode.innerHTML = "";

    const identifier = '[a-zA-Z0-9]'
    let indent = 0

    if (url.value !== "") {
        for (var c = 0; c < url.value.length; c++) {            

            url.value[c].match(identifier) === false ? indent = 0 : indent++;

            if (indent === 0 && c === url.length - 1) {
                const qr = new QRCode(qrcode, {
                    text: url.value,
                    width: 300,
                    height: 300,
                    colorDark: "#7e7e7e",
                    colorLight: "rgba(0,0,0,0)",
                });
            } else {
                alert("Please enter a valid URL");
                break;
            }
        }
    }

    url.value = "";
}
