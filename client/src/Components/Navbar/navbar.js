import './navbar.css';

const Navbar =()=>{
    return(
<header>
  <div className="bg-header collapse" id="navbarHeader" >
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-7 py-4">
          <h4 className="text-white">About</h4>
          <p className="text-muted">Mad Street Den® is a Computer Vision and Artificial Intelligence Company building the AI architecture of the future. Founded by a Neuroscientist - Designer duo, the company's mission is to build models of generalizable intelligence on scale, that can be deployed through meaningful applications across industries to billions of people across the globe.</p>
        </div>
        <div className="col-sm-4 offset-md-1 py-4">
          <h4 className="text-white">Contact</h4>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white">Follow on Twitter</a></li>
            <li><a href="#" className="text-white">Like on Facebook</a></li>
            <li><a href="#" className="text-white">Email me</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="navbar navbar-dark bg-header shadow-sm">
    <div className="container d-flex justify-content-between">
      <a href="#" className="navbar-brand d-flex align-items-center">
        <img src='https://www.madstreetden.com/static/images/msd-logo.svg' />
        <strong>File Manager</strong>
      </a>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
    </div>
  </div>
</header>

    )
}
export default Navbar;