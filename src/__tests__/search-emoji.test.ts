import { searchEmoji } from '@/api/search-emoji';
import { mockedGroqCreateFn } from '../../jest.setup';

describe('Expected API Failures (search-emoji)', () => {
  beforeEach(() => {
    console.error = jest.fn(); // Prevent expected console.error calls from filling up the console
  });

  it('rejects queries longer than 50 characters', async () => {
    const longQuery = 'a'.repeat(51);
    expect(searchEmoji(longQuery)).rejects.toEqual('Query too long');
  });

  it('rejects empty queries', async () => {
    const emptyQuery = '';
    expect(searchEmoji(emptyQuery)).rejects.toEqual('Empty query');
  });

  it('rejects queries with only special characters', async () => {
    const specialCharQuery = '@'; // This will become empty once special characters are sanitized out
    expect(searchEmoji(specialCharQuery)).rejects.toEqual('Empty query');
  });
});

describe('Expected API Successes (search-emoji)', () => {
  it('calls the API with a valid query', async () => {
    console.log = jest.fn(); // Prevent expected console.log from filling up the console
    const validQuery = 'hello world';
    const response = await searchEmoji(validQuery);

    expect(mockedGroqCreateFn).toHaveBeenCalledTimes(1);
    expect(response).toBeInstanceOf(Array);
  });
});
