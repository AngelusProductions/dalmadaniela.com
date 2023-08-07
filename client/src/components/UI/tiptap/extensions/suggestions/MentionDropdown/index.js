import React from 'react'

import { SuggestionDropdown } from '../SuggestionDropdown'
import './index.scss'

const MentionDropdown = React.forwardRef(
    ({ items, command }, ref) => (
        <SuggestionDropdown
            forwardedRef={ref}
            items={items}
            onSelect={command}
            renderItem={({ name }) => (
                <div className="MentionDropdownItem">
                    <img
                        className="avatar"
                        src={`https://avatars.dicebear.com/api/jdenticon/${name}.svg`}
                        alt={`${name}'s Avatar`}
                        title={`${name}'s Avatar`}
                    />
                    <span className="name">{name}</span>
                </div>
            )}
        />
    ),
)

export { MentionDropdown }
