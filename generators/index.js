var Generator = require('yeoman-generator');

class MyGenerator extends Generator {
    helper() {
        console.log('methods on the parent generator won\'t be called automatically');
      }
}

module.exports = class extends MyGenerator {
    exec() {
        this.helper();
    }
};

/*class extends MyGenerator {
    constructor(args, opts) {
        super(args, opts);

        this.option('babel');
        this.helperMethod = function () {
            console.log('won\'t be called automatically');
        };
    }

    method1() {
        this.log('method 1 just ran');
      }
    
    method2() {
    this.log('method 2 just ran');
    }
};*/
