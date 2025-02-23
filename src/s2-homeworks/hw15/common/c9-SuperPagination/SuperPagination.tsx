import React, {useState} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
	id?: string
	page: number
	itemsCountForPage: number
	totalCount: number
	onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
	{page, itemsCountForPage, totalCount, onChange, id = 'hw15',}
) => {
	// const lastPage = 10 // пишет студент // вычислить количество страниц
	console.log("totalCount2", totalCount)
	const lastPage  = Math.ceil(totalCount / itemsCountForPage)
	const [newCount, setNewCount] = useState(itemsCountForPage)
	console.log("lastPage", lastPage)

	const onChangeCallback = (event: any, page: number) => {//event: any,
		// пишет студент

		onChange(page, newCount)
	}

	const onChangeSelect = (event: any) => {

		// пишет студент
		setNewCount(event)
		// setLastPage(Math.ceil(totalCount / event))
		onChange(1, event)
	}

	return (
		<div className={s.pagination}>
			<Pagination
				id={id + '-pagination'}
				page={page}
				count={lastPage}
				onChange={onChangeCallback}
				hideNextButton
				hidePrevButton
			/>
			<span className={s.text1}>
                Показать
            </span>
			<SuperSelect
				id={id + '-pagination-select'}
				value={itemsCountForPage}
				options={[
					{id: 4, value: "4"},
					{id: 7, value: "7"},
					{id: 10, value: "10"},
				]}
				// onChange={onChangeSelect}
				onChangeOption={onChangeSelect}

			/>

			<span className={s.text2}>
                строки в таблице
            </span>
		</div>
	)
}

export default SuperPagination
