function genAllParams(pName){
    return  genParam('id', pName) +
            genParam('alt', pName) +
            genParam('title', pName);
}

function genParam(pTagParam, pName){
    return ' ' + pTagParam + '="' + pName + '"';
}

function getSizeParams(pSize){
    return  ' width=' + pSize +
            ' height=' + pSize + ' ';
}

for(lName in Album){
    var lSrc = Album[lName].cover,
        lSize = '300';
    console.log('<img' + getSizeParams(lSize) + 
        'src=' + lSrc +
        genAllParams(lName))
}