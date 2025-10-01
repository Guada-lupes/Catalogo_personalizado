import "../../styles/FlipBookComponentStyle.css";
import "../../styles/LastPageComponentStyle.css";
import { useContext } from "react";
import { BookContext } from "../../contexts/FlipBookContext";
import { NavegationContext } from "../../contexts/NavegationContext";
import { useAgencyPersonalization } from "../../hooks/useAgencyPersonalization";
import { getZIndexForPaper } from "../utils/getZIndexForPaper";
import { IconoDinamic } from "./IconoDinamic";

export const LastPageComponent = ({ id }) => {
  const { needsExtraPage, numOfPapers, hasPublicity } = useContext(BookContext);
  const { agencyColor } = useAgencyPersonalization();
  const { isPastPage, currentLocation } = useContext(NavegationContext);
  //para comprobar si la hoja es inferior a currenlocation
  const zIndex = getZIndexForPaper(id, currentLocation, numOfPapers);
  const pastPage = isPastPage(id);

  //verificamos que necesita pagina extra
  if (needsExtraPage) {
    return (
      <div
        id={`p${id}`}
        className={`paper ${pastPage ? "flipped" : ""} `}
        style={{ zIndex: zIndex }}
      >
        <div className="front">
          {/* colocamos agencia o publicidad */}
          <div
            id={`f${id}`}
            className={`front-content ${!hasPublicity ? "background-backcover" : ""}`}
            // className="front-content background-backcover" 
          >
{hasPublicity ? (<img src="\publicidad.jpg"/>) : ""}
          </div>
        </div>
        <div className="back " style={agencyColor}>
          <div id={`b${id}`} className="back-content back-cover">
            <IconoDinamic
              logo={"back-cover-image-container"}
              text={"back-cover-icono-text"}
            />
          </div>
        </div>
      </div>
    );
  }
  return null;
};
