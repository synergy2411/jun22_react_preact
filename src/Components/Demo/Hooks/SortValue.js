import React from 'react';

const SortValue = (props) => {
    console.log("Sort Value");
    const sortedNumbers = props.numbers.sort((a,b)=>a-b)

    return (
        <div>
            <ul>
                {sortedNumbers.map(n => <li key={n}>{n}</li>)}
            </ul>
        </div>
    );
}

export default React.memo(SortValue);
