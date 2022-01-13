window.onload = function () {
    const bodyID = document.getElementById('bodyId');
    const theme1Button = document.getElementById('theme1');
    const theme2Button = document.getElementById('theme2');
    const theme3Button = document.getElementById('theme3');
    let display = document.getElementById('display');
    let buttons = Array.from(document.getElementsByClassName('button'));

    theme2Button.onclick = () => {
        if (bodyID.classList.contains('theme1')) {
            bodyID.classList.replace('theme1', 'theme2')
        } else {
            bodyID.classList.replace('theme3', 'theme2')
        }
    }

    theme1Button.onclick = () => {
        if (bodyID.classList.contains('theme2')) {
            bodyID.classList.replace('theme2', 'theme1')
        } else {
            bodyID.classList.replace('theme3', 'theme1');
        }
    }

    theme3Button.onclick = () => {
        if (bodyID.classList.contains('theme1')) {
            bodyID.classList.replace('theme1', 'theme3');
        } else {
            bodyID.classList.replace('theme2', 'theme3');
        }
    }

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            switch (e.target.innerText) {
                case 'C':
                    display.innerText = '';
                    break;
                case '=':
                    try {
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = "Error"
                    }
                    break;
                case 'DEL':
                    if (display.innerText) {
                        display.innerText = display.innerText.slice(0, -1);
                    }
                    break;
                default:
                    display.innerText += e.target.innerText;
            }
        });
    });
}
