import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const AddressClient = () => {
// peticiones get
    const [countries, setCountries] = useState()
    const [regions, setRegion] = useState()
    const [provinces, setProvinces] = useState()
// selectors
    const [countrySelect, setCountrySelect] = useState()
    const [regionSelect, setRegionSelect] = useState()
    const [provinceSelect, seProvinceSelect] = useState()

const getCountry = ()=>{
    const url = "http://3.89.23.42:4000/api/v1/ubigeo/country"
    axios.get(url)
    .then(res=>setCountries(res.data.ubigeo))

}

const getAllRegionsByCountry = ()=>{
    const url = `http://3.89.23.42:4000/api/v1/ubigeo/region/${countrySelect}`
    axios.get(url)
    .then(res=>setRegion(res.data.ubigeo))
}
const getAllProvinceSelectByRegion = ()=>{
    const url = `http://3.89.23.42:4000/api/v1/ubigeo/province/${regionSelect}/`
    axios.get(url)
    .then(res=>setProvinces(res.data.ubigeo))
}


useEffect(() => {
    getCountry()
}, [])

useEffect(() => {
    getAllRegionsByCountry()
}, [countrySelect])

useEffect(() => {
    getAllProvinceSelectByRegion()
}, [regionSelect])


const handleCountry = () => {
    setCountrySelect(event.target.value);
  };
const handleRegion = () => {
    setRegionSelect(event.target.value);
  };
const handleProvince = () => {
    seProvinceSelect(event.target.value);
  };

console.log(provinceSelect);


  return (
    <div>
<select
          id="country"
          onChange={handleCountry}
        > 
          <option hidden selected>  pais </option>
           {countries?.map((country) =>           
           <option key={country.country
           } value={country.country}>
            {country.country}
          </option>)}   
        </select>

        <select
          id="region"
          onChange={handleRegion}
        > 
          <option hidden selected>Región</option>
           {regions?.map((region) =>           
           <option key={region.region
           } value={region.region}>
            {region.region}
          </option>)}   
        </select>
        <select
          id="province"
          onChange={handleProvince}
        > 
          <option hidden selected>provincia</option>
           {provinces?.map((province) =>           
           <option key={province.province
           } value={province.province}>
            {province.province}
          </option>)}   
        </select>

    </div>
  )
}

export default AddressClient