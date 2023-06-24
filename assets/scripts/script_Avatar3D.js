const image = document.getElementById("imagen3D");
const range = document.getElementById("carru");
const ArrayImg = [];

for (let index = 0; index < 37; index++) {
    ArrayImg.push(`./assets/images/Avatar3Dimg${index}.png`);
}
     
image.setAttribute("src", ArrayImg[1]);

range.addEventListener("input", (e) => {
    let value = e.target.value;
    image.setAttribute("src", ArrayImg[value]);
});