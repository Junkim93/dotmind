const game = {
  getRandomNum(arr) {
    if (Object.prototype.toString.call(arr) !== '[object Array]') {
      throw Error('Not array');
    }
    return Math.floor(Math.random() * arr.length);
  },
  switchBoolean(boolean) {
    if (typeof boolean !== 'boolean') {
      throw Error('Not boolean value');
    }
    return boolean === true ? false : true;
  },

  isEqual(a, b) {
    return a === b ? true : false;
  }
};

export default game;
