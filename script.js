const container = document.getElementById('container');

fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Для проверки
        if (Array.isArray(data) && data.length > 0) {
            for (let i = 0; i < 30; i++) {
                const card = document.createElement('div');
                card.className = 'card';
                card.style.backgroundImage = 'url(./images/card.jpg)'; 
                card.dataset.index = i;

                const textContainer = document.createElement('div');
                textContainer.className = 'text';

                card.addEventListener('click', function() {
                    if (textContainer.parentNode) {
                        textContainer.remove();
                    } else {
                        const randomIndex = Math.floor(Math.random() * data.length);
                        textContainer.innerText = data[randomIndex].text;
                        card.appendChild(textContainer);
                        textContainer.style.display = 'block';
                        
                    }
                });

                container.appendChild(card);
            }
        } else {
            console.error('Данные не являются массивом или пусты');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });