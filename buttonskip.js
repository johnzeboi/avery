window.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    const initialOffsetX = 0;
    const initialOffsetY = -80;

    // Yes button redirects to yes.html
    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            window.location.href = 'yes.html';
        });
    }

    if (noBtn) {
        // Apply initial transform
        noBtn.style.transform = `translate(${initialOffsetX}px, ${initialOffsetY}px)`;

        const boundary = 300; // ±300px jump

        function jumpButton() {
            const rect = noBtn.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Calculate allowed min/max for dx/dy to stay inside viewport
            const minDx = Math.max(-boundary, -rect.left);
            const maxDx = Math.min(boundary, viewportWidth - rect.right);

            const minDy = Math.max(-boundary, -rect.top);
            const maxDy = Math.min(boundary, viewportHeight - rect.bottom);

            const dx = minDx + Math.random() * (maxDx - minDx);
            const dy = minDy + Math.random() * (maxDy - minDy);

            noBtn.style.transform = `translate(${dx}px, ${dy}px)`;
        }
        // Jump on click
        noBtn.addEventListener('click', jumpButton);
    }
});
