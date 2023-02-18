import './index.css';
import Icon from './assets/img.png';

const jsImage = document.createElement('img');
jsImage.className = 'image'
jsImage.src = Icon;

document.body.append(jsImage);

console.log('Hello World!');