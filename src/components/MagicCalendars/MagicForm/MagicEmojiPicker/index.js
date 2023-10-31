import React, { useState } from 'react'
import { connect } from 'react-redux'

import EmojiPicker, { SkinTones, Theme, SuggestionMode, SkinTonePickerLocation } from "emoji-picker-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { setMagicValues } from '../../../../actions/magicCalendars'

import './styles/index.scss'

const MagicEmojiPicker = ({
  emoji,
  onEmojiClick,
  onEmojiClear
}) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  return (
    <div className='magicEmojiPickerContainer'>
        <div className='magicEmojiContainer'>
            {emoji ? (
                <div className='magicEmojiSelectionContainer'>
                    {/* <img src={emoji.getImageUrl()} /> */}
                    <div className='magicEmoji'>{emoji.emoji}</div>
                    <FontAwesomeIcon 
                        icon={faClose} 
                        onClick={onEmojiClear} 
                        className='magicEmojiCloseIcon clickable' 
                        color='#DA2A7D'
                    />
                </div>
            ) : (
                <FontAwesomeIcon 
                    icon={faPlusCircle} 
                    onClick={() => setShowEmojiPicker(true)}
                    className='magicEmojiAddIcon clickable' 
                    color='#DA2A7D'
                />
            )}
        </div>
        {showEmojiPicker && (
            <div 
                className='magicEmojiPickerContainer'
                onMouseLeave={() => setShowEmojiPicker(false)}
            >
                <EmojiPicker 
                    onEmojiClick={e => {
                        onEmojiClick(e)
                        setShowEmojiPicker(false)
                    }} 
                    theme={Theme.LIGHT}
                    skinTonePickerLocation={SkinTonePickerLocation.PREVIEW}
                    suggestedEmojisMode={SuggestionMode.RECENT}
                    defaultSkinTone={SkinTones.NEUTRAL}
                    searchPlaceHolder={"What does your brand feel like?"}
                    width='75%'
                    height='400px'
                    lazyLoadEmojis
                    autoFocusSearch={false}
                />
            </div>
        )}
    </div>
  )
}

const mapState = state => {
    return {

    }
}

const mapDispatch = dispatch => ({
  setMagicValues: async valuePairs => {
    dispatch(setMagicValues(valuePairs))
  }
})

export default connect(mapState, mapDispatch)(MagicEmojiPicker)
