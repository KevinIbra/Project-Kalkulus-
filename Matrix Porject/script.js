function calculateDeterminant() {
    // Mengambil nilai dari input matriks
    var a11 = parseFloat(document.getElementById('a1').value);
    var a12 = parseFloat(document.getElementById('a2').value);
    var a13 = parseFloat(document.getElementById('a3').value);
    var b11 = parseFloat(document.getElementById('b1').value);
    var b12 = parseFloat(document.getElementById('b2').value);
    var b13 = parseFloat(document.getElementById('b3').value);
    var c11 = parseFloat(document.getElementById('c1').value);
    var c12 = parseFloat(document.getElementById('c2').value);
    var c13 = parseFloat(document.getElementById('c3').value);

    // Menghitung determinan menggunakan rumus yang diberikan
    var determinant = (
        (a11 * b12 * c13) +
        (a12 * b13 * c11) +
        (a13 * b11 * c12) -
        (a13 * b12 * c11) -
        (a11 * b13 * c12) -
        (a12 * b11 * c13)
    );

    // Menampilkan hasil determinan di dalam div dengan id "result"
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = <p>Determinant: ${determinant}</p>;

    // Menampilkan langkah-langkah pengerjaan
    var stepsDiv = document.getElementById('steps');
    stepsDiv.innerHTML = `
        <h3>Steps:</h3>
        <p>${a11}${b12}${c13} + ${a12}${b13}${c11} + ${a13}${b11}${c12} - ${a13}${b12}${c11} - ${a11}${b13}${c12} - ${a12}${b11}${c13}</p>
    `;
}
// Function to add smooth scroll behavior to anchor links
function addSmoothScrolling() {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    addSmoothScrolling();
});

// animasi zoom
document.addEventListener('DOMContentLoaded', function() {
    var profiles = document.querySelectorAll('.profile');

    profiles.forEach(function(profile) {
        profile.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });

        profile.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

    document.addEventListener('DOMContentLoaded', function() {
        var profileShelva = document.querySelector('.profile-shelva');

        profileShelva.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });

        profileShelva.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

