# Express Server Project

This project is a simple Express server that listens on port 8001. It is set up to use nodemon for automatic code reloading during development.

## Project Structure

```
express-server
├── src
│   ├── app.js            # Entry point of the application
│   ├── routes            # Directory for route definitions
│   │   └── index.js      # Currently does not export any routes
│   └── controllers       # Directory for controller definitions
│       └── index.js      # Currently does not export any controllers
├── package.json          # Configuration file for npm
├── Dockerfile            # Instructions to build a Docker image
├── .dockerignore         # Files to ignore when building the Docker image
├── .gitignore            # Files to ignore by Git
└── README.md             # Documentation for the project
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd express-server
   ```

2. **Install dependencies**:
   ```
   yarn install
   ```

3. **Run the server**:
   ```
   yarn start
   ```

The server will start and listen on port 8001.

## Docker

To build and run the Docker container, use the following commands:

1. **Build the Docker image**:
   ```
   docker build -t express-server .
   ```

2. **Run the Docker container**:
   ```
   docker run -p 8001:8001 express-server
   ```

## Contributing

Feel free to submit issues or pull requests for any improvements or features you would like to see in this project.