const renderItem = (data) =>
{
    console.log(data);
    const array = data;
    array.forEach((element, index) => {
        console.log(index, element)
    });}

fetch('./db/partners.json').then((responsive) => responsive.json())
.then((data) =>{
    renderItem(data)
})
