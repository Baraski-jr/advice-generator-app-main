// const url = "https://api.adviceslip.com/advice";
const adviceTxt = document.querySelector(".advice-text");
const adiveId = document.querySelector(".code");
const btn = document.querySelector(".generate-adv-btn");

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  if (response.status === 200) {
    let data = await response.json();
    adiveId.textContent = data["slip"].id;
    adviceTxt.textContent = data["slip"].advice;
  } else {
    console.log("not ready");
  }
}

btn.addEventListener("click", getAdvice);
window.onload = () => {
  getAdvice();
};
