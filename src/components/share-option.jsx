import React from 'react'
import Col from './layout/col-grid'
import ShareItem from './shareItem';


const ShareOption = () => {


	const options = [
		{
			href: 'http://domain.com',
			item: 'Share now'
		},
		{
			href: 'http://domain.com',
			item: 'Share..'
		},
		{
			href: 'http://domain.com',
			item: 'Share a message'
		},
		{
			href: 'http://domain.com',
			item: 'Share in group'
		}
		
	]
	return (
		<Col>
			<ShareItem options={options}/>
		</Col>
	)
}

export default ShareOption
