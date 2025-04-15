import { DateTime } from "https://cdn.jsdelivr.net/npm/luxon@3.4.3/build/es6/luxon.min.js";

const picker = datepicker('input',
    {
        formatter: (input, date, instance) => {
          const value = date.toLocaleDateString()
          input.value = value // => '1/1/2099'
        }
    }
);

let birthdate;

document.getElementById('button').addEventListener('click', function(){
    const inputvalue = document.getElementById('input').value;

    const birthdate = DateTime.fromFormat(inputvalue, 'M/d/yyyy');

    const now = DateTime.now();
    const age_years = Math.floor(now.diff(birthdate, 'years').years);
    const age_months = Math.floor(now.diff(birthdate, 'months').months) - (age_years * 12);
  
    console.log(`Age: ${age_years}` + ' years old');

    document.querySelector('.result').innerHTML = 
    "You are " + age_years + " years" + " and " + age_months + " months old.";
});




// var dur = Duration.fromObject({years:})