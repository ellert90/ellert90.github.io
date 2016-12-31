var a = prompt ("Введіть число", "");
var b = prompt ("Введіть степінь", "");
var c = a; 
var i = 1;
var d;

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
