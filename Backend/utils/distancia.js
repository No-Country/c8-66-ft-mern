const Distancia = (LAT1, LAT2, LON1, LON2) => {
  const Constante = Math.PI / 180;
  const DifLat = LAT1 - LAT2;
  const DifLon = LON1 - LON2;
  const RadioTierra = 6378.1;
  let DistanciaGeografica =
    Math.pow(Math.sin((DifLat * Constante) / 2), 2) +
    Math.cos(LAT1 * Constante) *
      Math.cos(LAT2 * Constante) *
      Math.pow(Math.sin((DifLon * Constante) / 2), 2);

  DistanciaGeografica = Math.pow(DistanciaGeografica, 0.5);
  DistanciaGeografica = Math.asin(DistanciaGeografica) * 2;
  DistanciaGeografica = DistanciaGeografica * RadioTierra;
  return DistanciaGeografica.toFixed(2);

  //+COS(LATITUD_INICIO*CONSTANTE)*COS(LATITUD_FIN*CONSTANTE) * (SENO(DIFERENCIA_LONGUITUD*CONSTANTE/2))^2
  //=ASENO(RAIZ(C17))*2
};

//-12.101027339890944, -77.03677493661176
// -14.071422607713432, -75.7449693069216
//-14.0636,-75.7292

console.log(
  "Magdalena a Lince",
  Distancia(-12.0569, -12.055111, -76.9718, -76.96476),
  "KM"
);
console.log(
  "Miraflores a Ica",
  Distancia(
    -12.101027339890944,
    -14.0636,
    -77.03677493661176,
    -75.7292
  ),
  "KM"
);
