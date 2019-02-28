document.addEventListener("input", function (event) {
  let formElem = event.target.closest("[data-test='maker-goal-item-new']");

  if (formElem) {
    let inputElem = formElem.querySelector("input");
    let lengthLimitElement = formElem.querySelector(".injected__goal-length-limit");
    let length = inputElem.value.length;
    let maxLength = 80;
    
    if (!lengthLimitElement) {
      lengthLimitElement = document.createElement('div');
      lengthLimitElement.setAttribute("class", "injected__goal-length-limit");
      formElem.appendChild(lengthLimitElement);
    }

    if (length > 80) {
      lengthLimitElement.classList.add("injected__goal-length-limit--alert");
    } else {
      lengthLimitElement.classList.remove("injected__goal-length-limit--alert");
    }

    lengthLimitElement.innerText = "" + length + "/" + maxLength;
  }
});