// ObjectDetails.js
import React, { useEffect, useState } from 'react';

const ObjectDetails = ({ match }) => {
  const [object, setObject] = useState(null);

  useEffect(() => {
    // Aquí debes hacer una solicitud a tu API o cargar los detalles del objeto
    // utilizando el ID proporcionado en match.params.id
    const objectId = match.params.id;
    // Realiza la solicitud y establece los detalles del objeto en el estado
  }, [match.params.id]);

  return (
    <div>
      {object ? (
        <div>
          <h1>{object.title}</h1>
          <p>{object.description}</p>
          {/* Otros detalles del objeto, como imágenes, etc. */}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ObjectDetails;
