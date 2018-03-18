import TypeIt from 'typeit';
import { TimelineLite, TweenLite } from 'gsap';

import dataJSON from '../../data.json';
import CommonFunc from '../common.func';

class TypeWritterEffect extends CommonFunc {
  constructor(data) {
    super();
    this.data = data;
  }

  generateRandomArr() {
    let randomNumber = 0;
    const randomArr = [];
    const length = this.getRandomInt(5, this.data.msgs.length);

    for (let i = 0; i < length; i++) {
      randomNumber = this.getRandomInt(0, this.data.msgs.length - 1);
      randomArr.push(this.data.msgs[randomNumber]);
    }

    return randomArr;
  }

  makeBlink() {
    const timelineLite = new TimelineLite();
    timelineLite.add(TweenLite.to('.container__text', 0.75, { opacity: 1 }));
    timelineLite.add(TweenLite.to('.container__text', 0.05, { opacity: 0 }));
    timelineLite.add(TweenLite.to('.container__text', 0.05, { opacity: 1 }));
    timelineLite.add(TweenLite.to('.container__text', 0.05, { opacity: 0 }));
    timelineLite.add(TweenLite.to('.container__text', 0.05, { opacity: 1 }));
    timelineLite.add(TweenLite.to('.container__text', 0.05, { opacity: 0 }));
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
    text.style.opacity = 1;
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
      callback: this.makeBlink,
    });
  }
}

export default new TypeWritterEffect(dataJSON);
