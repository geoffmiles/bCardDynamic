Router.configure({
	'layoutTemplate':"layout"
});

Router.route('/bCard/:first_name', 
	{name: "bCard",
		'data' : function(){
			return ProgrammerCollection.findOne({
				first_name: this.params.first_name})
		}
	});

Router.route('/new', {name: "addForm"});