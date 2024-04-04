const SignIn = () => {
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <form style={{ width: "30%" }}>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
            />
          </div>

          <div className="d-flex flex-column text-center justify-content-center">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginBottom: "10px" }}
            >
              Sign In
            </button>
            <div>
              <small>New to Mooscles?</small>
              <span style={{ margin: "0 5px" }}>|</span>
              <small>Forgot password?</small>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
