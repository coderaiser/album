(function(){
    'use strict';
    
    var Util , ALBUM, Player;
    
    ALBUM = {
        'РЖБ - Глаза Богини Дурги'  : 569228,
        assai                       : 2660004,
        assai_marsel                : 293638,
        basta_guf                   : 1383527,
        dakraj_gillia               : 489707,
        'Danger Mouse - Grey Album' : 571950,
        karandash                   : 37007776,
        vladi                       : 1635286,
        vitja_ak                    : 2059665,
        remdigga                    : 2641504,
        robot_koch_the_other_side   : 1234248,
        kravc                       : 2658687,
        radj_leftlovers             : 2323825,
        st                          : 941872,
        triada                      : 2679062
    };
    
    Util = {
        getIdByEmbedCode    : function(pEmbedCode){
            var lPlaylist   = '%2Fplaylists%2F',
                lBe4        = pEmbedCode.indexOf(lPlaylist);
            
            pEmbedCode = pEmbedCode.substr(lBe4)
                .replace(lPlaylist,'');
            
            var lAfter = pEmbedCode.substr(pEmbedCode.indexOf('&')),
                lId = pEmbedCode.replace(lAfter,'');
            
            return lId;
        },
        
        getById             : function (pId, pElement){
            return (document || pElement).getElementById(pId);
        }
    };
    
    function loadPlayer(event) {
        var src = ALBUM[event.target.id];
        
        Player.src = '//w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Fplaylists%2F' +
            src + '&amp;auto_play=true&amp;show_artwork=true&amp;color=ff7700';
    }
            
    window.addEventListener('load', function load(){
        window.removeEventListener('load', load);
        
        Player = Util.getById('player');
        
        Object.keys(ALBUM).forEach(function(name) {
            var elem = Util.getById(name);
            
            if (elem)
                elem.addEventListener('click', loadPlayer);
            else
                console.log('Error ' + name + ' album key not found.');
        });
    });
})();
