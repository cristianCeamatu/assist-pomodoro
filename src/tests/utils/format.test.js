import { intToMMSS, intToPaddedString } from '../../utils/format';

describe('intToMMSS', () => {
  test('return the minutes and seconds represantation of the passed number of seconds', () => {
    const input = 1380;
    const output = '23:00';

    expect(intToMMSS(input)).toEqual(output);
  });
});

describe('intToPaddedString', () => {
  test('add a 0 at the start when the number is less then 0', () => {
    const input = 2;
    const output = '02';

    expect(intToPaddedString(input)).toEqual(output);
  });

  test('only converts to string when the number is bigger then 9', () => {
    const input = 11;
    const output = '11';

    expect(intToPaddedString(input)).toEqual(output);
  });
});
