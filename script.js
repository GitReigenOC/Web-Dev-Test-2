const detailsButton = document.getElementById('RD');
const hiddenDetails = document.getElementById('HiddenDetails');
const themeButton = document.getElementById('themeToggle');

detailsButton.addEventListener('click', () => {
    const isExpanded = detailsButton.getAttribute('aria-expanded') === 'true';
    detailsButton.setAttribute('aria-expanded', String(!isExpanded));
    hiddenDetails.hidden = isExpanded;
    detailsButton.textContent = isExpanded ? "See Details" : "Hide Details";
});

themeButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');
    themeButton.setAttribute('aria-pressed', String(isDark));
});