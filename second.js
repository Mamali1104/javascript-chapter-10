//promise

function savetoDb(data) {
    return new Promise((resolve,reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {

            resolve("sucess:data saved");
       
        }
        else {

            reject("failure:weak connectin.");
    
        }

    });
    
    
}
// let request = savetoDb("bubu dudu");        //req = promise object
// console.log(request);
// request.then(() => {
//     console.log("promise was resolved");
// })
// .catch(() => {
//     console.log("promise was rrejected");
// });

// savetoDb("bubu dudu")           //compact version of above
// .then(() => {
//     console.log("promise was resolved");
    
// })
// .catch(() => {
//     console.log("promise was rrejected");
    
// });

//improved version

savetoDb("dudu")
.then((result) => {
    console.log("data 1:data saved");
    console.log("result of promise: ",result);
    console.log(result);
    return savetoDb("bubu");
})
.then((result) => {

    console.log("data 2:data saved");
    console.log("result of promise: ",result);
    console.log(result);
    return savetoDb("dudububu");
})
.then(() => {
    console.log("data 3:data saved");
    console.log("result of promise: ",result);
    console.log(result);
})

.catch((error) => {
    console.log("error of promise :",error);
    console.log(error);
});

//callback hell coloring

let h1 =document.querySelector("h1");

function changeColor (color,delay,) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
        }, delay);

    });
    
    
}
