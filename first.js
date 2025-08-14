function hello() {
    console.log("inside hello");
    console.log("hello");
}
function demo () {
    console.log("calling hello fnx");
    hello()
}
console.log("calling demo fnx");
demo()
console.log("okay done bye");

//call stack

function one ( ) {
    return 1;

}
function two() {
    return one() + one();
}
function three () {
    let ans  =two() + one() ;
    console.log(ans);
}
three()

//js is single threaded
//syncronous nature
let a =34;
console.log(a);
let b= 56;
console.log(b);
console.log(a+b);


//asycronous nature

setTimeout(() => {
    console.log("bubu love dudu");
}, 2000);
setTimeout(() => {
    console.log("dudu love bubu");
}, 2000);
console.log("hello");


//callback hell
let h1 =document.querySelector("h1");

function changeColor (color,delay,nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
    
}
changeColor("red",1000,() => {              //callback nesting -> call back hell
    changeColor("pink",1000,() => {
        changeColor("lavender",1000,() => {
            changeColor("yellow",1000);

        });

    });
});


//callback hell --asynchronouus

function savetoDb(data,sucess,failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4) {
        sucess();
       
    }
    else {
        failure();
    
    }
    
}
savetoDb("motka sona dudu", () => {
    console.log("sucess:ur data was saved ");

    savetoDb("ur motki sona buu rani..",() => {

        console.log("success 2:data saved");

        savetoDb("our love story",() => {

            console.log("sucess 3: data saved");
        },
    () => {
        console.log("failure 3 : weak connection");
    });
    },
    () => {
        console.log("failure2: weak connection");
    }
);
},
() => {
    console.log("weak connection.data not saved...");
});
