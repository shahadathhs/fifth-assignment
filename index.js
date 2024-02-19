const seatLeft = document.getElementById("left-seat").innerText;
let leftSeat = parseInt(seatLeft);

const seatNumber = document.getElementById("seat-num").innerText;
let selectedSeat = parseInt(seatNumber);



let seatString = "";

const seats = document.getElementsByClassName("seat");

for (const seat of seats) {
  seat.addEventListener("click", function () {
    if (selectedSeat <= 3) {
      const seatName = seat.innerText;
      const seatClass = "Economy";
      const seatPrize = 550;

      if (seatString.includes(seatName) !== true) {
        const nameContainer = document.getElementById("seat-name");
        const p = document.createElement("p");
        p.innerText = seatName;
        nameContainer.appendChild(p);
      
        const classContainer = document.getElementById("seat-class");
        const span = document.createElement("span");
        span.innerText = seatClass;
        classContainer.appendChild(span);
      
        const prizeContainer = document.getElementById("seat-prize");
        const b = document.createElement("b");
        b.innerText = seatPrize;
        prizeContainer.appendChild(b);

        seat.classList.add("bg-green-400");

        document.getElementById("apply-btn").removeAttribute('disabled');

        leftSeat--;
        document.getElementById("left-seat").innerText = leftSeat;
        selectedSeat++;
        document.getElementById("seat-num").innerText = selectedSeat;

        seatString = seatString + seatName;
  
        totalPrize = selectedSeat * 550;
        document.getElementById("total-prize").innerText = totalPrize;

        const restTotal = document.getElementById("grand-total");
        restTotal.innerText = totalPrize;
      } else {
        alert("Already selected");
      }
    } else {
      alert("You can't select more than four seats.");
    }
  })
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function(){
  // get the value from input
  const couponCode = document.getElementById("input-field").value;
    if (couponCode === "NEW15") {
      //  discount calculation
      const discountAmount = totalPrize * 0.15;
      // rest total calculation
      const restTotal = document.getElementById("grand-total");
      restTotal.innerText = totalPrize - discountAmount.toFixed(2);
      const hide = document.getElementById("discount");
      hide.classList.add("hidden");
    } else if (couponCode === "Couple 20") {
       //  discount calculation
       const discountAmount = totalPrize * 0.20;
       // rest total calculation
       const restTotal = document.getElementById("grand-total");
       restTotal.innerText = totalPrize - discountAmount.toFixed(2);
       const hide = document.getElementById("discount");
        hide.classList.add("hidden");
    } else {
      alert("Invalid coupon");
    }
})

const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", function(){
  const bp1 = document.getElementById("body-part-1");
  const bp2 = document.getElementById("body-part-2");

  bp1.classList.add("hidden");
  bp2.classList.remove("hidden");
})