import { useState } from 'react';
import '../App.css';

function SingleTreatmentCheckbox({ treatment }) {
    const [isChecked, setIsChecked] = useState(treatment.checked);
    
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <label>
                <input type="checkbox" checked={isChecked} onChange={handleOnChange} />
                {treatment.name}
            </label>
        </div>
    )
}

export default SingleTreatmentCheckbox;