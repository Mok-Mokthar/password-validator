export default function validator(pass) {
    var passwordInput = document.getElementById('password').value;

    var messageContainer = document.getElementById('messageContainer');
    let button = document.getElementById('button');
    var title = document.getElementById('title');
    var title2 = document.getElementById('title2');
    var title3 = document.getElementById('title3');
    var title4 = document.getElementById('title4');

    // Réinitialisation des messages d'erreur
    title.textContent = "";
    title2.textContent = "";
    title3.textContent = "";
    title4.textContent = "";

    function handleClick() {
        // Test 1: Le mot de passe doit comporter au moins 8 caractères
        if (passwordInput.length < 8) {
            title.textContent = "Le mot de passe doit comporter au moins 8 caractères";
            return;
        }

        // Test 2: Le mot de passe doit contenir au moins 2 chiffres
        var digitCount = passwordInput.replace(/[^0-9]/g, "").length;
        if (digitCount < 2) {
            title2.textContent = "Le mot de passe doit contenir au moins 2 chiffres";
            return;
        }

        // Test 3: Le mot de passe doit contenir au moins une lettre majuscule
        if (!/[A-Z]/.test(passwordInput)) {
            title3.textContent = "Le mot de passe doit contenir au moins une lettre majuscule";
            return;
        }

        // Test 4: Le mot de passe doit contenir au moins un caractère spécial
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordInput)) {
            title4.textContent = "Le mot de passe doit contenir au moins un caractère spécial";
            return;
        }
    }
    button.addEventListener("click", handleClick);
}