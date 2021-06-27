import React from 'react';
import './ResultsContainer.css'
import '../NameCard/NameCard';
import NameCard from '../NameCard/NameCard';
const ResultsContainer = ({ suggestedNames }) => {

    const suggestedNamesjsx = suggestedNames.map((suggestedNames) => {
        return <NameCard key={ suggestedNames } suggestedNames={suggestedNames} />
    });


    return (
        <div className="results-container">
            <p>{suggestedNamesjsx}</p>
        </div>
    )
}

export default ResultsContainer;