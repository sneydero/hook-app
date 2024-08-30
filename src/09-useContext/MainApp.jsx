import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, AboutPage, LoginPage } from "./"
import { Navbar } from "./Navbar"
import TodoApp from "../08-useReducer/TodoApp"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {

  return (
    <UserProvider>
      <h1>Main App </h1>
      <Navbar/>
      <hr/>
          
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="todo" element={<TodoApp />}/>
        {/* This is in case a path does not exist */}
        {/* <Route path="/*" element={<LoginPage/>}/> */}
        <Route path="/*" element={<Navigate to="/about"/>}/>
      </Routes>
    </UserProvider>
  )
}
