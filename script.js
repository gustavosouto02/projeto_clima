let chave = "cebcd482eda57fa9a6714c1c2ba91885"

async function buscarCidade() {
  let dados = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=paris&appid=cebcd482eda57fa9a6714c1c2ba91885"
  ).then ( (resposta) => resposta.json() )
  // await = espere
  // fetch = acessar servidores
  // then = então
  // json = formato JS


  console.log(dados)
}

function cliqueiNoBotao() {
  let cidade = document.querySelector(".input-cidade").value

  buscarCidade()
}

