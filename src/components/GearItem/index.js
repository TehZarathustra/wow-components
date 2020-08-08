import React from 'react';
import PropTypes from 'prop-types'
import classname from 'classnames';
import styles from './styles.css';

const {
  container,
  imageContainer
} = styles;

const GearItem = (props) => {
  const {wowId, itemName, iconId, description, className} = props;

  return (
    <div className={classname(container, className)}>
      <div className={imageContainer}>
        <a href={wowId ? `https://www.wowhead.com/item=${wowId}` : '#'}
          data-wowhead="domain=classic"
          target="_blank"
        >
          <div style={{
            backgroundImage: `url("https://wow.zamimg.com/images/wow/icons/large/${iconId}.jpg")`,
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
          color: iconId ? '#a335ee' : 'cornflowerblue'
        }}
      >
        {itemName}
      </div>
      {description && (<div style={{position: 'absolute', opacity: '40%', top: '5px', left: '78px', color: '#fff', fontSize: '12px', whiteSpace: 'nowrap'}}>{description}</div>)}
    </div>
  )
};

GearItem.propTypes = {
  /** WOW item id, makes a link to wowhead "www.wowhead.com/item=${wowId}" */
  wowId: PropTypes.number,
  itemName: PropTypes.string,
  /** Icon item id, makes a link to wowhead "wow.zamimg.com/images/wow/icons/large/${icon}.jpg" */
  iconId: PropTypes.string,
  /** Additional description aboe the name */
  description: PropTypes.string,
  className: PropTypes.string,
  rarity: PropTypes.oneOf([
    'poor',
    'common',
    'uncommon',
    'rare',
    'epic',
    'legendary',
    'artifact'
  ])
};

export default GearItem;
