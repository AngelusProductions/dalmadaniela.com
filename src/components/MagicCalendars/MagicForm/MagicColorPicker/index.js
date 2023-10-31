import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faPencil, faCheckCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Chrome } from '@uiw/react-color'

import './styles/index.scss'

const MagicColorPicker = ({
  color,
  onColorClick,
  onColorClear
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <div className='magicColorPickerContainer'>
            <div 
                className='magicColorContainer'
                style={{ backgroundColor: color }}
            >
                {color ? (
                    <FontAwesomeIcon icon={faPencil} onClick={() => setShowColorPicker(!showColorPicker)} className='magicColorEditIcon clickable' color='#FFFFFF' />
                ) : (
                    <FontAwesomeIcon icon={faPlusCircle} onClick={() => setShowColorPicker(true)} className='magicColorAddIcon clickable'  color='#DA2A7D'/>
                )}
                {!showColorPicker && color && <FontAwesomeIcon icon={faClose} onClick={onColorClear} className='magicColorCloseIcon clickable' color='#DA2A7D' />}
            </div>
        {showColorPicker && (
            <div className='magicColorPicker'>
                <Chrome 
                    onChange={onColorClick} 
                    color={color || '#000000'}
                    placement={'topLeft'}
                />
                <FontAwesomeIcon icon={faCheckCircle} onClick={() => setShowColorPicker(false)} className='magicColorSaveIcon clickable' color='#DA2A7D' />
            </div>
        )}
    </div>
  )
}

export default MagicColorPicker
