import React from 'react';

interface MenuItemProps {
	type: 'square' | 'quality' | 'minimal';
	title: string;
	description?: string;
	price: number;
}

export const MenuItem: React.FC<MenuItemProps> = ({
	type,
	title,
	description,
	price,
}) => {
	if (type === 'square') {
		return (
			<div className="prose">
				<h3>{title}</h3>
				<p>{description}</p>
				<div>
					<h5>{price}</h5>
				</div>
			</div>
		);
	} else if (type === 'quality') {
		return (
			<div className="prose flex flex-col content-center justify-center">
				<h3>{title}</h3>
				<p>{description}</p>
				<h6>{price}</h6>
			</div>
		);
	} else if (type === 'minimal') {
    return (<div className="prose flex justify-between">
        <h3>{title}</h3>
        <h5>{price}</h5>
    </div>)
    } else {
        return (
            <div className="error">
                Error
            </div>
        )
    }
};
