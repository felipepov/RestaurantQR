import React from 'react';

interface MenuTitleProps {
	type: 'square' | 'quality' | 'minimal';
	title: string;
	info?: string;
	address?: string;
}

export const MenuTitle: React.FC<MenuTitleProps> = ({
	type,
	title,
	info,
	address,
}) => {
	if (type === 'square') {
		return (
			<div className="prose">
				<div>
					<h1>{title}</h1>
					<h5>{info}</h5>
				</div>
				<small>{address}</small>
			</div>
		);
	} else if (type === 'quality') {
		return (
			<div className="flex">
				<div className="prose flex flex-col content-center justify-center">
					<h1>{title}</h1>
                    <hr />
					<h5>{info}</h5>
				</div>
                <div><small>{address}</small></div>
			</div>
		);
	} else if (type === 'minimal') {
		return (
			<div className="prose flex flex-col content-evenly justify-center">
				<h1>{title}</h1>
				<h6>{info}</h6>
			</div>
		);
	} else {
		return <div className="error">Error</div>;
	}
};
