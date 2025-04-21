import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function LeftMenu({loveMove}: {loveMove: boolean}) {
  const navigation = useNavigate()
  return (
    <Fragment>
      {/* ---------- menue bar ----------*/}

      {loveMove && (
        <div className="overflow-y-auto h-[90vh]">
          <h3>Comming soon Lorem ipsum v2.</h3>
          <h3>Comming soon Lorem ipsum.</h3>
          <h3>Comming soon Lorem ipsum.</h3>
          <h3>Comming soon Lorem ipsum.</h3>
          <h3>Comming soon Lorem ipsum.</h3>
          <button onClick={()=> navigation("/1")}>goto 1</button>
          <button onClick={()=> navigation("/2")}>goto 1</button>
          <button onClick={()=> navigation("/3")}>goto 1</button>
          <button onClick={()=> navigation("/4")}>goto 1</button>
          <button onClick={()=> navigation("/5")}>goto 1</button>
        </div>
      )}
    </Fragment>
  );
}

export default LeftMenu;
