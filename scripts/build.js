body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
  text-align: center;
  padding: 50px;
}

.container {
  padding: 20px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: inline-block;
  border-radius: 10px;
}

h1 {
  font-size: 2em;
  color: #333;
}

button {
  padding: 15px 30px;
  font-size: 1.2em;
  color: #fff;
  background-color: #ff4c4c;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #ff3232;
}

#message {
  margin-top: 20px;
  font-size: 2em;
  color: #ff69b4;
  font-weight: bold;
  display: none;
}

.hidden {
  display: none;
}
function displayMessage() {
  const messageDiv = document.getElementById('message');
  messageDiv.classList.remove('hidden');  // Show the message
}

#!/usr/bin/env node

import path from 'path';
import fs from 'fs-extra';
import cp from 'child_process';
import { executeCommand, PROJECT_ROOT } from './utils.js';

const main = () => {
	for (const extension of fs.readdirSync('extensions')) {
		const extensionPath = path.join(PROJECT_ROOT, 'extensions', extension);
		if (fs.existsSync(path.join(extensionPath, 'package.json'))) {
			executeCommand('npm', ['run', 'compile'], extensionPath);
		}
	}
	executeCommand('npx', ['webpack', '--mode=production'], PROJECT_ROOT);
};

main();
