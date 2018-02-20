var names = [];
var b = 'Error';

for (i = 0; i<5; i++) {
	var a = prompt ('Enter users names', '');
	names.push(a);
}
console.log(names);
var user = prompt ('Enter User name');

for (var i = 0; i < names.length; i++) {
	if (names[i] === user) {
	b = user + ' вы успешно вошли';  break;}
}
alert(b);