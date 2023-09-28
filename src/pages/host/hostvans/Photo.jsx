import { useOutletContext } from "react-router-dom";
function Photo() {
  const van = useOutletContext();
    return (
      <div>
        <img src={van.imageUrl} alt={van.name} className="w-32 h-32"/>
      </div>
    );
  }
  
  export default Photo;
  