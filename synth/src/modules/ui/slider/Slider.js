import './Slider.css';

const Slider = ({name, value, updateValue}) => {

    return (<div className="Slider">
        <label >{name}</label>
        <input
            className="Range"
            id={name.toString().toLowerCase()}
            type="range"
            min="0"
            max="1"
            value={value}
            onChange={updateValue}
            step="0.05" />
    </div>
    );
};

export default Slider;