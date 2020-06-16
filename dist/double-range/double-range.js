(function range() {
  const ranges = document.querySelectorAll(".d-range");
  for (const range of ranges) {
    let sliders = range.querySelectorAll("input");
    for (const slide of sliders) {
      if (slide.type === "range") {
        slide.addEventListener("input", getVals);
      }
    }
  }

  function getVals() {
    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat(slides[0].value);
    var slide2 = parseFloat(slides[1].value);
    if (slide1 > slide2) {
      var tmp = slide2;
      slide2 = slide1;
      slide1 = tmp;
    }

    var displayElement = parent.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML = "از" + slide1 + "تومان - تا" + slide2 + "تومان";
  }
})();
