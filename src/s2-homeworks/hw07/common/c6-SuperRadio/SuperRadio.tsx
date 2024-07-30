import React, {ChangeEvent, DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes,} from 'react'
import {arr} from '../../HW7'
import s from './SuperRadio.module.css'
import {Simulate} from "react-dom/test-utils";
import loadedData = Simulate.loadedData;

type DefaultRadioPropsType = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
	HTMLAttributes<HTMLSpanElement>,
	HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
	options?: any[]
	onChangeOption?: (option: any) => void
	spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
	                                                   id,
	                                                   name,
	                                                   className,
	                                                   options,
	                                                   value,
	                                                   onChange,
	                                                   onChangeOption,
	                                                   spanProps,
	                                                   ...restProps
                                                   }) => {

	const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
		if (onChangeOption) {
			onChangeOption(e.currentTarget.value)
		}
	}

	const finalRadioClassName = s.radio + (className ? ' ' + className : '')
	const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

	const mappedOptions: any[] = options

		? options.map((o) => (

			<label key={name + '-' + o.id} className={s.label}>
				<input

					id={id + '-input-' + o.id}
					className={finalRadioClassName}
					type={'radio'}
					onChange={onChangeCallback}
					// name, checked, value делают студенты

					// checked={false}
					checked={value == o.id}
					value={o.id}
					  name={name}

					{...restProps}
				/>
				<span
					id={id + '-span-' + o.id}
					{...spanProps}
					className={spanClassName}
				>
                      {o.value}
                  </span>
			</label>
		))
		: []

	return (
		<div className={s.options}>
			{mappedOptions}
			{/*<label>*/}
			{/*	<input*/}
			{/*		type={'radio'}*/}
			{/*		onChange={onChangeCallback}*/}
			{/*		// name, checked, value делают студенты*/}

			{/*		// checked={false}*/}
			{/*		checked={value == arr[0].id}*/}
			{/*		value={arr[0].id}*/}
			{/*		// name={name}*/}


			{/*	/>*/}
			{/*	<span>{arr[0].value}</span>*/}
			{/*</label>*/}
			{/*<label>*/}
			{/*	<input*/}
			{/*		type={'radio'}*/}
			{/*		onChange={onChangeCallback}*/}
			{/*		// name, checked, value делают студенты*/}

			{/*		// checked={true}*/}
			{/*		 checked={value == arr[1].id}*/}
			{/*		value={arr[1].id}*/}
			{/*		// name={name}*/}


			{/*	/>*/}
			{/*	<span>{arr[1].value}</span>*/}
			{/*</label>*/}
			{/*<label>*/}
			{/*	<input*/}
			{/*		type={'radio'}*/}
			{/*		onChange={onChangeCallback}*/}
			{/*		// name, checked, value делают студенты*/}

			{/*		// checked={false}*/}
			{/*		checked={value == arr[2].id}*/}
			{/*		value={arr[2].id}*/}
			{/*		// name={name}*/}
			{/*	/>*/}
			{/*	<span>{arr[2].value}</span>*/}
			{/*</label>*/}
		</div>
	)
}

export default SuperRadio
