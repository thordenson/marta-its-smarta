import React from 'react'
import Train from './Train'

export class TrainList extends React.Component {
  render () {
    return (
      <div className='section-general w-container'>
        <div className='board-div'>
          <h1 className='h1'>London Cannon Street</h1>
          <div className='titles w-clearfix'>
            <div className='title_time'>Time</div>
            <div className='title_destination'>Destination</div>
            <div className='title_plat'>Platform</div>
            <div className='title_expected'>Expected</div>
          </div>
          <ul className='w-list-unstyled'>
            { this.props.data.all.map((train) => {
              return <Train train={train} />
            }
          )}
          </ul>
        </div>
      </div>
    )
  }
}

export default TrainList