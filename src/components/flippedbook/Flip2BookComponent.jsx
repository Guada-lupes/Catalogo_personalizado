import React, { useRef, useContext } from "react";
import "../../styles/FlipBookComponentStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import OpenCatalogPdf from "../OpenCatalogPdf";
import { NavigateButtons } from "./NavigateButtons";
import { useGoNextButton } from "../../hooks/useGoNextButton";
import { useGoPrevButton } from "../../hooks/useGoPrevButton";
import { useVisiblePaperCalculator } from "../../hooks/useVisiblePaperCalculator";
import { useDevelopmentsContext } from "../../contexts/DevelopmentsContext";
import { renderPageById } from "../utils/renderPageById";
import { NavegationContext } from "../../contexts/NavegationContext";
import { BookContext } from "../../contexts/FlipBookContext";
import { Link } from "react-router-dom";

export const Flip2BookComponent = () => {
  const { currentLocation } = useContext(NavegationContext);
  const { numOfPapers  } = useContext(BookContext);
  const visiblePaperIds = useVisiblePaperCalculator(
    currentLocation,
    numOfPapers
  );
  const { goNextPage } = useGoNextButton();
  const { goPrevPage } = useGoPrevButton();
  const containerRef = useRef();
  function fullScreen() {
    containerRef.current?.requestFullscreen();
  }
const {data, company} = useDevelopmentsContext();
if(!data || !company){return null}

  return (
    <section className="book-box-container">
      <div className="options-bar">
        <FontAwesomeIcon
          icon={faExpand}
          onClick={fullScreen}
          className="expand"
        />
        <OpenCatalogPdf />
        <Link to={"/"} reloadDocument>
          <FontAwesomeIcon icon={faArrowLeft} className="expand" />
        </Link>
      </div>
      <section id="book-visualizer-container" ref={containerRef}>
        <NavigateButtons
          icon={faSquareCaretLeft}
          onClick={goPrevPage}
          id="prev-btn"
        />
        <div id="book" className="book">
          {visiblePaperIds.map((paperId) => renderPageById(paperId))}
        </div>
        <NavigateButtons
          icon={faSquareCaretRight}
          onClick={goNextPage}
          id="next-btn"
        />
      </section>
    </section>
  );
};
