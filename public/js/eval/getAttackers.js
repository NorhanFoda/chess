function getAttackers(game, piece, pos){

    var a_arr = [];

    if(piece != null && piece.color == 'w'){
        //reverse game turn
        var tokens = game.fen().split(' ');
        tokens[1] = 'b';
        game.load(tokens.join(' '));

        var b_moves = game.moves({verbose: true});
        for(var i = 0; i < b_moves.length; i++){
            if(b_moves[i].san.includes('x')){
                //clear string
                if(b_moves[i].san.endsWith("#")) b_moves[i].san = b_moves[i].san.replace("#","");
                if(b_moves[i].san.endsWith("+")) b_moves[i].san = b_moves[i].san.replace("+","");
                if(b_moves[i].san.endsWith("=Q"))b_moves[i].san = b_moves[i].san.replace("=Q","");
                if(b_moves[i].san.endsWith("=B"))b_moves[i].san = b_moves[i].san.replace("=B","");
                if(b_moves[i].san.endsWith("=R"))b_moves[i].san = b_moves[i].san.replace("=R","");
                if(b_moves[i].san.endsWith("=N"))b_moves[i].san = b_moves[i].san.replace("=N","");
                if(pos == b_moves[i].san.slice(-2)){
                    a_arr.push({'piece': {'type':b_moves[i].piece, 'color': 'b'}, 'pos': b_moves[i].from});
                }//end if
            }//end if
        }//end for

        //reverse game turn
        var tokens = game.fen().split(' ');
        tokens[1] = 'w';
        game.load(tokens.join(' '));

    }//end if
    else if(piece != null && piece.color == 'b'){
        //get piece attackers
        var w_moves = game.moves({verbose: true});
        for(var i = 0; i < w_moves.length; i++){
            if(w_moves[i].san.includes('x')){
                //clear string
                if(w_moves[i].san.endsWith("#")) w_moves[i].san = w_moves[i].san.replace("#","");
                if(w_moves[i].san.endsWith("+")) w_moves[i].san = w_moves[i].san.replace("+","");
                if(w_moves[i].san.endsWith("=Q"))w_moves[i].san = w_moves[i].san.replace("=Q","");
                if(w_moves[i].san.endsWith("=B"))w_moves[i].san = w_moves[i].san.replace("=B","");
                if(w_moves[i].san.endsWith("=R"))w_moves[i].san = w_moves[i].san.replace("=R","");
                if(w_moves[i].san.endsWith("=N"))w_moves[i].san = w_moves[i].san.replace("=N","");
                if(pos == w_moves[i].san.slice(-2)){
                    a_arr.push({'piece': {'type':w_moves[i].piece, 'color': 'w'}, 'pos': w_moves[i].from});
                }//end if
            }//end if
        }//end for
    }//end if
    return a_arr;
}