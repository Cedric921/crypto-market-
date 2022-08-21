import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';

import Logo from '../assets/react.svg';
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
} from '@ant-design/icons';

const Navbar = () => {
	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<Avatar src={Logo} size='large'/>
				<Typography.Title level={2} className='logo'>
					<Link to={`/`}>Cryptoverse</Link>
				</Typography.Title>
			</div>
		</div>
	);
};

export default Navbar;
