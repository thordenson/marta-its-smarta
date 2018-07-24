import React from 'react';
import MartaLine from './MartaLine';

const MARTA_URL = 'https://my-little-cors-proxy.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1';

class MartaDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      visibleLineNames: ["green", "blue", "red", "gold"]
    };
  }

  render() {
    let martaLines = this.state.visibleLineNames.map(line => {
      // return React.createElement(MartaLine, {
      //   lineName: line,
      //   trainArray: this.state.data
      // })
      return <MartaLine lineName={line} trainArray={this.state.data} />;
    })

    return (
      <div>
        <h1>Marta! Why you late all the time???</h1>
        {martaLines}
      </div>
    );
  }

  componentDidMount() {
    this._getMartaData();
    setInterval(this._getMartaData, 2000);
  }

  _getMartaData = () => {
    console.log('about to fetch!');
    fetch(MARTA_URL, {
      method: 'get'
    }).then((response) => {
        console.log('got the response');
        return response.json();
    })
    .then(this._cleanUpMarta)
    .then(this._sortByEventTime)
    .then((jsonData) => {
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

  _sortByEventTime = (unsortedTrainArray) => {
    // Two ways to copy an array!
    // #1: use slice()
    // let arrayToSort = unsortedTrainArray.slice();

    // #2: use the "spread" operator
    // (Sprinkles!)
    let arrayToSort = [
      ...unsortedTrainArray
    ];

    // Then sort the array.
    arrayToSort.sort((paul, ringo) => {

      let paulTime = new Date(paul.EVENT_TIME);
      let ringoTime = new Date(ringo.EVENT_TIME);

      // Does paul go before ringo?
      if (paulTime < ringoTime) {
        return -1;

      // Does ringo go before paul?
      } else if (ringoTime < paulTime) {
        return 1;

      // Nope. Leave Britney alone!
      } else {
        return 0;
      }
    })

    // Return the result
    return arrayToSort;
  }
}

export default MartaDashboard;