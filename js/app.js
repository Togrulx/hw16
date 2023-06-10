let btn=document.getElementById('calculate')

btn.onclick=()=>{
        let num1=parseInt(document.getElementById('Amount').value)
        let num2=parseInt(document.getElementById('Month').value)
        let num3=parseInt(document.getElementById('Percentage').value+"%")


     if (isNaN(num1) || isNaN(num2)||isNaN(num3)) {
        document.getElementById("result").innerHTML = "Please,enter the number." ;   
        return;
    }

     let total =num1*num3/100;
     let percentage=num1+total;
     let monthly=smebleg/num2

   document.getElementById('common').innerHTML="Cəmi Ödəməlisiniz:"+" "+percentage.toFixed(2)+"Azn" 
   document.getElementById('res').innerHTML= "Aylıq Ödəməlisiniz:"+" "+ monthly.toFixed(2)+"Azn"
}