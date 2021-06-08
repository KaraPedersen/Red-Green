import hexToRgb from './hex-to-rgb.js';

describe('hexToRgb', () => {
  it('returns the name property of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = hexToRgb(spot);
    expect(name).toBe('spot');
  });
  it('returns the name property of Aang', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const name = hexToRgb(character);
    expect(name).toBe('Aang');
  });
});
//adding this so I can commit
