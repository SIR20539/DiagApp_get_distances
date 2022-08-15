import { trams, getUrl } from './trams.js';
const tramsDiv = document.getElementById('trams');
const input = document.querySelector('input');
const startBtn = document.getElementById('hashBtn');

// input.value = '70f85cef-2e8e-4657-93be-cafcd19668a8';
const divDistances = document.getElementById('distances');

const createTramIcon = (tramName) => {
  const btn = document.createElement('button');
  btn.className = 'trams';
  btn.textContent = `${tramName}`;
  tramsDiv.appendChild(btn);
};

const showDistance = (distance) => {
  divDistances.innerHTML = '';
  distance.map((value) => {
    // console.log(value);
    const pDist = document.createElement('p');
    pDist.innerText = `${value.VehNum} ${Math.round(value.Value)}`;
    divDistances.appendChild(pDist);
  });
};

const sortData = (dataObj) => {
  dataObj.sort((a, b) => {
    return a.VehNum - b.VehNum;
  });
};

const fetchdata = async (url) => {
  try {
    const responce = await fetch(url);
    const data = await responce.json();
    const distance = data.Values.Distance;
    //  divDistances.innerHTML = '';
    sortData(distance);
    showDistance(distance);
  } catch (error) {
    console.log(error);
  }
};

const getKey = (button) => {
  const searchIndex = trams.findIndex((tram) => tram.name === `${button}`);
  return trams[searchIndex].key;
};

const handleButtons = () => {
  const tramsBtns = document.querySelectorAll('.trams');
  for (let item of tramsBtns) {
    item.addEventListener('click', () => {
      const url = getUrl(getKey(item.textContent), input.value);
      fetchdata(url);
    });
  }
};

const getTrams = (input) => {
  tramsDiv.innerText = '';
  if (input.value) {
    trams.map((val) => {
      createTramIcon(val.name);
      handleButtons();
    });
  } else {
    alert('Wprowadź kod dostępu');
  }
};

startBtn.addEventListener('click', () => {
  getTrams(input);
});

// const hash = 'fbfe0d87-1b92-49c4-aaae-6d54eb14f75c';

// console.log(getUrl(trams[0].key, hashInput));
