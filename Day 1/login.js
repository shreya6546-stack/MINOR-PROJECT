const form = document.querySelector('form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (email && password) {
                alert('Login successful! (Demo)');
                // Here you would typically send a POST request to your backend
                // fetch('/api/login', { method: 'POST', body: JSON.stringify({email, password}) });
            } else {
                alert('Please fill in all fields.');
            }
        });

        // Add focus styles for accessibility
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
            });
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });