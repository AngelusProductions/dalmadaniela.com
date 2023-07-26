import React from 'react'

import { parseTwemoji } from '../../../helpers'
import { SuggestionDropdown } from '../SuggestionDropdown'
import './index.scss'

const EmojiDropdown = React.forwardRef(
    ({ items, command }, ref) => {
        function renderTwemojiComponent(emoji) {
            const twemoji = parseTwemoji(emoji)

            return (
                <img
                    className={twemoji.class}
                    src={twemoji.src}
                    alt={twemoji.alt}
                    draggable={Boolean(twemoji.draggable)}
                />
            )
        }

        return (
            <SuggestionDropdown
                forwardedRef={ref}
                items={items}
                onSelect={command}
                renderItem={({ emoji, shortcode }) => (
                    <div className="EmojiDropdownItem">
                        {renderTwemojiComponent(emoji)}
                        <span className="shortcode">{shortcode}</span>
                    </div>
                )}
            />
        )
    },
)

export { EmojiDropdown }
