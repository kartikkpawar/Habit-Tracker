const modal = document.getElementById("modalContainer");

// Modal inputs and button
const habitInput = document.getElementById("habitInput");
const goalInput = document.getElementById("goalInput");
const saveButton = document.getElementById("saveButton");

// opening modal
function openModal() {
  modal.style.display = "flex";
}

// closing modal
function closeModal() {
  habitInput.value = "";
  goalInput.value = "";
  modal.style.display = "none";
}

saveButton.addEventListener("click", (e) => {
  if (habitInput.value === "" || goalInput.value === "")
    return alert("Enter all fields");
  fetch("/addHabit", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ habit: habitInput.value, goal: goalInput.value }),
  }).then(() => {
    habitInput.value = "";
    goalInput.value = "";
    window.location.reload();
  });
});
