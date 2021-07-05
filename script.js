const buttons = document.querySelectorAll('.container button');
const turbulence = document.querySelector('svg feTurbulence');
let verticalFrecuency = 0.00001;
const steps = 30;
const interval = 10;


buttons.forEach(button => {

    // hover to change frecuency  
    button.addEventListener('mouseover', () => {
        verticalFrecuency = 0.00001;
        for (let i = 0; i < steps; i++) {
            setTimeout(() => {
                verticalFrecuency += 0.002;
                if (button.getAttribute('id') == 'b1') {
                    turbulence.setAttribute('baseFrequency', verticalFrecuency + ' 0.00001');
                }
                if (button.getAttribute('id') == 'b2') {
                    turbulence.setAttribute('baseFrequency', '0.9 ' + verticalFrecuency);
                }
                if (button.getAttribute('id') == 'b3') {
                    turbulence.setAttribute('baseFrequency', verticalFrecuency);
                }
            }, i * interval);
        }
    });

});
