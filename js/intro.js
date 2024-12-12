// const h1 = document.getElementById("h1");

const h1 = document.querySelector("h1");

h1.addEventListener("click", skrivAntall);

console.log(h1);

let antallTrykk = 0;
function skrivAntall() {
  antallTrykk++;
  h1.textContent = "Du har trykket på meg " + antallTrykk + " ganger";
  if (antallTrykk >= 10) {
    h1.textContent =
      "Du har trykket på meg alt for mange ganger!!! SLUTT!:" + antallTrykk;
    h1.removeEventListener("click", skrivAntall);
  }
}
