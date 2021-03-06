const store = require('./locations-store-connector');
let geocodeApi;
if(process.env.GEOCODE_API === 'MAPBOX_API') {
  geocodeApi = require('./mapbox-api-adapter');
} else {
  geocodeApi = require('./google-api-adapter');
}


const addLocation = (address, callback) => {
  geocodeApi(address, (res) => {
    let response;
    if(res.result) {
      response = store.addLocation(res.response);
    } else {
      response = {
        result: false,
        response: 'Unable to find address.'
      };
    }
    
    callback(response);
  });
}
const deleteLocation = (id, callback) => {
  const response = store.deleteLocation(id);
  callback(response);
}
const editLocation = (payload, callback) => {
  const response = store.editLocation(payload);
  callback(response);
}
const getLocations = (callback) => {
  const response = store.getLocations();
  callback(response);
}

module.exports = { 
  addLocation ,
  deleteLocation,
  editLocation,
  getLocations,
};