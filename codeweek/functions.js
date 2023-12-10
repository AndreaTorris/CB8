//Baseline

const endpoint = "https://jsonplaceholder.typicode.com/todos";

//Async

const appointmentGet = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
};

appointmentGet().then((appointments) => {
  appointments.map((appointment) => {
    if (appointment.completed === true) {
      const completedAppointmentEl = document.createElement("div");
      const listEl = document.createElement("ul");
      let lesserListElOne = document.createElement("li");
      let lesserListElTwo = document.createElement("li");
      let lesserListElThree = document.createElement("li");
      let lesserListElFour = document.createElement("li");
      listEl.className = "list";

      let strongOne = document.createElement("strong");
      strongOne.textContent = "ID: ";

      lesserListElOne.appendChild(strongOne);
      lesserListElOne.append(appointment.id);

      let strongTwo = document.createElement("strong");
      strongTwo.textContent = "Title: ";

      lesserListElTwo.appendChild(strongTwo);
      lesserListElTwo.append(appointment.title);

      let strongThree = document.createElement("strong");
      strongThree.textContent = "UserId: ";

      lesserListElThree.appendChild(strongThree);
      lesserListElThree.append(appointment.userId);

      lesserListElFour.textContent = "Status: Completato 🟢";

      listEl.append(
        lesserListElOne,
        lesserListElTwo,
        lesserListElThree,
        lesserListElFour
      );
      completedAppointmentEl.append(listEl);
      const completedAppointmentsSelector =
        document.body.querySelector(".Completed");
      completedAppointmentsSelector.append(listEl);
    } else if (appointment.completed === false) {
      const completedAppointmentEl = document.createElement("div");
      const listEl = document.createElement("ul");
      let lesserListElOne = document.createElement("li");
      let lesserListElTwo = document.createElement("li");
      let lesserListElThree = document.createElement("li");
      let lesserListElFour = document.createElement("li");

      let strongOne = document.createElement("strong");
      strongOne.textContent = "ID: ";

      lesserListElOne.appendChild(strongOne);
      lesserListElOne.append(appointment.id);

      let strongTwo = document.createElement("strong");
      strongTwo.textContent = "Title: ";

      lesserListElTwo.appendChild(strongTwo);
      lesserListElTwo.append(appointment.title);

      let strongThree = document.createElement("strong");
      strongThree.textContent = "UserId: ";

      lesserListElThree.appendChild(strongThree);
      lesserListElThree.append(appointment.userId);

      lesserListElFour.textContent = "Status: In Attesa 🟡";
      listEl.className = "list";

      listEl.append(
        lesserListElOne,
        lesserListElTwo,
        lesserListElThree,
        lesserListElFour
      );
      completedAppointmentEl.append(listEl);
      const completedAppointmentsSelector =
        document.body.querySelector(".notCompleted");
      completedAppointmentsSelector.append(listEl);
    }
  });
});

let completedButtonSelect = document.body.querySelector(".buttonOne");

completedButtonSelect.addEventListener("click", () => {
  const toHideEl = document.querySelector(".toHide");
  const toLargeEl = document.querySelector(".Completed");

  toHideEl.style.display = "none";
  toLargeEl.style.height = "80vh";
});

let showAllButtonSelect = document.body.querySelector(".buttonTwo");

showAllButtonSelect.addEventListener("click", () => {
  const toHideEl = document.querySelector(".toHide");
  const toLargeEl = document.querySelector(".notCompleted");

  if (toHideEl.style.display === "none") {
    const toHideEl = document.querySelector(".toHide");
    const toLargeEl = document.querySelector(".Completed");

    toHideEl.style.display = "block";
    toLargeEl.style.height = "40vh";
  } else {
  }
});
export { appointmentGet };
