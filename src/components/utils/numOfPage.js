
export function numOfPage(id, idPublicity) {
      //para los nº de paginas
      if(idPublicity){
    if(id < idPublicity){
        return (id - 1) * 2 - 1;
    };
    if(id > idPublicity){
        return  (id - 2) * 2 - 1;
    }
      }
      return (id - 1) * 2 - 1;

}