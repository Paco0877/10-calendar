export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4 fixed">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"></i>
        &nbsp; Asiry Dental
      </span>
      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt"></i>
        <span>Salir</span>
      </button>
    </div>
  );
};
