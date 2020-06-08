const fromSel1=document.getElementsByTagName('select')[0];
const fromSel2=document.getElementsByTagName('select')[1];
const fromSel3=document.getElementsByTagName('select')[2];
const fromSel4=document.getElementsByTagName('select')[3];
const toSel1=document.getElementsByTagName('select')[4];
const toSel2=document.getElementsByTagName('select')[5];
const toSel3=document.getElementsByTagName('select')[6];
const toSel4=document.getElementsByTagName('select')[7];
const calcButton=document.getElementsByTagName('button')[0];
let month=["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"];
let Year=[];
let generalSec=0;
let toplamGun=0;
let basla=0;
let count=0;
let gun=0;
let saat=0;
let deq=0;
let san=0;
let time;
function listMonthsForFrom(dom){
    let opt="";
    for(let i=0;i<month.length;i++){
       opt+=`<option value="${i}">${month[i]}</option>`;
    }
    dom.innerHTML=opt;
}
function listDaysForFrom(day_num,dom){
    let opt="";
   // let x= Number(day_num);
    for(let i=0;i<day_num;i++){
       opt+=`<option value="${i}">${i+1}</option>`;
    }
    dom.innerHTML=opt;
    
    
}
function listClockForFrom(dom){
    let opt="";
    for(let i=0;i<24;i++){
        if(i<10){
            opt+=`<option value="${i}">0${i}</option>`;
        }
        else{
            opt+=`<option value="${i}">${i}</option>`;
        }
    }
    dom.innerHTML=opt;
}
function listMinuteForFrom(dom){
    let opt="";
    for(let i=0;i<60;i++){
        if(i<10){
            opt+=`<option value="${i}">0${i}</option>`;
        }
        else{
            opt+=`<option value="${i}">${i}</option>`;
        }
    }
    dom.innerHTML=opt;
}
function listMonthsForTo(){
    let opt="";
    for(let i=0;i<month.length;i++){
       opt+=`<option value="${i}">${month[i]}</option>`;
    }
    toSel1.innerHTML=opt;
}
function listDaysForTo(day_num,dom){
    let opt="";
   // let x= Number(day_num);
    for(let i=0;i<day_num;i++){
       opt+=`<option value="${i}">${i+1}</option>`;
    }
    dom.innerHTML=opt;
    
    
}
function listClockForTo(dom){
    let opt="";
    for(let i=0;i<24;i++){
        if(i<10){
            opt+=`<option value="${i}">0${i}</option>`;
        }
        else{
            opt+=`<option value="${i}">${i}</option>`;
        }
    }
    dom.innerHTML=opt;
}
function listMinuteForTo(dom){
    let opt="";
    for(let i=0;i<60;i++){
        if(i<10){
            opt+=`<option value="${i}">0${i}</option>`;
        }
        else{
            opt+=`<option value="${i}">${i}</option>`;
        }
    }
   dom.innerHTML=opt;
}















listMonthsForFrom(fromSel1);
fromSel1.onchange=function(){
    
     switch (this.value){
         case '0':
            
            listDaysForFrom(31,fromSel2);
            console.log("Yanvar");
            break;
         case '1':
            
            listDaysForFrom(new Date(2020,2,0).getDate(),fromSel2);
            console.log("Fevral");
            break;
         case '2':
            
            listDaysForFrom(31,fromSel2);
            console.log("Mart");
            break;
        case '3':
            
            listDaysForFrom(30,fromSel2);
            console.log("Aprel");
            break;
        case '4':
            
            listDaysForFrom(31,fromSel2);
            console.log("May");
            break;
        case '5':
             
            listDaysForFrom(30,fromSel2);
            console.log("Iyun");
            break;
        case '6':
           
            listDaysForFrom(31,fromSel2);
            console.log("Iyul");
            break;
        case '7':
            
            listDaysForFrom(31,fromSel2);
            console.log("Avqust");
            break;
        case '8':
             
            listDaysForFrom(30,fromSel2);
            console.log("Sentyabr");
            break;
        case '9':
            
            listDaysForFrom(31,fromSel2);
            console.log("Oktyabr");
            break;
        case '10':
            
            listDaysForFrom(30,fromSel2);
            console.log("Noyabr");
            break;
        case '11':
            
            listDaysForFrom(31,fromSel2);
            console.log("Dekabr");
            break;

     }
}
fromSel2.onchange=()=>{
    listClockForFrom(fromSel3);
}
fromSel3.onchange=()=>{
    listMinuteForFrom(fromSel4);
    
}
fromSel4.onchange=()=>{
  listMonthsForTo();
    
}
toSel1.onchange=function(){
    
    switch (this.value){
        case '0':
           
           listDaysForFrom(31,toSel2);
           console.log("Yanvar");
           break;
        case '1':
           
           listDaysForFrom(new Date(2020,2,0).getDate(),toSel2);
           console.log("Fevral");
           break;
        case '2':
           
           listDaysForFrom(31,toSel2);
           console.log("Mart");
           break;
       case '3':
           
           listDaysForFrom(30,toSel2);
           console.log("Aprel");
           break;
       case '4':
           
           listDaysForFrom(31,toSel2);
           console.log("May");
           break;
       case '5':
            
           listDaysForFrom(30,toSel2);
           console.log("Iyun");
           break;
       case '6':
          
           listDaysForFrom(31,toSel2);
           console.log("Iyul");
           break;
       case '7':
           
           listDaysForFrom(31,toSel2);
           console.log("Avqust");
           break;
       case '8':
            
           listDaysForFrom(30,toSel2);
           console.log("Sentyabr");
           break;
       case '9':
           
           listDaysForFrom(31,toSel2);
           console.log("Oktyabr");
           break;
       case '10':
           
           listDaysForFrom(30,toSel2);
           console.log("Noyabr");
           break;
       case '11':
           
           listDaysForFrom(31,toSel2);
           console.log("Dekabr");
           break;

    }
}
toSel2.onchange=()=>{
   listClockForFrom(toSel3);
}
toSel3.onchange=()=>{
   listMinuteForFrom(toSel4);
}


calcButton.onclick=()=>{
   if(fromSel1.value!=toSel1.value && Number(fromSel1.value)<Number(toSel1.value))
   {
   clearInterval(time);
   let a=Number(fromSel2.value)+1;
   let b=Number(fromSel1.value);
   let a_san=0;
   let b_san=0;
   toplamGun=0;
   generalSec=0;
   let dayStart=Math.abs(a-(new Date(2020,b+1,0).getDate()));
   let c=Number(toSel1.value);
   let d=Number(toSel2.value)+1;
   let dayEnd=d;
   toplamGun=(dayStart+dayEnd);

   for(let i=b+1;i<c;i++){
       toplamGun+=new Date(2020,i+1,0).getDate();
   }
   a_san=(86400-(Number(fromSel3.value)*3600+Number(fromSel4.value)*60));
   b_san=Number(toSel3.value)*3600+Number(toSel4.value)*60;
   generalSec=(86400*toplamGun+a_san+b_san);
   count=generalSec;
   basla=count;
   gun= Math.floor(count/86400);
   count=Math.abs(count-(86400*gun));
   saat= Math.floor(count/3600);
   count=Math.abs(count-(3600*saat));
   deq= Math.floor(count/60);
   count=Math.abs(count-(60*deq));
   document.getElementById("result").innerHTML= gun+  " gun "+saat+"   saat "+deq+"   deq "+san+"   san ";
   time=setInterval(timeLapse,1000);
}
else if(fromSel1.value==toSel1.value && Number(fromSel2.value)<=Number(toSel2.value)){
    clearInterval(time);
    let a=Number(fromSel2.value)+1;
    let b=Number(toSel2.value)+1;
    let a_san=0;
    let b_san=0;
    toplamGun=0;
    generalSec=0;
    a_san=(86400-(Number(fromSel3.value)*3600+Number(fromSel4.value)*60));
    b_san=Number(toSel3.value)*3600+Number(toSel4.value)*60;
    toplamGun=Math.abs(a-b);
    generalSec=(86400*toplamGun+a_san+b_san);
   count=generalSec;
   basla=count;
   gun= Math.floor(count/86400);
   count=Math.abs(count-(86400*gun));
   saat= Math.floor(count/3600);
   count=Math.abs(count-(3600*saat));
   deq= Math.floor(count/60);
   count=Math.abs(count-(60*deq));
   document.getElementById("result").innerHTML= gun+  " gun "+saat+"   saat "+deq+"   deq "+san+"   san ";
   time=setInterval(timeLapse,1000);
  


}
   
   
   
}
function timeLapse(){
    document.getElementById("result").innerHTML= gun+  " gun "+saat+"   saat "+deq+"   deq "+san+"   san ";
    if(san!=0){
        san--;
        
    }
    else{
        san=59;
        if(deq!=0){
            deq--;
        }
        else{
            deq=59;
            if(saat!=0){
                saat--;
            }
            else{
                saat=23;
                if(gun!=0)
                {
                    gun--;
                }
            }
        }
    }
    saygac++;
    if(saygac==(basla+2)){
        clearInterval(time);
    }
}