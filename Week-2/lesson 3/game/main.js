document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
    const errorContainer = document.getElementById('errorContainer');

    submitBtn.addEventListener('click', validateForm);

    function validateForm() {
        const name = document.getElementById('name').value;
        const salary = parseInt(document.getElementById('salary').value);
        const birthday = document.getElementById('birth').value;
        const phone = document.getElementById('phone').value;

        errorContainer.innerHTML = '';
        if (name.length <= 2)
                 displayError('Name must be longer than 2 characters.');
        if (salary <= 10000 || salary >= 16000 || isNaN(salary))
                 displayError('Salary must be between 10,000 and 16,000.');
        if (!birthday)
                 displayError('Birthday may not be null.');
        if (phone.length !== 10 || isNaN(phone))
                 displayError('Phone must be 10 digits long.');
    }

    function displayError(message) {
        const errorElement = document.createElement('div');
        errorElement.textContent = message;
        errorContainer.appendChild(errorElement);
        errorElement.style.color = 'red'; 
    }
});
