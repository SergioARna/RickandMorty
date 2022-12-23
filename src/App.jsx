import { useEffect, useState } from "react";
import "./App.css";
import getRandomNumber from "./utils/getRandomNumber";
import axios from "axios";
import LocationInfo from "./components/LocationInfo";
import LocationFilter from "./components/LocationFilter";
import ErrorMessage from "./components/ErrorMessage";
import ResidentList from "./components/ResidentList";

function App() {
  const [location, setLocation] = useState();
  const [locationName, setLocationName] = useState();
  const [showError, setShowError] = useState(false);
  const [showlist, setShowlist] = useState(false)
  getRandomNumber();
  const URL = "https://rickandmortyapi.com/api/location/127";
  useEffect(() => {
    const randomDimension = getRandomNumber();
    getDataDimension(randomDimension);
  }, []);

  const getDataDimension = (idDimension) => {
    if (idDimension) {
      const URL = `https://rickandmortyapi.com/api/location/${idDimension}`;
      axios
        .get(URL)
        .then((res) => setLocation(res.data))
        .catch((err) => {
          setShowError(true);
          setTimeout(() => {
            setShowError(false);
          }, 2200);
          console.log(err);
        });
    } else {
      alert("Ingrese una dimension");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const dimensionSearch = e.target.searchValue.value;
    getDataDimension(dimensionSearch);
  };

  const handleChangeInput = (event) => {
    setLocationName(event.target.value);
    setShowlist(false)
  };
  const getNewLocation = (URL, name) => {

    setLocationName(name);
    axios
      .get(URL)
      .then(
        (res) =>{ setLocation(res.data)
          setShowlist(true)
        }
      )
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <div className="img-header">
      <img src= 'https://www.todofondos.net/wp-content/uploads/30-fondos-de-pantalla-4k-ultra-hd-de-rick-and-morty-imagenes-de-fondo.-imagen-hd-1080p-de-rick-y-morty.png' alt="rickMorty" />
        <div className="search-header">
          <form  onSubmit={handleSubmit}>
            <input
              className="form-header"
              id="searchValue"
              value={locationName}
              type="text"
              onChange={handleChangeInput}
              placeholder="Search dimension"
            />
            <button className="form-header button_form" type="submit"> Search</button>
            {showError ? <ErrorMessage /> : ""}
          </form>
          <LocationFilter
            locationName={locationName}
            getNewLocation={getNewLocation}
            showlist={showlist}
          />
        </div>
      </div>

      <LocationInfo location={location} />

      <ResidentList location={location} />
    </div>
  );
}

export default App;
