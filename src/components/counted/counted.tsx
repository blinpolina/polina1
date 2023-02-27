import React, {useState} from 'react';

const Counted = () => {
    const [State, setState] = useState(0)
    const onPlus=()=>{
        setState(State+1)

    }
    const onMinus=()=>{
        setState(State-1)
    }
    return (
        <div>
            <div>
                <div>
            {State}
                </div>
            </div>
            <div>
                <button onClick={()=>onPlus()}>Plus</button>
                <button onClick={()=>onMinus()}>Minus</button>
            </div>
        </div>
    );
};

export default Counted;