const $students = $(".student-list li");
const $studentsName = $('H3'); // Used in search.
const $headerNode = $('.page-header');
const $studentUlNode = $('UL[class="student-list"]');
const handleSearchFormBuild = `
                              <h2>Students</h2>
                              <div class="student-search">
                                <input id="search-value" placeholder="Search for students...">
                                <button id="search">Search</button>
                              </div>`; /// END handleSearchFormBuild.
$headerNode.html(`${handleSearchFormBuild}`); // Append search form.
// 404 Error Handler.
const handle404Error = `
                      <li class="error-404">
                        <div class="error-details">
                          <h1>Whoops...</h1>
                          <span class="no-resaults">Your search result did not find any records.</span>
                          <span class="error">404 Error, page not found. <span>: (</span></span>
                        </div>
                      </li>`; /// END 404 Errors.
// ----------------------------------------------- //
//  Now we can slect our form inputs and buttons  //
const $searchButton = $('button[id="search"]').on('click', (e) => { // Event listener on search button.
	const $inputValue = $('input[id="search-value"]').val();
	const $studentDetail = $students;
	let $student = $students;

	let HTML = `<ul class="student-list">`; // Create UL

	for(let i = 0; i < $studentDetail.length; i++) { // Loop thew students search.

		let studentDetails = $studentDetail[i].firstElementChild; // First div in students list (li > div).
		let name = studentDetails.firstElementChild.nextElementSibling; // search every name.
		let imgSrc = name.previousElementSibling; // Student image src link
		let email = name.nextElementSibling; // Student email address.
		let joinDate = studentDetails.nextElementSibling; // Student join Date.

		if(name.textContent.indexOf($inputValue) >= 0) { // If user input === match in studnets data. Return all matches. !IMPOTANT only searching threw names.
			HTML += `<li class="student-item cf">` +
				`<div class="student-details">` +
				`<img class="avatar" src="${imgSrc.src}">` +
				`<h3>${name.textContent}</h3>` +
				`<span class="email">${email.textContent}</span>` +
				`</div>` +
				`<div class="joined-details">` +
				`<span class="date">${joinDate.textContent}</span>` +
				`</div>` +
				`</li>`;
		}
	} // END OF FOR LOOP!  ///
	HTML += `</ul>`; // Finish and button up touch.
	let isResults = HTML.length; // Check if data does exist if not throw 404 error.
	if(isResults < 45) { /// 404 Error
		HTML = `${handle404Error}`; // Append 404
	}


	$studentUlNode.html(HTML); // Add matched studens in search.
	$student = $(".student-list li"); // Overright old students with searched students.
	$(".pagination").remove(); // Remove old navigation
	onLoad($student); // Create new navigation. Via our callback func.
});

//////////////////////    End of SEARCH.    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const populateStudents = (pageNumber, student) => {
	student.hide(); // Hide all students on the page
	student.slice((pageNumber * 10) - 10, pageNumber * 10).show(); //
}

const handlePageLinks = (student) => {
	const pageCount = Math.ceil(student.length / 10); // Figure out how many students are in the DOM.

	let HTML = '<div class="pagination">' +
		'<ul>';
	for(let i = 1; i <= pageCount; i++) { /// Populate links
		HTML += '<li><a href="#">' + i + '</a></li>';
	}
	HTML += '</ul>' +
		'</div>';

	$('.page').append(HTML); // Append out created HTML links to the DOM.
	$(".pagination a").first().addClass('active'); // Set default active link.

	$(".pagination a").on('click', function () { // Handle page linked clicked.
		const pageNumber = $(this).text(); // Set page number to value clicked.
		$(".pagination a").each(function () {
			$(this).removeClass("active"); // Remove old active class
		});
		$(this).addClass("active"); // Set the clicked link as active link.
		populateStudents(pageNumber, student); // Use the populateStudents function to display the page for the link clicked.
	});
}
const onLoad = (callback) => {
	$(".student-list li:gt(9)").hide(); //jQuery( ":gt(-index)" ) // indexFromEnd: Zero-based index, counting backwards from the last element.
	handlePageLinks(callback); // Add links.
}
onLoad($students); // On initial load

$(document).ready(function () { // Test load times
	console.log("Time until everything loaded : ", Date.now() - timerStart);
});