// Add subtle interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add floating effects to the role cards on mousemove for 3D feel
    const cards = document.querySelectorAll('.role-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) translateY(0)`;
        });
    });
});

// Mock login animation
function animateLogin(form, type) {
    if (type === 'student') {
        const roll = form.querySelector('#roll').value;
        const password = form.querySelector('#password').value;
        
        const rollRegex = /^[0-9]{2}[A-Z]{3}[0-9]{4}$/;
        
        if (!rollRegex.test(roll)) {
            alert('Registration number must be 2 numbers, 3 capital letters, followed by 4 numbers (e.g., 12ABC3456).');
            return;
        }
        
        if (password !== roll + 'S') {
            alert('Invalid credentials. Please verify your Registration Number and Password.');
            return;
        }
    } else if (type === 'teacher') {
        const empId = form.querySelector('#empId').value;
        const password = form.querySelector('#password').value;

        if (password !== empId + 'S') {
            alert('Invalid credentials. Please verify your Employee ID and Password.');
            return;
        }
    }

    const btn = form.querySelector('.btn-submit');
    const originalText = btn.innerHTML;
    
    // Set loading state
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Authenticating...';
    btn.style.opacity = '0.8';
    btn.style.pointerEvents = 'none';
    
    // Simulate API call
    setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Success';
        btn.style.background = '#10b981'; // green color
        
        setTimeout(() => {
            if (type === 'student') {
                window.location.href = 'student-dashboard.html';
            } else {
                window.location.href = 'teacher-dashboard.html';
            }
        }, 600);
    }, 1200);
}
