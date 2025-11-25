export default function Register() {
  return (
    <section className="page auth-page">
      <h2>Register</h2>
      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Username
          <input type="text" placeholder="Choose a username" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Create a password" />
        </label>
        <label>
          Verify Password
          <input type="password" placeholder="Repeat your password" />
        </label>
        <button className="btn primary" type="submit">
          Create Account
        </button>
      </form>
      <p className="section-note">
        This page is also a mock and does not store data yet.
      </p>
    </section>
  );
}