document.addEventListener("DOMContentLoaded", function () {
    const area = document.getElementById("inputField");
    const press = document.querySelectorAll("button");

    press.forEach(button => {
        button.addEventListener("click", () => {
            if (button.innerText === "AC") {
                area.value = ""; // clear input
            }else if(button.innerText === "⌫"){
                area.value = area.value.slice(0, -1);
            }else if(button.innerText === "="){
                let result = calculateResult();
                area.value = result;
            }else if(button.innerText === "%"){
                const exp = area.value;
                const operators = ["+", "-", "*", "/"];
                const found = operators.find(op => exp.includes(op));
                if(found){
                    let res1 = calculateResult();
                    area.value = res1 / 100;
                }
                else{
                    area.value = area.value / 100;
                }
            }
            else {
                if (area.value === "0") area.value = ""; // remove starting 0
                area.value += button.innerText;
            }
        });
    });
    function calculateResult() {
        try {
            // Replace symbols with actual operators
            let expression = area.value
                .replace(/X/g, '*')
                .replace(/➗/g, '/');
    
            return math.evaluate(expression);
        } catch (error) {
            return "Error";
        }
    }
    
});

