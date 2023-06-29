import LevelInput from "components/levelInput/LevelInput";
import { WithEditableLabel } from "components/withEditableLabel";

function BGMeritsFlaws() {


    return <div style={{margin: 0, display: "flex", flexDirection: "column", width: "fit-content"}}>
    {
        [...Array(13)].map(() => {
        const id = crypto.randomUUID()
      return   (
      <WithEditableLabel id={id}>
        <LevelInput levels={5} id={id} label={''} />
      </WithEditableLabel>)
    })}
    </div> 
}

export default BGMeritsFlaws;