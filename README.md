# Tax API - Invoicing Platform

Welcome to the Invoicing Platform repository! This project implements an essential online billing system for streamlined invoice management in business operations. It serves as the backend for our digital invoicing platform.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Deployment](#deployment)
- [Frontend](#frontend)
- [Problem Statement](#problem-statement)

## Description

Implementation of an essential online billing system for streamlined invoice management in business operations.

## Features

- Exposes APIs for managing products and services.
- Calculates taxes based on specified rules.
- Handles billing processes and user orders.
- User account management (authentication and authorization).
- Secure data storage and retrieval.
- Validation of user inputs using Yup.

## Technology Stack

- Node.js and TypeScript for server development.
- Express.js for building RESTful APIs.
- PostgreSQL (pg) for database management.
- TypeORM for object-relational mapping.
- bcrypt for password hashing.
- JSON Web Tokens (jsonwebtoken) for authentication.
- cors for handling Cross-Origin Resource Sharing.
- dotenv for environment configuration.
- helmet for security HTTP headers.
- TypeScript for type-checking and improved code quality.
- yup for input validation.

## Folder Structure

- `/src`: Contains the source code of the backend application.
- `/dist`: Compiled TypeScript files.
- `/src/controllers`: Route controllers.
- `/src/entities`: Database entity models.
- `/src/middleware`: Middleware functions.
- `/src/routers`: API routes.
- `/src/services`: Business logic and services.
- `/src/utils`: Utility functions.

## Scripts

- `npm run dev`: Start the development server with nodemon and inspector.
- `npm run build`: Compile TypeScript files to JavaScript.
- `npm start`: Start the server using the compiled JavaScript.
- `npm test`: Execute tests (No tests specified by default).
- `npm run prepare`: Install Husky hooks for commit linting.

## Dependencies

- @types/pg: ^8.10.3
- bcrypt: ^5.1.1
- cors: ^2.8.5
- dotenv: ^16.3.1
- express: ^4.18.2
- helmet: ^7.0.0
- jsonwebtoken: ^9.0.2
- pg: ^8.11.3
- typeorm: ^0.3.17
- typescript: ^5.2.2
- yup: ^1.3.2

## Dev Dependencies

- @types/bcrypt: ^5.0.0
- @types/cors: ^2.8.14
- @types/express: ^4.17.18
- @types/helmet: ^4.0.0
- @types/jsonwebtoken: ^9.0.3
- @types/node: ^20.8.3
- cz-conventional-changelog: ^3.3.0
- husky: ^8.0.0
- nodemon: ^3.0.1
- ts-node: ^10.9.1
- tsconfig-paths: ^4.2.0


## Deployment

The backend is deployed at [Backend Deployment Link](https://tax-api-testing.onrender.com/api/v1).

## Frontend

The frontend part of the project is located in the `client` folder within the root directory. Please refer to the [client README](./client/README.md) for details on the frontend setup and usage.

## Problem Statement

### Digital Invoicing Platform

A digital invoicing platform is essential for businesses to manage their invoicing, payments, and financial transactions efficiently. Your task is to develop a Node.js server coupled with an intuitive user interface for an invoicing system that ensures smooth operations and provides a user-friendly experience.
