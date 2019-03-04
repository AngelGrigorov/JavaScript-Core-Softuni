function search() {
   let searchedText = $('#searchText').val();
   console.log(searchedText);
   let towns = $('#towns li').toArray();
let matches = 0;
for(let town of towns) {
    if (town.textContent.indexOf(searchedText) != -1) {
        $(town).css("font-weight", "bold");
        matches++;
    }else{
        $(town).css('font-weight', '');
    }

}
$('#result').text(matches + ' matches found.');
}