import React from 'react'
import s from "./HW15.module.css"
// добавить в проект иконки и импортировать
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {

    if (sort === '') return down  // если сейчас нет сортировки, ставим по убыванию
    if (sort === down) return up  // если было по убыванию, ставим по возрастанию
    return ''
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {

        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

 // const icon = sort === down
 //        ? "-"
 //        : sort === up
 //            ? "+"
 //            : "="

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
           {icon}
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
