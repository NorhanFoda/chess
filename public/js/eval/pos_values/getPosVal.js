function getPosVal(game, piece, pos){
    var pos_val = 0;

    if(piece != null){
        if(piece.color == 'w'){
            if(piece.type == 'p'){
                pos_val = wp_pos_value(game, piece, pos);
            }
            else if(piece.type == 'r'){
                pos_val = wr_pos_value(game, piece, pos);
            }
            else if(piece.type == 'n'){
                pos_val = wn_pos_value(game, piece, pos);
            }
            else if(piece.type == 'b'){
                pos_val = wb_pos_value(game, piece, pos);
            }
            else if(piece.type == 'q'){
                pos_val = wq_pos_value(game, piece, pos);
            }
            else if(piece.type == 'k'){
                var defenders = getDefenders(game, piece, pos);
                var attackers =  getAttackers(game, piece, pos);
                pos_val = wk_pos_value(game, pos, defenders, attackers);
            }
        }//end if
        else if(piece.color == 'b'){
            if(piece.type == 'p'){
                pos_val = bp_pos_value(game, piece, pos);
            }
            else if(piece.type == 'r'){
                pos_val = br_pos_value(game, piece, pos);
            }
            else if(piece.type == 'n'){
                pos_val = bn_pos_value(game, piece, pos);
            }
            else if(piece.type == 'b'){
                pos_val = bb_pos_value(game, piece, pos);
            }
            else if(piece.type == 'q'){
                pos_val = bq_pos_value(game, piece, pos);
            }
            else if(piece.type == 'k'){
                var defenders = getDefenders(game, piece, pos);
                var attackers =  getAttackers(game, piece, pos);
                pos_val = bk_pos_value(game, pos, defenders, attackers);
            }
        }
    }
    return pos_val;
}