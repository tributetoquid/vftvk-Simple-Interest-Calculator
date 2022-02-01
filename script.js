
// a function to dynamically update rate value while changing
function updateRate() 
{
    var rateval = document.getElementById("rate").value; // getting value from the rate field 
    document.getElementById("rate_val").innerText=rateval+"%"; // assingning that above value to span element with id = rate_val
}




        
// now computing the whole result
function compute()
{

    var principal = document.getElementById("principal").value; //getting value from amount field
    // checking to see if user has entered zero or negative value
    if (principal <=0) {
        alert("Please Enter a positive Number!"); //showing a pop-window to the user
        document.getElementById("principal").focus();
         };
    var rate = document.getElementById("rate").value; //taking value from rate field
    var years = document.getElementById("year").value; // taking years 
    var year = new Date().getFullYear()+parseInt(years); //converting years to integer and then adding the with current year
    var amount = principal * year * rate /100; // calculating the total amount
        //  now printing the result in the span element with id = result
    document.getElementById("result").innerHTML="If you deposit <span style='background:yellow'>"+principal+"</span>,\<br\>at an interest rate of <span style='background:yellow'>"+rate+"%</span>\<br\>You will receive an amount of <span style='background:yellow'>"+amount+"</span>,\<br\>in the year <span style='background:yellow'>"+year+"</span>\<br\>";

    
}
            
