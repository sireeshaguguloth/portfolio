document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (!name || !email || !message) {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = 'red';
        return;
    }
    // Simulate form submission
    formMessage.textContent = 'Thank you for reaching out, ' + name + '!';
    formMessage.style.color = 'green';
    this.reset();

    // Add response to the Responses section
    const responsesList = document.getElementById('responsesList');
    if (responsesList) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${name}</strong> (${email}):<br>${message}`;
        responsesList.prepend(li);
    }
});