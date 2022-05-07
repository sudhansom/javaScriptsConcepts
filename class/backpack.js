class Backpack {
  constructor(given_name, volume, color, strapLengthL, strapLengthR, lidOpen) {
    this.given_name = given_name;
    this.volume = volume;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }

  toggleLid(lidOpen) {
    this.toggleLid = lidOpen;
  }
  changeStrap(strapLengthL, strapLengthR) {
    this.strapLength.left = strapLengthL;
    this.strapLength.right = strapLengthR;
  }
}

export default Backpack;
