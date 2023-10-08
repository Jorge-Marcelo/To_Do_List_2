/*
Autor: Jorge Marcelo
Data de Criação: 07/10/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/

/*Cominucação do HTML com JS usando os botões e input*/
const input = document.querySelector("input");
const button = document.querySelector("button");

/*Adiciona um novo item na lista ao apertar o botão enter do teclado
ou ao clicar caso contrario não adiciona nada por isso o null*/
button.addEventListener("click", adicionarLista);
input.addEventListener("keyup", (evento) => {
evento.keyCode === 13 ? adicionarLista(evento) : null;
});

/*Fzendo a comunicação do DOM pegando 
todos os itens da lista e botões*/
function adicionarLista(evento) {
const incompleta = document.querySelector(".incompleta");
const completa = document.querySelector(".completa");
const novoItemLista = document.createElement("li");
const marcarButton = document.createElement("button");
const deletarButton = document.createElement("button");

/*Adicionar botões de completo e deletar ao HTML*/
marcarButton.innerHTML = '<i class="fa fa-check"></i>';
deletarButton.innerHTML = '<i class="fa fa-trash"></i>';

/*Se o input de digitar tarefa não estiver vazio
vai adicionar todos os itens da lista*/
if (input.value !== "") {
novoItemLista.textContent = input.value;
input.value = "";
incompleta.appendChild(novoItemLista);
novoItemLista.appendChild(marcarButton);
novoItemLista.appendChild(deletarButton);
}

/*Escutador de evento caso a tarefa estiver marcada como concluida
vai adicionar as atrefas concluidas e vai remover das atefas incompletas*/
marcarButton.addEventListener("click", function () {
const itemLista = this.parentNode;
itemLista.remove();
completa.appendChild(itemLista);
marcarButton.style.display = "none";
});

/*Mesa função de cima mas vai deletar a tarefa seja ela completa ou não*/
deletarButton.addEventListener("click", function () {
const itemLista = this.parentNode;
itemLista.remove();
});
}

/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink) {
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function () {
instagram(instgramLink);
});

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink) {
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function () {
threads(threadsLink);
});

/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink) {
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function () {
linkedin(linkedinLink);
});

/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink) {
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function () {
github(githubLink);
});
