import { fetchQuotes } from './fetch-quotes.js';

describe('fetchQuotes', () => {
  it('returns a single quote with name, text and image', async () => {
    const quote = await fetchQuotes(1);
    expect(quote).toEqual(
      {
        name: expect.any(String),
        text: expect.any(String),
        image: expect.any(String),
      }
    );
  });

});
