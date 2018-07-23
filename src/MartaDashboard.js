import React from 'react';

const MARTA_URL = 'https://my-little-cors-proxy.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1';


class MartaDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }


    componentDidMount() {
        console.log('about to fetch!');
        fetch(MARTA_URL, {
            method: 'get'
            }).then((response) => {
                console.log('got the respponse');
                return response.json();
            }).then((jsonData) => {
                console.log(jsonData);
                console.log('got the data');
                this.setState({
                    data: jsonData
                }, () => {
                    console.log('yeah. you should see data now');
                });
            }).catch((err) => {
                // Error :(
            });
    }

    _cleanUpMarta = (allTrainArray) => {
        let trainsById = new Map();
        allTrainArray.forEach(train => {
            trainsById.set(train.TRAIN_ID, train);
        });
        let justTheTrains = trainsById.values();
        return Array.from(justTheTrains);
    }

    _convertTrainToElement = (train) => {
        let trainPara = (
        <p key={train.TRAIN_ID}>
            {train.DESTINATION},
            {train.LINE},
            {train.DIRECTION},
            {train.WAITING_TIME}
        </p>
        );

        return trainPara;
    }

    render() {
        return (
            <div> 
                <h1>Marta! Why you take all the time??</h1>
                {this.state.data.map
                    (this._convertTrainToElement)}
            </div>
        );
    }
}


export default MartaDashboard;