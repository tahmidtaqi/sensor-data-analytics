import Bgimage from "../../public/Static/bg.jpg";
import styles from "../../styles/landingpage.module.css";
const carousel = () => {
  return (
    <div className="container-fluid mb-10" className={styles.sizing}>
      {/* <div className={styles.overlay}>  </div> */}
      <div className="row">
        <div className="col-md-5" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
       
          <div className="card" style={{border: 'none'}}>
            
            <div class="card-body">
              <h2 className="card-title" style={{fontFamily:'Poppins',color:'#20283E'}}>One Stop Solution</h2>
              <h4 className="card-text" style={{fontFamily:'Poppins',color:'#fd4747d6'}}>
                For Your Sensor Data
              </h4>
              <p>Sensordata analytics is an end-to-end research platform that enables researchers to quantitatively measure human behavior using smartphones, wearables, and big data.

Try it free of charge for as long as you need to make sure it’s the right tool for your research.</p>
              <a href="/login" class="btn btn-primary">
               Log In
              </a>
            
          </div>
          </div>
        </div>
        <div className="col-md-7">
          <img className={styles.imagestyle} src={Bgimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default carousel;
