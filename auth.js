const API='http://localhost:4000'

function GetValue(id){
    return document.getElementById(id).value
}

async function handleLogin(event) {
    if (event.key === "Enter") {
        try {
            const email = GetValue('email');
            const password = GetValue('pwd');
            const response = await fetch(`${API}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const result = await response.json();
            if (response.status !== 200) {
                return alert('Email or Password is incorrect');
            }
            localStorage.setItem('token', result.token);
            window.location.href = 'index.html';
        } catch (error) {
            console.error(error);
        }
    }
}

var passwordInput = document.getElementById("pwd");

passwordInput.addEventListener("keydown", handleLogin);

async function handleregister(){
    try {
        const email=GetValue('email')
        const password = GetValue('pwd')
        const fname = GetValue('fname')
        const lname = GetValue('lname')
        const respone = await fetch(`${API}/register`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'

            },
            body:JSON.stringify({email,password,fname,lname})
        })
        const result= await respone.json()
        if(respone.status !== 200){
            return alert('Email or Password is incorrect')
        }
        localStorage.setItem('token',result.token)
        window.location.href = 'login.html'
        return
        
    } catch (error) {
      console.error(error)
    }
}


