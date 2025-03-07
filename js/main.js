//js/main.js
const botaoAutor = document.getElementById('botaoAutor');
const respAutor = document.getElementById('respAutor');

botaoAutor.addEventListener('click', pegarInformacao);

const urlBase = "https://web-atv13-api-dnv.vercel.app";

async function pegarInformacao() {

  respAutor.innerText = "Aguarde... "

  try {
    const response = await fetch(urlBase);

    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    const data = await response.json();
    respAutor.innerText = data.nome;
  } catch (error) {
    console.error("Erro:", error);
    respAutor.innerText = `Erro: ${error}`;
  }
}
