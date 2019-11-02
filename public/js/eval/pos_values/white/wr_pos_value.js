function wr_pos_value(game,piece,pos){

    //rook mobility
    var mobility = game.moves({square:pos}).length;

    //true if the rook in the 7th row
    var r_in_7th_row = 0;
    if(pos.slice(-1) == 7){
        r_in_7th_row = 1;
    }
    
    var no_pawns = 1;
    var white_pawn_flag = false;
    var black_pawn_flag = false;
    var white_pawn_pos = null;
    for(var row = 1; row <= 8; row++){
        var piece = game.get(pos.slice(0,1)+row);
        if(piece != null){
            //true if on the rook's col there is no pawns
            if(piece.type == 'p'){
                no_pawns = 0;
                if(piece.color == 'w'){
                    white_pawn_flag = true;
                    white_pawn_pos = pos.slice(0,1)+row;
                }
                if(piece.color == 'b'){
                    black_pawn_flag = true;
                    black_pawn_pos = pos.slice(0,1)+row;
                }
            }
        }
    }

    //true if there only enemy pawns on rook col
    var only_enemy_pawns = 0;
    if(white_pawn_flag == false && black_pawn_flag == true){
        only_enemy_pawns = 1;
    }

    //true if there are pawns of both sides and rook is infront of or behind its pawn
    var r_infront_pawn = 0;
    var r_behind_pawn = 0;
    if(white_pawn_flag && black_pawn_flag){
        if(pos.slice(-1) > white_pawn_pos.slice(-1)){
            r_infront_pawn = 1;
        }
        if(pos.slice(-1) < white_pawn_pos.slice(-1)){
            r_behind_pawn = 1;
        }
    }

    //true if there is at least 2 rook in 7th row
    var two_r_7th_row = 0;
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    var r_count = 0;
    for(var col = 0; col < letters.length; col++){
        var piece = game.get(col[letters]+7);
        if(piece != null && piece.type == 'r'){
            r_count++;
        }
    }
    if(r_count >= 2){
        two_r_7th_row = 1;
    }

    //rook positional wieghts
	var X_rook_1 = 0.73;
	var X_rook_2 = 0.46;
	var X_rook_3 = 0.33;
	var X_rook_4 = 0.27;
	var X_rook_5 = -0.07;
	var X_rook_6 = 0.68;
    var X_rook_7 = 0.82;
    
    var pos_value = (X_rook_1 * mobility) + (X_rook_2 * no_pawns) + 
					(X_rook_3 * only_enemy_pawns) + (X_rook_4 * r_infront_pawn) + 
					(X_rook_5 * r_behind_pawn) + (X_rook_6 * r_in_7th_row) +
                    (X_rook_7 * two_r_7th_row);
    
    // console.log('mobility '+mobility);
    // console.log('no p '+no_pawns);
    // console.log('enemy p '+only_enemy_pawns);
    // console.log('in front '+r_infront_pawn);
    // console.log('behind '+r_behind_pawn);
    // console.log('7th row '+r_in_7th_row);
    // console.log('both 7th row '+two_r_7th_row);
    // console.log('pos '+ pos_value);
    
    return pos_value;

}