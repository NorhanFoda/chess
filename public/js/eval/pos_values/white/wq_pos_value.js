function wq_pos_value(game,piece,pos){

    //get queen mobility
    var mobility = game.moves({square: pos}).length;

    //bishop positinal weights
    var X_queen_1 = 9.10;

    var pos_value = X_queen_1 * mobility;

    //console.log(pos_value);
    return pos_value;
}