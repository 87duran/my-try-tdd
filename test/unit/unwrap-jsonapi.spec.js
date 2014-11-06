// TODO: write a spec for unwrap-jsonapi src before you implement it

//var should = require('should')
var unwrapJSON =  require('../../app/unwrap-jsonapi');

describe('unwrapJSON', function () {
    it('takes an object as a parameter', function() {
        unwrapJSON.length.should.eql(1)
    })
    it('returns false if no parameter given', function() {
        unwrapJSON().should.be.false
    })
    it('removes the root attribute', function() {
        var json = {
            books: [{
                id: 'abc123',
                title: 'The Adventures of Tintin Anthology'
        }]
        }
        var expected = {
            id: 'abc123',
            title: 'The Adventures of Tintin Anthology'
        }
        var output = unwrapJSON(json);
        output.should.eql(expected)
    })
});

