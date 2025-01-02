function createSnowflakes() {
    const snowflakeCount = window.innerWidth > 768 ? 250 : 50;
    const snowflakeContainer = document.createElement('div');
    snowflakeContainer.setAttribute('class', 'snowflake-container');
    document.body.appendChild(snowflakeContainer);

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.innerText = '❄';
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.fontSize = Math.random() * 1.5 + 0.5 + 'em';
        snowflake.style.animationDuration = Math.random() * 6 + 4 + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.setProperty('--dx', (Math.random() - 0.5) * 2);

        snowflake.style.top = '-5vh';
        snowflakeContainer.appendChild(snowflake);
    }
}

document.addEventListener('DOMContentLoaded', createSnowflakes);