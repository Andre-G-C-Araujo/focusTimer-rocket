import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";
import { kitchenTimer } from "./sounds.js";

export const countdown = () => {
  if (!state.isRunning) {
    return;
  }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    reset();
    kitchenTimer.play();
    return;
  }

  updateDisplay(minutes, seconds);
  setTimeout(() => countdown(), 300);
};

export const updateDisplay = (minutes, seconds) => {
  // ?? = observa se é null, se nao for acresceta o valor de state.minutes
  minutes = minutes ?? state.minutes; // ?? nullish coalesing operator
  seconds = seconds ?? state.seconds;

  // textContent = Atualiza
  el.minutes.textContent = String(minutes).padStart(2, "0");
  //padStart(arg1, arg2)... arg1 = quantidade de caracteres
  //arg2 = caso nao atingir a qtd, acrescentar o que? ex: 0
  el.seconds.textContent = String(seconds).padStart(2, "0");
};
