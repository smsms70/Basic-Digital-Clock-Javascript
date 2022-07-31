const toNumbers = (time ,position) =>{
	time = time % 60;
	if (time < 10) cero(position-1);
	if (time >= 10) one(position-1);
	if (time >= 20) two(position-1);
	if (time >= 30) three(position-1);
	if (time >= 40) four(position-1);
	if (time >= 50) five(position-1);

	if (time % 10=== 0) cero(position); 
	if (time % 10=== 1) one(position); 
	if (time % 10=== 2) two(position);
	if (time % 10=== 3) three(position);
	if (time % 10=== 4) four(position);
	if (time % 10=== 5) five(position);
	if (time % 10=== 6) six(position); 
	if (time % 10=== 7) seven(position);
	if (time % 10=== 8) eight(position);
	if (time % 10=== 9) nine(position);
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
