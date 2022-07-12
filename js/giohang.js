document.addEventListener("DOMContentLoaded", function() {

    const input = document.querySelectorAll('.auth-form__input');

    function remove_oninput(element) {
        var message = element.querySelector('.form-message');
        message.innerText = '';
        element.classList.remove('invalid');
    }

    function add__blur(element, messages) {
        var message = element.querySelector('.form-message');
        message.innerText = messages;
        element.classList.add('invalid');
    }
    var isFormValid = true;
    input.forEach((blurs, index) => {
        blurs.onblur = function() {
            if (index == 0) {
                function tests() {
                    return input[0].value.length >= 3 ? undefined : `Vui lòng nhập tối thiểu 3 kí tự`;
                }
                if (tests() == null) {
                    return true
                } else {
                    var mess = tests();
                    add__blur(input[0].parentElement, mess);
                }
            } else if (index == 1) {
                function tests() {
                    return validateEmail(input[1].value) ? undefined : `Vui Lòng Nhập Email`;
                }
                if (tests() == null) {
                    return true
                } else {
                    var mess = tests();
                    add__blur(input[1].parentElement, mess);
                }
            } else if (index == 2) {
                function tests() {
                    return input[2].value.length >= 10 ? undefined : `Vui lòng nhập tối thiểu 10 kí tự`;
                }
                if (tests() == null) {
                    return true
                } else {
                    var mess = tests();
                    add__blur(input[2].parentElement, mess);
                }
            } else if (index == 3) {
                function tests() {
                    return sdt(input[3].value) ? undefined : `Trường này Không phải là sdt`;
                }
                if (tests() == null) {
                    return true
                } else {
                    var mess = tests();
                    add__blur(input[3].parentElement, mess);
                }
            }
        }
        blurs.oninput = function() {
            if (index == 0) {
                remove_oninput(input[0].parentElement);
                isFormValid = true;
            }
            if (index == 1) {
                remove_oninput(input[1].parentElement);
                isFormValid = true;
            }
            if (index == 2) {
                remove_oninput(input[2].parentElement);
                isFormValid = true;
            }
            if (index == 3) {
                remove_oninput(input[3].parentElement);
                isFormValid = true;
            }
        }
    })
    const print = document.querySelector('.btn__print');
    print.onclick = function(evt) {
        for (var i = 0; i < input.length; i++) {
            if (i == 0) {
                function tests() {
                    return input[0].value.length >= 3 ? undefined : `Vui lòng nhập tối thiểu 3 kí tự`;
                }
                if (tests() == null) {} else {
                    var mess = tests();
                    add__blur(input[0].parentElement, mess);
                    isFormValid = false;
                }
            } else if (i == 1) {
                function tests() {
                    return validateEmail(input[1].value) ? undefined : `Vui Lòng Nhập Email`;
                }
                if (tests() == null) {} else {
                    var mess = tests();
                    add__blur(input[1].parentElement, mess);
                    isFormValid = false;
                }
            } else if (i == 2) {
                function tests() {
                    return input[2].value.length >= 5 ? undefined : `Vui lòng nhập tối thiểu 10 kí tự`;
                }
                if (tests() == null) {} else {
                    var mess = tests();
                    add__blur(input[2].parentElement, mess);
                    isFormValid = false;
                }
            } else if (i == 3) {
                function tests() {
                    return sdt(input[3].value) ? undefined : `Trường này phải là sdt`;
                }
                if (tests() == null) {} else {
                    var mess = tests();
                    add__blur(input[3].parentElement, mess);
                    isFormValid = false;
                }
            }
        }
        if (isFormValid == true) {
            document.getElementById('all').style.display = 'none';
            alert("Đặt Hàng Thành Công");
            document.getElementById("listCart").innerHTML = ' ';
            $("#spTong").text('0 VNĐ');
        }
    }

    function validateEmail(email) {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    }

    function sdt(sdt) {
        var regex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
        return regex.test(sdt);
    }
}, false)