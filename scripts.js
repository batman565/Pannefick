function toggleForm(event) {
    const formElement = document.getElementById('form'); 
    const currentDisplay = formElement.style.display; 
    const formelem = document.getElementById('closebutton'); 


    if (currentDisplay === 'none' || currentDisplay === '') { 
        formElement.style.display = 'block'; 
    }
    else {
        formElement.style.display = 'none'; 
    }
}

function closeForm() {
    const formElement = document.getElementById('form');
    formElement.style.display = 'none';
}