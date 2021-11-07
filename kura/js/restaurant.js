const cardsRestaurants = document.querySelector('.cards-restaurants')
const authUnlock = document.querySelector('.auth_unlock')
const renderItem = (data) =>
{
    const BigData = data;
    BigData.forEach((element, index) => {
        const a = document.createElement('a');
        const {image, kitchen, name, price, products, stars, time_of_delivery} = element
        a.setAttribute('href', '/restaurant.html');
        a.classList.add('card');
        a.classList.add('card-restaurant');
        a.dataset.products = products;
        console.log(a);
        a.innerHTML = `
            <img src="${image}" alt="image" class="card-image" />
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title">${name}</h3>
                    <span class="card-tag tag">${time_of_delivery} мин</span>
                </div>
                <!-- /.card-heading -->
                <div class="card-info">
                    <div class="rating">
                        ${stars}
                    </div>
                    <div class="price">От ${price} ₽</div>
                    <div class="category">${kitchen}</div>
                </div>
                <!-- /.card-info -->
            </div>
        `
        a.addEventListener('click', (e) =>{
            e.preventDefault();
            if (localStorage.getItem('user')) {
                localStorage.setItem('restaurant', JSON.stringify(element));
            window.location.href = '/restaurant.html'
            } else {
                modalAuth.style.display = "block";
                authUnlock.style.display = "block"

            }
        })
        cardsRestaurants.append(a)
    });}

fetch('./db/partners.json').then((а) => а.json())
.then((data) =>{
    renderItem(data)
})
