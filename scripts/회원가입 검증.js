window.addEventListener('load', function() {
	clearMessages ();

	var formElem = document.querySelector('form');

	formElem.onsubmit = submitForm;

	//월 추가
	var selectInput = document.querySelector('select[name="MONTH"]');
	for (var i = 1; i <= 12; i++) {
		var option = document.createElement('option');
		option.innerHTML = i + '월';
		option.value = i;

		selectInput.appendChild(option);
	}
});

function clearMessages() {
	var messages = document.getElementsByClassName('alert-message');
	for (var i = 0; i < messages.length; i++) {
		messages[i].style.display = 'none';
	}
};

function showMessages(inputElement, message) {
	var messageElem = inputElement.parentNode.querySelector('span');
	messageElem.style.display = 'inline';
	messageElem.innerText = message;

	inputElement.focus();
};

function submitForm () {
	var submitSuccess = true;

	var IDInput = document.querySelector('input[name="ID"]');
	var PWInput = document.querySelector('input[name="PW"]');
	var PWconfirmInput = document.querySelector('input[name="PWconfirm"]');

	var NAMEInput = document.querySelector('input[name="NAME"]');
	var YEARInput = document.querySelector('input[name="YEAR"]');
	var MONTHInput = document.querySelector('select[name="MONTH"]');
	var DAYInput = document.querySelector('input[name="DAY"]');

	var GENDERInput = document.querySelector('input[name="GENDER"]:checked');
	var AGREEInput = document.querySelector('input[name="AGREE"]');

	console.log(IDInput.value);
	console.log(PWInput.value);
	console.log(PWconfirmInput.value);

	console.log(NAMEInput.value);
	console.log(YEARInput.value);
	console.log(MONTHInput.value);
	console.log(DAYInput.value);

	console.log(GENDERInput.value);
	console.log(AGREEInput.value);

	if (IDInput.value.length < 6) {
		showMessages(IDInput, 'ID는 6자리 이상이여야 합니다');

		submitSuccess = false;
	};

	if (PWInput.value.length < 10) {
		showMessages(PWInput, '비밀번호는 10자리 이상이여야 합니다');

		submitSuccess = false;
	};

	if (PWInput.value !== PWconfirmInput.value) {
		showMessages(PWconfirmInput, '입력하신 비밀번호와 일치하지 않습니다');

		submitSuccess = false;
	};

	return submitSuccess;
};