var gitbook = require('gitbook');

var book = new gitbook.Book('doc/', {

	config: {

		output: './_book'
	}
});

book.parse().then(function(){

	return book.generate("website");
});
