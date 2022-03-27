import React from 'react';
import './Ques.css'

const Ques = () => {
    return (
        <div className='ques-container'>
            <div className='ques1'>
                <h2> Difference between props and state ?? </h2>
                <h3>
                props vs state <br />

    ... props are read-only   ....state changes can be asynchronous  <br />

    ...props can not br modified  ....state can be modified using this.staState
             </h3>
             </div>

        <div className='ques2'>
            <h2> how useState works ??</h2>
            <h3>
                useState is use for change state or data basically useState return array and <br />
                there one item is state variable and one is stateFunction this function is for can modified data
            </h3>
        </div>

        </div>
    );
};

export default Ques;