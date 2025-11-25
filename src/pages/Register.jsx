export default function Register(){
  return (<section><h2>Register</h2>
    <form style={{maxWidth:360}} onSubmit={(e)=>e.preventDefault()}>
      <label>Username<br/><input type="text" placeholder="Choose a username"/></label><br/><br/>
      <label>Password<br/><input type="password" placeholder="Create password"/></label><br/><br/>
      <label>Verify Password<br/><input type="password" placeholder="Re-enter"/></label><br/><br/>
      <button className="primary" type="submit">Create Account</button>
    </form></section>)
}
