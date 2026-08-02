const form = document.querySelector('form')

// For stopping the contents from uploading to an API or a server , when the submit button is clicked.
form.addEventListener('submit', function(e){
    // For preventing the default action of the form.
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height == '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give valid height!!"
    }
    else if(weight == '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give valid weight!!"
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)

        // Show the result.
        results.innerHTML = `<span>BMI = ${bmi}</span>`;
        if(bmi < 18.6){
            results.innerHTML += "<br> Underweight";
        } else if(bmi >= 18.6 && bmi <= 24.9){
            results.innerHTML += "<br> Perfect , every single bit of it!!"
        } else {
            results.innerHTML += "<br> The Whale"
        }
    }
})