var inputFields = document.getElementById("inputText");
var converBtn = document.getElementById("convertBtn");
var qrImage = document.getElementById("QrImage");
var jpgDownloadBtn = document.getElementById("downloadJpgBtn");
var pngDownloadBtn = document.getElementById("downloadPngBtn");

var formateValue = "jpg";

var downloadValue = 0;



converBtn.addEventListener("click", function Convertion() {
    var inputValue = inputFields.value;
    var formate = formateValue;
    if (!inputValue) return
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${inputValue}&size=1080x1080&margin=10&format=${formate}&download=${downloadValue}`;
    converBtn.innerHTML = "Genarating...";


    pngDownloadBtn.addEventListener("click", function () {

        formateValue = "png";
        downloadValue = 1;
        Convertion();
        pngDownloadBtn.href = qrImage.src;
        converBtn.innerHTML = "Downloading...";

    });

    jpgDownloadBtn.addEventListener("click", function () {

        formateValue = "jpg";
        downloadValue = 1;
        Convertion();
        jpgDownloadBtn.href = qrImage.src;
        converBtn.innerHTML = "Downloading...";

    });

    qrImage.addEventListener("load", function () {
        converBtn.innerHTML = "Convert";
    })

});