const body = document.body;
const toGetColor = document.getElementById('h_uno');
const colorBack = document.getElementById('colorBack');
const numColor = document.getElementById('numColor');

const numbersColor = () => numColor.value;

const backgroundColor = () =>{
	body.style.background = colorBack.value;
	return colorBack.value;
} 

const insideColor = () =>{
	for (var i = 0; i < 6; i++) {
		let inside = document.querySelectorAll('#h_centro')[i];
		let inside2 = document.querySelectorAll('#h_centro_bajo')[i];
		inside.style.background = backgroundColor();
		inside2.style.background = backgroundColor();
	}
}
