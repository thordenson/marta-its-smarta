import React from 'react';


fetch('https://my-little-cors-proxy.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1', {
    method: 'get'
}).then(function(response) {
    return response.json()
}).then(function(jsonData) {
    console.log(jsonData);
}).catch(function(err) {
    // Error :(
});

class MartaDashboard extends React.Component {

    
}


export default MartaDashboard;