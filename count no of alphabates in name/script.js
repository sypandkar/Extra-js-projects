const myFunction = () => {
    var input = document.querySelector(".input").value;
    var string = input.toUpperCase();

    var stoArray = string.split("");    
    var count = document.querySelector(".count");
    
    const output = {};
    stoArray.forEach((e) => {
        if(output[e]) {
            output[e] = output[e] + 1;
        } else {
            output[e] = 1;
        };
    });
    count.innerHTML=(JSON.stringify(output))
};