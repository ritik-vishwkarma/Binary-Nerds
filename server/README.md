# Server for Social Media Engagement Analysis

This server is part of a web application designed to analyze social media engagement. It is built using Express and interfaces with an AI workflow for data analysis.

## Features

- **Express Server**: Handles API requests and responses.
- **AI Workflow Integration**: Communicates with Langflow for processing input data and generating responses.
- **Environment Configuration**: Uses `dotenv` for managing environment variables.

## Project Structure

- **src**: Contains the source code for the server.
  - `index.ts`: Main server file handling API requests.
  - `workflow/langflow.ts`: Handles communication with the Langflow API.
- **package.json**: Lists dependencies and scripts for running the server.
- **tsconfig.json**: TypeScript configuration file.

## Prerequisites

- Node.js (>= 18.0.0)
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/social-media-engagement-analysis.git
   cd social-media-engagement-analysis/server

2. Install server dependencies:
   ```bash 
   npm install

## Running the Server

1. Start the server:
   ```bash
   npm run dev

2. The server will be running on http://localhost:3000.

## API Endpoints
 - POST /run-flow: Initiates the AI workflow with the provided input data.

## Environment Variables

The server uses environment variables for configuration. Create a .env file in the root of the server directory with the following variables:
```plaintext
PORT=3000
LANGFLOW_APPLICATION_TOKEN=your_application_token
