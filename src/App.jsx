import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { centralSupabase } from './utils/supabaseClient'
import { quanterraSupabase } from './utils/supabaseClient'
import LoginForm from './MainModule/components/loginForm'

function App() {
  // const [data, setData] = useState([])

  // async function fetchAndStoreDoctors() {
  //   // Fetch data from the central project
  //   let { data, error: fetchError } = await centralSupabase
  //     .from('doctor')
  //     .select('*')
  
  //   if (fetchError) {
  //     console.error('Error fetching doctors from central project:', fetchError);
  //     return;
  //   }

  // }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetchAndStoreDoctors();
  //   };
  //   fetchData();
  // }, []);

  // const [name, setName] = useState('')
  
  // const handleSubmit = async () => {
  //   const { data, error } = await centralSupabase
  //     .from('doctor')
  //     .insert([{ name }])

  //   if (error) {
  //     console.log(error)
  //   }
  // }


  return (
    <>
      <LoginForm/>
    {/* <div className='flex flex-col'>
      <label htmlFor="name">Last Name:</label>
      <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} required/>
      <label htmlFor="email">Email:</label>
      <input type="email" name='email' required/>
      <label htmlFor="num">Mobile Number</label>
      <input type="number" name='num' required />
      <button onClick={handleSubmit}>Invite Doctor</button>
    </div> */}


    
    </>
  )
}

export default App
