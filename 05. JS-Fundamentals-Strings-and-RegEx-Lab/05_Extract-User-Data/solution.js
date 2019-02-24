function solve() {
    let arr = JSON.parse(document.getElementById("arr").value);
    let result = document.getElementById('result');
        let pattern = /^([A-Z][a-z]* [A-Z][a-z]*) (\+359 [0-9] [0-9]{3} [0-9]{3}|\+359-[0-9]-[0-9]{3}-[0-9]{3}) ([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/;
        let match;
        for (let data of arr) {
            match = pattern.exec(data);
            if (match) {
                let firstP = document.createElement('p');
                firstP.textContent = `Name: ${match[1]}`;
                result.appendChild(firstP);
                let second = document.createElement('p');
                secondP.textContent = `Phone Number: ${match[2]}`;
                result.appendChild(secondP);
                let thirdP = document.createElement('p');
                thirdP.textContent = `Email: ${match[3]}`;
                result.appendChild(thirdPh);
            } else {
                let errorP = document.createElement('p');
                errorP.textContent = 'Invalid data';
                result.appendChild(errorP);
            }
            let dashes = document.createElement('p');

            dashes.textContent = '- - -';
            result.appendChild(dashes);
        }
}