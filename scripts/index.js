// get year
const d = new Date();
let year = d.getFullYear();
Array.from(document.getElementsByClassName('year')).forEach( y => {
    y.textContent = ` ${year}`;
});