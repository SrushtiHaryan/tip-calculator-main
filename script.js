"use strict";
const bill = document.querySelector("#bill");
const numpeep = document.querySelector("#numpeep");
const error = document.querySelector("#invalid-people");
const reset = document.querySelector(".reset");
// let resetBtn = document.querySelector("button");
const Btn1 = document.querySelector("#card-tip-1");
const Btn2 = document.querySelector("#card-tip-2");
const Btn3 = document.querySelector("#card-tip-3");
const Btn4 = document.querySelector("#card-tip-4");
const Btn5 = document.querySelector("#card-tip-5");
const Btn6 = document.querySelector("#card-tip-6");
const gridCard = document.querySelector(".grid-card");
const Btncust = document.querySelector("#card-tip-cust");
const tip = document.querySelector("#tip-amount");
const total = document.querySelector("#total-amount");

let tipPercent;
let billAmt;
let people;
let tipAmt;
let totAmt;




function selectTip() {
  let num = this.textContent;
  tipPercent = Number(num.substring(0, num.length-1));
  //   gridCard.classList.remove('active');
  document.querySelectorAll(".active").forEach(function (item) {
    item.classList.remove("active"); // Remove the class
  });
  addCustom();
  // Then add it to the current element
  this.classList.add("active");
  
  console.log(tipPercent);
}

function customSelectTip() {
    
  
    document.querySelectorAll(".active").forEach(function (item) {
        item.classList.remove("active"); // Remove the class
    });
    this.classList.add("active");
  // Btncust.style.display="block";
  hideCustom();
}

function hideCustom() {
    if (Btncust.classList.contains("hidden")) {
        Btncust.classList.remove("hidden");
  }
}
function addCustom() {
  if (!Btncust.classList.contains("hidden")) {
      Btncust.classList.add("hidden");
  }
}

Btncust.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
    if (!Btncust.classList.contains("hidden")) {
      console.log(e.key);
      addCustom();
      if (Btncust.value > 0) {
          Btn6.innerHTML = `${Btncust.value}%`;
          tipPercent = Btncust.value;
          console.log(tipPercent);

    } else {
        Btn6.innerHTML = `Custom`;
      }
    }
  }
});


bill.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
    
      if (bill.value >= 0) {
          billAmt=Number(bill.value);
          console.log(billAmt);
          bill.style.outlineColor="hsl(172, 67%, 45%)";

    } else {
        bill.style.outlineColor="red";
      }
    }
  
});


numpeep.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
    
      if (numpeep.value > 0) {
          error.classList.add('hidden');
          people=Number(numpeep.value);
          console.log(typeof billAmt);
          numpeep.style.outlineColor="hsl(172, 67%, 45%)";

          tipAmt=((billAmt*(tipPercent/100)/people)).toFixed(2);
          totAmt=(((billAmt+billAmt*(tipPercent/100))/people)).toFixed(2);

          console.log(tipAmt);
          console.log(totAmt);

          tip.innerHTML=`$${tipAmt}`;
          total.innerHTML=`$${totAmt}`;

          

    } else {
        numpeep.style.outlineColor="red";
        error.classList.remove('hidden');
        
    }
}
  
});

function init(){
    
    bill.value=`0`;
    numpeep.value=`0`;
    document.querySelectorAll('.active').forEach(function(e){e.classList.remove('.active');});
    error.classList.add('hidden');
    Btncust.classList.add('hidden');

    document.querySelectorAll(".active").forEach(function (item) {
        item.classList.remove("active"); // Remove the class
    });
    Btn6.innerHTML = `Custom`;
    tip.innerHTML=`$0.00`;
    total.innerHTML=`$0.00`;
    // resetBtn.disabled=true;
}




Btn1.addEventListener("click", selectTip);
Btn2.addEventListener("click", selectTip);
Btn3.addEventListener("click", selectTip);
Btn4.addEventListener("click", selectTip);
Btn5.addEventListener("click", selectTip);
Btn6.addEventListener("click", customSelectTip);
reset.addEventListener("click",init);
