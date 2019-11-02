function wn_pos_value(game,piece,pos){
    
    //get mobility
    var mobility = game.moves({square: pos}).length;

    //check if knight is defended by a pawn
    var pawn_defend_knight = 0;
    var letters = ['a','b','c','d','e','f','g','h'];
    for(var col = 0; col < letters.length; col++){
        for(var row = 1; row <= 8; row++){
            var p = game.get(letters[col]+row);
            if(p != null && p.type == 'p' && p.color == 'w'){
                var top_left = letters[col-1]+(row+1);
                var top_right = letters[col+1]+(row+1);
                if(top_left == pos || top_right == pos){
                    pawn_defend_knight = 1;
                }
            }
        }
    }

    //check if knight can be evicted by enemy pawn
    var evected_by_enemy_pawn = 0; //knight is safe form pawn attack
    //reverse game turn
    var tokens = game.fen().split(' ');
    tokens[1] = 'b';
    game.load(tokens.join(' '));
    var moves = game.moves();
    for(var i = 0; i < moves.length; i++){
        if(moves[i].includes('x')){
            //clear string
            if(moves[i].endsWith("#")) moves[i] = moves[i].replace("#","");
            if(moves[i].endsWith("+")) moves[i] = moves[i].replace("+","");
            if(moves[i].endsWith("=Q"))moves[i] = moves[i].replace("=Q","");
            if(moves[i].endsWith("=B"))moves[i] = moves[i].replace("=B","");
            if(moves[i].endsWith("=R"))moves[i] = moves[i].replace("=R","");
            if(moves[i].endsWith("=N"))moves[i] = moves[i].replace("=N","");
            if(moves[i].slice(0,1) == 'p' && moves[i].slice(-1) == pos){
                evected_by_enemy_pawn = 1; //knight is not safe from pawn attack
            }
        }
    }
    //reverse game turn
    var tokens = game.fen().split(' ');
    tokens[1] = 'w';
    game.load(tokens.join(' '));

    //check if the knight is at a1-a8, b1-g1, h1-h8, b8-g8
    var knight_1st_border = 0;
    for(var row = 1; row <= 8; row++){
        if(('a'+row) == pos || ('h'+row) == pos){
            knight_1st_border = 1;
        }
    }
    for(var col = 0; col < letters.length; col++){
        if((letters[col]+'1') == pos || (letters[col]+'8') == pos){
            knight_1st_border = 1;
        }
    }
    //check if the knight is at b2-b7, c2-f2, g2-g7, c7-f7
    var knight_2nd_border = 0;
    for(var row = 2; row <= 7; row++){
        if(('b'+row) == pos || ('g'+row) == pos){
            knight_2nd_border = 1;
        }
    }
    for(var col = 2; col < letters.length-2; col++){
        if((letters[col]+'2') == pos || (letters[col]+'2') == pos){
            knight_2nd_border = 1;
        }
    }
    //check if the knight is at c3-c6, d3-e3, f3-f6, d6-e6
    var knight_3rd_border = 0;
    for(var row = 3; row <= 6; row++){
        if(('c'+row) == pos || ('f'+row) == pos){
            knight_3rd_border = 1;
        }
    }
    for(var col = 3; col < letters.length-3; col++){
        if((letters[col]+'3') == pos || (letters[col]+'3') == pos){
            knight_3rd_border = 1;
        }
    }
    //check if the knight is at d4, e4, d5,e5
    var knight_4th_border = 0;
    if(pos == 'd4' || pos == 'e4' || pos == 'd5' ||pos == 'e5'){
        knight_4th_border = 1;
    }

    //knight posiotional weights
	var X_knight_1 = 0.68;
	var X_knight_2 = 0.72;
	var X_knight_3 = 0.73;
	var X_knight_4 = -0.15;
	var X_knight_5 = 0.06;
	var X_knight_6 = 0.26;
    var X_knight_7 = 0.43;
    
    var pos_value = (X_knight_1 * mobility) + (X_knight_2 * pawn_defend_knight) + 
					(X_knight_3 * evected_by_enemy_pawn) + (X_knight_4 * knight_1st_border) +
                    (X_knight_5 * knight_2nd_border) + (X_knight_6 * knight_3rd_border) + 
                    (X_knight_7 * knight_4th_border);

    // console.log('mobility '+mobility);
    // console.log('pawn defend '+pawn_defend_knight);
    //console.log('enemy pawn attack '+evected_by_enemy_pawn);
    // console.log('1st border: '+knight_1st_border);
    // console.log('2nd border: '+knight_2nd_border);
    // console.log('3rd border: '+knight_3rd_border);
    // console.log('4th border: '+knight_4th_border);
    //console.log(pos_value);

    return pos_value;
}