// var openBook = function(game){
//     alert('open book');
// /*The "AI" part starts here */

//     //get best move
//     if (game.game_over()) {
//         alert('Game over');
//     }

//     positionCount = 0;
//     var depth = parseInt($('#search-depth').find(':selected').text());

//     var d = new Date().getTime();
//     var bestMove = minimaxRootOpen(depth, game, true);
//     var d2 = new Date().getTime();
//     var moveTime = (d2 - d);
//     var positionsPerS = ( positionCount * 1000 / moveTime);

//     $('#position-count').text(positionCount);
//     $('#time').text(moveTime/1000 + 's');
//     $('#positions-per-s').text(positionsPerS);
//     return bestMove;
// }

// var minimaxRootOpen =function(depth, game, isMaximisingPlayer) {

//     var newGameMoves = game.moves();
//     var bestMove = -9999;
//     var bestMoveFound;

//     for(var i = 0; i < newGameMoves.length; i++) {
//         var newGameMove = newGameMoves[i]
//         game.move(newGameMove);
//         var value = minimaxOpen(depth - 1, game, -10000, 10000, !isMaximisingPlayer);
//         game.undo();
//         if(value >= bestMove) {
//             bestMove = value;
//             bestMoveFound = newGameMove;
//         }
//     }
//     return bestMoveFound;
// };

// var minimaxOpen = function (depth, game, alpha, beta, isMaximisingPlayer) {
//     positionCount++;
//     if (depth === 0) {
//         return -evaluateBoard(game.board());
//     }

//     var newGameMoves = game.moves();

//     if (isMaximisingPlayer) {
//         var bestMove = -9999;
//         for (var i = 0; i < newGameMoves.length; i++) {
//             game.move(newGameMoves[i]);
//             bestMove = Math.max(bestMove, minimaxOpen(depth - 1, game, alpha, beta, !isMaximisingPlayer));
//             game.undo();
//             alpha = Math.max(alpha, bestMove);
//             if (beta <= alpha) {
//                 return bestMove;
//             }
//         }
//         return bestMove;
//     } else {
//         var bestMove = 9999;
//         for (var i = 0; i < newGameMoves.length; i++) {
//             game.move(newGameMoves[i]);
//             bestMove = Math.min(bestMove, minimaxOpen(depth - 1, game, alpha, beta, !isMaximisingPlayer));
//             game.undo();
//             beta = Math.min(beta, bestMove);
//             if (beta <= alpha) {
//                 return bestMove;
//             }
//         }
//         return bestMove;
//     }
// };

// var evaluateBoard = function (board) {
//     var totalEvaluation = 0;
//     for (var i = 0; i < 8; i++) {
//         for (var j = 0; j < 8; j++) {
//             totalEvaluation = totalEvaluation + getPieceValue(board[i][j], i ,j);
//         }
//     }
//     return totalEvaluation;
// };

// var reverseArray = function(array) {
//     return array.slice().reverse();
// };

// var pawnEvalWhite =
//     [
//         [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
//         [5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0],
//         [1.0,  1.0,  2.0,  3.0,  3.0,  2.0,  1.0,  1.0],
//         [0.5,  0.5,  1.0,  2.5,  2.5,  1.0,  0.5,  0.5],
//         [0.0,  0.0,  0.0,  2.0,  2.0,  0.0,  0.0,  0.0],
//         [0.5, -0.5, -1.0,  0.0,  0.0, -1.0, -0.5,  0.5],
//         [0.5,  1.0, 1.0,  -2.0, -2.0,  1.0,  1.0,  0.5],
//         [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0]
//     ];

// var pawnEvalBlack = reverseArray(pawnEvalWhite);

// var knightEval =
//     [
//         [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
//         [-4.0, -2.0,  0.0,  0.0,  0.0,  0.0, -2.0, -4.0],
//         [-3.0,  0.0,  1.0,  1.5,  1.5,  1.0,  0.0, -3.0],
//         [-3.0,  0.5,  1.5,  2.0,  2.0,  1.5,  0.5, -3.0],
//         [-3.0,  0.0,  1.5,  2.0,  2.0,  1.5,  0.0, -3.0],
//         [-3.0,  0.5,  1.0,  1.5,  1.5,  1.0,  0.5, -3.0],
//         [-4.0, -2.0,  0.0,  0.5,  0.5,  0.0, -2.0, -4.0],
//         [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0]
//     ];

// var bishopEvalWhite = [
//     [ -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
//     [ -1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0],
//     [ -1.0,  0.0,  0.5,  1.0,  1.0,  0.5,  0.0, -1.0],
//     [ -1.0,  0.5,  0.5,  1.0,  1.0,  0.5,  0.5, -1.0],
//     [ -1.0,  0.0,  1.0,  1.0,  1.0,  1.0,  0.0, -1.0],
//     [ -1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0, -1.0],
//     [ -1.0,  0.5,  0.0,  0.0,  0.0,  0.0,  0.5, -1.0],
//     [ -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0]
// ];

// var bishopEvalBlack = reverseArray(bishopEvalWhite);

// var rookEvalWhite = [
//     [  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
//     [  0.5,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  0.5],
//     [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
//     [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
//     [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
//     [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
//     [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
//     [  0.0,   0.0, 0.0,  0.5,  0.5,  0.0,  0.0,  0.0]
// ];

// var rookEvalBlack = reverseArray(rookEvalWhite);

// var evalQueen = [
//     [ -2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
//     [ -1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0],
//     [ -1.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0],
//     [ -0.5,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5],
//     [  0.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5],
//     [ -1.0,  0.5,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0],
//     [ -1.0,  0.0,  0.5,  0.0,  0.0,  0.0,  0.0, -1.0],
//     [ -2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0]
// ];

// var kingEvalWhite = [

//     [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
//     [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
//     [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
//     [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
//     [ -2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
//     [ -1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
//     [  2.0,  2.0,  0.0,  0.0,  0.0,  0.0,  2.0,  2.0 ],
//     [  2.0,  3.0,  1.0,  0.0,  0.0,  1.0,  3.0,  2.0 ]
// ];

// var kingEvalBlack = reverseArray(kingEvalWhite);




// var getPieceValue = function (piece, x, y) {
//     if (piece === null) {
//         return 0;
//     }
//     var getAbsoluteValue = function (piece, isWhite, x ,y) {
//         if (piece.type === 'p') {
//             return 10 + ( isWhite ? pawnEvalWhite[y][x] : pawnEvalBlack[y][x] );
//         } else if (piece.type === 'r') {
//             return 50 + ( isWhite ? rookEvalWhite[y][x] : rookEvalBlack[y][x] );
//         } else if (piece.type === 'n') {
//             return 30 + knightEval[y][x];
//         } else if (piece.type === 'b') {
//             return 30 + ( isWhite ? bishopEvalWhite[y][x] : bishopEvalBlack[y][x] );
//         } else if (piece.type === 'q') {
//             return 90 + evalQueen[y][x];
//         } else if (piece.type === 'k') {
//             return 900 + ( isWhite ? kingEvalWhite[y][x] : kingEvalBlack[y][x] );
//         }
//         throw "Unknown piece type: " + piece.type;
//     };

//     var absoluteValue = getAbsoluteValue(piece, piece.color === 'w', x ,y);
//     return piece.color === 'w' ? absoluteValue : -absoluteValue;
// };
