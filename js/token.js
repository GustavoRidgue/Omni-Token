function validar() {
	var token = enviartoken.token.value;

	if (token == "" || token.length > 11 || token.length < 5) {
		alert('Insira um token válido para envia-lo');
		enviartoken.token.focus();
		return false;
	}
	else {
		alert('Token enviado com sucesso');
		return true;
	}
}

function validardados() {
	var cpf = enviardados.cpf.value;
	var data = enviardados.data.value;
	var contrato = enviardados.contrato.value;


	if (cpf == "" || cpf.length > 11 || cpf.length < 11) {
		alert('Insira um CPF válido!');
		enviardados.cpf.focus();
		return false;
	}

	if (data == "") {
		alert('Insira uma data válida!');
		enviardados.data.focus();
		return false;
	}

	if (contrato == "") {
		alert('Insira um contrato válido!');
		enviardados.contrato.focus();
		return false;
	}
	else {
		return true;
	}
}

	



