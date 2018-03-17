import { TimelineLite } from 'gsap';

class DisplacementEffect {
  setEffect(element) {
    element.style.webkitFilter = 'url(#displacement)';
    element.style.mozFilter = 'url(#displacement)';
    element.style.filter = 'url(#displacement)';
  }

  runEffect() {
    const turb = document.querySelector('#displacement feTurbulence');
    const turbVal = { val: 0.000001 };

    const btTl = new TimelineLite({
      onUpdate() {
        turb.setAttribute('baseFrequency', `0 ${turbVal.val}`);
      },
    });
    btTl.to(turbVal, 0.2, { val: 0.3 });
    btTl.to(turbVal, 0.2, { val: 0.000001 });
  }
}

export default new DisplacementEffect();
