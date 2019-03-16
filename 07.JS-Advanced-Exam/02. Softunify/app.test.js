const SoftUniFy = require('./app');
const assert = require('chai').assert;

describe("TODO …", function() {
    let sofunify;
    beforeEach ( () =>{
        sofunify = new SoftUniFy();
    });

    describe('downloadSongWorks', function () {
        it('correct', function() {
            expect(sofunify.allSongs).eql({});
            expect(sofunify.songsList).to.equal('Your song list is empty');
            expect(sofunify.playSong()).to.equal(`You have not downloaded a undefined song yet. Use SoftUniFy's function downloadSong() to change that!`);
            expect(sofunify.rateArtist()).to.equal(`The ${arguments[0]} is not on your artist list.`);
        });

        describe('allSongsWorks', function () {
            it('correct', function() {
                sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
                expect(sofunify.songsList).to.equal('Venom - Knock, Knock let the devil in...');
                expect(sofunify.playSong('Eminem')).to.be.eql(`You have not downloaded a Eminem song yet. Use SoftUniFy's function downloadSong() to change that!`);
                sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
                sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
                expect(sofunify.allSongs).to.equal('{ Object (Eminem, Dub Fx) }');

            });
        });

    });
});