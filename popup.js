const workedTime = '17:45:00'

var date = new Date();
var nowMonth = date.getMonth() + 1;
var strDate = date.getDate();
var seperator = "/";
if (nowMonth >= 1 && nowMonth <= 9) {
  nowMonth = "0" + nowMonth;
}
if (strDate >= 0 && strDate <= 9) {
  strDate = "0" + strDate;
}
var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
console.log(nowDate);

function getDistanceSpecifiedTime(dateTime) {
  var EndTime = new Date(dateTime);
  var NowTime = new Date();
  var t = EndTime.getTime() - NowTime.getTime();
  var d = Math.floor(t / 1000 / 60 / 60 / 24);
  var h = Math.floor(t / 1000 / 60 / 60 % 24);
  var m = Math.floor(t / 1000 / 60 % 60);
  var s = Math.floor(t / 1000 % 60);
  var html = h + "时" + m + "分" + s + "秒";
  $('#content').html(html);
}

getDistanceSpecifiedTime(nowDate + ' ' + workedTime);
setInterval(() => {
  getDistanceSpecifiedTime(nowDate + ' ' + workedTime);
}, 1000)

// $('#btn').click(function () {
//   const input = document.getElementById('input').value
//   console.log(input);
//   if (input == '') {

//   } else {

//     $('.setting').addClass('none')
//     $('.container').addClass('block')
//     getDistanceSpecifiedTime(nowDate + ' 17:45:00');
//     setInterval(() => {
//       getDistanceSpecifiedTime(nowDate + ' 17:45:00');
//     }, 1000)
//   }

// })