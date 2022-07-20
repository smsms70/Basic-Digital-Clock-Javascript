const toNumbers = (a ,b) =>{
	a = a % 60;
	if (a < 10) cero(b-1);
	if (a >= 10) one(b-1);
	if (a >= 20) two(b-1);
	if (a >= 30) three(b-1);
	if (a >= 40) four(b-1);
	if (a >= 50) five(b-1);

	if (a % 10=== 0) cero(b); 
	if (a % 10=== 1) one(b); 
	if (a % 10=== 2) two(b);
	if (a % 10=== 3) three(b);
	if (a % 10=== 4) four(b);
	if (a % 10=== 5) five(b);
	if (a % 10=== 6) six(b); 
	if (a % 10=== 7) seven(b);
	if (a % 10=== 8) eight(b);
	if (a % 10=== 9) nine(b);
};

const globalTime = () =>{
	insideColor();
	let date = new Date();
	let seconds = date.getSeconds();
	toNumbers(seconds,5);
	let minutes = date.getMinutes();
	toNumbers(minutes,3)
	let hours = date.getHours();
	toNumbers(hours,1);

}
setInterval(globalTime, 1000);
