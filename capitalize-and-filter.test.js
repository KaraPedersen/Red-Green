import capitalizeAndFilter from './capitalize-and-filter.js';

describe('capitalizeAndFilter', () => {
  it('takes an array of strings capitalize all strings and filter out any string that starts with the letter F/f', () => {
    const stringArray = ['favorite', 'dog', 'monkey', 'Frakie', 'cat'];
    expect(capitalizeAndFilter(stringArray)).toEqual(['DOG', 'MONKEY', 'CAT']);
  });
});
