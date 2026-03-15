import { useState } from 'react';
import '../App.css';

function SingleTreatmentCheckbox({ treatment, handleTreatmentChange }) {
//     const [isChecked, setIsChecked] = useState(treatment.checked);
    
//     const handleOnChange = () => {
//         setIsChecked(!isChecked);
//     };

    return (
        <div>
            <label>
                <input type="checkbox" checked={isChecked} onChange={handleTreatmentChange} />
                {treatment.name}
            </label>
        </div>
    )
}

export default SingleTreatmentCheckbox;