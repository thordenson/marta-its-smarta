import React from 'react';

const MARTA_URL = 'https://my-little-cors-proxy.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1';


class MartaDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }


    componentDidiMount() {
        fetch(MARTA_URL, {
            method: 'get'
            }).then(function(response) {
                return response.json()
            }).then(function(jsonData) {
                console.log(jsonData);
                this.setState({
                    data: jsonData
                });
            }).catch(function(err) {
                // Error :(
            });
    }


    render() {
        return (
            <div> 
                Marta! Why you take all the time??
            </div>
        );
    }
}


export default MartaDashboard;