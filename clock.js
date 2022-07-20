const uno = document.querySelectorAll('#h_uno');
const dos = document.querySelectorAll('#h_dos');
const tres = document.querySelectorAll('#h_tres');
const cuatro = document.querySelectorAll('#h_cuatro');
const cinco = document.querySelectorAll('#h_cinco');
const seis = document.querySelectorAll('#h_seis');
const siete = document.querySelectorAll('#h_siete');


const clean = a =>{
	uno[a].style.background = numbersColor();
	dos[a].style.background = numbersColor();
	tres[a].style.background = numbersColor();
	cuatro[a].style.background = numbersColor();
	cinco[a].style.background = numbersColor();
	seis[a].style.background = numbersColor();
	siete[a].style.background = numbersColor();
}
const one = a =>{
	clean(a);

	dos[a].style.background = backgroundColor();
	tres[a].style.background = backgroundColor();
	cuatro[a].style.background = backgroundColor();
	cinco[a].style.background = backgroundColor();
	siete[a].style.background = backgroundColor();
}
const two = a =>{
	clean(a);

	cuatro[a].style.background = backgroundColor();
	seis[a].style.background = backgroundColor();
}
const three = a =>{
	clean(a);

	cuatro[a].style.background = backgroundColor();
	cinco[a].style.background = backgroundColor();
}
const four = a =>{
	clean(a);

	tres[a].style.background = backgroundColor();
	cinco[a].style.background = backgroundColor();
	siete[a].style.background = backgroundColor();
}
const five = a =>{
	clean(a);

	uno[a].style.background = backgroundColor();
	cinco[a].style.background = backgroundColor();
}
const six = a =>{
	clean(a);

	uno[a].style.background = backgroundColor();
}
const seven = a =>{
	clean(a);

	dos[a].style.background = backgroundColor();
	cuatro[a].style.background = backgroundColor();
	cinco[a].style.background = backgroundColor();
	siete[a].style.background = backgroundColor();
}
const eight = a =>{
	clean(a);
}
const nine = a =>{
	clean(a);

	cinco[a].style.background = backgroundColor();
	siete[a].style.background = backgroundColor();
}
const cero = a =>{
	clean(a);

	dos[a].style.background = backgroundColor();
}