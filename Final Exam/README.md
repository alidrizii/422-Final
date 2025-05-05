# 422-Final Project

## Overview

This project is a Document Parser that watches a folder for incoming CSV files, parses their contents, and outputs the data as formatted JSON files. It also moves the processed CSV files to a separate folder. This setup is useful for automating data conversion pipelines.

---

## Features

Watches a folder (watched) for new .csv files  
Parses CSV content into JSON format  
Outputs JSON files into the output folder  
Moves processed CSV files to the processed folder  
Shuts down handling on Ctrl+C, kill, or exceptions  
Automatically creates needed folders if they don’t exist

---

## Requirements

- Node.js >=14.x (recommended: latest LTS version, e.g., Node 18 or Node 20)
- npm (comes with Node.js)

---

## Project Structure

/src
├── service.js → main app entry point
├── watcher.js → folder watcher logic
├── parser.js → CSV-to-JSON parser
├── exitHandler.js → handles shutdown signals
└── config.json → folder configuration

/test
├── service.test.js → service tests
├── watcher.test.js → watcher tests
└── parser.test.js → parser tests

/test_data → sample data for testing

---

## Installation & Setup

Clone the repository
bash
git clone git@github.com:alidrizii/422-Final.git
cd 422-Final

Install dependencies

bash
Copy code
npm install

Check Node.js version

bash
Copy code
node -v
Make sure it outputs at least v14.x.x.

Running Tests
bash
Copy code
npm test
Tests are located in the /test folder and cover core functionality of:

Service

Watcher

Parser

Dependencies
chokidar → folder watching

csv → CSV parsing

jest → testing (make sure to install it if not present)

Building the App (Optional Step)
No build step is required — it’s a pure Node.js app. But you can package it with:

bash
Copy code
npm run build
(add a build script in package.json if needed)

Use Ctrl+C or kill the app.
Ali Idrizi
