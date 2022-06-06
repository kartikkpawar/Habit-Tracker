const dates = document.getElementsByClassName("date");

const datesArr = Array.from(dates);
datesArr.forEach((date, idx) => {
  if (idx === 0) {
    date.textContent = moment().subtract(idx, "days").format("DD-MM-YYYY");
  }
  if (idx === 1) {
    date.textContent = moment().subtract(idx, "days").format("DD-MM-YYYY");
  }
  if (idx === 2) {
    date.textContent = moment().subtract(idx, "days").format("DD-MM-YYYY");
  }
  if (idx === 3) {
    date.textContent = moment().subtract(idx, "days").format("DD-MM-YYYY");
  }
  if (idx === 4) {
    date.textContent = moment().subtract(idx, "days").format("DD-MM-YYYY");
  }
  if (idx === 5) {
    date.textContent = moment().subtract(idx, "days").format("DD-MM-YYYY");
  }
  if (idx === 6) {
    date.textContent = moment().subtract(idx, "days").format("DD-MM-YYYY");
  }
});
