

document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox")
    const capitecbutton = document.getElementById("capitecbutton")
    const absabutton = document.getElementById("absabutton")
    const nedbankbutton = document.getElementById("nedbankbutton")

    if(myCheckBox.checked){
        console.log("you are subscribed")
    }
    else{
        console.log("you are NOT subcribed")
    }
    if(capitecbutton.checked){
        console.log("you are paying with a capitec!")
    }
    else if(absabutton.checked){
        console.log("you are paying with a absa!")
    }
    else if(nedbankbutton.checked){
        console.log("you are paying with a nedbank!")
    }
    else{
        console.log("you must select a payment type!")
    }
}
/*
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <label for = "myCheckBox">subscribe</label>
    <input type = "checkbox" id = "myCheckBox"><br>

   <button type = "button" id = "myButton">submit</button><br>

   <label for = "capitecbutton">Capitec</label>
   <input type = "radio" name = "card" id ="capitecbutton"><br>

   <label for = "absabutton">ABSA</label>
   <input type = "radio" name = "card" id ="absabutton"><br>

   <label for = "nedbankbutton">Nedbank</label>
   <input type = "radio" name = "card" id ="nedbankbutton"><br>

   
   <script src="index.js"></script>
</body>
*\
