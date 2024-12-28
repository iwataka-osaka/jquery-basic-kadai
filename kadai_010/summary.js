$(function () {

    $('#change-color').on('click', function () {
        // 1.ボタンを押すと、文字色が変わる
        $('#target').css('color',"red");
      });

    $('#change-text').on('click', function () {
        // 2.ボタンを押すと、文字内容が変わる
        $('#target').text('Hello!');
      });
 
    $('#fade-out').on('click', function() {
        // フェードインする
        $('#target').fadeOut();
    });

    $('#fade-in').on('click', function() {
        // フェードインする
        $('#target').fadeIn();
    });
  });
 