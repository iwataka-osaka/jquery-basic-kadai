$(function() {
    // class属性がbtnの要素がクリックされたら要素を追加
    $('.btn').on('click', function(){
        // numを1ずつ増やす
        $('.text-box').val('クリックされました！');
        console.log( $('.text-box').val());
    });
});
