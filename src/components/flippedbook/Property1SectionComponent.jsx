import React from 'react';
import '../../styles/PropertySectionStyle.css';
import { memo } from 'react';
import { useAgencyPersonalization } from '../../hooks/useAgencyPersonalization';
import { useForm } from '../../contexts/FormContext';
/////////////////////////////////ICONOS
import {
  faLocationDot,
  faBookmark,
  faCalendarDays,
  faBuilding,
  faBed,
  faBath,
  faEuroSign,
  faRulerCombined,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Property1SectionComponent = memo(({ property, positionClass }) => {
  const { agencyColor } = useAgencyPersonalization();
  const { formData } = useForm();
  const language = formData.idioma;
  const reference = language === "es" ? "Referencia: " : "Reference: ";
  if (!property) return null;
  return (
    <section className={`property-section ${positionClass}`}>
      <div
        className={`property-image-bg ${positionClass}`}
        style={agencyColor}
      ></div>
      <div className={`property-image ${positionClass}`}>
        <img src={property?.image} alt="foto de la property" />
      </div>
      <div className={`property-info ${positionClass}`}>
        <div className={`property-info-data ${positionClass}`}>          
          <h3>{reference}{property?.reference}</h3>
          <div className="info-data-elements">
            <FontAwesomeIcon icon={faLocationDot} className="location" />
            <p>{property?.location}</p>
          </div>
          <div className="info-data-elements">
            <FontAwesomeIcon icon={faBookmark} />
            <p>{property?.status}</p>
          </div>
          <div className="info-data-elements">
            <FontAwesomeIcon icon={faCalendarDays} />
            <p>{property?.statusDateInfo}</p>
          </div>
          <div className="info-data-elements">
            <FontAwesomeIcon icon={faBuilding} />
            <p>{property?.type}</p>
          </div>
          <div className="info-data-elements adjust-size-bed">
            <FontAwesomeIcon icon={faBed} className="bed" />
            <p>{property?.beds}</p>
          </div>
          <div className="info-data-elements">
            <FontAwesomeIcon icon={faBath} />
            <p>{property?.baths}</p>
          </div>
          <div className="info-data-elements adjust-size-euro">
            <FontAwesomeIcon icon={faEuroSign} className="euro" />
            <p>{property?.priceRange}</p>
          </div>
          <div className="info-data-elements">
            <FontAwesomeIcon icon={faRulerCombined} />
            <p>{property?.area}</p>
          </div>
        </div>
      </div>
    </section>
  );
});
