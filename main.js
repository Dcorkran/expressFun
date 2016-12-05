let urlData;
let i = 1;

$.get('http://localhost:3000/url',function(data){
  urlData = data;
});

$('#refresh-button').on('click',function(){
  $('img').attr('src',urlData[i % urlData.length]);
  i++;
});

$('#submit-button').on('click',function(){
  let jsonUrl = {src: $('#url-input').val()};
  jsonUrl = JSON.stringify(jsonUrl);
  console.log(jsonUrl);

// $.post('http://localhost:3000/url',jsonUrl,function(data,status){
//   console.log(data,status);
// },'JSON');

$.ajax({
  type: "POST",
  url: "http://localhost:3000/url",
  data: jsonUrl,
  contentType: 'application/json',
  success: success,
  dataType: "json"
});


});

function success(){
  console.log('success!!!!');
}
