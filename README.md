# Social Media Engagement Analysis

This project is a web application designed to analyze social media engagement using a React frontend and an Express server backend. The application allows users to input queries and receive analyzed data in response.

## Features

- **Frontend**: Built with React and Vite, featuring a responsive design with animated geometric shapes.
- **Backend**: Powered by Express, handling requests and interfacing with an AI workflow for data analysis.
- **AI Workflow**: Utilizes Langflow for processing input data and generating responses.
- **Styling**: Uses Tailwind CSS for styling and animations.

## Project Structure

- **frontend**: Contains the React application.
  - `src/App.jsx`: Main application component.
  - `src/components/Loader.jsx`: Loader component displayed during data fetching.
  - `src/App.css`: Styles for the application.
  - `vite.config.js`: Configuration for Vite.
  - `eslint.config.js`: ESLint configuration for code linting.

- **server**: Contains the Express server.
  - `src/index.ts`: Main server file handling API requests.
  - `src/workflow/langflow.ts`: Handles communication with the Langflow API.
  - `package.json`: Server dependencies and scripts.
  - `tsconfig.json`: TypeScript configuration.

## Getting Started

### Prerequisites

- Node.js (>= 18.0.0)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/social-media-engagement-analysis.git
   cd social-media-engagement-analysis


2. Install dependencies for both frontend and server:
    ```bash
    cd frontend
    npm install
    cd ../server
    npm install

### Running the Application

1. Start the server:
   ```bash
    npm run dev

2. Start the frontend:
   ```bash
    cd frontend
    npm run dev

3. Open your browser and navigate to http://localhost:3000 to view the application.

## Usage
 - Enter a query in the search bar and click "Search" to analyze data.
 - The application will display a loading animation while fetching data.
 - Once the analysis is complete, the results will be displayed on the screen.

## Contributing
    Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License
    This project is licensed under the ISC License.

## Author
    Ritik Vishwakarma
