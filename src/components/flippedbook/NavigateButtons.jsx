
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/FlipBookComponentStyle.css";

export const NavigateButtons = ({onClick, icon, id}) => {

  return (
            <FontAwesomeIcon
              icon={icon}
              className="buttons"
              id={id}
              onClick={onClick}
            />
  )
}
