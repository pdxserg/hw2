import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const baseClass = s.button + " " + s.default;
    const disabledClass = disabled ? " " + s.disabled : "";
    const redClass = xType === 'red' ? " " + s.red : "";
    const additionalClass = className ? " " + className : "";

    // const finalClassName = baseClass + disabledClass + redClass + additionalClass;
    const finalClassName =
         s.button +
          (disabled
              ?  ' ' + s.disabled
              : xType === 'red'
                  ? ' ' + s.red
                  : xType === 'secondary'
                      ? ' ' + s.secondary
                      : ' '+ s.default)
        + (className ? ' ' + className: '')
    // // задачка на смешивание классов

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
