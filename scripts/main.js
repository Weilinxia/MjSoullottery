var gender =0;//0女1男
var allcounts = 0;
var acounts = new Array(3);//统计数据
var wmcounts = new Array(36);//女池 0-3联动
var mecounts = new Array(22);//男池 0-3联动

function btn1(){
            document.getElementById('women').style.display = 'block';
            document.getElementById('men').style.display = 'none';
            gender=0;
}
 
function btn2() {
            document.getElementById('women').style.display = 'none';
            document.getElementById('men').style.display = 'block';
            gender=1;
  }
  
function getRndInteger(min, max) {//[]
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function Sdraw(){
allcounts++;
let rd1=0;
let rd2=0;
let rd3=0;
let rd4=0;
rd1 = getRndInteger(1,100);
  if(gender === 0){
    if(rd1<6){
    acounts[0]++;     
    rd2 = getRndInteger(1,100);
      if(rd2<60){
      rd3 = getRndInteger(1,4);
      wmcounts[rd3-1]++;
      }
      else{
        rd4 = getRndInteger(1,32);
        wmcounts[rd4+3]++;
      }
      }
      else if(rd1>5&&rd1<21){
        acounts[1]++;  
      }
      else{
        acounts[2]++;  
      }

      for(let i=1;i<37;i++){
      let a='c';
      let b= a+i;
      document.getElementById(b).innerHTML = wmcounts[i-1];
      }
      document.getElementById('c37').innerHTML = acounts[0];
      document.getElementById('c38').innerHTML = acounts[1];
      document.getElementById('c39').innerHTML = acounts[2];
}
  if(gender === 1){
    if(rd1<6){
    acounts[0]++;     
    rd2 = getRndInteger(1,100);
      if(rd2<60){
      rd3 = getRndInteger(1,4);
      mecounts[rd3-1]++;
        } 
        else{
        rd4 = getRndInteger(1,18);
        mecounts[rd4+3]++;
        }
       }
        else if(rd1>5&&rd1<21){
        acounts[1]++;  
      }
        else{
        acounts[2]++;  
      }
      document.getElementById('c61').innerHTML = mecounts[0];
      document.getElementById('c62').innerHTML = mecounts[1];
      document.getElementById('c63').innerHTML = mecounts[2];
      document.getElementById('c64').innerHTML = mecounts[3];
      for(let i=40;i<58;i++){
      let a='c';
      let b= a+i;
      document.getElementById(b).innerHTML = mecounts[i-36];
  }
      document.getElementById('c58').innerHTML = acounts[0];
      document.getElementById('c59').innerHTML = acounts[1];
      document.getElementById('c60').innerHTML = acounts[2];
}
document.getElementById('allcounts').innerHTML = allcounts;
}


function Tdraw(){
       for(let i=0;i<10;i++){
        Sdraw();
 }
 }

function Cla(){
for(let i=0;i<3;i++){
  acounts[i]=0;
}
for(let i=0;i<36;i++){
  wmcounts[i]=0;
}
for(let i=0;i<22;i++){
  mecounts[i]=0;
}
for(let i=1;i<65;i++){
  let a='c';
  let b= a+i;
  document.getElementById(b).innerHTML = '0';
  }
  allcounts='0';
  document.getElementById('allcounts').innerHTML = '0';
}
