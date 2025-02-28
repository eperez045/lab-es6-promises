getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step2}</li>`;

      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step3}</li>`;

        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step4}</li>`;
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document
            .querySelector("#mashedPotatoesImg")
            .removeAttribute("hidden");
        });
      });
    });
  });
});

// Iteration 2 - using promises

// Iteration 2 - using promises
obtainInstruction("steak", 0).then((step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;

  obtainInstruction("steak", 1).then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    obtainInstruction("steak", 2).then((step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
      obtainInstruction("steak", 3).then((step3) => {
        document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
        obtainInstruction("steak", 4).then((step4) => {
          document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
          obtainInstruction("steak", 5).then((step5) => {
            document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
            obtainInstruction("steak", 6).then((step6) => {
              document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
              obtainInstruction("steak", 7).then((step7) => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>${step7}</li>`;
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>Stake is ready!</li>`;
                document.querySelector("#steakImg").removeAttribute("hidden");
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 3 using async/await
async function myFunc() {
  try {
    let step0 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    let step1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    let step2 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    let step3 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    let step4 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    let step5 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    let step6 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (err) {
    console.log(err);
  }
}
myFunc();

// Bonus 2 - Promise all

let array = [
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
];
Promise.all(array)
  .then((value) => {
    console.log(value);
    value.forEach((step) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${step}</li>`;
    });

    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>brusselsSprouts is ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((err) => console.log(err));