//マップの設定
const canvasMap = document.querySelector("#canvasMap");
const ctxMap = canvasMap.getContext("2d");
canvasMap.width = 800;
canvasMap.height = 600;

//キャンバスの設定
const canvasPaint = document.querySelector("#canvasPaint");
const ctxPaint = canvasPaint.getContext("2d");
canvasPaint.width = 800;
canvasPaint.height = 600;


//マップ画像の読み込み
const selectMapFile = document.getElementById("selectMapFile");
selectMapFile.addEventListener("change",function(evt){
    // console.log("file selector");
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

//スタンプの設置
//スタンプ画像の設定
const charaHome = new Image();
charaHome.src = "home.png"
const charaSchool = new Image();
charaSchool.src = "school.png"
const charaEvacuation = new Image();
charaEvacuation.src = "evacuation.png"
const charaCamera1 = new Image();
charaCamera1.src = "camera1.png"
const charaCamera2 = new Image();
charaCamera2.src = "camera2.png"
const charaCamera3 = new Image();
charaCamera3.src = "camera3.png"
const charaCamera4 = new Image();
charaCamera4.src = "camera4.png"
const charaCamera5 = new Image();
charaCamera5.src = "camera5.png"
const charaNote1 = new Image();
charaNote1.src = "note1.png"
const charaNote2 = new Image();
charaNote2.src = "note2.png"
const charaNote3 = new Image();
charaNote3.src = "note3.png"
const charaNote4 = new Image();
charaNote4.src = "note4.png"
const charaNote5 = new Image();
charaNote5.src = "note5.png"
const charaNote6 = new Image();
charaNote6.src = "note6.png"
const charaNote7 = new Image();
charaNote7.src = "note7.png"
const charaNote8 = new Image();
charaNote8.src = "note8.png"　　　　　　　　　　　　
const charaNote9 = new Image();
charaNote9.src = "note9.png"


//スタンプを選択
let penStatus = "pencil";
const homeButton = document.getElementById("homeButton");
homeButton.addEventListener("click",()=>{
    penStatus = "home";
})
const schoolButton = document.getElementById("schoolButton");
schoolButton.addEventListener("click",()=>{
    penStatus = "school";
    console.log("School Stamp selected");
})
const evacuationButton = document.getElementById("evacuationButton");
evacuationButton.addEventListener("click",()=>{
    penStatus = "evacuation";
})
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
const camera5Button = document.getElementById("camera5Button");
camera5Button.addEventListener("click",()=>{
    penStatus = "camera5";
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
note4Button.addEventListener("click",()=>{
    penStatus = "note4";
})
const note5Button = document.getElementById("note5Button");
note5Button.addEventListener("click",()=>{
    penStatus = "note5";
})
const note6Button = document.getElementById("note6Button");
note6Button.addEventListener("click",()=>{
    penStatus = "note6";
})
const note7Button = document.getElementById("note7Button");
note7Button.addEventListener("click",()=>{
    penStatus = "note7";
})
const note8Button = document.getElementById("note8Button");
note8Button.addEventListener("click",()=>{
    penStatus = "note8";
})
const note9Button = document.getElementById("note9Button");
note9Button.addEventListener("click",()=>{
    penStatus = "note9";
})

const freeButton = document.getElementById("freeButton");
freeButton.addEventListener("click",()=>{
    penStatus = "none";
})



//canvasをクリックしたときのイベント設定
this.canvasPaint.addEventListener("mousedown",(e) => {
    let x = e.offsetX-25;
    let y = e.offsetY-25;

    console.log("x:",x,"y:",y);
    //penStatusの状態に応じて挙動変更
      if(penStatus == "home") {
        ctxPaint.drawImage(charaHome,x,y);
    } 

if(penStatus == "school") {
    ctxPaint.drawImage(charaSchool,x,y);
  } 
    
  if(penStatus == "evacuation") {
    ctxPaint.drawImage(charaEvacuation,x,y);
  } 
  if(penStatus == "camera1") {
    ctxPaint.drawImage(charaCamera1,x,y);
  }　
  if(penStatus == "camera2") {
    ctxPaint.drawImage(charaCamera2,x,y);
  }
  if(penStatus == "camera3") {
    ctxPaint.drawImage(charaCamera3,x,y);
  }
  if(penStatus == "camera4") {
    ctxPaint.drawImage(charaCamera4,x,y);
  }
  if(penStatus == "camera5") {
    ctxPaint.drawImage(charaCamera5,x,y);
  } 
  if(penStatus == "note1") {
    ctxPaint.drawImage(charaNote1,x+18,y-2);
  }
  if(penStatus == "note2") {
    ctxPaint.drawImage(charaNote2,x+18,y-2);
  }
  if(penStatus == "note3") {
    ctxPaint.drawImage(charaNote3,x+18,y-2);
  }
  if(penStatus == "note4") {
    ctxPaint.drawImage(charaNote4,x+18,y-2);
  }
  if(penStatus == "note5") {
    ctxPaint.drawImage(charaNote5,x+18,y-2);
  }
  if(penStatus == "note6") {
    ctxPaint.drawImage(charaNote6,x+18,y-2);
  }
  if(penStatus == "note7") {
    ctxPaint.drawImage(charaNote7,x+18,y-2);
  }
  if(penStatus == "note8") {
    ctxPaint.drawImage(charaNote8,x+18,y-2);
  }
  if(penStatus == "note9") {
    ctxPaint.drawImage(charaNote9,x+18,y-2);
  }
})

//ペンによる経路の描画
const pen1Button = document.getElementById("pen1Button");
pen1Button.addEventListener("click",()=>{
    penStatus = "pencil";
    ctxPaint.fillStyle = "blue";  //線の色を変更
    console.log("pen1 selected");
})
const pen2Button = document.getElementById("pen2Button");
pen2Button.addEventListener("click",()=>{
    penStatus = "pencil";
    ctxPaint.fillStyle = "green"; //線の色を変更
    console.log("pen2 selected");
})

const penthickButton = document.getElementById("penthickButton");
penthickButton.addEventListener("click",()=>{
    ctxPaint.lineWidth =6 ;  //線の太さを変更
    console.log("penthick selected");
})
const penthinButton = document.getElementById("penthinButton");
penthinButton.addEventListener("click",()=>{
    ctxPaint.lineWidth = 2 ;  //線の太さを変更
    console.log("penthin selected");
})
//消しゴムボタンの設定
const eraserButton = document.getElementById("eraserButton");
eraserButton.addEventListener("click",() => {
    console.log("Eraser is clicked");
    penStatus = "eraser";
})
//全消去ボタンの設定
const allearseButon = document.getElementById("alleraseButton");
alleraseButton.addEventListener("click",()=>{
  console.log("All Erase is clicked");
  ctxPaint.clearRect(0,0,canvasPaint.width,canvasPaint.height);
})




//線を描く
// マウスがドラッグされているか(クリックされたままか)判断するためのフラグ
let isDrag = false;
//線の色の初期設定
//let penSize = 2;
ctxPaint.fillStyle = "blue";
ctxPaint.strokeStyle = ctxPaint.fillStyle;
//線の太さの初期値
ctxPaint.lineWidth = 2 ;
//線を描く関数
function draw(x2,y2){
    if(isDrag && penStatus == "pencil"){
        ctxPaint.beginPath();
        ctxPaint.arc(x2,y2,2,0,Math.PI * 2);
        ctxPaint.fill();
    //console.log("penSize",penSize);
        ctxPaint.closePath();
         //draw line
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
//    ctxPaint.lineWidth = penSize * 2;
    ctxPaint.stroke();
}
canvasPaint.addEventListener("mousedown",(e)=>{
    isDrag = true;
    x = e.offsetX;
    y = e.offsetY;
    // console.log(x,y)
});
canvasPaint.addEventListener("mouseup",()=>{
    isDrag = false;
    x = undefined;
    y = undefined;
});
canvasPaint.addEventListener("mousemove",(event)=>{
    draw(event.offsetX,event.offsetY);
});

const canvasphoto1 = document.querySelector("#canvasphoto1");
const ctxphoto1 = canvasphoto1.getContext("2d");
canvasphoto1.width = 150;
canvasphoto1.height = 112.5;

//マップ画像の読み込み
const selectphoto1File = document.getElementById("selectphoto1File");
selectphoto1File.addEventListener("change",function(evt){
    // console.log("file selector");
    let file = evt.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    console.log(file[0]);
    reader.onload = function(){
        let dataURL = reader.result;
        let img = new Image();
        img.src = dataURL;
        img.onload = function(){
            ctxphoto1.drawImage(img,0,0,canvasphoto1.width,canvasphoto1.height);
        }
        // ctx02.fillRect(50,90,30,20);
    }

},false);

const canvasphoto2 = document.querySelector("#canvasphoto2");
const ctxphoto2 = canvasphoto2.getContext("2d");
canvasphoto2.width = 150;
canvasphoto2.height = 112.5;

//マップ画像の読み込み
const selectphoto2File = document.getElementById("selectphoto2File");
selectphoto2File.addEventListener("change",function(evt){
    // console.log("file selector");
    let file = evt.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    console.log(file[0]);
    reader.onload = function(){
        let dataURL = reader.result;
        let img = new Image();
        img.src = dataURL;
        img.onload = function(){
            ctxphoto2.drawImage(img,0,0,canvasphoto2.width,canvasphoto2.height);
        }
        // ctx02.fillRect(50,90,30,20);
    }

},false);

const canvasphoto3 = document.querySelector("#canvasphoto3");
const ctxphoto3 = canvasphoto3.getContext("2d");
canvasphoto3.width = 150;
canvasphoto3.height = 112.5;

//マップ画像の読み込み
const selectphoto3File = document.getElementById("selectphoto3File");
selectphoto3File.addEventListener("change",function(evt){
    // console.log("file selector");
    let file = evt.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    console.log(file[0]);
    reader.onload = function(){
        let dataURL = reader.result;
        let img = new Image();
        img.src = dataURL;
        img.onload = function(){
            ctxphoto3.drawImage(img,0,0,canvasphoto3.width,canvasphoto3.height);
        }
        // ctx02.fillRect(50,90,30,20);
    }

},false);

const canvasphoto4 = document.querySelector("#canvasphoto4");
const ctxphoto4 = canvasphoto4.getContext("2d");
canvasphoto4.width = 150;
canvasphoto4.height = 112.5;

//マップ画像の読み込み
const selectphoto4File = document.getElementById("selectphoto4File");
selectphoto4File.addEventListener("change",function(evt){
    // console.log("file selector");
    let file = evt.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    console.log(file[0]);
    reader.onload = function(){
        let dataURL = reader.result;
        let img = new Image();
        img.src = dataURL;
        img.onload = function(){
            ctxphoto4.drawImage(img,0,0,canvasphoto4.width,canvasphoto4.height);
        }
        // ctx02.fillRect(50,90,30,20);
    }

},false);

const canvasphoto5 = document.querySelector("#canvasphoto5");
const ctxphoto5 = canvasphoto5.getContext("2d");
canvasphoto5.width = 150;
canvasphoto5.height = 112.5;

//マップ画像の読み込み
const selectphoto5File = document.getElementById("selectphoto5File");
selectphoto5File.addEventListener("change",function(evt){
    // console.log("file selector");
    let file = evt.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    console.log(file[0]);
    reader.onload = function(){
        let dataURL = reader.result;
        let img = new Image();
        img.src = dataURL;
        img.onload = function(){
            ctxphoto5.drawImage(img,0,0,canvasphoto5.width,canvasphoto5.height);
        }
        // ctx02.fillRect(50,90,30,20);
    }

},false);
