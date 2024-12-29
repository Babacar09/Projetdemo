let solde = parseFloat(localStorage.getItem("solde")) || 0;
document.getElementById("currentSolde").textContent = `Solde actuel:${solde}$`;

document.getElementById("debitForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const amount = parseFloat(document.getElementById("amount").value);
  const monAffich = document.getElementById('AfficheAmount')
  console.log(monAffich);
  
  if (amount > solde) {
    document.getElementById("result").textContent = "Erreur solde insuffisant";
    document.getElementById("result").style.color = "red";
  } else {
    solde -= amount;
    localStorage.setItem("solde", solde);

    document.getElementById(
      "result"
    ).textContent = `Débit réussi. Nouveau solde : ${solde}€`;
    document.getElementById("result").style.color = "green";

    document.getElementById(
      "currentSolde"
    ).textContent = `Solde actuel : ${solde}€`;

  }
});

document.getElementById("backToBalance").addEventListener("click", function () {
  window.location.href = "../index.html";
});
