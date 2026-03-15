import { useState } from 'react';
import '../App.css';

function SingleTreatmentCheckbox({ treatment, checked, handleTreatmentChange }) {
//     const [isChecked, setIsChecked] = useState(treatment.checked);
    
//     const handleOnChange = () => {
//         setIsChecked(!isChecked);
//     };

    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} value={treatment} onChange={handleTreatmentChange} />
                {treatment.name}
            </label>
        </div>
    )
}

export default SingleTreatmentCheckbox;