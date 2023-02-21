
import './App.css';

function App() {
  return (
    <div className="App">
    <div className='login-page'>
    <div className='box'>
    <div className='left-side'> <div><img className='image' src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'></img>
</div>     
<h2 className='text'>
 Facebook helps you connect and share with the people in your life.
 </h2>
</div>
      <div className='login-layout'>
      <div>  <input className='email form-control' placeholder='Email address or phone number'></input></div>
       <div > <input className='password form-control' placeholder='Password'></input></div>
       <div>
        <button className='login-btn btn btn-primary'>Log in</button></div>
       <div> <a href='link'>Forgotten password?</a></div>
<div className='line'></div>
      <div>
        <button className='create-btn btn btn-success'> Create new account</button></div>
      </div>
      </div>
   
    </div> 
         </div>
  );
}

export default App;
