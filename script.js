document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.querySelector('.btn-generate');
    const cleanBtn = document.querySelector('.btn-clean');
    const downloadBtn = document.querySelector('.btn-download');
    const inputUrl = document.querySelector('.url');
    const inputSize = document.querySelector('.size');
    const inputCharSet = document.querySelector('.charset-source');
    const inputEye = document.querySelector('.eye');
    const inputColor = document.querySelector('.color');
    const inputBgColor = document.querySelector('.bgColor');
    const inputMargin = document.querySelector('.margin');
    const inputQzone = document.querySelector('.qzone');
    const inputFormat = document.querySelector('.format');
    const qrCodeImg = document.querySelector('.qr-code img');


    // click on generate button to get value and pass to api
    generateBtn.addEventListener('click', () => {
        const url = inputUrl.value;
        const size = inputSize.value;
        const charset = inputCharSet.value;
        const ecc = inputEye.value;
        const color = inputColor.value;
        const bgcolor = inputBgColor.value;
        const margin = inputMargin.value;
        const qzone = inputQzone.value;
        const format = inputFormat.value;

        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=${size}&charset-source=${charset}&ecc=${ecc}&color=${color}&bgcolor=${bgcolor}&margin=${margin}&qzone=${qzone}&format=${format}`;
        qrCodeImg.src = qrCodeUrl;
    });

    cleanBtn.addEventListener("click", () => {
        inputUrl.value = "";
        inputSize.value = "";
        inputCharSet.value = "UTF-8";
        inputEye.value = "L";
        inputColor.value = "#000000";
        inputBgColor.value = "#FFFFFF";
        inputMargin.value = "0";
        inputQzone.value = "0";
        inputFormat.value = "png";
        qrCodeImg.src = "default-preview-qr.svg";
    });


    downloadBtn.addEventListener("click", () => {
        if (qrCodeImg.src) {

            const link = document.createElement("a");
            link.href = qrCodeImg.src;
            link.download = "QRCode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert("please generate qr code first");
        }


    })

})