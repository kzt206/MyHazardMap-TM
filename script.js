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

canvasFactor = 3;
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

//写真画像の読み込みイベントの設定
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
// 選択解除ボタン
// const freeButton = document.getElementById("freeButton");
// freeButton.addEventListener("click",()=>{
//     penStatus = "none";
// })



// 道具アイコンの選択
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

// 色アイコンの選択
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

// 太さアイコンの選択

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



// //canvasをクリックしたときのイベント設定
// this.canvasPaint.addEventListener("mousedown",(e) => {
//     let x = e.offsetX-25;
//     let y = e.offsetY-25;

//     console.log("x:",x,"y:",y);
//     //penStatusの状態に応じて挙動変更
//       if(penStatus == "home") {
//         ctxPaint.drawImage(charaHome,x,y);
//     } 

// if(penStatus == "school") {
//     ctxPaint.drawImage(charaSchool,x,y);
//   } 
    
//   if(penStatus == "evacuation") {
//     ctxPaint.drawImage(charaEvacuation,x,y);
//   } 
//   if(penStatus == "camera1") {
//     ctxPaint.drawImage(charaCamera1,x,y);
//   }　
//   if(penStatus == "camera2") {
//     ctxPaint.drawImage(charaCamera2,x,y);
//   }
//   if(penStatus == "camera3") {
//     ctxPaint.drawImage(charaCamera3,x,y);
//   }
//   if(penStatus == "camera4") {
//     ctxPaint.drawImage(charaCamera4,x,y);
//   }
//   if(penStatus == "camera5") {
//     ctxPaint.drawImage(charaCamera5,x,y);
//   } 
//   if(penStatus == "note1") {
//     ctxPaint.drawImage(charaNote1,x+18,y-2);
//   }
//   if(penStatus == "note2") {
//     ctxPaint.drawImage(charaNote2,x+18,y-2);
//   }
//   if(penStatus == "note3") {
//     ctxPaint.drawImage(charaNote3,x+18,y-2);
//   }
//   if(penStatus == "note4") {
//     ctxPaint.drawImage(charaNote4,x+18,y-2);
//   }
//   if(penStatus == "note5") {
//     ctxPaint.drawImage(charaNote5,x+18,y-2);
//   }
//   if(penStatus == "note6") {
//     ctxPaint.drawImage(charaNote6,x+18,y-2);
//   }
//   if(penStatus == "note7") {
//     ctxPaint.drawImage(charaNote7,x+18,y-2);
//   }
//   if(penStatus == "note8") {
//     ctxPaint.drawImage(charaNote8,x+18,y-2);
//   }
//   if(penStatus == "note9") {
//     ctxPaint.drawImage(charaNote9,x+18,y-2);
//   }
// })

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
// //消しゴムボタンの設定
// const eraserButton = document.getElementById("eraserButton");
// eraserButton.addEventListener("click",() => {
//     console.log("Eraser is clicked");
//     penStatus = "eraser";
// })
// //全消去ボタンの設定
// const allearseButon = document.getElementById("alleraseButton");
// alleraseButton.addEventListener("click",()=>{
//   console.log("All Erase is clicked");
//   ctxPaint.clearRect(0,0,canvasPaint.width,canvasPaint.height);
// })




//線を描く
// マウスがドラッグされているか(クリックされたままか)判断するためのフラグ
let isDrag = false;
ctxPaint.fillStyle = "blue";
ctxPaint.strokeStyle = ctxPaint.fillStyle;
//線の太さの初期値
// ctxPaint.lineWidth = 2 ;

//canvasをクリックしたときのイベント設定
this.canvasPaint.addEventListener("mousedown",(e) => {
    // let x = e.offsetX-25;
    // let y = e.offsetY-25;
    let x = e.offsetX * canvasFactor ;
    let y = e.offsetY * canvasFactor ;

    console.log("offsetX:",e.offsetX,"offsetY:",e.offsetY);
    console.log("x:",x," y:",y);

    //penStatusの状態に応じて挙動変更
    console.log("Penstatus;",penStatus);
    if(penStatus == "pencil"){
        isDrag = true;
    }
    else if(penStatus == "nameSticker") {
        ctxPaint.drawImage(charaNameSticker,x,y-40);
    } else if(penStatus == "doubleCircle"){
        ctxPaint.drawImage(charaDoubleCircle,x,y);
    } else if(penStatus == "singleCircle"){
        ctxPaint.drawImage(charaSingleCircle,x,y);
    } else if(penStatus == "arrow"){
        ctxPaint.drawImage(charaArrow,x-10,y-25);
    } else if(penStatus == "hinanJunbi"){
        ctxPaint.drawImage(charaHinanJunbi,x,y-25);
    } else if(penStatus == "sagyouTimeSticker"){
        ctxPaint.drawImage(charaSagyouTimeSticker,x,y);
    } else if(penStatus == "hinanKaishiSticker"){
    // console.log("pen is hinankaishi")
        ctxPaint.drawImage(charaHinanKaishiSticker,x,y);
    } else if(penStatus == "camera5"){
        ctxPaint.drawImage(charaCamera5,x+25,y+25);
    } else if(penStatus == "eraser"){
        ctxPaint.clearRect(x,y,eraserWidth,eraserHeight);
    }
})
// canvasPaint.addEventListener("mousedown",(event)=>{
//     isDrag = true;
//     x = event.offsetX * canvasFactor;
//     y = event.offsetY * canvasFactor;
//     // console.log(x,y)
// });
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
    if(isDrag && penStatus == "pencil"){
        ctxPaint.beginPath();
        ctxPaint.arc(x2,y2,penSize*canvasFactor,0,Math.PI * 2);
        ctxPaint.closePath();
        ctxPaint.fill();
        drawLine(x,y,x2,y2);
    }else if(isDrag && penStatus == "eraser"){
        ctxPaint.clearRect(x,y,20,20);
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

