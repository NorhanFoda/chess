function evaluate(game){

    var chess = new Chess();
    chess.load(game.fen());

    var whitePower = 0;
    var blackPower = 0;

    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for(var col = 0; col < letters.length; col++){
        for(var row = 1; row <=8; row++){

            var p = game.get(letters[col]+row);
            
            if(p != null){
                var piece = {'piece': p, 'pos': letters[col]+row};
                //test(chess,piece);
                if(p.color == 'w'){
                    whitePower += getPower(chess,piece);
                }
                else if(p.color == 'b'){
                    blackPower += getPower(chess,piece);
                }
            }//end if
        }//end for
    }//end for

    console.log('white power: '+whitePower);
    console.log('black power: '+blackPower);

    return blackPower;
}