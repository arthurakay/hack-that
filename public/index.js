function onFormSubmit(event, form) {
    event.preventDefault();

    console.log(form.elements)

    return false
}

document.addEventListener('DOMContentLoaded', function(){
    const urlParams = new URLSearchParams(window.location.search);
    const msg = urlParams.get('errorMessage');

    if (msg) {
        document.getElementById('errorMessage').innerHTML = msg;
    }
});