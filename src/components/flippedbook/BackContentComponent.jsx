import { memo } from "react";
import { Property1SectionComponent } from "./Property1SectionComponent";
import { PageComponent } from "./PageComponent";
import { useContext } from "react";
import { BookContext } from "../../contexts/FlipBookContext";
import { useAgencyPersonalization } from "../../hooks/useAgencyPersonalization";
import { useDevelopmentsContext } from "../../contexts/DevelopmentsContext";
import { AgencyInfoComponent } from "./AgencyInfoComponent";
import "../../styles/FlipBookComponentStyle.css";
import "../../styles/PropertySectionStyle.css";
import { IconoDinamic } from "./IconoDinamic";

export const BackContentComponent = memo(({ id, property1, property2, pg }) => {
  const { numOfPapers, needsExtraPage, threePropLeft } =
    useContext(BookContext);
  const { agencyColor, border } = useAgencyPersonalization();
  const { data } = useDevelopmentsContext();
  const company = data?.company;

  if (id === numOfPapers && !needsExtraPage) {
    return (
      <div className="back-cover" style={agencyColor}>
        <IconoDinamic
          logo={"back-cover-image-container"}
          text={"back-cover-icono-text"}
        />
      </div>
    );
  }
  return (
    <>
      <Property1SectionComponent property={property1} positionClass={"first"} />
      {threePropLeft && id === numOfPapers - 1 ? (
        <AgencyInfoComponent
          container={"lastpage-info-container"}
          logo={"lastpage-logo"}
          text={"lastpage-info-text"}
          style={border}
        />
      ) : (
        <Property1SectionComponent
          property={property2}
          positionClass={"second"}
        />
      )}
      <PageComponent pg={pg} />
    </>
  );
});
