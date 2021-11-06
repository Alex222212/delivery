const restoraunt = ('food-band')
const renderItem= (data) =>
{
console.log(data)
const array = data;
    array.forEach((element, index) => {
        console.log(index, element)
    })}
fetch(`./db/${restoraunt}.json`).then((responsive) => responsive.json())
.then((data) =>{
    renderItem(data)
})
.catch((Error) =>{
    console.log('eror')
})