export const fetchCities = () => dispatch => {
  dispatch(fetchCitiesRequested());

  fetch("http://localhost:5000/cities/all")
    .then(response => response.json())
    .then(data => {
      dispatch(fetchCitiesBegin(data));
    })
    .then(data => {
      dispatch(fetchCitiesSuccess(data));
    })
    .catch(error => {
      dispatch(fetchCitiesError(error));
    });
};

// Importing constants

const fetchCitiesRequested = () => {
  return {
    type: FETCH_CITIES_REQUESTED
  };
};

const fetchCitiesSuccess = () => {
  return {
    type: FETCH_CITIES_SUCCESS,
    payload: data
  };
};

const fetchCitiesError = error => {
  return {
    type: FETCH_CITIES_ERROR,
    payload: error
  };
};
