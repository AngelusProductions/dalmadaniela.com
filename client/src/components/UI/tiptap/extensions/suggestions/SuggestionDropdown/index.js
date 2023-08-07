import React from 'react'
import classNames from 'classnames'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

// import 'overlayscrollbars/css/OverlayScrollbars.css'
import './index.scss'

function SuggestionDropdown({
    forwardedRef,
    items,
    onSelect,
    renderItem,
}) {
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    const overlayScrollbarsRef = React.useRef<OverlayScrollbarsComponent>(null)
    const selectedItemRef = React.useRef<HTMLLIElement>(null)

    function selectItem(index) {
        const item = items[index]

        if (item) {
            onSelect(item)
        }
    }

    React.useEffect(
        function scrollSelectedItemIntoView() {
            overlayScrollbarsRef.current?.osInstance().scroll({
                el: selectedItemRef.current,
                scroll: {
                    y: 'ifneeded',
                    x: 'never',
                },
            })
        },
        [selectedIndex],
    )

    React.useImperativeHandle(forwardedRef, () => ({
        onKeyDown: ({ event }) => {
            if (event.key === 'ArrowUp') {
                setSelectedIndex((selectedIndex + items.length - 1) % items.length)
                return true
            }

            if (event.key === 'ArrowDown') {
                setSelectedIndex((selectedIndex + 1) % items.length)
                return true
            }

            if (event.key === 'Enter') {
                selectItem(selectedIndex)
                return true
            }

            return false
        },
    }))

    if (items.length === 0) {
        return null
    }

    return (
        <OverlayScrollbarsComponent className="SuggestionDropdown" ref={overlayScrollbarsRef}>
            <ul>
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={classNames({ selected: index === selectedIndex })}
                        onClick={() => selectItem(index)}
                        ref={index === selectedIndex ? selectedItemRef : null}>
                        {renderItem(item)}
                    </li>
                ))}
            </ul>
        </OverlayScrollbarsComponent>
    )
}

export { SuggestionDropdown }

