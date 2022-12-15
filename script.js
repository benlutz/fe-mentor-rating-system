const rating = document.getElementById('rating');
  const numbers = document.querySelectorAll('.number');
  const submitButton = document.getElementById('submitButton');
  const step1 = document.getElementById('step-1');
  const step2 = document.getElementById('step-2');

  numbers.forEach((num) => {
    num.addEventListener('click', (e) => {
      numbers.forEach((num) => {
        num.classList.remove('active');
      });
      num.classList.add('active');

      rating.innerHTML = e.target.getAttribute('value');
    });
  });

  submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (rating.innerHTML === '') return;

    step1.classList.add('hidden');
    step2.classList.remove('hidden');
  });