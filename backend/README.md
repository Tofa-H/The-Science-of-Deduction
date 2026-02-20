# Backend - Express.js Server

This is the backend server for "The Science of Deduction" project, built with Express.js.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Start the development server:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

## Available Scripts

- `npm start` - Start the server in production mode
- `npm run dev` - Start the server with auto-reload using Nodemon

## Project Structure

```
backend/
├── middleware/          # Express middleware
├── routes/             # API route handlers
├── app.js             # Express app configuration
├── server.js          # Server entry point
├── .env               # Environment variables (not tracked)
├── .env.example       # Example environment variables
└── package.json       # Dependencies and scripts
```

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/` - Welcome message and API info

## Development

The server uses Nodemon for hot-reloading during development. Any changes to `.js` files will automatically restart the server.

## Environment Variables

See `.env.example` for available configuration options.
