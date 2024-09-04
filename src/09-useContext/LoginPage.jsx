import { useContext } from "react"
import { UserContext } from "./context/UserContext"
import { useForm } from "../hooks/useForm"

export const LoginPage = () => {
  const {user, setUser} =  useContext(UserContext)
  const {formState, name, email, onInputChange} = useForm({})
    
  const handleSubmit = (e)=>{
    e.preventDefault()
    setUser(formState)
  }
  
  return (
      <>
      <h1>LoginPage</h1>
      <hr/>
<form aria-label="form" onSubmit={handleSubmit}>    
    <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="name"
            value={name}
            aria-label="name"
            onChange={onInputChange}
          />

          <input
            type="email"
            className="form-control mt-2"
            placeholder="user@domain.com"
            name="email"
            aria-label="email"
            value={email}
            onChange={onInputChange}
          />
  

    <button disabled={!(formState.name && formState.email)} type="submit" className="btn btn-primary mt-2"
          >Login</button>
</form>

      <code aria-label='code'>
        {JSON.stringify(user)}
      </code>

      
      </>
    )
  }
