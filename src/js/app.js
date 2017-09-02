import '../css/main.scss';
import { Rand } from './random-generator';

const output = document.querySelector('#output');

const randomInt = () => {
    output.textContent = Rand.randomInteger();
};


const button = document.querySelector('#random');


button.addEventListener('click', randomInt);
