import React from 'react'

interface MenuSquareImageProps {
    url: string,
  }

export const MenuSquareImage: React.FC<MenuSquareImageProps> = (props) => {
        return (
            <div className="image__container">
                <img src={props.url} alt="" loading='lazy'/>
            </div>
            );
}