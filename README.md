# How to setup:

## Clone repo:

Clone repo:
```gitbash
 git clone https://github.com/....
```

## TestCafe Installation:
####  Global Installation 
```gitbash
 npm install -g testcafe
```
#### Local Installation 
```gitbash
 npm install --save-dev testcafe
```

#### To run a local TestCafe version from the command line, use one of the following methods:
Testcafe command added to the scripts section in package.json:
```json
"scripts": {
    "test:chrome": "testcafe chrome Test.js ..."
}
```

1 - To run through command line :

```gitbash
 npm run test:chrome
```

2 - To run through Configuration line :
```gitbash
 node runner.js
```
