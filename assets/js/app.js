const countries = [
    { flag: 'assets/img/AE.png', text: 'United Arab Emirates' },
    { flag: 'assets/img/AU.png',text: 'Australia' },
    { flag: 'assets/img/CN.png',text: 'China' },
    { flag: 'assets/img/DE.png',text: 'Germany' },
    { flag: 'assets/img/DK.png',text: 'Denmark' },
    { flag: 'assets/img/FR.png',text: 'France' },
    { flag: 'assets/img/fuck putin.png', text: 'Russia' },
    { flag: 'assets/img/GB.png',text: 'Great Britain' },
    { flag: 'assets/img/IT.png', text: 'Italy' },
    { flag: 'assets/img/US.png', text: 'United States' },
  ];
  
  const countryList = document.getElementById('country-list');
  
  
  countries.forEach(country => {
    const countryItem = `
      <li>
        <a href="#" class="country-link" data-flag="${country.flag}" data-text="${country.text}">
          <img src="${country.flag}" alt="${country.text}">
          <span>${country.text}</span>
        </a>
      </li>
    `;
    countryList.innerHTML += countryItem;
  });
  
  const flagContainer = document.createElement('div');
  flagContainer.classList.add('flag-container');
  
  const flagImage = document.createElement('img');
  flagImage.src = '';
  flagImage.alt = '';
  flagImage.classList.add('flag-image');
  
  flagContainer.appendChild(flagImage);
  const shipElement = document.querySelector('.ship');
  shipElement.insertBefore(flagContainer, shipElement.lastElementChild.previousElementSibling);



  document.addEventListener('click', event => {
    const flagLink = event.target.closest('.country-link');
    if (flagLink) {
      const flagImage = flagLink.querySelector('img');
      flagContainer.querySelector('.flag-image').src = flagImage.src;
      flagContainer.querySelector('.flag-image').alt = flagImage.alt;
    }
  });




  

function countDownTime(){
    const newDay = document.querySelector(".day");
    const newHour = document.querySelector(".hour");
    const newMin = document.querySelector(".min");
    const newSec = document.querySelector(".sec");
    let countDownDate = new Date("jul 28 , 2023 20:00:00").getTime();
    let today = new Date().getTime();
    let difference = countDownDate - today;
    const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
    
    const targetDay = Math.floor(difference / day);
    const hours = Math.floor((difference % day) / hour);
    const minutes = Math.floor((difference % hour) / minute);
    const seconds = Math.floor((difference % minute) / second);
    newDay.innerHTML = `${targetDay}`;
    newHour.innerHTML = `${hours}`;
    newMin.innerHTML = `${minutes}`;
    newSec.innerHTML = `${seconds}`;
    
    }
    setInterval(countDownTime,1000);
    let textarea = document.querySelector('.txtarea');
    textarea.addEventListener('input', function() {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    });

    window.addEventListener('DOMContentLoaded', function() {
      let dropdown = document.getElementById('language-select');
      let selectedFlag = document.getElementById('selected-flag');
      
      let selectedOption = dropdown.options[dropdown.selectedIndex];
      let flag = selectedOption.getAttribute('data-flag');
      
      selectedFlag.style.backgroundImage = 'url("' + flag + '")';
    });
    
    function updateSelected() {
      let dropdown = document.getElementById('language-select');
      let selectedFlag = document.getElementById('selected-flag');
      
      let selectedOption = dropdown.options[dropdown.selectedIndex];
      let flag = selectedOption.getAttribute('data-flag');
      
      selectedFlag.style.backgroundImage = 'url("' + flag + '")';
    }
    

    function increaseCount(a, b) {
      var input = b.previousElementSibling;
      var value = parseInt(input.value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      input.value = value;
    }
    
    function decreaseCount(a, b) {
      var input = b.nextElementSibling;
      var value = parseInt(input.value, 10);
      if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
      }
    }