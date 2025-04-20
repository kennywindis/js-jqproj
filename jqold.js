//this ah jquery script

$(document).ready(function(){

$('li.field').filter(':nth-child(n+4)').addClass('hide');

$('ul').on('click', 'li.title', function () {

 $(this).next().slideDown(100).siblings('li.field').slideUp(100);

});

});

