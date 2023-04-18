import americanExpress from "../img/american_express_curved.png";
import dinersclub from "../img/dinersclub.png";
import discover from "../img/discover.png";
import jcb from "../img/jcb.png";
import mastercard from "../img/mastercard_curved.png";
import mir from "../img/Nspk-mir.png";
import visa from "../img/visa_curved.png";
import unionPay from "../img/UnionPay_logo.png";
import maestro from "../img/maestro_curved.png";
import visaElectron from "../img/visa_electron_curved.png";

export default class NPSicons {
  constructor() {
    this.paymentSystemList = {
      americanExpress,
      dinersclub,
      discover,
      jcb,
      mastercard,
      mir,
      visa,
      unionPay,
      maestro,
      visaElectron,
    };
  }

  iconSetter() {
    const container = document.querySelector(".container");
    /* eslint-disable-next-line */
    for (const [type, img] of Object.entries(this.paymentSystemList)) {
      const cardBox = document.createElement("div");
      cardBox.classList.add("cards__icon");
      const image = new Image();
      image.src = img;
      image.classList.add(`${type}`, "icons");
      container.insertAdjacentElement("beforeend", cardBox).appendChild(image);
    }
  }
}
