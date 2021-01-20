

function getViewportWidth()
{
    return window.innerWidth || document.documentElement.clientWidth;
}

console.log(`Die Viewportbreite beträgt: ${getViewportWidth()} Pixel.`);

//RaumTest



let rTest1 = new Room(123, "Test1", "t", 100, ["Beamer"]);
let rTest2 = new Room(456, "Test2", "t", 100, ["Beamer"]);

console.log(rTest1, rTest2);

rTest1.addOrder(new Order("Test1", new Date(2020,12,24,12,0), new Date(2020,12,24,13,0), "Test1", 11))
rTest1.addOrder(new Order("Test2", new Date(2020,12,24,14,0), new Date(2020,12,24,15,0), "Test2", 12))
rTest1.addOrder(new Order("Test3", new Date(2020,12,24,10,0), new Date(2020,12,24,11,0), "Test3", 13))

console.log(rTest1);

for(let element of rTest1.arrBuchungen) {

    console.log(element);
}
