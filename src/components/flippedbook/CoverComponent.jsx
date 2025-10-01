import '../../styles/CoverComponentStyle.css';
import { useAgencyPersonalization } from '../../hooks/useAgencyPersonalization';
import { useContext } from 'react';
import { NavegationContext } from '../../contexts/NavegationContext';
import { getZIndexForPaper } from '../utils/getZIndexForPaper';
import { BookContext } from '../../contexts/FlipBookContext';
import { AgencyInfoComponent } from './AgencyInfoComponent';
import { GradientBlockComponent } from './GradienteBlockComponent';
import { IconoDinamic } from './IconoDinamic';
import { useForm } from '../../contexts/FormContext';

export const CoverComponent = ({ id, photo }) => {
  const { agencyColor, colorBase } = useAgencyPersonalization();
  const { isPastPage, currentLocation } = useContext(NavegationContext);
  const { numOfPapers } = useContext(BookContext);
  //para comprobar si la hoja es inferior a currenlocation
  const zIndex = getZIndexForPaper(id, currentLocation, numOfPapers);
  const pastPage = isPastPage(id);
  const { formData } = useForm();
  const language = formData.idioma;

  const title1 = language === 'es' ? 'CATÁLOGO DE' : 'NEW DEVELOPMENTS';
  const title2 = language === 'es' ? 'OBRA NUEVA' : 'CATALOG';
  return (
    <div
      id={`p${id}`}
      className={`paper ${pastPage ? 'flipped' : ''}`}
      style={{ zIndex: zIndex }}
    >
      {/* FRONT//////////////////////////// */}
      <div className="front">
        <div id={`f${id}`} className="front-content cover">
          <section className="cover-main-section">
            <IconoDinamic
              logo={'cover-logo-container'}
              text={'icono-text-cover'}
            />
            <div className="cover-title-container">
              <p className="title1">{title1}</p>
              <p className="title2">{title2}</p>
            </div>
            <GradientBlockComponent colorBase={colorBase} />
            <div className="cover-img-container">
              <img src={photo} alt="" />
            </div>
            <div className="cover-block-container" style={agencyColor}></div>
          </section>
        </div>
      </div>
      {/* BACK/////////////////////////////////////////////// */}
      <div className="back">
        <div id={`b${id}`} className="back-content backcover">
          <section className="backcover-main-section">
            <AgencyInfoComponent
              container={'backcover-info-container'}
              logo={'back-cover-logo'}
              text={'icono-text-back'}
            />
          </section>
        </div>
      </div>
    </div>
  );
};
