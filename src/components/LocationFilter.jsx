import axios from 'axios'
import React, { useEffect, useState } from 'react'

const LocationFilter = ({locationName,getNewLocation,showlist}) => {
    const [locationsOptions, setLocationsOptions] = useState()
    
useEffect(() => {
    if(!locationName){
        return setLocationsOptions()
    }
  const URL = `https://rickandmortyapi.com/api/location?name=${locationName}`
axios.get(URL)
.then(res=>setLocationsOptions(res.data.results))
.catch(err=>console.log(err))
}, [locationName])

  return (
    <ul>{
        locationsOptions?.map(locationOption =><li
          onClick={()=>getNewLocation(locationOption.url, locationOption.name )} 
          key ={locationOption.url}>{showlist?"":locationOption.name}</li>)
        }
        </ul>
  )
}

export default LocationFilter