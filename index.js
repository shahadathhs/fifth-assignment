const seatLeft = document.getElementById("left-seat").innerText;
let leftSeat = parseInt(seatLeft);

const seatNumber = document.getElementById("seat-num").innerText;
let selectedSeat = parseInt(seatNumber);

const seats = document.getElementsByClassName("seat");

for (const seat of seats) {
  seat.addEventListener("click", function () {
    const seatName = seat.innerText;
    const seatClass = "Economy";
    const seatPrize = 550;

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

    leftSeat--;
    document.getElementById("left-seat").innerText = leftSeat;
    selectedSeat++;
    document.getElementById("seat-num").innerText = selectedSeat;  
  })
}
