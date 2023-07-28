const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imgSetup = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');

const loadImg = (evt) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if(matches) {
    //ссылка на содержимое
    const url = URL.createObjectURL(file);
    imgSetup.src = url;
    effectsPreview.forEach((item) => {
      item.style.backgroundImage = `url(${url})`;
    });
  }
};

export {loadImg};
