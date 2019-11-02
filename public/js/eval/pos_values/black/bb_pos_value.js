function bb_pos_value(game,piece,pos){
    
    //reverse game turn
    var tokens = game.fen().split(' ');
    tokens[1] = 'b';
    game.load(tokens.join(' '));

    //get bishop mobility
    var mobility = game.moves({square: pos}).length;

    //bishop positinal weights
    var X_bishop_1 = 0.76;
    
    var pos_value = X_bishop_1 * mobility;

    // console.log(mobility);
    //console.log(pos_value);

    //reverse game turn
    var tokens = game.fen().split(' ');
    tokens[1] = 'w';
    game.load(tokens.join(' '));

    return pos_value;
}