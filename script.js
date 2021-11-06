//マップの設定
const canvasMap = document.querySelector("#canvasMap");
const ctxMap = canvasMap.getContext("2d");
// canvasMap.width = 2000;
// canvasMap.height = 1000;

//キャンバスの設定
const canvasPaint = document.querySelector("#canvasPaint");
const ctxPaint = canvasPaint.getContext("2d");
// canvasMap.width = 2000;
// canvasMap.height = 1000;

//キャンバスサイズの設定と拡大率
canvasFactor = 3;
//画面上の大きさ×拡大率
original_width = 740*canvasFactor;  //style="width:750px; height:500px"
original_height = 500*canvasFactor; 

canvasMap.width = original_width;
canvasMap.height = original_height;
canvasMap.style.width = original_width/canvasFactor + "px";
canvasMap.style.height = original_height/canvasFactor + "px";
canvasPaint.width = canvasMap.width;
canvasPaint.height = canvasMap.height;
canvasPaint.style.width = original_width/canvasFactor + "px";
canvasPaint.style.height = original_height/canvasFactor + "px";

//photo キャンバスの設定
canvasPhotoListName = ["canvasPhoto1","canvasPhoto2","canvasPhoto3","canvasPhoto4"];
canvasFactor = 3;
photo_original_width = 200*canvasFactor;  //style="width:750px; height:500px"
photo_original_height = 130*canvasFactor; 
canvasPhotoList = []
ctxPhotoList = []
canvasPhotoListName.forEach(function(value,index){
    canvasPhotoList.push(document.getElementById(value));
    ctxPhotoList.push(canvasPhotoList[index].getContext("2d"));
    canvasPhotoList[index].width = photo_original_width;
    canvasPhotoList[index].height = photo_original_height;
    canvasPhotoList[index].style.width = photo_original_width/canvasFactor + "px";
    canvasPhotoList[index].style.height = photo_original_height/canvasFactor + "px";
});

//マップ画像の読み込みイベントの設定
const loadMapFile = document.getElementById("loadMapFile");
loadMapFile.addEventListener("change",function(evt){
    console.log("file selector");
    let file = evt.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    console.log(file[0]);
    reader.onload = function(){
        let dataURL = reader.result;
        let img = new Image();
        img.src = dataURL;
        img.onload = function(){
            ctxMap.drawImage(img,0,0,canvasMap.width,canvasMap.height);
        }
        // ctx02.fillRect(50,90,30,20);
    }

},false);

//写真画像の読み込みイベントの設定（配列を利用）
loadPhotoListName = ["selectPhoto1","selectPhoto2","selectPhoto3","selectPhoto4"];
loadPhotoFileList = [];
loadPhotoListName.forEach(function(value,index){
    loadPhotoFileList.push(document.getElementById(value));
    loadPhotoFileList[index].addEventListener("change",function(event){
        console.log("photo load event" + value + index);
        let file = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(file[0]);
        console.log(file[0]);
        reader.onload = function(){
        let dataURL = reader.result;
        let img = new Image();
        img.src = dataURL;
        img.onload = function(){
            ctxPhotoList[index].drawImage(img,0,0,canvasPhotoList[index].width,canvasPhotoList[index].height);
        }
        // ctx02.fillRect(50,90,30,20);
    },false});
});


//スタンプの設置
//スタンプ画像の設定
const charaHome = new Image();
charaHome.src = "image/home.png"
const charaSchool = new Image();
charaSchool.src = "image/school.png"
const charaEvacuation = new Image();
charaEvacuation.src = "image/evacuation.png"
const charaCamera1 = new Image();
charaCamera1.src = "image/camera1.png"
const charaCamera2 = new Image();
charaCamera2.src = "image/camera2.png"
const charaCamera3 = new Image();
charaCamera3.src = "image/camera3.png"
const charaCamera4 = new Image();
charaCamera4.src = "image/camera4.png"
const charaCamera5 = new Image();
charaCamera5.src = "image/camera5.png"
const charaNote1 = new Image();
charaNote1.src = "image/note1.png"
const charaNote2 = new Image();
charaNote2.src = "image/note2.png"
const charaNote3 = new Image();
charaNote3.src = "image/note3.png"
const charaNote4 = new Image();
charaNote4.src = "image/note4.png"
const charaNote5 = new Image();
charaNote5.src = "image/note5.png"
const charaNote6 = new Image();
charaNote6.src = "image/note6.png"
const charaNote7 = new Image();
charaNote7.src = "image/note7.png"
const charaNote8 = new Image();
charaNote8.src = "image/note8.png"　　　　　　　　　　　　
const charaNote9 = new Image();
charaNote9.src = "image/note9.png"

//スタンプを選択
//デフォルトは「ペン」になっている
let penStatus = "pencil";

const homeButton = document.getElementById("homeButton");
homeButton.addEventListener("click",()=>{
    penStatus = "home";
})
const schoolButton = document.getElementById("schoolButton");
schoolButton.addEventListener("click",()=>{
    penStatus = "school";
    // console.log("School Stamp selected");
})
const evacuationButton = document.getElementById("evacuationButton");
evacuationButton.addEventListener("click",()=>{
    penStatus = "evacuation";
})
// const penButton = document.getElementById("penButton");
// penButton.addEventListener("click",()=>{
//     penStatus = "pencil";
// })
const camera1Button = document.getElementById("camera1Button");
camera1Button.addEventListener("click",()=>{
    penStatus = "camera1";
})
const camera2Button = document.getElementById("camera2Button");
camera2Button.addEventListener("click",()=>{
    penStatus = "camera2";
})
const camera3Button = document.getElementById("camera3Button");
camera3Button.addEventListener("click",()=>{
    penStatus = "camera3";
})
const camera4Button = document.getElementById("camera4Button");
camera4Button.addEventListener("click",()=>{
    penStatus = "camera4";
})
const note1Button = document.getElementById("note1Button");
note1Button.addEventListener("click",()=>{
    penStatus = "note1";
})
const note2Button = document.getElementById("note2Button");
note2Button.addEventListener("click",()=>{
    penStatus = "note2";
})
const note3Button = document.getElementById("note3Button");
note3Button.addEventListener("click",()=>{
    penStatus = "note3";
})
const note4Button = document.getElementById("note4Button");
note3Button.addEventListener("click",()=>{
    penStatus = "note4";
})
const eraserButton = document.getElementById("eraserButton");
eraserButton.addEventListener("click",()=>{
    penStatus = "eraser";
})
//全消去ボタンの設定
const allearseButon = document.getElementById("alleraseButton");
alleraseButton.addEventListener("click",()=>{
  console.log("All Erase is clicked");
  ctxPaint.clearRect(0,0,canvasPaint.width,canvasPaint.height);
})

// 選択解除ボタン
// const freeButton = document.getElementById("freeButton");
// freeButton.addEventListener("click",()=>{
//     penStatus = "none";
// })



// 道具アイコンの選択されると発生するイベント
const tools = document.querySelectorAll(".tool");
const selectButton = (elem) => {
    removeAcitiveButton();
    // console.log("clicked");
    elem.classList.add("activeTool");
}

const removeAcitiveButton =() => {
    tools.forEach((tool)=>{
        tool.classList.remove("activeTool");
    });
}

// 色アイコンの選択されると発生するイベント
const toolColors = document.querySelectorAll(".toolColor");
const selectColor = (elem) => {
    removeAcitiveColor();
    ctxPaint.fillStyle = elem.getAttribute("data-color");
    elem.classList.add("activeColor");
}
const removeAcitiveColor =() => {
    toolColors.forEach((toolColor)=>{
        toolColor.classList.remove("activeColor");
    });
}

// 太さアイコンの選択されると発生するイベント
const toolThicknesses = document.querySelectorAll(".toolThickness");
const selectThickness = (elem) => {
    removeAcitiveThickness();
    // ctxPaint.fillStyle = elem.getAttribute("data-color");
    elem.classList.add("activeThickness");
}
const removeAcitiveThickness =() => {
    toolThicknesses.forEach((toolThickness)=>{
        toolThickness.classList.remove("activeThickness");
    });
}



// canvasをクリックしたときのイベント設定（アイコンを置く設定）
this.canvasPaint.addEventListener("mousedown",(e) => {
    dw = 100; //アイコンの大きさ
    dh = 100;
    let x = e.offsetX * canvasFactor-dw/2;
    let y = e.offsetY * canvasFactor-dh/2;

    console.log("アイコンの場所　x:",x,"y:",y);

    
    //penStatusの状態に応じて挙動変更(アイコンの設置)
    switch(penStatus) {
        case "pencil":
            isDrag = true
            break;
        case "home":
            ctxPaint.drawImage(charaHome,x,y,dw,dh); //drawImage(image, dx, dy, dw, dh)
            break;
        case "school":
            ctxPaint.drawImage(charaSchool,x,y,dw,dh);
            break;
        case "evacuation":
            ctxPaint.drawImage(charaEvacuation,x,y,dw,dh);
            break;
        case "camera1":
            ctxPaint.drawImage(charaCamera1,x,y,dw,dh);
            break;
        case "camera2":
            ctxPaint.drawImage(charaCamera2,x,y,dw,dh);
            break;
        case "camera3":
            ctxPaint.drawImage(charaCamera3,x,y,dw,dh);
            break;
        case "camera4":
            ctxPaint.drawImage(charaCamera4,x,y,dw,dh);
            break;
        case "note1":
            ctxPaint.drawImage(charaNote1,x,y,dw,dh);
            break;
        case "note2":
            ctxPaint.drawImage(charaNote2,x,y,dw,dh);
            break;
        case "note3":
            ctxPaint.drawImage(charaNote3,x,y,dw,dh);
            break;
        case "note4":
            ctxPaint.drawImage(charaNote4,x,y,dw,dh);
            break;
        case "eraser":
            isDrag = true;
            // ctxPaint.clearRect(x,y,dw/2,dh/2);
            break;
        default:
            penStatus = "pencil"
    }
})

//ペンによる経路の描画
const penButton = document.getElementById("penButton");
penButton.addEventListener("click",()=>{
    penStatus = "pencil";
    ctxPaint.fillStyle = "blue";  //線の色を変更
    console.log("pen selected");
})
// const pen2Button = document.getElementById("pen2Button");
// pen2Button.addEventListener("click",()=>{
//     penStatus = "pencil";
//     ctxPaint.fillStyle = "green"; //線の色を変更
//     console.log("pen2 selected");
// })

//線の色の初期設定
let penSize = 6;
const penthickButton = document.getElementById("thickButton");
penthickButton.addEventListener("click",()=>{
    penSize = 6 ;  //線の太さを変更
    console.log("penSize = " + penSize);
})
const penthinButton = document.getElementById("thinButton");
penthinButton.addEventListener("click",()=>{
    penSize = 3 ;  //線の太さを変更
    console.log("penSize = " + penSize);
})


//線を描く
// マウスがドラッグされているか(クリックされたままか)判断するためのフラグ
let isDrag = false;
ctxPaint.fillStyle = "blue";
ctxPaint.strokeStyle = ctxPaint.fillStyle;

canvasPaint.addEventListener("mouseup",()=>{
    isDrag = false;
    x = undefined;
    y = undefined;
});
canvasPaint.addEventListener("mousemove",(event)=>{
    draw(event.offsetX * canvasFactor ,event.offsetY * canvasFactor);
});

//線を描く関数
function draw(x2,y2){
    ereseW = 50; //消しゴムの大きさ
    eraseH = 50;
    if(isDrag && penStatus == "pencil"){
        ctxPaint.beginPath();
        ctxPaint.arc(x2,y2,penSize*canvasFactor,0,Math.PI * 2);
        ctxPaint.closePath();
        ctxPaint.fill();
        drawLine(x,y,x2,y2);
    }else if(isDrag && penStatus == "eraser"){
        ctxPaint.clearRect(x-eraseW/2,y-eraseH/2,eraseW,eraseH);
    }
    x = x2;
    y = y2;
}

function drawLine(x1,y1,x2,y2){
    ctxPaint.beginPath();
    ctxPaint.moveTo(x1,y1);
    ctxPaint.lineTo(x2,y2);
    ctxPaint.strokeStyle = ctxPaint.fillStyle;
    console.log("penSize " +penSize);
    ctxPaint.lineWidth = penSize * canvasFactor*2;
    ctxPaint.stroke();
}

