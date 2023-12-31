import '../App.css';
export const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar  navbar-expand-lg" style={{ backgroundColor: "#4C4C6D" }} data-bs-theme="dark"> 
  <div className="container-fluid">
    <a className="navbar-brand" onClick={() => setCategory("General")} style={{cursor: "pointer", paddingLeft: "30px"}}><span className="fs-4" style={{ fontWeight: "bold", letterSpacing: "1px" }}>NewsApp</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav" style={{cursor: "pointer", paddingLeft: "55%", gap: "10px"}}>
        <li className="nav-item" >
          <div className="nav-link" onClick={() => setCategory("Business")} >Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={() => setCategory("Entertainment")}>Entertainment</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={() => setCategory("Health")}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={() => setCategory("Science")}>Science</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={() => setCategory("Sports")}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={() => setCategory("Technology")}>Technology</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
export default Navbar