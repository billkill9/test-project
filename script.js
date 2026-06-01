let count = 0;
const counterEl = document.getElementById('counter');

document.querySelector('.inc').addEventListener('click', () => {
    count++;
    counterEl.textContent = count;
});

document.querySelector('.dec').addEventListener('click', () => {
    count--;
    counterEl.textContent = count;
});

document.getElementById('resetBtn').addEventListener('click', () => {
    count = 0;
    counterEl.textContent = count;
});
