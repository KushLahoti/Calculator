const keys = document.querySelectorAll(".key");
const display_input = document.querySelector(".display .input");
const display_output = document.querySelector(".display .output");

let input = "";
for (let key of keys) {
    const value = key.dataset.key;
    key.addEventListener("click", () => {
        if (value == "clear") {
            input = "";
            display_input.innerHTML = "";
            display_output.innerHTML = "";
        } else if (value == "backspace") {
            input = input.slice(0, input.length - 1);
            display_input.innerHTML = input;
        } else if (value == "=") {
            let result = eval(input);
            display_output.innerHTML = result;
        } else if (value == "brackets") {
            if (input.indexOf("(") == -1 ||
                (input.indexOf("(") != -1 && input.indexOf(")") != -1 && input.lastIndexOf("(") < input.lastIndexOf(")"))
            ) {
                input += "(";
            } else if ((input.indexOf("(") != -1 && input.indexOf(")") == -1) ||
                (input.indexOf("(") != -1 && input.indexOf(")") != -1 && input.lastIndexOf("(") > input.lastIndexOf(")"))) {
                input += ")";
            }
            display_input.innerHTML = input;
        } else {
            input += value;
            display_input.innerHTML = input;
        }
    })
}
document.addEventListener("keydown", (event) => {
    let key = event.key;
    //console.log(event);
    if (key == 'Escape') {
        input = "";
        display_input.innerHTML = "";
        display_output.innerHTML = "";
    } else if (key == "Backspace") {
        input = input.slice(0, input.length - 1);
        display_input.innerHTML = input;
    } else if (key == "Enter") {
        let result = eval(input);
        display_output.innerHTML = result;
    } else if (key == "(" || key == ")") {
        if (input.indexOf("(") == -1 ||
            (input.indexOf("(") != -1 && input.indexOf(")") != -1 && input.lastIndexOf("(") < input.lastIndexOf(")"))
        ) {
            input += "(";
        } else if ((input.indexOf("(") != -1 && input.indexOf(")") == -1) ||
            (input.indexOf("(") != -1 && input.indexOf(")") != -1 && input.lastIndexOf("(") > input.lastIndexOf(")"))) {
            input += ")";
        }
        display_input.innerHTML = input;
    } else if ((key >= '0' && key <= '9') || (key == "+") || (key == "-") || (key == "*") || (key == "/") || (key == "%")) {
        input += key;
        display_input.innerHTML = input;
    }
})
