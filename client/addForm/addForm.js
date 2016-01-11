Template.addForm.events({
	'submit form' : function(Event, Template){
		Event.preventDefault();

		var first_name = Template.find("#first_name").value;
		var last_name = Template.find("#last_name").value;
		var quote = Template.find("#quote").value;
		var gender = Template.find("#gender").value;
		var github_link = Template.find("#github_link").value;

		ProgrammerCollection.insert(createNewProgrammer(first_name, last_name, quote, gender, github_link));
	}
});