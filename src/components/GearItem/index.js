import React from 'react';
import styles from './styles.css';
import classname from 'classnames';

const {
  container,
  imageContainer
} = styles;

const GearItem = (props) => {
  const {wowId, itemName, icon, spec, className} = props;

  return (
    <div className={classname(container, className)}>
      <div className={imageContainer}>
        <a href={wowId ? `https://www.wowhead.com/item=${wowId}` : '#'}
          data-wowhead="domain=classic"
          target="_blank"
        >
          <div style={{
            backgroundImage: `url("https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg")`,
            width: '56px',
            height: '56px',
            backgroundColor: 'dimgray'
          }} />
        </a>
      </div>
      <div
        style={{
          fontSize: '16px',
          marginLeft: '10px',
          fontWeight: 'bold',
          marginRight: '5px',
          color: icon ? '#a335ee' : 'cornflowerblue'
        }}
      >
        {itemName}
      </div>
      {spec && (<div style={{position: 'absolute', top: '5px', left: '78px', color: '#fff', fontSize: '12px', whiteSpace: 'nowrap'}}>{spec}</div>)}
    </div>
  )
}

export default GearItem;
