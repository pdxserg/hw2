import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes,} from 'react'
import s from './SuperSelect.module.css'
import {ThemeType} from "../../../hw12/HW12";

type DefaultSelectPropsType = DetailedHTMLProps<
	SelectHTMLAttributes<HTMLSelectElement>,
	HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
	options: ThemeType[]//[{id: 4, value: "4"},{id: 7, value: "7"},{id: 10, value: "10"},

	onChangeOption?: (option: number) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
	                                                     options,
	                                                     className,
	                                                     onChange,
	                                                     onChangeOption,
	                                                     value,
	                                                     ...restProps
                                                     }) => {


	const mappedOptions: any[] = options
		? options.map((o) => (
			<option
				id={'hw7-option-' + o.id}
				className={s.option}
				key={o.id}
				value={o.id}
			>
				{o.value}
			</option>
		))
		: [] // map options with key

	const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
		console.log(e.currentTarget.value)
		if (onChangeOption) {
			onChangeOption(+e.currentTarget.value)

		}
		//try
		// setValue(+e.currentTarget.value)

	}

	const finalSelectClassName = s.select + (className ? ' ' + className : '')

	return (
		<div>
			{/*<div>*/}
			{/*	Choose the theme*/}
			{/*</div>*/}
			<select
				className={finalSelectClassName}
				onChange={onChangeCallback}
				{...restProps}
			>
				{mappedOptions}
			</select>
		</div>

	)
}

export default SuperSelect
