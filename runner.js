const createTestCafe = require('testcafe');

createTestCafe('localhost', 1337, 1338)
    .then(testcafe => {
        testcafe
            .createRunner()
            .src('tests/mytest.js')
            .browsers(['chrome', 'firefox'])
            .run()
            .then(failedCount => {
                console.log('**********************************');
                console.log('Total Failed Tests: ' + failedCount);
                console.log('**********************************');
                testcafe.close();
           
    })
  
});