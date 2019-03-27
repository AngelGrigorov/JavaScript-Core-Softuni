function solve() {



   let checkedCourses = {
      'js-fundamentals': 170,
      'js-advanced': 180,
      'js-applications': 190,
      'js-web': 490,
      'HTML and CSS': 0
   };
   let totalPrice = 0;
   let allOfTheChecked = [];
   $('button').on('click', onClick);
   function onClick() {
      {



         let coursesPicked = Array.from($('input[type=checkbox]:checked'));
         let form = $('input[name=educationForm]:checked').val();
         coursesPicked.forEach((checkbox) => {

            allOfTheChecked.push(checkbox.value);
         });
         if (allOfTheChecked.includes('js-fundamentals') && allOfTheChecked.includes('js-advanced')) {
            checkedCourses['js-advanced'] -= checkedCourses['js-advanced'] * 0.1;
         }
         if (allOfTheChecked.includes('js-fundamentals') && allOfTheChecked.includes('js-advanced') && allOfTheChecked.includes('js-applications')) {

            checkedCourses['js-applications'] = (checkedCourses['js-fundamentals'] + checkedCourses['js-advanced'] + 190) - (checkedCourses['js-fundamentals'] + checkedCourses['js-advanced'] + 190) * 0.06;
            checkedCourses['js-fundamentals'] = 0;
            checkedCourses['js-advanced'] = 0;
         }
         if (allOfTheChecked.includes('js-fundamentals') && allOfTheChecked.includes('js-advanced') &&
             allOfTheChecked.includes('js-applications') && allOfTheChecked.includes('js-web')) {
            allOfTheChecked.push('HTML and CSS');
         }
         allOfTheChecked.forEach((course) => {
            totalPrice += checkedCourses[course];
            if (course === 'js-fundamentals') {
               course = 'JS-Fundamentals';
            } else if (course === 'js-advanced') {
               course = 'JS-Advanced';
            } else if (course === 'js-applications') {
               course = 'JS-Applications';
            } else if (course === 'js-web') {
               course = 'JS-Web';
            }
            $('#myCourses .courseBody ul').append($(`<li>${course}</li>`));
         });
         if (form === 'online') {
            totalPrice -= totalPrice * 0.06;
         }
         $('.courseFoot p').text(`Cost: ${Math.floor(totalPrice).toFixed(2)} BGN`);
      }
   }
}



