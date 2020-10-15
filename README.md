# StampsTest
This is what I have done to accomplish the task.

On my local machine, I have installed

1. Java
2. Node.js 
3. NPM 
4. Check if node and npm were installed
5. Installed Visual Studio Code
6. Downloaded zip file from https://github.com/amiya-pattnaik/webdriverIO-with-cucumberBDD from github
7. Extracted to C:\Testing\StampsTest\
8. For webdriver setup and installation:
	-- npm init
	
	-- npm install webdriverio --save-dev
	
	-- npm install cucumber --save-dev
	
	-- npm install @wdio/cli
	
	-- npm install chai --save-dev
	
	-- npm install chai-webdriverio --save-dev
	
	-- npm install local-runner --save-dev
	
	-- C:\Testing\StampsTest\node_modules\.bin\wdio config -- which created the wdio.conf.js
	
9. To Test

	-- C:\Testing\StampsTest\node_modules\.bin\wdio wdio.conf.js

Main files where coding is done are 

/features/stamps.feature

/features/step-definitions/stampsteps.js

wdio.conf.js
