function getPower(game, piece){

    //    return getPosVal(game, piece.piece, piece.pos);
    
        var ML = []; // Main piece list
        var AML = []; //Attackers Main piece list
        var DL = []; // Defenders list
        var AL = []; // Attackers list
        var DL_freq = []; // Defenders list frequency
        var AL_freq = []; // Attackers list frequency
    
    //     console.log(piece.piece.color+piece.piece.type+' at '+piece.pos);
        
        ML.push(piece);
    
        var defs = getDefenders(game, piece.piece, piece.pos);
        var attks = getAttackers(game, piece.piece, piece.pos);
    
        //push defenders to defenders list
        for(var i = 0; i < defs.length; i++){
            if(defs[i] !== undefined){
                DL.push(defs[i]);
                DL_freq.push(1);
            }
        }
    
        //push attackers to attackers list
        for(var i = 0; i < attks.length; i++){
            if(attks[i] !== undefined){
                AL.push(attks[i]);
                AL_freq.push(1);
            }
        }
    
        //get defenders and attakers of defenders of main piece
        for(var i = 0; i < DL.length; i++){
            if(isVisited(ML, DL[i]) == -1){
                ML.push(DL[i]);
    
                //get defenders of defenders
                var d_defs = getDefenders(game, DL[i].piece, DL[i].pos);
                for(var j = 0; j < d_defs.length; j++){
                    if(isVisited(DL,d_defs[j]) == -1){
                        DL.push(d_defs[j]);
                        DL_freq.push(1);
                    }
                    else{
                        DL_freq[isVisited(DL,d_defs[j])]++;
                    }
                }
    
                //get attackers of defenders
                var d_attks = getAttackers(game, DL[i].piece, DL[i].pos);
                for(var j = 0; j < d_attks.length; j++){
                    if(isVisited(AL,d_attks[j]) == -1){
                        AL.push(d_attks[j]);
                        AL_freq.push(1);
                    }
                    else{
                        AL_freq[isVisited(AL,d_attks[j])]++;
                    }
                }
            }
        }
    
        //get attackers and defenders of attackers of main piece
        for(var i = 0; i < AL.length; i++){
            if(isVisited(AML, AL[i]) == -1){
                AML.push(AL[i]);
    
                //get defenders of attackers
                var a_defs = getDefenders(game, AL[i].piece, AL[i].pos);
                for(var j = 0; j < a_defs.length; j++){
                    if(isVisited(AL,a_defs[j]) == -1){
                        AL.push(a_defs[j]);
                        AL_freq.push(1);
                    }
                    else{
                        AL_freq[isVisited(AL,a_defs[j])]++;
                    }
                }
    
                //get attackers of attackers
                var a_attks = getAttackers(game, AL[i].piece, AL[i].pos);
                for(var j = 0; j < a_attks.length; j++){
                    if(isVisited(DL,a_attks[j]) == -1){
                        DL.push(a_attks[j]);
                        DL_freq.push(1);
                    }
                    else{
                        DL_freq[isVisited(DL,a_attks[j])]++;
                    }
                }
            }
        }
    

    
        //get defenders power
        var def_power = 0;   
        // for(var i = 0; i < ML.length; i++){
        //     var val = getPosVal(game, ML[i].piece, ML[i].pos) + getMatVal(ML[i].piece);
        //     def_power += val;
        // }
        for(var i = 0; i < DL.length; i++){
            var val = (getPosVal(game, DL[i].piece, DL[i].pos) + getMatVal(DL[i].piece)) * DL_freq[i];
            def_power += val;
        }
    
        //get attackers power
        var att_power = 0;   
        // for(var i = 0; i < AML.length; i++){
        //     var val = getPosVal(game, AML[i].piece, AML[i].pos) + getMatVal(AML[i].piece);
        //     att_power += val;
        // }
        for(var i = 0; i < AL.length; i++){
            var val = (getPosVal(game, AL[i].piece, AL[i].pos) + getMatVal(AL[i].piece)) * AL_freq[i];
            att_power += val;
        }
    
        var piece_power = ((getPosVal(game, piece.piece, piece.pos) + getMatVal(piece.piece)) + def_power) - att_power;
        return piece_power;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function isVisited(list, item){
        var visited = -1;
        for(var i = 0; i < list.length; i++){
            //console.log(list[i]);
            //console.log(item);
            if(list[i] != undefined && item != undefined){
                if(list[i].piece.type == item.piece.type && list[i].piece.color == item.piece.color && list[i].pos == item.pos){
                    visited = i;
                }
            }
        }
    
        return visited;
    }