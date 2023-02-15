let newvar = document.getElementById('toggle-theme-btn') // находит  элемент в данном случае кнопку
newvar.addEventListener('click', function(){
    document.body.classList.toggle('dark') // удаляет существующий класс, добавляет не существующий класс. Переключатель
}) // Обработка поиска элемента, оно отслеживает событие и добавляет функцию