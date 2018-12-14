import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonIcon = ({ icon }) => {
	const style = {
		marginRight: '10px'
	}
	return (
		<React.Fragment>
			<FontAwesomeIcon style={style} icon={icon} />
		</React.Fragment>
	)
}

export default ButtonIcon
