import React from 'react'
/** Primary Button */
import PropTypes from 'prop-types'

/** Primary Button */

const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes,
    download
}) => {
  return (
    href ? (
      <a
        href={href}
        target={target}
        download={download}
        className={'btn-primary ' + (classes || '')}
      >
        {label}
        {icon ?
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>  
          : undefined 
        }
      </a>
    ) : (
      <button className={'btn-primary ' + (classes || '')}>
        {label}
        {icon ?
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>  
          : undefined 
        }
      </button>
    )
  )
}

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
    download: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]) 
}


const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
  return (
    href ? (
      <a
        href={href}
        target={target}
        className={'btn-outline ' + (classes || '')}
      >
        {label}
        {icon ?
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>  
          : undefined 
        }
      </a>
    ) : (
      <button className={'btn-outline ' + (classes || '')}>
        {label}
        {icon ?
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>  
          : undefined 
        }
      </button>
    )
  )
}

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {
    ButtonPrimary,
    ButtonOutline
}