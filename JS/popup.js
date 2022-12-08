//prsn-1////////////////////////////////////////////////////////////////////////////////////////////////
let popupBgPrsn1 = document.querySelector('.popup__bg-prsn-1'); // Фон попап окна
let popupPrsn1 = document.querySelector('.popup-prsn-1'); // Само окно
let openPopupButtonsPrsn1 = document.querySelectorAll('.open-popup-prsn-1'); // Кнопки для показа окна
let closePopupButtonPrsn1 = document.querySelector('.close-popup-prsn-1'); // Кнопка для скрытия окна

openPopupButtonsPrsn1.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBgPrsn1.classList.add('active-prsn-1'); // Добавляем класс 'active' для фона
        popupPrsn1.classList.add('active-prsn-1'); // И для самого окна
    })
});

closePopupButtonPrsn1.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBgPrsn1.classList.remove('active-prsn-1'); // Убираем активный класс с фона
    popupPrsn1.classList.remove('active-prsn-1'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBgPrsn1) { // Если цель клика - фот, то:
        popupBgPrsn1.classList.remove('active-prsn-1'); // Убираем активный класс с фона
        popupPrsn1.classList.remove('active-prsn-1'); // И с окна
    }
});
//prsn-1////////////////////////////////////////////////////////////////////////////////////////////////


//prsn-2////////////////////////////////////////////////////////////////////////////////////////////////
let popupBgPrsn2 = document.querySelector('.popup__bg-prsn-2'); // Фон попап окна
let popupPrsn2 = document.querySelector('.popup-prsn-2'); // Само окно
let openPopupButtonsPrsn2 = document.querySelectorAll('.open-popup-prsn-2'); // Кнопки для показа окна
let closePopupButtonPrsn2 = document.querySelector('.close-popup-prsn-2'); // Кнопка для скрытия окна

openPopupButtonsPrsn2.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBgPrsn2.classList.add('active-prsn-2'); // Добавляем класс 'active' для фона
        popupPrsn2.classList.add('active-prsn-2'); // И для самого окна
    })
});

closePopupButtonPrsn2.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBgPrsn2.classList.remove('active-prsn-2'); // Убираем активный класс с фона
    popupPrsn2.classList.remove('active-prsn-2'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBgPrsn2) { // Если цель клика - фот, то:
        popupBgPrsn2.classList.remove('active-prsn-2'); // Убираем активный класс с фона
        popupPrsn2.classList.remove('active-prsn-2'); // И с окна
    }
});
//prsn-2////////////////////////////////////////////////////////////////////////////////////////////////


//prsn-3////////////////////////////////////////////////////////////////////////////////////////////////
let popupBgPrsn3 = document.querySelector('.popup__bg-prsn-3'); // Фон попап окна
let popupPrsn3 = document.querySelector('.popup-prsn-3'); // Само окно
let openPopupButtonsPrsn3 = document.querySelectorAll('.open-popup-prsn-3'); // Кнопки для показа окна
let closePopupButtonPrsn3 = document.querySelector('.close-popup-prsn-3'); // Кнопка для скрытия окна

openPopupButtonsPrsn3.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBgPrsn3.classList.add('active-prsn-3'); // Добавляем класс 'active' для фона
        popupPrsn3.classList.add('active-prsn-3'); // И для самого окна
    })
});

closePopupButtonPrsn3.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBgPrsn3.classList.remove('active-prsn-3'); // Убираем активный класс с фона
    popupPrsn3.classList.remove('active-prsn-3'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBgPrsn3) { // Если цель клика - фот, то:
        popupBgPrsn3.classList.remove('active-prsn-3'); // Убираем активный класс с фона
        popupPrsn3.classList.remove('active-prsn-3'); // И с окна
    }
});
//prsn-3////////////////////////////////////////////////////////////////////////////////////////////////


//prsn-4////////////////////////////////////////////////////////////////////////////////////////////////
let popupBgPrsn4 = document.querySelector('.popup__bg-prsn-4'); // Фон попап окна
let popupPrsn4 = document.querySelector('.popup-prsn-4'); // Само окно
let openPopupButtonsPrsn4 = document.querySelectorAll('.open-popup-prsn-4'); // Кнопки для показа окна
let closePopupButtonPrsn4 = document.querySelector('.close-popup-prsn-4'); // Кнопка для скрытия окна

openPopupButtonsPrsn4.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBgPrsn4.classList.add('active-prsn-4'); // Добавляем класс 'active' для фона
        popupPrsn4.classList.add('active-prsn-4'); // И для самого окна
    })
});

closePopupButtonPrsn4.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBgPrsn4.classList.remove('active-prsn-4'); // Убираем активный класс с фона
    popupPrsn4.classList.remove('active-prsn-4'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBgPrsn4) { // Если цель клика - фот, то:
        popupBgPrsn4.classList.remove('active-prsn-4'); // Убираем активный класс с фона
        popupPrsn4.classList.remove('active-prsn-4'); // И с окна
    }
});
//prsn-4////////////////////////////////////////////////////////////////////////////////////////////////


//prsn-5////////////////////////////////////////////////////////////////////////////////////////////////
let popupBgPrsn5 = document.querySelector('.popup__bg-prsn-5'); // Фон попап окна
let popupPrsn5 = document.querySelector('.popup-prsn-5'); // Само окно
let openPopupButtonsPrsn5 = document.querySelectorAll('.open-popup-prsn-5'); // Кнопки для показа окна
let closePopupButtonPrsn5 = document.querySelector('.close-popup-prsn-5'); // Кнопка для скрытия окна

openPopupButtonsPrsn5.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBgPrsn5.classList.add('active-prsn-5'); // Добавляем класс 'active' для фона
        popupPrsn5.classList.add('active-prsn-5'); // И для самого окна
    })
});

closePopupButtonPrsn5.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBgPrsn5.classList.remove('active-prsn-5'); // Убираем активный класс с фона
    popupPrsn5.classList.remove('active-prsn-5'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBgPrsn5) { // Если цель клика - фот, то:
        popupBgPrsn5.classList.remove('active-prsn-5'); // Убираем активный класс с фона
        popupPrsn5.classList.remove('active-prsn-5'); // И с окна
    }
});
//prsn-5////////////////////////////////////////////////////////////////////////////////////////////////


//prsn-6////////////////////////////////////////////////////////////////////////////////////////////////
let popupBgPrsn6 = document.querySelector('.popup__bg-prsn-6'); // Фон попап окна
let popupPrsn6 = document.querySelector('.popup-prsn-6'); // Само окно
let openPopupButtonsPrsn6 = document.querySelectorAll('.open-popup-prsn-6'); // Кнопки для показа окна
let closePopupButtonPrsn6 = document.querySelector('.close-popup-prsn-6'); // Кнопка для скрытия окна

openPopupButtonsPrsn6.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBgPrsn6.classList.add('active-prsn-6'); // Добавляем класс 'active' для фона
        popupPrsn6.classList.add('active-prsn-6'); // И для самого окна
    })
});

closePopupButtonPrsn6.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBgPrsn6.classList.remove('active-prsn-6'); // Убираем активный класс с фона
    popupPrsn6.classList.remove('active-prsn-6'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBgPrsn6) { // Если цель клика - фот, то:
        popupBgPrsn6.classList.remove('active-prsn-6'); // Убираем активный класс с фона
        popupPrsn6.classList.remove('active-prsn-6'); // И с окна
    }
});
//prsn-6////////////////////////////////////////////////////////////////////////////////////////////////


//prsn-7////////////////////////////////////////////////////////////////////////////////////////////////
let popupBgPrsn7 = document.querySelector('.popup__bg-prsn-7'); // Фон попап окна
let popupPrsn7 = document.querySelector('.popup-prsn-7'); // Само окно
let openPopupButtonsPrsn7 = document.querySelectorAll('.open-popup-prsn-7'); // Кнопки для показа окна
let closePopupButtonPrsn7 = document.querySelector('.close-popup-prsn-7'); // Кнопка для скрытия окна

openPopupButtonsPrsn7.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBgPrsn7.classList.add('active-prsn-7'); // Добавляем класс 'active' для фона
        popupPrsn7.classList.add('active-prsn-7'); // И для самого окна
    })
});

closePopupButtonPrsn7.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBgPrsn7.classList.remove('active-prsn-7'); // Убираем активный класс с фона
    popupPrsn7.classList.remove('active-prsn-7'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBgPrsn7) { // Если цель клика - фот, то:
        popupBgPrsn7.classList.remove('active-prsn-7'); // Убираем активный класс с фона
        popupPrsn7.classList.remove('active-prsn-7'); // И с окна
    }
});
//prsn-7////////////////////////////////////////////////////////////////////////////////////////////////


//prsn-8////////////////////////////////////////////////////////////////////////////////////////////////
let popupBgPrsn8 = document.querySelector('.popup__bg-prsn-8'); // Фон попап окна
let popupPrsn8 = document.querySelector('.popup-prsn-8'); // Само окно
let openPopupButtonsPrsn8 = document.querySelectorAll('.open-popup-prsn-8'); // Кнопки для показа окна
let closePopupButtonPrsn8 = document.querySelector('.close-popup-prsn-8'); // Кнопка для скрытия окна

openPopupButtonsPrsn8.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBgPrsn8.classList.add('active-prsn-8'); // Добавляем класс 'active' для фона
        popupPrsn8.classList.add('active-prsn-8'); // И для самого окна
    })
});

closePopupButtonPrsn8.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBgPrsn8.classList.remove('active-prsn-8'); // Убираем активный класс с фона
    popupPrsn8.classList.remove('active-prsn-8'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBgPrsn8) { // Если цель клика - фот, то:
        popupBgPrsn8.classList.remove('active-prsn-8'); // Убираем активный класс с фона
        popupPrsn8.classList.remove('active-prsn-8'); // И с окна
    }
});
//prsn-8////////////////////////////////////////////////////////////////////////////////////////////////



//prsn-9////////////////////////////////////////////////////////////////////////////////////////////////
let popupBgPrsn9 = document.querySelector('.popup__bg-prsn-9'); // Фон попап окна
let popupPrsn9 = document.querySelector('.popup-prsn-9'); // Само окно
let openPopupButtonsPrsn9 = document.querySelectorAll('.open-popup-prsn-9'); // Кнопки для показа окна
let closePopupButtonPrsn9 = document.querySelector('.close-popup-prsn-9'); // Кнопка для скрытия окна

openPopupButtonsPrsn9.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBgPrsn9.classList.add('active-prsn-9'); // Добавляем класс 'active' для фона
        popupPrsn9.classList.add('active-prsn-9'); // И для самого окна
    })
});

closePopupButtonPrsn9.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBgPrsn9.classList.remove('active-prsn-9'); // Убираем активный класс с фона
    popupPrsn9.classList.remove('active-prsn-9'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBgPrsn9) { // Если цель клика - фот, то:
        popupBgPrsn9.classList.remove('active-prsn-9'); // Убираем активный класс с фона
        popupPrsn9.classList.remove('active-prsn-9'); // И с окна
    }
});
//prsn-8////////////////////////////////////////////////////////////////////////////////////////////////