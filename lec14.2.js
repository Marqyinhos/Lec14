let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
let sal = 0;
let nam = null;
function topSalary(salaries){

    for(const[name, salary] of Object.entries(salaries)){
        if(salary > sal){
            sal = salary;
            nam = name;
        }
    }
}
topSalary(salaries);
alert("Ім'я: "+nam +", ЗП: "+sal);