const getInput = document.getElementById('input-field');
const result = document.getElementById('result');

const emailValidator = () => {
    const getEmail = getInput.value;
    if (getEmail == '') {
        result.innerText = 'Please enter email address.!!!!!';
        result.style.color = 'orange';
    }
    else {
        const regularExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regularExpression.test(getEmail)) {
            result.innerText = `Your email is valid Here is your Email : ${getEmail}`;
            result.style.color = 'green';
        }
        else {
            result.innerText = `Wrong Email`;
            result.style.color = 'red';
        }
    }

}