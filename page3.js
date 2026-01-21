document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('access');
    const input = document.getElementById('page3-answer');
    if (!btn || !input) return;
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const val = input.value.trim();
        const correct = "MI6";
        if (val === correct) {
            showEmojis();
        } else {
            alert("Access Denied");
        }
    });
});

function showEmojis() {
    const container = document.getElementById('emoji-container');
    const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
    const correctIndex = 1;

    corners.forEach((corner, index) => {
        const emoji = document.createElement('span');
        emoji.textContent = '🎞️';
        emoji.className = `emoji-corner ${corner}`;
        
        if (index === correctIndex) {
            
            emoji.onclick = function() {
                window.location.href = "page4.html";
            };
        } else {
            
            emoji.onclick = function() {
                window.location.href = "denied.html";
            };
        }
        
        container.appendChild(emoji);
    });
}
