function getMatVal(piece){
    if(piece.type == 'p' || piece.type == 'P'){
        return 1;
    }
    if(piece.type == 'n' || piece.type == 'N'){
        return 3.02;
    }
    if(piece.type == 'b' || piece.type == 'B'){
        return 3.19;
    }
    if(piece.type == 'r' || piece.type == 'R'){
        return 5.06;
    }
    if(piece.type == 'q' || piece.type == 'Q'){
        return 9.10;
    }
    if(piece.type == 'k' || piece.type == 'K'){
        return 0;
    }
}