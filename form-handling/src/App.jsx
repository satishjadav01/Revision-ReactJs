import React from 'react'

const App = () => {

  const [username, setUsername] = useState("")
  const [password, setpassword] = useState("")   
  const [email, setemail] = useState("") 

  const handleSubmit =(e)=>{
    e.preventDefault()
    
    let data = {
      username : username,
      password : password,
      email : email
    }
    console.log(data);
  }

  return (
    <div className='h-screen w-full'>

    </div>
  )
}

export default App