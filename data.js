const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".container");

/* ---- NO BUTTON RUN FROM MOUSE ---- */
container.addEventListener("mousemove", (e) => {

  const rect = noBtn.getBoundingClientRect();

  const distanceX = Math.abs(e.clientX - rect.left);
  const distanceY = Math.abs(e.clientY - rect.top);

  if (distanceX < 80 && distanceY < 80) {

    const maxX = container.offsetWidth - noBtn.offsetWidth;
    const maxY = container.offsetHeight - noBtn.offsetHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
  }

});


/* ---- YES CELEBRATION ---- */
function celebrate() {

  document.getElementById("mainImage").src =
    "https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif";

  document.getElementById("celebration").innerHTML = `
      🎉 SHE SAID YESSSS 🎉 <br>
      💃 Celebration Mode Activated 💃 <br>
      <img class="dance-img"
       src="https://media.giphy.com/media/l0MYC0LajbaPoEADu/giphy.gif">
  `;

}
