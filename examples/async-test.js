var async = require('./async');
require('should');
require('assert');
describe('async', function(){
    describe('#waterfall()', function(){
        it('should execute the first function with a callback parameter supplied', function(done){
            async.waterfall(
                function(cb){
                    (typeof cb).should.equal('function');
                    done();
                },
                function(cb){
                    
                }
            );
        });

        it('the callback supplied to the first function should invoke the second function', function(done){
            async.waterfall(
                function(cb){
                    cb();
                },
                function(cb){
                    done();
                }
            );
        });

        it('the callback supplied to the second function should invoke the third function', function(done){
            async.waterfall(
                function(cb){
                    cb();
                },
                function(cb){
                    cb();
                },
                function(cb){
                    done();
                }
            );
        });
    });
});