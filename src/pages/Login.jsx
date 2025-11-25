export default function Login(){
  return (<section><h2>Login</h2>
    <form style={{maxWidth:360}} onSubmit={(e)=>e.preventDefault()}>
      <label>Username<br/><input type="text" placeholder="Username"/></label><br/><br/>
      <label>Password<br/><input type="password" placeholder="Password"/></label><br/><br/>
      <button className="primary" type="submit">Sign In</button>
    </form></section>)
}
