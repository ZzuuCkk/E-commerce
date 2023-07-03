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