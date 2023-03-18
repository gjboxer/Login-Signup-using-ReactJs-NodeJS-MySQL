import { Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

  return (
    <div className='home'>
      <h1 className='heading'>Welcome to your dashboard</h1>
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col-2"></div>
          <div class="col-5">
            <button class=" button-64"><Link to='/t1' className='link'>Template-1</Link></button>
          </div>
          <div class="col-5">
            <button class=" button-64"><Link to='/t2' className='link'>Template-2</Link></button>
          </div>
        </div>
      </div>


    </div>




  )
}

export default Home