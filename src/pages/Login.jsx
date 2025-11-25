export default function Login() {
  return (
    <section className="page auth-page">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Username
          <input type="text" placeholder="Enter username" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Enter password" />
        </label>
        <button className="btn primary" type="submit">
          Login
        </button>
      </form>
      <p className="section-note">
        This page is a mock; no real authentication is performed yet.
      </p>
    </section>
  );
}