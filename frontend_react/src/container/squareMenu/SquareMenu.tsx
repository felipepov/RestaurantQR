import React, { useState, useEffect } from 'react';
import { Grid, Stack } from '@mantine/core';
import { images } from '../../constants';
import { MenuItem, MenuSquareImage, MenuTitle } from '../../components';
import { client } from '../../client.js';


export const SquareMenu: React.FC<{}> = () => {
	const [menus, setMenus] = useState([]);
	const menuType = 'square'
	const restaurant ={
		title: 'El Restaurante',
		info: 'Pizzeria desde 1987',
		address: 'Avenida Dirección 907, Lugar',
	}

	useEffect(() => {
		const query: string = '*[_type == "menus"]';

		client.fetch(query).then((data) => {
			setMenus(data);
		});
	}, []);

	return (
		<div className="menu menu--square">
			<Grid justify="center" m={0}>
				<Grid.Col span={5} offset={1}>
					<Stack align="flex-start" justify="space-around"
					className='h-full'
					>
						<MenuTitle {...{...restaurant, type: menuType}} />
						{menus.map((element: any) => {
							return <MenuItem {
								...{...element, 
								type: menuType}
							} />;
						})}
					</Stack>
				</Grid.Col>
				<Grid.Col span={5} offset={1}>
					{images.map((element) => {
						return <MenuSquareImage url={element} />;
					})}
				</Grid.Col>
			</Grid>
		</div>
	);
};
