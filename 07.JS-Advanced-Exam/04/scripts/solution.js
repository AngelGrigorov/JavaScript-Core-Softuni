function solve() {






function kingdom(){
        let kingdomName = $('#kingdom input')[0].value.toLowerCase();
        let kingName = $('#kingdom input')[1].value;
        if (kingName.length < 2) {
            $('#kingdom input')[1].value = '';
        }
        if (trueKingdoms.indexOf(kingdomName) === -1) {
            $('#kingdom input')[0].value = '';
        }
        if (kingName.length >= 2 && trueKingdoms.indexOf(kingdomName) !== -1) {
            let e = $('#' + kingdomName);
            e.css('display', 'inline-block');
            e.append($('<h1>').text(kingdomName.toUpperCase()));
            e.append($('<div>').addClass('castle'));
            e.append($('<h2>').text(kingName.toUpperCase()));
            e.append($('<fieldset>').append($('<legend>').text('Army')).append($('<p>').text('TANKS - 0')).append($('<p>').text('FIGHTERS - 0')).append($('<p>').text('MAGES - 0')).append($('<div>').addClass('armyOutput')));
            allKingdoms.push(kingdomName);
        }

}
function char(){
    let joinKindom = $('#characters input[type=text]')[1].value.toLowerCase();
    let charName = $('#characters input[type=text]')[0].value;
    let charType = $('#characters input[type=radio]:checked')[0].value;
    if (allKingdoms.indexOf(joinKindom) === -1) {
        $('#characters input[type=text]')[1].value = '';
    }
    if (allKingdoms.indexOf(joinKindom !== -1) && charType) {
        let NumberOfTanks = Number($('#' + joinKindom + ' p')[0].textContent.match(/(\d+)/)[0]);
        let NumberOfFighters = Number($('#' + joinKindom + ' p')[1].textContent.match(/(\d+)/)[0]);
        let NumberOfMages = Number($('#' + joinKindom + ' p')[2].textContent.match(/(\d+)/)[0]);
        if (charType === 'mage') {
            NumberOfMages++;
            $('#' + joinKindom + ' p')[2].textContent = `MAGES - ${NumberOfMages}`;
        }
        if (charType === 'fighter') {
            NumberOfFighters++;
            $('#' + joinKindom + ' p')[1].textContent = `FIGHTERS - ${NumberOfFighters}`;
        }

        if (charType === 'tank') {
            NumberOfTanks++;
            $('#' + joinKindom + ' p')[0].textContent = `TANKS - ${NumberOfTanks}`;
        }
        $('#' + joinKindom + ' .armyOutput')[0].innerHTML += charName + ' ';
    }
}
function war(){
        let att = $('#actions input')[0].value.toLowerCase();
        let def = $('#actions input')[1].value.toLowerCase();
        let attPts = 0;
        let defPts = 0;
        if (allKingdoms.indexOf(att) === -1) {
            $('#actions input')[0].value = '';
        }
        if (allKingdoms.indexOf(def) === -1) {
            $('#actions input')[1].value = '';
        }
        if (allKingdoms.indexOf(att) !== -1 && allKingdoms.indexOf(def) !== -1) {
            let defTanks = Number($('#' + def + ' p')[0].textContent.match(/(\d+)/)[0]) * 80;
            let defFighters = Number($('#' + def + ' p')[1].textContent.match(/(\d+)/)[0]) * 50;
            let defMages = Number($('#' + def + ' p')[2].textContent.match(/(\d+)/)[0]) * 30;
            let attTanks = Number($('#' + att + ' p')[0].textContent.match(/(\d+)/)[0]) * 20;
            let attFighters = Number($('#' + att + ' p')[1].textContent.match(/(\d+)/)[0]) * 50;
            let attMages = Number($('#' + att + ' p')[2].textContent.match(/(\d+)/)[0]) * 70;



            attPts = attTanks + attFighters + attMages;
            defPts = defTanks + defFighters + defMages;

            if (attPts > defPts) {
                $('#' + def + ' h2')[0].textContent = $('#' + att + ' h2')[0].textContent;
            }
        }
}
    let trueKingdoms = [
        'castle',
        'dungeon',
        'fortress',
        'inferno',
        'necropolis',
        'rampart',
        'stronghold',
        'tower',
        'conflux'
    ];
    let allKingdoms = [];
    $('#kingdom button').on('click', kingdom);
    $('#characters button').on('click', char);
    $('#actions button').on('click',war);
}

solve();