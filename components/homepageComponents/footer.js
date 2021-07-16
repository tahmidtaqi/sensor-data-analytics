import styles from "../../styles/landingpage.module.css";
import Logo from '../../public/Static/Logo.png'
const footer = () => {
    return ( 
    
    <div className='Container' style={{backgroundColor:'#20283E'}}>
        <div className={styles.footer}>
        <div className="d-flex justify-content-evenly">
        <div>
        <img src={Logo}></img>
        </div>
        </div>
        </div>
    </div> );
}
 
export default footer;