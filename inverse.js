function renverser() {
  var texte = document.getElementById("txt").value;
  texte = texte.split("").reverse().join("");
  console.log(texte);
  document.getElementById("res").value = texte;
}
