var gitbook = require('gitbook');

var book = new gitbook.Book('./txt/', {

	config: {

		output: './gh-pages'
	}
});

book.parse().then(function(){

	return book.generate("website");
});
