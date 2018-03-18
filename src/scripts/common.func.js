export default class BaseModule {
  getRandomInt(min, max) {
    /*
    * getRandomInt(0, 9)
    * 0 - inclusive
    * 9 - inclusive
    */
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  }
}
