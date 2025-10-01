
import "../../styles/IndexComponentStyle.css";

export const PaginationComponent = ({items}) => {
console.log();

  // Agrupar los ítems de esta página por zona
  const groupedByZone = (items ?? []).reduce((acc, item) => {
    if (!acc[item.zone]) {
      acc[item.zone] = [];
    }
    acc[item.zone].push(item);
    return acc;
  }, {});

const createIndex =()=>{
  return Object.entries(groupedByZone).map(([zone, props]) => (
  <div  className='zone-container' key={zone}>
    <h3>{zone}</h3>
    <ul className='prop-ul'>
      {props.map((p) => (
        <li className='prop-name' key={p?.location}>{p.page} {p?.location}</li>
      ))}
    </ul>
  </div>
))
}
return (
  <>
  <div className='index-all-elements'>
  {createIndex()}
  </div>
  </>
)
}
