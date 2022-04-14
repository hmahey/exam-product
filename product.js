document.getElementById('description').addEventListener('keydown', function(e){
        var key = e.keyCode;
        if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
            e.preventDefault();
        }
})

document.getElementById('username').addEventListener('input', function(e){
    var myusername = document.getElementById('username').value;
    var firstLetter = myusername.charAt(0);
    if(!firstLetter.match(/[a-z]/i)){
        document.getElementById('errorUsername').innerText = "Username should be start with alphabets!";
        document.getElementById('username').value = null;
    } else {
        document.getElementById('errorUsername').innerText = null;
    }
})

document.getElementById('signup').addEventListener('submit', function(e){
    e.preventDefault();
    var errors = [];

    var productID = document.getElementById('productID');
    var price = document.getElementById('price').value;
    var username = document.getElementById('username');
    var status = document.getElementsByName('supplier_status');
    var description = document.getElementById('description').value;

    if(productID.length != 8){
        errors.push("Product ID should be 8 characters only!");
    }

    if(price > 1000){
        errors.push('Price should less than 1000!');
    } 

    if (username.length > 5 || username.length <1){
        errors.push('Username length should be 1-5 letters!')
    }

    if(description.length < 20){
        errors.push('Description should be greater than 20 characters!');
    }

    if(status != null){
        let count=0;
        for(i = 1; i<status.length; i++){
            if(status[i].checked){
                count++;
            }
        }
        if(count==0){
            errors.push('Supply status checked atleast 1!');
        }
    }


    if(errors.length > 0){
        for(i=0; i< errors.length; i++){
            let newLi = document.createElement('li');
            let newTextNode = document.createTextNode(errors[i]);
            newLi.appendChild(newTextNode);
            document.getElementById('c').style.display = 'block';
            document.getElementById('content').appendChild(newLi);
        }
    } else {
        document.getElementById('signup').submit();
        alert('success');
    }
});