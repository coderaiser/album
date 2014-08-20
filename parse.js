/**
 * function generate html with images
 */
exports.generateImgHTML = function(album){
    var src,
        ret     ='',
        size    = '300';
    
    Object.keys(album).forEach(function(name) {
        src     = album[name].cover;
        ret     += '<img'   + getSizeParams(size)         + 
                    'src='  + src + genAllParams(name)  + '>';
    });
    
    return ret;
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