document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('access-btn');
    const emoji = document.getElementById('emoji');
    if (btn) {
        btn.onclick = function() {
            const answer = document.getElementById('page2-answer').value.trim();
            if (answer === "007") {
                if (emoji) {
                    emoji.style.display = "inline"; 
                    setTimeout(() => {
                        emoji.classList.add("visible");
                    }, 10); 
                }
            } else {
                alert("Access Denied");
            }
        };
    }
    if (emoji) {
        emoji.onclick = function() {
            window.location.href = "page3.html";
        };
    }
});
