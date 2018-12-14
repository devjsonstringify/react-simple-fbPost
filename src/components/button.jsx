import React from 'react'
import ButtonIcon from './buttonIcon'

const Button = ({ handleClick, icon, btn }) => {
	const style = {
		width: '100%',
		border: '0'
	}
	return (
		<button
			onClick={handleClick}
			style={style}
			type='button'
			className='btn-link btn-lg'
		>
			<ButtonIcon icon={icon} />
			<span style={{ fontSize: '1rem' }}>{btn}</span>
		</button>
	)
}

export default Button
