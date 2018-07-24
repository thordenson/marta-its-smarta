import React from 'react';

const MartaTrain = (train) => {
    return (
        <div className="train-card">
            <p key={train.TRAIN_ID}>
                {train.DESTINATION},
                {train.LINE},
                {train.DIRECTION},
                {train.WAITING_TIME}
            </p>
        </div>
    );
}
export default MartaTrain;