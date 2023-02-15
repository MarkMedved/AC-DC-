function showNikName() {
    let NewUser = prompt('Для того чтобы зарегестироваться введите свой ник');
    let message = 'Приветствуем любителя AC/DC, ' + NewUser
    alert(message);
}
showNikName();

function howMuchaAreYou(){
    let year = parseInt(prompt('Сколько тебе лет?', ''));
    if(confirm ("Уверен?"))
    if (year > 25) {
        alert (" Да у нас тут старпер" );
    } else {
        alert( 'Ну что салага, готов учиться?' );
    }
}
howMuchaAreYou();

function BestHit(){
    let hit = prompt('Какая самая популярная песня у AC/DC?','Назване песни');
    switch (hit) {
        case 'Back in Black':
            alert('you are god damn right!');
            break;
        case 'Highway to Hell':
            alert('you are god damn right!');
            break;
        case 'Thunderstruck':
            alert('you are god damn right!');
            break;
        default:
            alert('Не правильно, но не ссы мы тебе можем разобраться');
            break;
    }
}
BestHit();