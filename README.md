# AI Emoji Search

AI Emoji Search is a web application that allows users to enter a query and receive the most relevant emojis, powered by an AI model.

See it in action at https://ai-emoji-search.vercel.app/!

## Features

 - 💡 **AI-Powered Search**: Utilizes an AI model to identify emojis that best match user queries.
 - ⚡ **Fast and Intuitive**: Provides instant suggestions with a simple and user-friendly interface.
 - 📈 **Next.js Framework**: Built with Next.js for optimal performance and scalability.

## Getting Started

Follow these steps to run the application locally:

### Prerequisites

1. Ensure you have Node.js installed. You can download it [here](https://nodejs.org).
2. Install your preferred package manager (npm, yarn, pnpm, or bun).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jm-wilson/ai-emoji-search.git
   cd ai-emoji-search
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Environment Variables

Set the following environment variables for the prompt:

```properties
# Required - Get your API key from https://groq.com/
GROQ_API_KEY=your_api_key_here

# Required - The model to use for emoji suggestions
GROQ_MODEL_NAME=model_name_here

# Optional - Custom system prompt for the AI model
GROQ_SYSTEM_PROMPT="Provide 5-10 relevant emojis based on the main idea of the user's message. Do not respond with anything besides the emojis."
```

### Running the Development Server

Start the development server with:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to access the application.

## License

This project is licensed under the MIT License.
