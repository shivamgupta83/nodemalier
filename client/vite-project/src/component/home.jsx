import React, { useState } from 'react'

function Home() {
let [email , setEmail] = useState("");

   

const submit =  async () => {
    let mail = {email}
    console.log(mail)
    let result = await fetch("http://localhost:3001/mail", {
        method: "POST",
        body: JSON.stringify(mail),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })

    result = await result.json()
        console.log(result)
        localStorage.setItem("email_info", JSON.stringify(result))
        if(result){
            alert("email send")
        }
}


  return (
< >

<h3 style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',}} > send email by reactJs and nodeJs</h3>

<form style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}>


<label htmlFor="Email" > email : </label>
<input className='inputs' onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder="youremail@gmail.com" id="email" name="email"></input>
<button  onClick={submit} className="login" >submit kre...</button>
</form>


</>
  )
}

export default Home;