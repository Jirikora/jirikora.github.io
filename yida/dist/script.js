import QrScanner from "../node/qr-scanner.min.js";
QrScanner.WORKER_PATH = "https://jirikora.github.io/yida/node/qr-scanner-worker.min.js";

const video = document.getElementById("videoOfscanner");
const resultOfscan = document.getElementById("textOfscanner");
const start = document.getElementById("startOfscanner");
const save = document.getElementById("saveOfscanner");
const page = document.getElementById("pageOfscanner");
const cancel = document.getElementById("cacelSign");

var numberStore = -1;
QrScanner.hasCamera().then(() => {
  if (!QrScanner.hasCamera()) alert("your device don't have camera");
});

const scanner = new QrScanner(video, (result) => (resultOfscan.value = result));
const folderContentbottom = document.getElementById("folderContentbottom");
const numberOfbottom = document.getElementById("numberOfbottom");
var num = 1;

folderContentbottom.addEventListener("dblclick", (e) => {
  e.target.outerHTML = "";
  numberOfbottom.textContent = `(${(num -= 1)})`;
});

page.addEventListener(
  "click",
  (e) => {
    if (e.target == start) {
      scanner.start();
      start.style.display = "none";
      video.style.background = "none";
    }
    if (e.target == save) {
      if (resultOfscan.value == "") {
        alert("no QR code to be save");
        return 0;
      }
      let div1 = document.createElement("div");
      div1.className = "folderContentItembottom";
      div1.appendChild(document.createTextNode(resultOfscan.value));
      folderContentbottom.appendChild(div1);
      numberOfbottom.textContent = `(${(num += 1)})`;
      resultOfscan.value = "";
    }
    if (e.target == cancel) {
      start.style.display = "inline-block";
      mainPageofscanner.style.display = "none";
      video.style.background = "white";
      scanner.stop();
      resultOfscan.value = "";
    }
  },
  false
);

const spantobeclickon = document.getElementById("spantobeclickon");
const newButtontobeclick = document.getElementById("newButtontobeclick");
const header2right = document.getElementById("header2right");
const mainPageofscanner = document.getElementById("contentofscannertobeuse");
header2right.addEventListener(
  "click",
  (e) => {
    if (e.target == newButtontobeclick || e.target == spantobeclickon) {
      mainPageofscanner.style.display = "block";
    }
  },
  false
);
