var a = prompt ("Введіть число", "");
var b = prompt ("Введіть степінь", "");
var c = a; 
var i = 1;
var d;

function step () {
if ( b > 0) {
for (; i < b; i++) {
	c *= a;
}
console.log(c);
} 

else {
	for  (i = 0; i > b; i--) {
		c *= a;
	}
	d = a / c;
	console.log(d);
}
}

step();

var s;
var b = 0;

for (var i = 1; i < 8; i++) {
	console.log(i);
	
	s = b + i;
	b = s;
	console.log(s)
}
