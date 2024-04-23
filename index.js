const dayBorn = document.querySelector("#dayBorn");
const monthBorn = document.querySelector("#monthBorn");
const yearBorn = document.querySelector("#yearBorn");

dayBorn.addEventListener("input", () => {
  let valueD = dayBorn.value;
  let errorDay = document.querySelector("#error-day");
  let dayLabel = document.querySelector("#dayLabel");
  if (valueD < 1 || valueD > 31) {
    errorDay.style.display = "block";
    dayLabel.classList.add("not-accepted");
  } else {
    if (dayLabel.classList.contains("not-accepted")) {
      dayLabel.classList.remove("not-accepted");
    }
    if ((errorDay.style.display = "block")) {
      errorDay.style.display = "none";
    }
  }
});

monthBorn.addEventListener("input", () => {
  let valueS = monthBorn.value;
  let errorMonth = document.querySelector("#error-month");
  let monthLabel = document.querySelector("#monthLabel");
  if (valueS < 1 || valueS > 12) {
    errorMonth.style.display = "block";
    monthLabel.classList.add("not-accepted");
  } else {
    if (monthLabel.classList.contains("not-accepted")) {
      monthLabel.classList.remove("not-accepted");
    }
    if ((errorMonth.style.display = "block")) {
      errorMonth.style.display = "none";
    }
  }
});

yearBorn.addEventListener("input", () => {
  let valueE = yearBorn.value;
  let errorYear = document.querySelector("#error-year");
  let yearLabel = document.querySelector("#yearLabel");
  if (valueE < 1 || valueE > 2024) {
    errorYear.style.display = "block";
    yearLabel.classList.add("not-accepted");
  } else {
    if (yearLabel.classList.contains("not-accepted")) {
      yearLabel.classList.remove("not-accepted");
    }
    if ((errorYear.style.display = "block")) {
      errorYear.style.display = "none";
    }
  }
});

function validarIdade() {
  let valueD = dayBorn.value;
  let valueS = monthBorn.value;
  let valueE = yearBorn.value;

  if (
    valueD == "" ||
    valueS == "" ||
    valueE == "" ||
    dayBorn.value < 1 ||
    dayBorn.value > 31 ||
    monthBorn.value < 1 ||
    monthBorn.value > 12 ||
    yearBorn.value < 1 ||
    yearBorn.value > 2024
  ) {
    alert("Insira dados válidos");
  } else {
    const valueYear = document.querySelector("#valueYear");
    const valueMonths = document.querySelector("#valueMonths");
    const valueDays = document.querySelector("#valueDays");

    const dataMain = new Date();
    const anoNasc = document.querySelector("#yearBorn").value;
    const mesNasc = document.querySelector("#monthBorn").value;
    const diaNasc = document.querySelector("#dayBorn").value;

    const anoAtual = dataMain.getFullYear();
    const mesAtual = dataMain.getMonth() + 1;
    const diaAtual = dataMain.getDate();

    let idade = anoAtual - anoNasc;
    let iF = null;
    let mF = null;
    let dF = 0;

    if (mesNasc != mesAtual) {
      iF = idade - 1;
    } else {
      iF = idade;
    }
    if (iF == idade - 1) {
      mF = 12 - mesNasc + mesAtual;
    } else {
      if (mesNasc > mesAtual) {
        mF = mesNasc - mesAtual;
      } else {
        mF = mesAtual - mesNasc;
      }
    }
    if (
      mesNasc - mesAtual == 0 ||
      (mesAtual - mesNasc == 0 && diaAtual == diaNasc)
    ) {
      console.log("Feliz Aniversário!");
    }
    if (mesNasc == mesAtual - 1 && diaAtual != diaNasc) {
      if (mesNasc % 2 == 0) {
        dF = 30 - diaNasc + diaAtual;
        if (dF > 30) {
          dF = 30 - dF;
          mF++;
        }
      } else if (mesNasc % 2 != 0) {
        dF = 30 - diaNasc + diaAtual;
        if (dF > 30) {
          dF = (30 - dF) * -1;
        }
      }
    }
    if (mesNasc == mesAtual - 1 && diaAtual == diaNasc) {
      dF = 0;
    }
    if (mesNasc == mesAtual - 1 && diaAtual < diaNasc) {
      dF = diaNasc - diaAtual;
    } // problema de logica
    if (mesNasc != mesAtual - 1 && diaAtual > diaNasc) {
      dF = diaAtual - diaNasc;
    } // problema de logica
    if (mesNasc != mesAtual - 1 && diaAtual < diaNasc) {
      dF = diaNasc - diaAtual;
    }

    if (
      (mesAtual != mesNasc && mesAtual == 1) ||
      mesAtual == 3 ||
      mesAtual == 5 ||
      mesAtual == 7 ||
      mesAtual === 8 ||
      mesAtual === 10 ||
      mesAtual === 12
    ) {
      if (
        mesNasc == 1 ||
        mesNasc == 3 ||
        mesNasc == 5 ||
        mesNasc == 7 ||
        mesNasc === 8 ||
        mesNasc === 10 ||
        mesNasc === 12
      ) {
        dF = 31 - diaNasc + (31 - diaAtual);
      } else if (
        mesNasc == 4 ||
        mesNasc == 6 ||
        mesNasc == 9 ||
        mesNasc == 11
      ) {
        dF = 30 - diaNasc + (31 - diaAtual);
      } else if (mesNasc === 2) {
        dF = 28 - diaNasc + (31 - diaAtual);
      }
    } else if (
      mesAtual === 1 ||
      mesAtual === 3 ||
      mesAtual === 5 ||
      mesAtual === 7 ||
      mesAtual === 8 ||
      mesAtual === 10 ||
      mesAtual === 12
    ) {
      if (
        mesNasc === 1 ||
        mesNasc === 3 ||
        mesNasc === 5 ||
        mesNasc === 7 ||
        mesNasc === 8 ||
        mesNasc === 10 ||
        mesNasc === 12
      ) {
        dF = 31 - diaNasc + (30 - diaAtual);
      } else if (
        mesNasc === 4 ||
        mesNasc === 6 ||
        mesNasc === 9 ||
        mesNasc === 11
      ) {
        dF = 30 - diaNasc + (30 - diaAtual);
      } else if (mesNasc === 2) {
        dF = 28 - diaNasc + (30 - diaAtual);
      }
    }

    if (mF > 12) {
      mF = (12 - mF) * -1;
      iF++;
    }
    iF = iF < 10 ? "0" + iF : iF;
    mF = mF < 10 ? "0" + mF : mF;
    dF = dF < 10 ? "0" + dF : dF;

    valueYear.innerHTML = iF;
    valueMonths.innerHTML = mF;
    valueDays.innerHTML = dF;
  }
}

const btnLineDivisor = document.querySelector("#btn_line_divisor");
btnLineDivisor.addEventListener("click", validarIdade);
