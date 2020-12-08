import React from 'react';

function Hashtags(props) {
    return (
        <form>
            <label>
                Hashtags
            </label>
            <ul>
                {props.items.map(item => <li key={item} onClick={() => props.onItemRemove(item)}>{item}</li>)}
            </ul>
        </form>
    )
}

export default Hashtags;