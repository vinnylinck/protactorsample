protactorsample
===============

A E2E sample using Protractor and AngularJS


To install Protractor on your machine, type the command below in the root folder of your project:
2.1	Mac
1)	Installing the Node Protractor module (guess what! NodeJS must be installed first)
npm install protractor

2)	 Installing Selenium, an automation test tool
node_modules/protractor/bin/install_selenium_standalone

3)	Creating a new Protractor configuration file
cp node_modules/protractor/referenceConf.js protractor.conf.js

4)	Running end-to-end tests
node_modules/protractor/bin/protractor protractor.conf.js
2.2	Windows
There´s not much documentation about setting up and running Protractor on Windows. There it goes!

1)	Installing the Node Protractor module
npm install protractor

2)	 Installing Selenium, an automation test tool
node node_modules\protractor\bin\install_selenium_standalone

3)	Creating a new Protractor configuration file
copy node_modules\protractor\referenceConf.js protractor.conf.js

4)	Running end-to-end tests
node node_modules\protractor\bin\protractor protractor.conf.js
