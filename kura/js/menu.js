const cardsMenu = document.querySelector('.cards-menu')
const sectionHeading = document.querySelector('.section-heading')
const changeTittle = (restaurant) =>{
    const restaurantTitle = document.querySelector('.restaurant-title')
    const rating = document.querySelector('.rating')
    const price = document.querySelector('.price')
    const category = document.querySelector('.category')

    restaurantTitle.textContent = restaurant.name
    rating.textContent = restaurant.stars
    price.textContent ='от '+restaurant.price+' pуб'
    category.textContent= restaurant.kitchen
    }

const renderItem= (data) =>
{
    data.forEach(({description, id, image, name, price}) => {
        
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
        <img src="${image}" alt="${name}" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">${name}</h3>
							</div>
							<!-- /.card-heading -->
							<div class="card-info">
								<div class="ingredients">${description}
								</div>
							</div>
							<!-- /.card-info -->
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">${price} ₽</strong>
							</div>
        `
        cardsMenu.append(div)
    })}

if (localStorage.getItem('restaurant')) {
    const restaurant = JSON.parse(localStorage.getItem('restaurant'))
    console.log(restaurant);
    fetch(`./db/${restaurant.products}`).then((responsive) => responsive.json())
    .then((data) =>{
    renderItem(data) 
})
changeTittle(restaurant)
} else {
    window.location.href = '/'
}
if (localStorage.getItem('user')) {
}else {
    window.location.href = '/'
}

