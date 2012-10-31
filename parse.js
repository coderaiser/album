/**
 * function generate html with images
 */
exports.generateImgHTML = function(pAlbum){
    var lName,
        lSrc,
        lOutput ='',
        lSize   = '300';
    
    for(lName in pAlbum){
        lSrc = pAlbum[lName].cover,            
        lOutput += '<img' + getSizeParams(lSize) + 
            'src=' + lSrc + genAllParams(lName) + '>';
    }
    
    return lOutput;
};

/**
 * function generate id, alt and title params of img tag
 * @param {String} pName
 */
function genAllParams(pName){
    return  genParam('id', pName) +
            genParam('alt', pName) +
            genParam('title', pName);
}
/**
 * function generate param with name
 * @param {String} pTagParam
 * @param {String} pName
 */
function genParam(pTagParam, pName){
    return ' ' + pTagParam + '="' + pName + '"';
}

/**
 * function returns size params
 * @param {String, Number} pSize
 */
function getSizeParams(pSize){
    return  ' width='   + pSize + 'px' +
            ' height='  + pSize + 'px ';
}