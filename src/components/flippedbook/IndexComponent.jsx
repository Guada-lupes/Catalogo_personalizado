import React, { useContext } from "react";
import "../../styles/IndexComponentStyle.css";
import { BookContext } from "../../contexts/FlipBookContext";
import { NavegationContext } from "../../contexts/NavegationContext";
import { Property1SectionComponent } from "./Property1SectionComponent";
import { PageComponent } from "./PageComponent";
import { PaginationComponent } from "./PaginationComponent";
import { useAgencyPersonalization } from "../../hooks/useAgencyPersonalization";
import { getZIndexForPaper } from "../utils/getZIndexForPaper";
import { useForm } from "../../contexts/FormContext";

export function IndexComponent({ id, contentFront, contentBack }) {
  const { numOfPagesIndex, hasOrphanIndexPage, numOfPapersIndex, numOfPapers } =
    useContext(BookContext);
  const { isPastPage, currentLocation } = useContext(NavegationContext);
  const { agencyColor, agencyColorBorder } = useAgencyPersonalization();
    const {formData} = useForm();
    const language = formData.idioma;
    const index = language === "es" ? "INDICE" : "INDEX"
  //para comprobar si la hoja es inferior a currenlocation
  const zIndex = getZIndexForPaper(id, currentLocation, numOfPapers);
  const pastPage = isPastPage(id);
console.log(contentFront);

  return (
    <div
      key={id}
      id={`p${id}`}
      className={`paper ${pastPage ? "flipped" : ""}`}
      style={{ zIndex: zIndex }}
    >
      <div className="front">
        <div id={`f${id}`} className="front-content">
          <section className="index-section">
            <div className="index-title" style={agencyColorBorder}>
              <h1>{index}</h1>
              <div className="index-bar" style={agencyColor}></div>
            </div>
            <PaginationComponent items={contentFront} />
          </section>
        </div>
      </div>
      <div className="back">
        <div id={`b${id}`} className="back-content">
          {hasOrphanIndexPage && id == numOfPapersIndex + 1 ? (
            <>
              {/* Si el índice es huérfano, aquí van las primeras 2 viviendas */}
              <Property1SectionComponent
                property={contentBack[0]}
                positionClass="first"
              />
              <Property1SectionComponent
                property={contentBack[1]}
                positionClass="second"
              />
              <PageComponent pg={numOfPagesIndex + 1} />
            </>
          ) : (
            <section className="index-section">
              <div className="index-title" style={agencyColorBorder}>
                <h1>ÍNDICE</h1>
                <div className="index-bar" style={agencyColor}></div>
              </div>
              <PaginationComponent items={contentBack} />
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
