<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="{{asset('js/lib/chessboardjs/css/chessboard-0.3.0.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
</head>
<body>
<div id="board" class="board"></div>
<div id="board2" class="board2"></div>
<div class="info">
    Search depth:
    <select id="search-depth">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3" selected>3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>

    <br>
    <span>Positions evaluated: <span id="position-count"></span></span>
    <br>
    <span>Time: <span id="time"></span></span>
    <br>
    <span>Positions/s: <span id="positions-per-s"></span> </span>
    <br>
    <br>
    <div id="move-history" class="move-history">
    </div>
</div>

{{-- libraries --}}
<script src="{{asset('js/lib/jquery/jquery-3.2.1.min.js')}}"></script>
<script src="{{asset('js/lib/chessboardjs/js/chess.js')}}"></script>
<script src="{{asset('js/lib/chessboardjs/js/chessboard-0.3.0.js')}}"></script>

<!-- main script file -->
<script src="{{asset('js/script.js')}}"></script>
<script src="{{asset('js/openBook.js')}}"></script>

{{-- eval function main file --}}
<script src="{{asset('js/eval/eval.js')}}"></script>
{{-- eval function files --}}
{{-- <script src="{{asset('js/eval/white.js')}}"></script> --}}
{{-- <script src="{{asset('js/eval/black.js')}}"></script> --}}
<script src="{{asset('js/eval/getDefenders.js')}}"></script>
<script src="{{asset('js/eval/getAttackers.js')}}"></script>
<script src="{{asset('js/eval/getPower.js')}}"></script>

<script src="{{asset('js/eval/test.js')}}"></script>

{{-- getPosVal --}}
<script src="{{asset('js/eval/pos_values/getPosVal.js')}}"></script>
<script src="{{asset('js/eval/getMatVal.js')}}"></script>

{{-- white positional values --}}
{{-- pawn positional value --}}
<script src="{{asset('js/eval/pos_values/white/wp_pos_value.js')}}"></script>
{{-- rook positional value --}}
<script src="{{asset('js/eval/pos_values/white/wr_pos_value.js')}}"></script>
{{-- knight positional value --}}
<script src="{{asset('js/eval/pos_values/white/wn_pos_value.js')}}"></script>
{{-- bishop positional value --}}
<script src="{{asset('js/eval/pos_values/white/wb_pos_value.js')}}"></script>
{{-- queen positional value --}}
<script src="{{asset('js/eval/pos_values/white/wq_pos_value.js')}}"></script>
{{--king positional value --}}
<script src="{{asset('js/eval/pos_values/white/wk_pos_value.js')}}"></script>

{{-- black positional values --}}
{{-- pawn positional value --}}
<script src="{{asset('js/eval/pos_values/black/bp_pos_value.js')}}"></script>
{{-- rook positional value --}}
<script src="{{asset('js/eval/pos_values/black/br_pos_value.js')}}"></script>
{{-- knight positional value --}}
<script src="{{asset('js/eval/pos_values/black/bn_pos_value.js')}}"></script>
{{-- bishop positional value --}}
<script src="{{asset('js/eval/pos_values/black/bb_pos_value.js')}}"></script>
{{-- queen positional value --}}
<script src="{{asset('js/eval/pos_values/black/bq_pos_value.js')}}"></script>
{{--king positional value --}}
<script src="{{asset('js/eval/pos_values/black/bk_pos_value.js')}}"></script>


</body>
</html>