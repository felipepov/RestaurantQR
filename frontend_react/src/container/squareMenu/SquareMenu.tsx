import React, { useState, useEffect } from 'react';
import { Grid } from '@mantine/core';
import { images } from '../../constants';
import { MenuItem, MenuSquareImage } from '../../components';
import { client } from '../../client';



interface SquareMenuProps
 {}

export const  SquareMenu: React.FC<SquareMenuProps> = () => {
	const [menus, setMenus] = useState([]);

	useEffect(() => {
	  const query: string = '*[_type == "menus"]';
  
	  client.fetch(query).then((data) => {
		setMenus(data);
	  });
	}, []);

	return (
		<div className= "SquareMenu">
			<Grid justify="center" m={0}>
				<Grid.Col span={5} offset={1}>
					 {menus.map((element:any) => {
						return <MenuItem {...element}/>
					})} 
				</Grid.Col>
				<Grid.Col span={5} offset={1}>
						{images.map(element => {
							return (<MenuSquareImage url={element} />)
						})}
				</Grid.Col>
			</Grid>
		</div>
	);
};
