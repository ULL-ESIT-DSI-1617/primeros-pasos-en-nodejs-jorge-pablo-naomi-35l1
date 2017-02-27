var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, '_book'),
    {
        user: {
            name: 'Jorge Aguiar Martín',
            email: 'alu0100823295@ull.edu.es'
        }
    },

    function(err) {
        console.log("Publicado en GitHub Pages");
});
