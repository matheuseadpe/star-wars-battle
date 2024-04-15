function randomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function calcJediStrength() {
  let dadoId = "dado-jedi-";
  let poder = 0;
  for (let i = 1; i <= 3; i++) {
    let dado = document.getElementById(dadoId + i);
    const valor = randomNumber();
    poder += valor;
    dado.innerHTML = valor;
  }

  let poderJedi = document.getElementById("poder-jedi");
  poderJedi.innerHTML = poder;
}

function calcSithStrength() {
  let dadoId = "dado-sith-";
  let poder = 0;
  for (let i = 1; i <= 3; i++) {
    let dado = document.getElementById(dadoId + i);
    let valor = randomNumber();
    poder += valor;
    dado.innerHTML = valor;
  }

  let poderSith = document.getElementById("poder-sith");
  poderSith.innerHTML = poder;
}

function resultado() {
  let poderJedi = parseInt(document.getElementById("poder-jedi").innerHTML);
  let poderSith = parseInt(document.getElementById("poder-sith").innerHTML);

  //console.log(`Jedi: ${poderJedi}\nSith: ${poderSith}`);

  let containerJedi = document.getElementById("jedi-side");
  let containerSith = document.getElementById("sith-side");

  if (poderJedi > poderSith) {
    containerJedi.classList.add("vencedor");
    containerSith.classList.add("perdedor");
  } else if (poderJedi < poderSith) {
    containerSith.classList.add("vencedor");
    containerJedi.classList.add("perdedor");
  } else {
    containerJedi.classList.remove("vencedor");
    containerJedi.classList.remove("perdedor");
    containerSith.classList.remove("vencedor");
    containerSith.classList.remove("perdedor");
  }
}

function resetResultado() {
  let containerJedi = document.getElementById("jedi-side");
  let containerSith = document.getElementById("sith-side");

  containerJedi.classList.remove("vencedor");
  containerJedi.classList.remove("perdedor");
  containerSith.classList.remove("vencedor");
  containerSith.classList.remove("perdedor");
}

function jogarDados() {
  resetResultado();
  calcJediStrength();
  calcSithStrength();
  resultado();
}
