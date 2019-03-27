const FilmStudio = require('./filmStudio');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe("FilmStudio", function() {
    let filmStudio;
    beforeEach(function(){
        filmStudio = new FilmStudio();
    });
    it('Contains a property expenses that is initialized to an empty array. ', function() {
        assert.isArray(filmStudio.films);
        assert.isEmpty(filmStudio.films);
    });
    describe('allMovies', function () {
            it('should return first movie of the array', function () {
                filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy'])
                assert.equal(filmStudio.this.films[0], 'The Avengers');
            });
    });

});
