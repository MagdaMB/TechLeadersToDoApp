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


console.log(notes)
