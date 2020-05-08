var nome = "Ramon";
var aula = "Desenvolvimento Web";
console.log(nome);
console.log(aula);
// alert("oi");
// confirm("Você deseja mesmo sair?");

let sectionIdSelect = document.getElementById("paragrafo1");
let texto = "<h1> ... escrevendo algo</h1>";
sectionIdSelect.innerHTML = sectionIdSelect.textContent+texto;

sectionIdSelect.style.color = "red";
console.log("mudei a cor do paragrafo");
confirm("deseja mesmo apagar o conteudo?");

let seletorId = document.getElementById("section1");
seletorId.style.display = "none";

function OlaMundo() {
    alert("Hello World");
}