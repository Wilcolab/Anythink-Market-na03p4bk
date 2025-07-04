# Python Server (Deprecated)

This project originally contained a FastAPI server implemented in Python, providing two routes for managing a task list. **The server has now been migrated to Node.js and runs on port `8001`.**

## Project Structure (Legacy Python)

- `python-server/src/main.py`: FastAPI server implementation (now deprecated).
- `python-server/src/__init__.py`: Marks the `src` directory as a Python package.
- `python-server/requirements.txt`: Python dependencies.
- `python-server/Dockerfile`: Docker image for the Python server.
- `docker-compose.yml`: Defines and runs multi-container Docker applications.

## Migration to Node.js Server

The project has migrated from a Python FastAPI server to a Node.js server using Express. The new implementation maintains the same API routes for managing the task list, but now runs on port **8001**.

### Updated Project Structure

- `node-server/src/index.js`: Express server implementation with the `/tasks` routes.
- `node-server/package.json`: Node.js dependencies.
- `node-server/Dockerfile`: Docker image for the Node.js server.
- `docker-compose.yml`: Updated to use the Node.js server service.

### Migration Steps

1. The FastAPI server code and dependencies have been replaced with a Node.js Express implementation.
2. Docker and Compose configurations have been updated to build and run the Node.js server.
3. The API contract remains unchanged, so existing clients can continue using the same endpoints.

## Getting Started

To run the Node.js server using Docker:

- Build and start the Docker containers by running:

  ```shell
  docker compose up
  ```

- The Node.js server will be running and accessible at port **8001**.

## API Routes

The Node.js server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.
- `GET /tasks`: Retrieves the task list.

**Note:** The Python FastAPI server is no longer maintained. Please use the Node.js server on port `8001`.
