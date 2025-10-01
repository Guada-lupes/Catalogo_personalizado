import { useContext } from "react";
import { BookContext } from "../../contexts/FlipBookContext";
import { NavegationContext } from "../../contexts/NavegationContext";
import { getZIndexForPaper } from "../utils/getZIndexForPaper";

export const PublicityPaperComponent = ({ id }) => {
  const { isPastPage, currentLocation } = useContext(NavegationContext);
  const { numOfPapers } = useContext(BookContext);
  const pastPage = isPastPage(id);
  const zIndex = getZIndexForPaper(id, currentLocation, numOfPapers);

  return (
    <div
      id={`p${id}`}
      className={`paper ${pastPage ? "flipped" : ""} `}
      style={{ zIndex: zIndex }}
    >
      <div className="front">
        <div id={`f${id}`} className="front-content">
          <img src="\publicidad.jpg" alt="publicidad" />
        </div>
      </div>
      <div className="back ">
        <div id={`b${id}`} className="back-content">
          <img src="\publicidad.jpg" alt="publicidad" />
        </div>
      </div>
    </div>
  );
};
