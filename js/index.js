const start = function(){
    const colorValue = document.querySelector("#color-value");
    const colorDesc = document.querySelector("#color-desc");
    const simpleMode = document.querySelector("#simple-mode");
    const hexMode = document.querySelector("#hex-mode");

    const simpleColor = function(){
        const colorbtn = document.querySelector("#color-btn");
        const main = document.querySelector("#main-content");
    
        const colors = ["red", "blue", "green", "yellow"];
        
        colorbtn.addEventListener("click", function(e){
            let ranNum = Math.floor(Math.random() * colors.length + 0);
            colorDesc.style.flexDirection = "row";
            colorValue.innerHTML = colors[ranNum];
            main.style.backgroundColor = colors[ranNum];
        });
    }
    
    const hexColor = function(){
        const colorbtn = document.querySelector("#color-btn");
        const main = document.querySelector("#main-content");
    
        const hexColors = ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F'];
        let hex = "#"
        colorbtn.addEventListener("click", function(e){
            for(let i = 1; i <= 6; i++){
                let ranNum = Math.floor(Math.random() * hexColors.length + 0);
                hex += hexColors[ranNum];
            } 
            colorDesc.style.flexDirection = "column";
            colorValue.innerHTML = hex;
            main.style.backgroundColor = hex;
            hex = "#";
        });
    }
    simpleColor();
    let simple = true;
    simpleMode.addEventListener("click", function(e){
        simple = true;
        simpleColor();
        console.log(simple);
        e.preventDefault();
    });
    hexMode.addEventListener("click", function(e){
        simple = false;
        hexColor();
        console.log(simple);
        e.preventDefault();
    });

}

start();




