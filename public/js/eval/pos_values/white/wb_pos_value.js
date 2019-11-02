function wb_pos_value(game,piece,pos){
    
    //get bishop mobility
    var mobility = game.moves({square: pos}).length;

    //bishop positinal weights
    var X_bishop_1 = 0.76;
    
    var pos_value = X_bishop_1 * mobility;

    //console.log(pos_value);

    return pos_value;
}