import React, { useEffect } from 'react';
import './WfSelector.css';
import { useGlobalContext } from '../../../contexts/GlobalContext.tsx'
import { AudioEngine } from '../../../audio/AudioEngine.tsx';
import Slider from '../../atoms/slider/Slider.tsx';
import { OscId, Waveform } from '../../../types/audio.d.tsx';

const WfSelector = ({oscId} : {oscId: OscId}) => {

    const {waveform, setWaveform} = useGlobalContext();
    const audioEngine = AudioEngine.getInstance();

    useEffect(() => {
        audioEngine.setOscParams(oscId, {type: waveform as OscillatorType});
        audioEngine.setWaveform(waveform);

    }, [waveform, audioEngine]);

    return (
        <div className="WfSelector">
            <div className='sublabel'>
                <span>Tri</span>
                <span>Saw</span>
                <span>Squ</span>
            </div>
            <Slider max={2} step={1} name={""} value={undefined} updateValue={(e) => setWaveform(Waveform[e.target.value])} />
        </div>
    );
}

export default WfSelector;