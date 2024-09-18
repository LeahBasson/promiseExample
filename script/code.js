document.querySelector('[division]').addEventListener('click', division) 

function division(){
    let fOp  = +document.querySelector('[firstOp]').value;
    let output = document.querySelector('[output]');
    let sOp = +document.querySelector('[secOp]').value;

    //Make a promise
    let myPromise = new Promise((resolve, reject) => {
        if((fOp < 1) || (sOp < 1))
            reject('You can\'t divide a number by zero')
        else
        resolve(fOp / sOp) 
    })

    //Promise fulfiled then this will run
    myPromise.then(value => {
        output.textContent = value
    })

    //If its rejected then this will run
    .catch (value => {
        output.textContent = value
    })

}


