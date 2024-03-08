let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(number) {
  const displayElement = document.querySelector('.result');
  displayElement.innerHTML += number;
  saveCalculation();
  }

  saveCalculation();

  function evalCalculation() {
    const displayElement = document.querySelector('.result');
    const result = eval(displayElement.innerHTML)
    displayElement.innerHTML = result;
    localStorage.setItem('calculation', calculation);
  }

  function clearAll() {
    const displayElement = document.querySelector('.result');
    displayElement.innerHTML = '';
    saveCalculation();
  }

  function saveCalculation() {
    localStorage.setItem('calculation', calculation);
  }



