function white(game){
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    var check_board = [];
    
    //get white defenders
    for(var col = 0; col < letters.length; col++){
        for(var row = 1; row <= 8; row++){
            var white = {};
            var piece = game.get(letters[col]+row);
            if(piece != null && piece.color == 'w'){
                game.put({type: 'q', color: 'b'}, letters[col]+row);
                var w_moves = game.moves({verbose: true});
                game.remove(letters[col]+row);
                game.put({type: piece.type, color: piece.color}, letters[col]+row);
                
                var d_arr = [];
                for(var i = 0; i < w_moves.length; i++){
                    if(w_moves[i].san.includes('x')){
                        //clear string
                        if(w_moves[i].san.endsWith("#")) w_moves[i].san = w_moves[i].san.replace("#","");
                        if(w_moves[i].san.endsWith("+")) w_moves[i].san = w_moves[i].san.replace("+","");
                        if(w_moves[i].san.endsWith("=Q"))w_moves[i].san = w_moves[i].san.replace("=Q","");
                        if(w_moves[i].san.endsWith("=B"))w_moves[i].san = w_moves[i].san.replace("=B","");
                        if(w_moves[i].san.endsWith("=R"))w_moves[i].san = w_moves[i].san.replace("=R","");
                        if(w_moves[i].san.endsWith("=N"))w_moves[i].san = w_moves[i].san.replace("=N","");
                        if((letters[col]+row) == w_moves[i].san.slice(-2)){
                            d_arr.push({'piece': w_moves[i].san.slice(0,1), 'pos': w_moves[i].from});
                        }//end for
                    }//end if
                }//end for

                //get piece attackers
                //reverse game turn
                var tokens = game.fen().split(' ');
                tokens[1] = 'b';
                game.load(tokens.join(' '));

                var b_moves = game.moves({verbose: true});
                var a_arr = [];
                for(var i = 0; i < b_moves.length; i++){
                    if(b_moves[i].san.includes('x')){
                        //clear string
                        if(b_moves[i].san.endsWith("#")) b_moves[i].san = b_moves[i].san.replace("#","");
                        if(b_moves[i].san.endsWith("+")) b_moves[i].san = b_moves[i].san.replace("+","");
                        if(b_moves[i].san.endsWith("=Q"))b_moves[i].san = b_moves[i].san.replace("=Q","");
                        if(b_moves[i].san.endsWith("=B"))b_moves[i].san = b_moves[i].san.replace("=B","");
                        if(b_moves[i].san.endsWith("=R"))b_moves[i].san = b_moves[i].san.replace("=R","");
                        if(b_moves[i].san.endsWith("=N"))b_moves[i].san = b_moves[i].san.replace("=N","");
                        if((letters[col]+row) == b_moves[i].san.slice(-2)){
                            a_arr.push({'piece': b_moves[i].san.slice(0,1), 'pos': b_moves[i].from});
                        }//end if
                    }//end if
                }//end for

                //reverse game turn
                var tokens = game.fen().split(' ');
                tokens[1] = 'w';
                game.load(tokens.join(' '));

                white = {
                    'piece': piece.type,
                    'pos': letters[col]+row,
                    'defenders': d_arr,
                    'attackers': a_arr
                };
            }//end if
            if(Object.keys(white).length != 0){
                check_board.push(white);
            }
        }//end for
    }//end for

    //console.log(check_board);
    return check_board;
}