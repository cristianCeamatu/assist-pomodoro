export const intToMMSS = (integer) => {
  let minutes = Math.floor(integer / 60);
  let seconds = integer - minutes * 60;
  minutes = minutes < 10 ? '0' + minutes.toString() : minutes;
  seconds = seconds < 10 ? '0' + seconds.toString() : seconds;
  return `${minutes}:${seconds}`;
};

export const intToPaddedString = (integer) => {
  return integer.toString().padStart(2, 0);
};
