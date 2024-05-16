const xhr = new XMLHttpRequest()
let btn_editar = document.querySelectorAll("#editar");
let valeuModalEditar = document.querySelectorAll("modal-editar")
let valueEditar = valeuModalEditar.value
var nameTask = document.querySelectorAll("#name_task")

document.addEventListener("DOMContentLoaded", function deletarTarefa() {
    var buttons = document.querySelectorAll('#deletar');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var id = button.value
            console.log("Botão pressionado com o ID:", id);
            xhr.open('POST', `http://localhost:3000/deletar`, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        console.log('Pedido bem-sucedido!');
                        window.location.reload()
                    } else {
                        console.error('Erro ao enviar o pedido.');
            }}};
    xhr.send(`id=${id}`);
});});});
document.addEventListener("DOMContentLoaded", function concluirTarefa() {
    var buttons = document.querySelectorAll('#concluir');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var id = button.value
            console.log("Botão pressionado com o ID:", id);
            xhr.open('POST', `http://localhost:3000/concluirTarefa`, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        console.log('Pedido bem-sucedido!');
                        window.location.reload()
                    } else {
                        console.error('Erro ao enviar o pedido.');
            }}};
    xhr.send(`id=${id}`);
});});});

document.addEventListener("DOMContentLoaded", function deletarTudo() {
    var buttons = document.querySelectorAll('#confirm-delete');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var id = button.textContent
            console.log("Botão pressionado com o ID:", id);
            xhr.open('POST', `http://localhost:3000/deleteAll`, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        console.log('Pedido bem-sucedido!');
                        window.location.reload()
                    } else {
                        console.error('Erro ao enviar o pedido.');
                    }}};                   
                    xhr.send(`id=${id}`);
});});});

document.addEventListener("DOMContentLoaded", function editarTarefa() {
    var buttons = document.querySelectorAll('#editar-confirm');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            let nameTask = document.querySelector("input[name='name_task']").value;
            let dateTask = document.querySelector("input[name='date_task']").value;
            console.log(`data : ${dateTask}`)
            console.log("Botão pressionado com o ID:", valueEditar);
            xhr.open('POST', `http://localhost:3000/editar`, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        console.log('Pedido bem-sucedido!');
                        window.location.reload()
                    } else {
                        console.error('Erro ao enviar o pedido.');
                    }}};                   
                    xhr.send(`id=${valueEditar}&name_task=${nameTask}&date_task=${dateTask}`);
});});});

  
function openModal(tagName, idElement = null) {
    let modal = document.querySelector(`.${tagName}`);
    let modalStyle = window.getComputedStyle(modal);
    let isModalVisible = modalStyle.display !== "none";
    
    if (!isModalVisible) {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
    }
    if (idElement !== null) {
        valueEditar = idElement;
    }
}
function closeModal(tagName){
    let modal = document.getElementsByClassName(`${tagName}`)
    modal[0].style.display = "none"
}
function home(){
    window.location.href = "http://localhost:3000/"
}