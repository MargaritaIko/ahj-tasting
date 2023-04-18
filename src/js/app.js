import "../css/style.css";
import NPSicons from "./NPSicon";
import paymentSysType from "./npsCheck";
import luhnChk from "./lenghtCheck";
import CallResponses from "./serverResponse";
import lenghtCheck from "./lenghtCheck";

window.addEventListener("load", () => {
  const iconManager = new NPSicons();
  iconManager.iconSetter();

  const response = new CallResponses();
  const cardForm = document.querySelector(".validate-form");
  const resetBtn = document.querySelector(".reset-button");
  const inputField = document.getElementById("validate-form__input");

  cardForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const cardType = paymentSysType(inputField.value);
    if (cardType && lenghtCheck(inputField.value)) {
      response.cardTypeFound(cardType);
    } else if (inputField.value !== "") {
      response.cardTypeNotFound();
    }
  });

  resetBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    response.inputClear();
  });
});
