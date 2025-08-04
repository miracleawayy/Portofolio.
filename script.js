// Script untuk form kontak - Validasi sederhana
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan form untuk tidak langsung dikirim

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Validasi form
    if (name === '' || email === '' || message === '') {
        alert('Semua kolom harus diisi!');
        return;
    }

    // Jika form valid
    alert('Pesan Anda telah terkirim! Terima kasih.');
    // Mengosongkan form setelah pengiriman
    document.getElementById('contact-form').reset();
});

// Script untuk smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Script untuk efek on scroll (opsional)
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (section.offsetTop < scrollPosition - 100) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

