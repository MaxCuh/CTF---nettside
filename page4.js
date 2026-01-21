document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('secret-image');
    const msgContainer = document.getElementById('message-container');
    const secretSpan = document.getElementById('secret-message');
    const input = document.getElementById('final-input');
    const submit = document.getElementById('final-submit');


    if (img) {
        img.addEventListener('click', () => {
            if (msgContainer) {
                msgContainer.style.display = 'block';
                
            }
        });
    }

    
    const correct = "DuFantFlagget";

    if (submit) {
        submit.addEventListener('click', function() {
            const val = (input && input.value || "").trim();
            if (val === correct) {
                
                try { sessionStorage.setItem('ctfFlag', 'FLAG{agent_final_007}'); } catch(e) {}
                window.location.href = "page5.html";
            } else {
                alert('Feil melding. Prøv igjen.');
            }
        });
    }

    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') submit.click();
        });
    }
});