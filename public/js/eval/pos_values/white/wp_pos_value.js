function wp_pos_value(game,piece, pos){

    //check backward pawns
    var backward = 0;
    var front_piece = null;
    var b_col = pos.slice(0,1);
    var b_row = pos.slice(-1);
    if(piece == 'p'){
        if((b_row+1) <= 8){
            front_piece = game.get(b_col+(b_row+1));
        }
        if(front_piece != null)
        {
            if(front_piece.color == 'b' && front_piece.type == 'p')
            {
                backward = 1;
            }
        }    
    }

    //check centeral pawns
    var centeral = 0;    
    if(pos == 'c4' || pos == 'c5' || pos == 'd4' || pos == 'd5' || pos == 'e4' || pos == 'e5' || pos == 'f4' || pos == 'f5')
    {
        centeral = 1;
    }

    //check doubled pawns
    var doubled = 0;
    var d_col = pos.slice(0,1);
    var d_row = pos.slice(-1);
    if((d_row+1) <= 8){
        var p = game.get(d_col+(d_row+1));
        if(p != null && p.color == 'w' && p.type == 'p'){
            doubled = 1;
        }
    }

    //check passed pawns
    var passed = 0;
    var moves =game.moves({square: pos, verbose: true});
    for(var i = 0; i < moves.length; i++){
        if(moves[i].flags == 'e'){
            passed = 1;
        }
    }

    //check isolated pawns
    var isolated = 0;
    var letters = ['a','b','c','d','e','f','g','h'];
    for(var i_col = 0; i_col < letters.length; i_col++){
        for(var i_row = 1; i_row <= 8; i_row++){
            if((letters[i_col]+i_row) == pos){
                var left_piece = game.get(letters[i_col-1]+i_row);
                var right_piece = game.get(letters[i_col+1]+i_row);
                        
                var top_left_piece = game.get(letters[i_col-1]+(i_row+1));
                var top_right_piece = game.get(letters[i_col+1]+(i_row+1));
                        
                var bottom_left_piece = game.get(letters[i_col-1]+(i_row-1));
                var bottom_right_piece = game.get(letters[i_col+1]+(i_row-1));

                if(left_piece != null && left_piece.color == 'w' && left_piece.type == 'p')
                {
                    isolated = 0;
                }
                else if(right_piece != null && right_piece.color == 'w' && right_piece.type == 'p')
                {
                    isolated = 0;
                }
                else if(top_left_piece != null && top_left_piece.color == 'w' && top_left_piece.type == 'p')
                {
                    isolated = 0;
                }
                else if(top_right_piece != null && top_right_piece.color == 'w' && top_right_piece.type == 'p')
                {
                    isolated = 0;
                }
                else if(bottom_left_piece != null && bottom_left_piece.color == 'w' && bottom_left_piece.type == 'p')
                {
                    isolated = 0;
                }
                else if(bottom_right_piece != null && bottom_right_piece.color == 'w' && bottom_right_piece.type == 'p')
                {
                    isolated = 0;
                }
                else
                {
                    isolated = 1;
                }
            }
        }
    }

    //pawn positional weights
	var X_pawn_1 = -0.44;
	var X_pawn_2 = -0.48;
	var X_pawn_3 = -0.41;
	var X_pawn_4 = 0.48;
    var X_pawn_5 = 0.49;

    // console.log('doubled '+doubled);
    // console.log('isolated '+isolated);
    // console.log('backward '+backward);
    // console.log('central '+centeral);
    // console.log('passed '+passed);
    
    var pos_value = (X_pawn_1 * doubled) + (X_pawn_2 * isolated) + (X_pawn_3 * backward) + (X_pawn_4 * centeral) +
						(X_pawn_5 * passed);
    // w_mobility(game,piece,pos);

    return pos_value;
}