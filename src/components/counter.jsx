import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Counter = ({ counter }) => {
	return (
		<React.Fragment>
			<p className='text-center'>
				<span>
					<FontAwesomeIcon icon='grin' />
					{counter}
				</span>
			</p>
		</React.Fragment>
	)
}

export default Counter
