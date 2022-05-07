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
}

export default Backpack;
