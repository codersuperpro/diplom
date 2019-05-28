const formModal=()=>{
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
    let form = document.querySelectorAll('.form'),
        input = document.getElementsByTagName('input'),
        comments = document.getElementsByTagName('textarea'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

    form.forEach(form=> form.addEventListener('submit', function(e){
        e.preventDefault();
        form.appendChild(statusMessage);
        let formData = new FormData(form);
            let obj = {};
            formData.forEach((value,key)=> {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);

        function postData(data) {
            return new Promise((resolve, reject)=> {
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                request.onreadystatechange = ()=> {
                    if (request.readyState < 4) {
                        resolve()
                    } else if(request.readyState === 4) {
                        if (request.status == 200 && request.status < 3){
                            resolve()
                        } else {
                            reject()
                        }
                    }
                };
                request.send(json);        
            });
        }
        const clearInput=()=> {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }
        const clearComment=()=> {
            for (let i = 0; i < comments.length; i++) {
                comments[i].value = '';
            }
        }
        postData(formData)
            .then(()=> statusMessage.innerHTML = message.loading)
            .then(()=> statusMessage.innerHTML = message.success)
            .catch(()=> statusMessage.innerHTML = message.failure)
            .then(clearInput)
            .then(clearComment)
    }));

    $('.phone_form').keydown(function(){
        $(this).val($(this).val().replace(/[^\d]|'+'/g, '').slice(0, 11));
    }).mask("+7 (999) 999-99-99");

}


module.exports = formModal;