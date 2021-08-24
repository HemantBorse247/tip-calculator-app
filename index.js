const bill = document.getElementById("bill-amount-input");
const tipbtns = document.querySelectorAll(".btn");
const tipctm = document.getElementById("tip-button-ctm");
const people = document.getElementById("no-of-people-input");
const results = document.getElementsByClassName("final-detail-amount-input");

// results[0].value = 24;
bill.addEventListener("input", parsebill);
tipctm.addEventListener("input", parsetipctm);
people.addEventListener("input", parsePeople);
tipbtns.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

function parsebill() {
  billValue = parseFloat(bill.value);
  // console.log(billValue);

  calculateTip();
}

function handleClick(event) {
  tipbtns.forEach((btn) => {
    if (event.target.innerHTML == btn.innerHTML) {
      tipValue = parseFloat(btn.innerHTML);
      // console.log(tipValue);
    }
  });

  tipctm.value = "";
  calculateTip();
}

function parsetipctm() {
  tipValue = parseFloat(tipctm.value);
  // console.log(ctmTipValue);
  if (ctmTipValue !== "") {
    calculateTip();
  }
}

function parsePeople() {
  numPeople = parseFloat(people.value);
  // console.log(numPeople);
  if (numPeople >= 1) {
    calculateTip();
  }
}

function calculateTip() {
  // console.log("tip chal gaya");
  if (numPeople >= 1) {
    tipAmount = (billValue * tipValue) / (numPeople * 100);
    total = (billValue + tipAmount) / numPeople;
    //  tat = String(total);
    // console.log(tat + " ye hai kuch toh");
    results[0].value = "$" + String(tipAmount);
    results[1].value = "$" + String(total);
  }
}
