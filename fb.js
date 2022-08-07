
function validate(){
    // var em1=document.getElementById('email12').value;
    // var ps1=document.getElementById('pswd12').value;
    var fn=document.getElementById('fname').value;
    console.log(fn)
    var sn=document.getElementById('sname').value;
    var en=document.getElementById('mob').value;
    var pn=document.getElementById('pswd').value;
    var dn=document.getElementById('dob').value;
    // console.log(dn)
    var rn1=document.getElementById('radio1');
    // console.log(rn1.checked)
    var rn2=document.getElementById('radio2');
    // console.log(rn2.checked)

    var rn3=document.getElementById('radio3');
    // console.log(rn3.checked)

    if(fn==''||sn==''||en==''||pn==''||dn==''||(rn1.checked==false && rn2.checked==false && rn3.checked==false)){
        alert("fill all fields");
        return false;
    }
    else{
    // console.log(fn)
    const fpat=/^[A-Za-z]+$/;
    if(fpat.test(fn)){
        document.getElementById("p1").innerHTML="";
    }else{
        document.getElementById("p1").innerHTML="Invalid Firstname";
        return false;
    }
    // var sn=document.getElementById('sname').value;
    const spat=/^[A-Za-z]+$/;
   
    if(spat.test(sn)){
        document.getElementById("p2").innerHTML="";
    }else{
        // alert("Invalid Lastname");
        document.getElementById("p2").innerHTML="Invalid Lastname";
        return false;
    }

    // var en=document.getElementById('mob').value;
    // const email1=/^w+@gmail\.com$/;
    const email2=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const mob1=/^\d{10}$/
    if(email2.test(en)||mob1.test(en)){
        document.getElementById("p3").innerHTML="";
    }else{
        // alert("Invalid Lastname");
        document.getElementById("p3").innerHTML="Invalid Email or Mobile number";
        return false;
    }

    // var pn=document.getElementById('pswd').value;
    
    // const pswd1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const pswd2=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(pswd2.test(pn)){
        document.getElementById("p4").innerHTML="";
    }else{
        // alert("Invalid Lastname");
        document.getElementById("p4").innerHTML="Invalid Password";
        return false;
    }

    // var dn=document.getElementById('dob').value;
    const pattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
    console.log(pattern.test(dn))
    // if ( dn != null ||dn != false || pattern.test(dn)) {
    if (!(pattern.test(dn)) ) {
        // errMessage += "Invalid date of birth\n";
        // document.getElementById("p5").innerHTML="";
    // }else{
        document.getElementById("p5").innerHTML="Empty field";
        console.log("invalid dob")
        return false;
    }

    return true;
    }
}
function validate1(){
    var em1=document.getElementById('email12').value;
    var ps1=document.getElementById('pswd12').value;
    if(em1==''|| ps1==''){
        alert("fill all fields");
    }
    return true;
}





