// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            
            // Get form data
            const formData = {
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value,
                details: document.getElementById('details').value,
                workTypes: getSelectedWorkTypes()
            };
            
            // Validate form
            if (validateForm(formData)) {
                // Here you would typically send the data to your server
                console.log('Form data:', formData);
                alert('Thank you for your submission! We will contact you soon.');
                form.reset();
            }
        });
    }
});

// Get all selected work types from checkboxes
function getSelectedWorkTypes() {
    const checkboxes = document.querySelectorAll('input[name="work"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

// Form validation
function validateForm(data) {
    if (!data.email || !isValidEmail(data.email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    if (!data.phone || !isValidPhone(data.phone)) {
        alert('Please enter a valid phone number');
        return false;
    }
    
    if (!data.address.trim()) {
        alert('Please enter your address');
        return false;
    }
    
    if (!data.details.trim()) {
        alert('Please describe the work you need');
        return false;
    }
    
    return true;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation
function isValidPhone(phone) {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone);
}