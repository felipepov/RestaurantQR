import React from 'react'

interface MenuItemProps {
    title: string;
    description?: string;
    price: number;
}

export const MenuItem: React.FC<MenuItemProps> = ({title, description, price}) => {
        return (
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div>
                    <h5>{price}</h5>
                </div>
            </div>
        );
}