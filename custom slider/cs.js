const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');

slider.addEventListener('input', () => {
    const value = slider.value;
    sliderValue.textContent = value;

    const percent = (value / slider.max) * 100;
    sliderValue.style.left = `${percent}%`;
});
