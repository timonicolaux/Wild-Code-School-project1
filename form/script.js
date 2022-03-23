/* FORMULAIRE ENVOI */
const selectForm = document.getElementById('contactForm')
function submit(e) {
    e.preventDefault();
    const selectDiv = document.querySelector('.formValid')
    const selectButton = document.querySelector('.form_button')
    const selectInputName = document.querySelector('.form_name')
    const selectInputMessage = document.querySelector('.form_message')



    selectDiv.innerHTML = `
    <h1>Bien reçu en cuisine !</h1>
    <p>Merci ${selectInputName.value} pour votre message : "${selectInputMessage.value}".</p> <p>Nous vous répondrons au plus vite. :)</p>
    <img src="../img/chef_happy.jpg" alt="">`
    document.querySelector('.form').style.display = 'none';

}
selectForm.addEventListener('submit', submit)


/* FORMULAIRE VALIDATION */

/* function dataValid() {
    const name = document.forms['contact']['name'];
    const email = document.forms['contact']['email'];
    const message = document.forms['contact']['message'];

    if (name.value === "") {
        alert('Vous devez renseigner votre nom.');
        name.focus();
        return false;
    }

    if (email.value === "") {
        alert('Vous devez renseigner votre email.');
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < 0) {
        alert('Vous devez renseigner un email valide.');
        email.focus();
        return false;
    }

    if (message.value === "") {
        alert('Vous devez renseigner votre message.');
        email.focus();
        return false;
    }
    return submit();
}
*/

