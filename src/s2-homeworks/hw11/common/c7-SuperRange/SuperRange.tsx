import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {



    return (
        <Slider defaultValue={props.defaultValue}
                step={10}
                value={props.value}
                onChange={props.onChange}

            sx={{ // стили для слайдера // пишет студент
                width:200
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
