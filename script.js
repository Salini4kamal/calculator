let a=document.createElement("div")
a.className="container"
// a.class="jumbotron text-center"
// var buttonoo=document.createElement("button")
// buttonoo.innerHTML="d"

var table=document.createElement("table")
var tr1=document.createElement("tr")
var td1=document.createElement("td")

var input=document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("id","result") 
input.setAttribute("placeholder","0") 
input.className="disResult"


var button1=createbutton("button","del")
var button2=createbutton("button",".")
var button3=createbutton("button","=")
var buttonPlus=createbutton("button","c")

var button4=createbutton("button","7")
var button5=createbutton("button","8")
var button6=createbutton("button","9")
var buttonMin=createbutton("button","+")

var button7=createbutton("button","4")
var button8=createbutton("button","5")
var button9=createbutton("button","6")
var buttonMul=createbutton("button","-")


var buttonZeroZero=createbutton("button","1")
var buttonDot=createbutton("button","2")
var buttonEqual=createbutton("button","3")
var buttonClear=createbutton("button","*")

var buttonnew=createbutton("button","(")
var buttonnew1=createbutton("button","0")
var buttonnew2=createbutton("button",")")
var buttonnew3=createbutton("button","/")


var tr2=createTrTd("tr","td",button1,button2,button3,buttonPlus)
var tr3=createTrTd("tr","td",button4,button5,button6,buttonMin)
var tr4=createTrTd("tr","td",button7,button8,button9,buttonMul)
var tr5=createTrTd("tr","td",buttonZeroZero,buttonDot,buttonEqual,buttonClear)

var tr6=createTrTd("tr","td",buttonnew,buttonnew1,buttonnew2,buttonnew3)

 

a.append(input)
// tr1.append(td1)
table.append(tr1,tr2,tr3,tr4,tr5,tr6)
a.append(table)
document.body.append(a)


function createTrTd(tr,td,butt1,butt2,butt3,butt4){
    var tr=document.createElement(tr)
    var td1=document.createElement(td)
    var td2=document.createElement(td)
    var td3=document.createElement(td)
    var td4=document.createElement(td)
    td1.append(butt1)
    td2.append(butt2)
    td3.append(butt3)
    td4.append(butt4)


    tr.append(td1,td2,td3,td4)
    return tr;
}





function createbutton(bt,val){
    var button=document.createElement(bt)

button.className="btclass"
button.innerHTML=val
return button;
} 


var result = document.getElementById("result");
 var buttons = document.querySelectorAll("button")
 var screen = ""
for(index of buttons){
    index.addEventListener('click',(e)=>{
      var buttonText = e.target.innerText;
      
          if(buttonText == "c"){
         screen = 0
           result.value = screen;
           
      }
      else if(buttonText == "="){
        result.value = eval(screen);
    }
    else if(buttonText=="del"){
      

screen =screen.slice(0,-1)
result.value = screen
      
    }
      else{
screen=""
        screen += buttonText;
        result.value = screen
    }
  })
}