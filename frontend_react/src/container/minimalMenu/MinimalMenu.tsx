import { Grid, Stack } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { client } from '../../client';
import { MenuTitle, MenuItem } from '../../components';

interface MinimalMenuProps {}

export const MinimalMenu: React.FC<MinimalMenuProps> = () => {
	const [menus, setMenus] = useState([]);
	const menuType = 'minimal';
	const restaurant = {
		title: 'El Restaurante',
		info: 'Pizzeria desde 1987',
		address: 'Avenida Dirección 907, Lugar',
	};

	useEffect(() => {
		const query: string = '*[_type == "menus"]';

		client.fetch(query).then((data) => {
			setMenus(data);
		});
	}, []);

	return (
		<div className="menu menu--minimal">
			<Grid justify="center" m={0}>
            <Grid.Col span={10} offset={1}><MenuTitle {...{ ...restaurant, type: menuType }} /></Grid.Col>
				<Grid.Col span={5} offset={1}>
					<Stack align="flex-start" justify="space-around" className="h-full">

						{menus.map((element: any) => {
							return <MenuItem {...{ ...element, type: menuType }} />;
						})}
					</Stack>
				</Grid.Col>
				<Grid.Col span={5}>
					<Stack align="flex-start" justify="space-around" className="h-full">
						{menus.map((element: any) => {
							return <MenuItem {...{ ...element, type: menuType }} />;
						})}
					</Stack>
				</Grid.Col>
			</Grid>
		</div>
	);
};
