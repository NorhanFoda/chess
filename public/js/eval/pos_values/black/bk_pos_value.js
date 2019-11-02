function bk_pos_value(game, pos, defenders, attackers){

    //reverse game turn
    var tokens = game.fen().split(' ');
    tokens[1] = 'b';
    game.load(tokens.join(' '));
    
    //check if black king is castled
    var casteled = 0;
    if(game.history().pop() == 'O-O' || game.history().pop() == 'O-O-O'){
        casteled = 1;
    }

    //get the number of pawns that protect the king
    var p_count = 0;

    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    var col = pos.slice(0,1);
    //search for pawns in same row
    var row = parseInt(pos.slice(-1));
    for(var i = letters.indexOf(col)-3; i <= letters.indexOf(col)+3; i++){
        var p = game.get(letters[i]+row);
        if(p != null && p.color == 'b' && p.type == 'p'){
            p_count++;
        }
        else if(p != null && p.color == 'w' && p.type == 'p'){
            attackers.push(p.type);
        }
    }
    //search for pawns in lower 3 rows
    var row_1 = row-1;
    for(var i = letters.indexOf(col)-3; i <= letters.indexOf(col)+3; i++){
        var p = game.get(letters[i]+row_1);
        if(p != null && p.color == 'b' && p.type == 'p'){
            p_count++;
        }
        else if(p != null && p.color == 'w' && p.type == 'p'){
            attackers.push(p.type);
        }
    }
    var row_2 = row-2;
    for(var i = letters.indexOf(col)-3; i <= letters.indexOf(col)+3; i++){
        var p = game.get(letters[i]+row_2);
        if(p != null && p.color == 'b' && p.type == 'p'){
            p_count++;
        }
        else if(p != null && p.color == 'w' && p.type == 'p'){
            attackers.push(p.type);
        }
    }
    var row_3 = row-3;
    for(var i = letters.indexOf(col)-3; i <= letters.indexOf(col)+3; i++){
        var p = game.get(letters[i]+row_3);
        if(p != null && p.color == 'b' && p.type == 'p'){
            p_count++;
        }
        else if(p != null && p.color == 'w' && p.type == 'p'){
            attackers.push(p.type);
        }
    }
    //search for pawns in upper 3 rows
    var u_row_1 = row+1;
    for(var i = letters.indexOf(col)-3; i <= letters.indexOf(col)+3; i++){
        var p = game.get(letters[i]+u_row_1);
        if(p != null && p.color == 'b' && p.type == 'p'){
            p_count++;
        }
        else if(p != null && p.color == 'w' && p.type == 'p'){
            attackers.push(p.type);
        }
    }
    var u_row_2 = row+2;
    for(var i = letters.indexOf(col)-3; i <= letters.indexOf(col)+3; i++){
        var p = game.get(letters[i]+u_row_2);
        if(p != null && p.color == 'b' && p.type == 'p'){
            p_count++;
        }
        else if(p != null && p.color == 'w' && p.type == 'p'){
            attackers.push(p.type);
        }
    }
    var u_row_3 = row+3;
    for(var i = letters.indexOf(col)-3; i <= letters.indexOf(col)+3; i++){
        var p = game.get(letters[i]+u_row_3);
        if(p != null && p.color == 'b' && p.type == 'p'){
            p_count++;
        }
        else if(p != null && p.color == 'w' && p.type == 'p'){
            attackers.push(p.type);
        }
    }
    
    
    //get pieces that defend the king (sum material vlaues of these pieces)
    //pieces material values
    var pawn = 0;
	var knight = 0;
	var bishop = 0;
	var rook = 0;
    var queen = 0;
    if(defenders.length > 0){
        for(var i = 0; i < defenders.length; i++){
            if(defenders[i] == 'p' || defenders[i] == 'P'){
                pawn = 100;
            }
            if(defenders[i] == 'n' || defenders[i] == 'N'){
                knight = 302;
            }
            if(defenders[i] == 'b' || defenders[i] == 'B'){
                bishop = 319;
            }
            if(defenders[i] == 'r' || defenders[i] == 'R'){
                rook = 506;
            }
            if(defenders[i] == 'q' || defenders[i] == 'Q'){
                queen = 910;
            }
        }//end for
    }//end if
    var sum_defenders = pawn + knight + bishop + rook + queen;

    //get pieces that attack the king (sum material values of these pieces)
    //reset material values
    pawn = 0;
	knight = 0;
	bishop = 0;
	rook = 0;
    queen = 0;
    if(attackers.length > 0){
        for(var i = 0; i < attackers.length; i++){
            if(attackers[i] == 'p' || attackers[i] == 'P'){
                pawn = 100;
            }
            if(attackers[i] == 'n' || attackers[i] == 'N'){
                knight = 302;
            }
            if(attackers[i] == 'b' || attackers[i] == 'B'){
                bishop = 319;
            }
            if(attackers[i] == 'r' || attackers[i] == 'R'){
                rook = 506;
            }
            if(attackers[i] == 'q' || attackers[i] == 'Q'){
                queen = 910;
            }
        }//end for
    }//end if
    var sum_attackers = pawn + knight + bishop + rook + queen;

    //king positional weights
	var X_king_1 = 16.75;
	var X_king_2 = -14.25;
	var X_king_3 = 0.45;
    var X_king_4 = 0.72;

    pos_value = (X_king_1 * sum_defenders) + (X_king_2 * sum_attackers) + (X_king_3 * casteled) + (X_king_4 * p_count);

    // console.log('protecting pawns '+p_count);
    // console.log('defenders '+sum_defenders);
    // console.log('attackers '+sum_attackers);
    // console.log('casteled '+casteled);
    // console.log('pos value '+pos_value);

    //reverse game turn
    var tokens = game.fen().split(' ');
    tokens[1] = 'w';
    game.load(tokens.join(' '));

    return pos_value;
}