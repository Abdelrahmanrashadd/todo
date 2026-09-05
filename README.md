# PERN Todo App – Docker & NGINX

A full-stack Todo application built with the PERN stack and containerized using Docker.

## 🛠️ Technologies

- React
- Node.js
- Express
- PostgreSQL
- Docker
- Docker Compose
- NGINX
- Apache

## 🏗️ Architecture

The application uses the following architecture:

Internet
    ↓
NGINX Load Balancer
    ↓
Apache 1 / Apache 2
    ↓
React Frontend
    ↓
Node.js / Express Backend
    ↓
PostgreSQL Database

## 🐳 Docker Services

The Docker Compose setup contains:

- **NGINX** – Reverse proxy and load balancer
- **Apache 1** – React production frontend
- **Apache 2** – React production frontend
- **Backend** – Node.js / Express API
- **Database** – PostgreSQL

## 🚀 Run the Project

Clone the repository:

```bash
git clone git@github.com:Abdelrahmanrashadd/todo.git
cd todo
