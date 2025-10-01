import { useDevelopmentsContext } from "../../contexts/DevelopmentsContext"
import { IconoDinamic } from "./IconoDinamic"

export const AgencyInfoComponent = ({container, logo, text, style}) => {
  const {company} = useDevelopmentsContext()
  return (
            <div className={container} style={style}>
              <IconoDinamic text={text} logo={logo}/>
              <p>{company?.name}</p>
              <p>{company?.email}</p>
              <p>{company?.phone}</p>
              <p>{company?.web}</p>
            </div>
  )
}

