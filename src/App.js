import './App.css';
import Navbar from './layout/Navbar';

function App() {
  return (
    <div className="App">

      {/* Landing Page */}
      <section className="section hero-page container-fluid">

        <Navbar />

        <div className="card container">
          <div className="content">
            <h3 className="greet">Hi, my name is</h3>
            <h1 className="main heading">Juvielone Lagos.</h1>
            <h1 className="sub heading">I build and design for the web</h1>

            <h3 className="short-desc">
              I’m a web developer specializing in developing and designing applications, user interfaces, and mainly websites. I create and maintain working with both the front and back end.
            </h3>


            <button type="button" class="btn btn-warning cta-btn">VIEW RESUME</button>

          </div>
        </div>






      </section>



      {/* About Page =================================================================*/}
      <section className="section about-page container-fluid">

      </section>

    </div>
  );
}

export default App;
