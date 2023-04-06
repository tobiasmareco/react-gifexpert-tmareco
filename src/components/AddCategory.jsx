import React from 'react'
import { useState } from 'react'

function AddCategory({ onNewCategory }) {
	const [value, setValue] = useState('Messi')

	const onInputChange = ({ target }) => {
		setValue(target.value);
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (value.trim().length <= 1) return;
		// onAddCategory([...categories, value]) //-Aqui tenemos dos formas de realizarlos.
		// onNewCategory(last => [value, ...last])
		onNewCategory(value)
		setValue('')
	}
	return (
		<div>
			<form action="" onSubmit={handleSubmit} style={{ display: 'flex' }}>
				<input type="text" name="category" placeholder='search gifts'
					value={value}
					onChange={onInputChange} />
				<button style={{ width: '150px', borderRadius: '5px', backgroundColor: '#f114', border: 'none' }}>Add</button>
			</form>
		</div>
	)
}

export default AddCategory