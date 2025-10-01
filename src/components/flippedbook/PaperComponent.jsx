import "../../styles/FlipBookComponentStyle.css";
import "../../styles/PropertySectionStyle.css"
import { memo, useContext, useMemo } from "react";
import { NavegationContext } from "../../contexts/NavegationContext";
import { Property1SectionComponent } from "./Property1SectionComponent";
import { PageComponent } from "./PageComponent";
import { BackContentComponent } from "./BackContentComponent";
import { useAgencyPersonalization } from "../../hooks/useAgencyPersonalization";
import { BookContext } from "../../contexts/FlipBookContext";
import { getZIndexForPaper } from "../utils/getZIndexForPaper";
import { AgencyInfoComponent } from "./AgencyInfoComponent";
import { numOfPage } from "../utils/numOfPage";

export const PaperComponent = memo(({ id, properties }) => {
  const { agencyColor, border } = useAgencyPersonalization();
  const { isPastPage, currentLocation } = useContext(NavegationContext);
  const { numOfPapers, onePropLeft, idPublicity } = useContext(BookContext);
  // //para los nº de paginas
  // const pageNumber = useMemo(() => {
  //   return (id - 2) * 2 + 1;
  // }, [id]);
  const pageNumber = numOfPage(id, idPublicity)
  //para comprobar si la hoja es inferior a currenlocation
  const zIndex = getZIndexForPaper(id, currentLocation, numOfPapers);
  const pastPage = isPastPage(id);
  return (
    <div
      id={`p${id}`}
      className={`paper ${pastPage ? "flipped" : ""} `}
      style={{ zIndex: zIndex }}
    >
      <div className="front">
        <div id={`f${id}`} className="front-content">
          <Property1SectionComponent
            property={properties[0]}
            positionClass="second"
            agencyColor={agencyColor}
          />
          {onePropLeft && id === numOfPapers ? (
            <AgencyInfoComponent
              container={"lastpage-info-container"}
              logo={"lastpage-logo"}
              text={"lastpage-info-text"}
              style={border}
            />
          ) : (
            <Property1SectionComponent
              property={properties[1]}
              positionClass="first"
              agencyColor={agencyColor}
            />
          )}

          <PageComponent pg={pageNumber} />
        </div>
      </div>
      <div className="back">
        <div id={`b${id}`} className="back-content">
          <BackContentComponent
            id={id}
            property1={properties[2]}
            property2={properties[3]}
            pg={pageNumber + 1}
          />
        </div>
      </div>
    </div>
  );
});
