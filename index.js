const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

const Floor1 = document.querySelector(".Floor1");
const Floor2 = document.querySelector(".Floor2");
const Floor3 = document.querySelector(".Floor3");
const Floor4 = document.querySelector(".Floor4");

const startBtn = document.querySelector(".startBtn");
const percentage = document.querySelector(".percentage");
const outputSection = document.querySelector(".outputSection");

const soju = document.querySelector(".soju");
const beer = document.querySelector(".beer");
const coke = document.querySelector(".coke");
const cider = document.querySelector(".cider");

const glass = document.querySelector(".glass");
const glassSection = document.querySelector(".glassSection");

const potionAll = document.querySelector(".potionAll");
const output0 = document.querySelector(".outputSoju");
const output1 = document.querySelector(".outputBeer");
const output2 = document.querySelector(".outputCoke");
const output3 = document.querySelector(".outputCider");

const bevarage = [0, 0, 0, 0]; //소주 맥주 콜라 사이
let countFloor = 1;




function createColor(countFloor, bevarage){
  const colorArray = [[236, 241, 244], [246, 189, 96], [84, 11, 14], [240, 239, 235]];
  let cnt = countFloor -1;

  let color1 = [bevarage[0]*colorArray[0][0], bevarage[0]*colorArray[0][1], bevarage[0]*colorArray[0][2]];
  let color2 = [bevarage[1]*colorArray[1][0], bevarage[1]*colorArray[1][1], bevarage[1]*colorArray[1][2]];
  let color3 = [bevarage[2]*colorArray[2][0], bevarage[2]*colorArray[2][1], bevarage[2]*colorArray[2][2]];
  let color4 = [bevarage[3]*colorArray[3][0], bevarage[3]*colorArray[3][1], bevarage[3]*colorArray[3][2]];

  let mixR = (color1[0] + color2[0] + color3[0] + color4[0])/cnt;
  let mixG = (color1[1] + color2[1] + color3[1] + color4[1])/cnt;
  let mixB = (color1[2] + color2[2] + color3[2] + color4[2])/cnt;

  mixColor = `rgb(${mixR}, ${mixG}, ${mixB})`;
  console.log(mixColor);

  if(cnt == 1){
    Floor1.style.backgroundColor = mixColor;
  }
  else if(cnt == 2){
    Floor1.style.backgroundColor = mixColor;
    Floor2.style.backgroundColor = mixColor;
  }
  else if(cnt == 3){
    Floor1.style.backgroundColor = mixColor;
    Floor2.style.backgroundColor = mixColor;
    Floor3.style.backgroundColor = mixColor;
  }
  else if(cnt == 4){
    Floor1.style.backgroundColor = mixColor;
    Floor2.style.backgroundColor = mixColor;
    Floor3.style.backgroundColor = mixColor;
    Floor4.style.backgroundColor = mixColor;
  }
}


function addFloor(cnt, color){
  switch(cnt){
    case 1: Floor1.style.backgroundColor = color;
    break;

    case 2: Floor2.style.backgroundColor = color;
    break;

    case 3: Floor3.style.backgroundColor = color;
    break;

    case 4: Floor4.style.backgroundColor = color;
    break;

    case 5: Floor5.style.backgroundColor = color;
    break;
  }
}

let onOff = 0;
let restart = 0;
startBtn.addEventListener("click", ()=>{
  if(onOff == 1){
    if(restart == 1){
      soju.style.color='#e5e5e5';
      beer.style.color='#e5e5e5';
      coke.style.color='#e5e5e5';
      cider.style.color='#e5e5e5';
      Floor1.style.backgroundColor = 'transparent';
      Floor2.style.backgroundColor = 'transparent';
      Floor3.style.backgroundColor = 'transparent';
      Floor4.style.backgroundColor = 'transparent';
      soju.style.fontWeight='normal';
      beer.style.fontWeight='normal';
      coke.style.fontWeight='normal';
      cider.style.fontWeight='normal';
      restart = 0;
    }
    Floor1.style.backgroundColor = 'transparent';
    Floor2.style.backgroundColor = 'transparent';
    Floor3.style.backgroundColor = 'transparent';
    Floor4.style.backgroundColor = 'transparent';

    let mixColor = createColor(countFloor, bevarage);

    while(output0.hasChildNodes() || output1.hasChildNodes() || output2.hasChildNodes() || output3.hasChildNodes()){
      if(output0.firstChild) output0.removeChild(output0.firstChild);
      if(output1.firstChild)output1.removeChild(output1.firstChild);
      if(output2.firstChild)output2.removeChild(output2.firstChild);
      if(output3.firstChild)output3.removeChild(output3.firstChild);
      onOff = 0;
    }
  }
  let cntSort = 0;
  for(let i = 0; i < 4; i++){
    if(bevarage[i]) cntSort ++;
  }

  let randNum = 0;
  let randSum = 10;
  let allSum = 0;
  for(let i = 0; i < cntSort; i++){
    if(i == (cntSort-1)){
      randNum = 10-allSum;
    }
    else{
      randNum = Math.floor(Math.random()*randSum);
    }
    allSum += randNum;
    randSum = randSum- randNum;


    let span = document.createElement("span");
    let Text = document.createTextNode(`${randNum}`);
    span.appendChild(Text);
    console.log(bevarage);

    let z = 0;
    for(let j = z; j < 4; j++){
      if(bevarage[j] == 1){
        eval('output' + j).appendChild(span);
        bevarage[j] = 0;
        break;
      }
    }
    z++;
  }

  for(let i = 0; i < 4; i++){
    bevarage[i] = 0;
  }

  console.log(bevarage);
  onOff = 1;
  restart = 1;

  glass.style.animationPlayState = 'running';

   setTimeout(()=>{
     glass.style.animationPlayState = 'paused';


   }, 600)
   countFloor = 1;
})

btn1.addEventListener("click", ()=>{ //소주
    if(restart == 1){
      soju.style.color='#e5e5e5';
      beer.style.color='#e5e5e5';
      coke.style.color='#e5e5e5';
      cider.style.color='#e5e5e5';
      Floor1.style.backgroundColor = 'transparent';
      Floor2.style.backgroundColor = 'transparent';
      Floor3.style.backgroundColor = 'transparent';
      Floor4.style.backgroundColor = 'transparent';
      soju.style.fontWeight='normal';
      beer.style.fontWeight='normal';
      coke.style.fontWeight='normal';
      cider.style.fontWeight='normal';
      restart = 0;
    }
    soju.style.color='#fd0363';
    soju.style.fontWeight='bolder';

    let color = "#edf2f4";
    addFloor(countFloor, color);
    countFloor ++;
    bevarage[0] = 1;
  }
)

btn2.addEventListener("click", ()=>{ //맥주
  if(restart == 1){
    soju.style.color='#e5e5e5';
    beer.style.color='#e5e5e5';
    coke.style.color='#e5e5e5';
    cider.style.color='#e5e5e5';
    Floor1.style.backgroundColor = 'transparent';
    Floor2.style.backgroundColor = 'transparent';
    Floor3.style.backgroundColor = 'transparent';
    Floor4.style.backgroundColor = 'transparent';
    soju.style.fontWeight='normal';
    beer.style.fontWeight='normal';
    coke.style.fontWeight='normal';
    cider.style.fontWeight='normal';
    restart = 0;
  }
  beer.style.color='#fd0363';
  beer.style.fontWeight='bolder';

  let color = "#f6bd60";
  addFloor(countFloor, color);
  countFloor ++;
  bevarage[1] = 1;
  }
)

btn3.addEventListener("click", ()=>{//콜라
  if(restart == 1){
    soju.style.color='#e5e5e5';
    beer.style.color='#e5e5e5';
    coke.style.color='#e5e5e5';
    cider.style.color='#e5e5e5';
    Floor1.style.backgroundColor = 'transparent';
    Floor2.style.backgroundColor = 'transparent';
    Floor3.style.backgroundColor = 'transparent';
    Floor4.style.backgroundColor = 'transparent';
    soju.style.fontWeight='normal';
    beer.style.fontWeight='normal';
    coke.style.fontWeight='normal';
    cider.style.fontWeight='normal';
    restart = 0;
  }
  coke.style.color='#fd0363';
  coke.style.fontWeight='bolder';

  let color = "#540b0e";
  addFloor(countFloor, color);
  countFloor ++;
  bevarage[2] = 1;
  }
)

btn4.addEventListener("click", ()=>{//사이다
  if(restart == 1){
    soju.style.color='#e5e5e5';
    beer.style.color='#e5e5e5';
    coke.style.color='#e5e5e5';
    cider.style.color='#e5e5e5';
    soju.style.fontWeight='normal';
    beer.style.fontWeight='normal';
    coke.style.fontWeight='normal';
    cider.style.fontWeight='normal';

    Floor1.style.backgroundColor = 'transparent';
    Floor2.style.backgroundColor = 'transparent';
    Floor3.style.backgroundColor = 'transparent';
    Floor4.style.backgroundColor = 'transparent';
    restart = 0;
  }
  cider.style.color='#fd0363';
  cider.style.fontWeight='bolder';
  let color = "#f0efeb";
  addFloor(countFloor, color);
  countFloor ++;
  bevarage[3] = 1;
  }
)