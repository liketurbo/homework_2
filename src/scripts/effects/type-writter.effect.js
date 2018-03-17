import TypeIt from 'typeit';

import dataJSON from '../../data.json';
import { getRandomInt } from '../functions';

class TypeWritterEffect {
  constructor(data) {
    this.data = data;
  }

  generateRandomArr() {
    let randomNumber = 0;
    const randomArr = [];
    const length = getRandomInt(5, this.data.msgs.length);

    for (let i = 0; i < length; i++) {
      randomNumber = getRandomInt(0, this.data.msgs.length - 1);
      randomArr.push(this.data.msgs[randomNumber]);
    }

    return randomArr;
  }

  setOpacity(opacity) {
    this.text.style.opacity = opacity;
  }

  truncateContent() {
    const bottomLine = this.text.getBoundingClientRect().bottom;
    const lines = this.text.querySelectorAll('.text');

    for (const line of lines) {
      if (line.getBoundingClientRect().bottom > bottomLine) {
        this.text.removeChild(line);
      }
    }
  }

  setStyling(left, top, widthFact, heightFact) {
    const { text, textWrapper } = this;

    text.style.width = `${textWrapper.offsetWidth / widthFact}px`;
    text.style.height = `${textWrapper.offsetHeight / heightFact}px`;
    text.style.fontSize = `${getRandomInt(15, 20)}px`;
    this.setOpacity(1);
  }

  setEffect() {
    this.textWrapper = document.querySelector('.container');
    this.text = document.querySelector('.container__text');
  }

  runEffect() {
    this.setStyling(0, 0, 2, 2);

    const output = this.generateRandomArr().map(e => `<div class="text">${e}</div>`)
      .join('');

    this.text.innerHTML = output;
    this.truncateContent();

    new TypeIt('.container__text', {
      cursor: false,
      speed: 1,
      autoStart: true,
      callback: () => {
        setTimeout(() => this.setOpacity(0), 1000);
      },
    });
  }
}

export default new TypeWritterEffect(dataJSON);
