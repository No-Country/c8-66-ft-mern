import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
// import dotenv from "dotenv";

// dotenv.config();

const AddressClient = ({setOriginUbigeo}) => {
// peticiones get
  const [dataUbigeo, setDataUbigeo] = useState()
    const [countries, setCountries] = useState()
    const [regions, setRegion] = useState()
    const [provinces, setProvinces] = useState()
    const [district, setDistrict] = useState()

// selectors
    const [countrySelect, setCountrySelect] = useState()
    const [regionSelect, setRegionSelect] = useState()
    const [provinceSelect, seProvinceSelect] = useState()
    const [districtSelect, setDistrictSelect] = useState()

const getDataUbigeo = ()=>{
    const url = "http://3.89.23.42:4001/api/v1/ubigeo/"
    axios.get(url)
    .then(res=>setDataUbigeo(res.data.ubigeo))
    .catch(err=> console.log(err.message))

}

const getCountry = ()=>{
    const url =  
    // `${process.env.REACT_APP_API_MOTHER}${process.env.REACT_APP_URL_UBIGEO_COUNTRIES}` ||
     'http://3.89.23.42:4001/api/v1/ubigeo/country'
    axios.get(url)
    .then(res=>setCountries(res.data.ubigeo))
    .catch(err=> console.log(err.message))

}
const getAllRegionsByCountry = ()=>{
    const url = `http://3.89.23.42:4001/api/v1/ubigeo/region/${countrySelect}`
    axios.get(url)
    .then(res=>setRegion(res.data.ubigeo))
    .catch(err=> console.log(err.message))
}
const getAllProvinceSelectByRegion = ()=>{
    const url = `http://3.89.23.42:4001/api/v1/ubigeo/province/${regionSelect}/`
    axios.get(url)
    .then(res=>setProvinces(res.data.ubigeo))
    .catch(err=> console.log(err.message))
}
const getAllDistrictsByregion= ()=>{
    const url = `hhttp://3.89.23.42:4000/api/v1/ubigeo/district/${regionSelect}/`
    axios.get(url)
    .then(res=>setDistrict(res.data.ubigeo))
    .catch(err=> console.log(err.message))
}


useEffect(() => {
    getCountry()
    getDataUbigeo()
}, [])

useEffect(() => {
    getAllRegionsByCountry()
}, [countrySelect])

useEffect(() => {
    getAllProvinceSelectByRegion()
}, [regionSelect])

useEffect(() => {
  getAllDistrictsByregion()
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
  const handleDistrict = ()=>{
    setDistrictSelect(event.target.value)
  }

  return (
    <div>
<select
          id="country"
          onChange={handleCountry}
        > 
          <option hidden selected>  País </option>
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
          <option hidden selected>Provincia</option>
           {provinces?.map((province) =>           
           <option key={province.province
           } value={province.province}>
            {province.province}
          </option>)}   
        </select>
        <select
          id="district"
          onChange={handleDistrict}
        > 
          <option hidden selected>Distrito</option>
           {district?.map((district) =>           
           <option key={district.id
           } value={district.district}>
            {district.district}
          </option>)}   
        </select>

    </div>
  )
}

export default AddressClient