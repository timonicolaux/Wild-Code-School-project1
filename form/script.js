/* FORMULAIRE ENVOI */
const selectForm = document.getElementById('contactForm')
function submit(e) {
    e.preventDefault();
    const selectDiv = document.querySelector('.formValid')
    const selectButton = document.querySelector('.form_button')
    const selectInputName = document.querySelector('.form_name')
    const selectInputMessage = document.querySelector('.form_message')
    selectDiv.innerHTML = `
    <h1>Votre message a bien été envoyé en cuisine &#x1F468;&#x200D;&#x1F373;</h1>
    <p>Merci ${selectInputName.value} pour votre message : "${selectInputMessage.value}".</p> <p>Nous vous répondrons au plus vite. &#128512</p>
    <img src="../img/chef_happy.jpg" alt="">`
    document.querySelector('.form').style.display = 'none';

}
selectForm.addEventListener('submit', submit)