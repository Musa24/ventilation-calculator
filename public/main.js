// const axios = require('axios');
const formContainer = document.querySelector('form');
const radioInputs = document.querySelectorAll('input[type=radio]');
const checkboxInputs = document.querySelectorAll('input[type=checkbox]');
const numberInputs = document.querySelectorAll('input[type=number]');

let output = {};
const arrayInput = [];
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

formContainer.addEventListener('change', async () => {
  radioInputs.forEach((input) => {
    if (input.checked) {
      output[input.name] = input.value;
    }
  });

  checkboxInputs.forEach((checkboxInput) => {
    if (checkboxInput.checked) {
      if (!arrayInput.includes(checkboxInput.value)) {
        arrayInput.push(checkboxInput.value);
      }
    } else {
      index = arrayInput.indexOf(checkboxInput.value);
      if (index > -1) {
        arrayInput.splice(index, 1);
      }
    }

    numberInputs.forEach((numberInput) => {
      if (+numberInput.value > -1) {
        output[numberInput.name] = numberInput.value;
      }
    });

    output[checkboxInput.name] = arrayInput;
  });
  const { data } = await axios.post(`/`, output, config);
  //   const { data } = await axios.post(`/`, JSON.stringify(output), config);

  //   console.log(JSON.stringify(data));
  console.log(data);
});
