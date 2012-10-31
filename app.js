var DIR     = process.cwd() +'/',
    Album  = require(DIR + 'album'),
    parse  = require(DIR + 'parse');
    
var lImages = parse.generateImgHTML(Album);

console.log(lImages);

