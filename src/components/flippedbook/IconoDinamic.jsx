import { useState } from "react";
import { useDevelopmentsContext } from "../../contexts/DevelopmentsContext";

export const IconoDinamic = ({text, logo}) => {
  const { company } = useDevelopmentsContext();
  const [hasError, setHasError] = useState(false);

  return hasError ? (
    <div className={text}>
      <p>{company?.name}</p>
    </div>
  ) : (
    <div className={logo}>
      <img src={`${company?.image}`} alt="" onError={()=> setHasError(true)} />
    </div>
  );
};
