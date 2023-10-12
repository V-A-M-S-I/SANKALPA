function validate()

    {
        const a =document.getElementById("faculty-id").value;
        const b =document.getElementById("password").value.trim();
        var regx= /^(^TTS)([0-9]{5})$/i;
        if(a=="" && b=="")
        {
            document.getElementById("name").style.visibility="visible";
            alert("plz enter all fields")
            return false;
        }
        else if(a=="")
        {
            document.getElementById("name").style.visibility="visible";
            alert("plz enter email")
            return false;
        }
        else if(b=="")
        {
            document.getElementById("name").style.visibility="visible";
            alert("plz enter password")
            return false;
        }
        else
        {
            if(regx.test(a))
            {
                document.getElementById("name").innerHTML="Valid";
                document.getElementById("name").style.visibility="visible";
                document.getElementById("name").style.color="green";
            }
            else
            {
                document.getElementById("name").innerHTML="Invalid faculity-ID";
                document.getElementById("name").style.visibility="visible";
                document.getElementById("name").style.color="red";
                return false;
            }
        }
    }