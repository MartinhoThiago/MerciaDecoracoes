import DropdownMenu from './modules/dropdown-menu.js';
import ativaHamburguer from './modules/hamburguer-menu.js';

const dropdown = new DropdownMenu('[data-dropdown]');
dropdown.init();

function enviarFormulario() {
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("#contatoFormulario");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const formData = new FormData(form);
            const jsonData = {};

            formData.forEach((value, key) => {
                jsonData[key] = value;
            });

            fetch("http://localhost:3000/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jsonData),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        // Mostrar mensagem de sucesso
                        alert(data.message);
                        form.reset(); // Resetar o formulário
                    } else {
                        // Mostrar mensagem de erro
                        alert(data.message);
                    }
                })
                .catch(error => {
                    // Mostrar mensagem para erros não capturados
                    alert("Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.");
                });
        });
    });
}

enviarFormulario();
ativaHamburguer();