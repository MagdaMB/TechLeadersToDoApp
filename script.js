document.addEventListener('DOMContentLoaded', function () {

	var notes = [
					{
					   title: "first note",
					   date: "22.02.2018"
					}, 
					{
					   title: "second note",
					   date: "22.02.2018"
					}
				]

	function showNotes() {
		
		for(var i=0; i<notes.length; i++) {
			var newList = document.createElement("LI");

			var title = document.createTextNode(notes[i].title + " - " + notes[i].date);

			newList.appendChild(title);
			
			document.getElementById("myList").appendChild(newList);

	}
}

	var btn = document.getElementById("button");

		btn.addEventListener("click", function() {
			var t = document.getElementById("title").value;
			var d = document.getElementById("date").value;

			var obiekt = {};

			obiekt.title = t;
			obiekt.date = d;

			notes.push(obiekt);
			
	showNotes();

	})
});	
/*var notes = [
				{
				   title: "first note",
				   date: "22.02.2018"
				}, 
				{
				   title: "second note",
				   date: "22.02.2018"
				}
			]

function showNotes() {
	for(var i=0; i<notes.length; i++) {
		console.log(notes[i]);
	}
}

showNotes();

function addNotes() {

	var t = prompt("podaj tytuł");
	var d = prompt("podaj date");
	
	var obiekt = {};
	obiekt.title = t;
	obiekt.date = d;

	notes.push(obiekt)
}

addNotes();


function deleteNotes() {
	var noteNum = prompt("podaj nr notatki do usuniecia");

	notes.splice(noteNum, 1);
}

deleteNotes();


console.log(notes)*/
