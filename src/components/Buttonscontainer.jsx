import styles from "./Buttonscontainer.module.css";

const Buttonscontainer =({onButtonClick})=>{

    const Buttonnames =['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

    return(<div className={styles.buttonscontainer}>

{Buttonnames.map(buttonname=><button className={styles.button} onClick={()=>onButtonClick(buttonname)}>{buttonname}</button>)}

    
    </div>
)}
export default Buttonscontainer;