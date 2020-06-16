(function () {
  const selects = document.querySelectorAll(".form-select");
  selects.forEach((select) => {
    const txt = select.querySelector(".txt");
    const input = select.querySelector("input");
    const items = select.querySelectorAll("li");
    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        txt.innerHTML = e.currentTarget.innerHTML;
        input.value = e.currentTarget.dataset.value;
      });
    });
    select.addEventListener("click", handleEvent);
  });
  function handleEvent(e) {
    e.stopPropagation();
    resetUi(e.currentTarget);
    const ariaExpanded = e.currentTarget.getAttribute("aria-expanded");
    const toAriaExpanded = ariaExpanded === "true" ? false : true;
    e.currentTarget.setAttribute("aria-expanded", `${toAriaExpanded}`);
    if (toAriaExpanded) {
      window.addEventListener("click", handleEventWin);
    }
  }
  function handleEventWin() {
    resetUi();
    window.removeEventListener("click", handleEventWin, false);
  }
  function resetUi(currentTarget) {
    selects.forEach((select) => {
      if (select !== currentTarget) {
        select.setAttribute("aria-expanded", "false");
      }
    });
  }
})();
