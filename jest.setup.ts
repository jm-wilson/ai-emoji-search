// Export this mock so we can use it in tests
export const mockedGroqCreateFn = jest.fn().mockResolvedValue({
  choices: [
    {
      message: {
        content: '😀',
      },
    },
  ],
});

// Mock the entire SDK to avoid errors. We just want to make sure we're calling it
jest.mock('groq-sdk', () => {
  return {
    Groq: jest.fn().mockImplementation(() => {
      return {
        chat: {
          completions: {
            create: mockedGroqCreateFn,
          },
        },
      };
    }),
  };
});
