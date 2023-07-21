const SCALE_STEP = 25;
const MIN_SCALE = '25%';
const MAX_SCALE = '100%';
const PERCENT_DIVIDER = 100;

const previewImage = document.querySelector('.img-upload__preview img');
const scaleUpButton = document.querySelector('.scale__control--bigger');
const scaleDownButton = document.querySelector('.scale__control--smaller');
const scaleInput = document.querySelector('.scale__control--value');


const changeScale = (value) => {
  previewImage.style.transform = `scale(${+value.replace('%', '') / PERCENT_DIVIDER})`;
};

const onSmallerButtonclick = () => {
  if (scaleInput.value !== MIN_SCALE) {
    scaleInput.value = `${+scaleInput.value.replace('%', '') - SCALE_STEP}%`;
    changeScale(scaleInput.value);
  }
};

const onBiggerButtonclick = () => {
  if (scaleInput.value !== MAX_SCALE) {
    scaleInput.value = `${+scaleInput.value.replace('%', '') + SCALE_STEP}%`;
    changeScale(scaleInput.value);
  }
};

const activateScale = () => {
  scaleUpButton.addEventListener('click', onBiggerButtonclick);
  scaleDownButton.addEventListener('click', onSmallerButtonclick);
};

const resetScale = () => changeScale(scaleInput.value);

export {activateScale, resetScale};
