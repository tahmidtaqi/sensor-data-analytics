import styles from '../../styles/landingpage.module.css'
import styles1 from '../../styles/cardssection.module.css'
import Dashboard from '../../public/Static/dashboard.png';
import Statistics from '../../public/Static/statistics.png';
import Data from '../../public/Static/data.png';
const cards = () => {
    return ( 
    <div className={styles1.containerfluid}>
        <div className={styles.centering}>
        <h2 className={styles.textstyle}>Our Features</h2>
        </div>
        <div class="d-flex justify-content-evenly">
  
    <div class="card h-100" style={{maxWidth:'18rem',border:'none'}}>
    <div style={{textAlign:'center'}}>
      <img src={Dashboard} style={{height:'100px',width:'100px'}} class="card-img-top" alt="..."/>
      </div>
      <div class="card-body">
        <h5 class="card-title">Data Visualization</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
   
  </div>
  
    <div class="card h-100" style={{maxWidth:'18rem',border:'none'}}>
    <div style={{textAlign:'center'}}>
      <img src={ Statistics } style={{height:'100px',width:'100px'}} class="card-img-top" alt="..."/>
      </div>
      <div class="card-body">
        <h5 class="card-title">User Statistics</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
   
  </div>
 
    <div class="card h-100" style={{maxWidth:'18rem',border:'none'}}>
      <div style={{textAlign:'center'}}>
      <img src={Data} style={{height:'100px',width:'100px'}} class="card-img-top" alt="..."/>
      </div>
      <div class="card-body">
        <h5 class="card-title">Data Analysis</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
   
  </div>
 
</div>

    </div> );
}
 
export default cards;