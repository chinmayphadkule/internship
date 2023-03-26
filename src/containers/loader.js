import  {Rings} from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
        //used to display the loader when the api is fetching data
        <div className='app'>
             <Rings color="#00BFFF" height={80} width={80} />
       </div>
    );
}
export default LoaderComp