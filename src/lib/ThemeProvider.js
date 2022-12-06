import React, { useState } from "react"
import { ThemeProvider as Provider } from "styled-components"
import { mapObject } from "../helpers/utils"

import defaultTokens from '../config/config.tokens'
import defaultThemes from '../config/config.themes'
import GlobalStyling from '../lib/GlobalStyles'


export default function ThemeProvider(props) {
    const [currentThemeName, setCurrentThemeName] = useState('light')

    const tokens = { ...defaultTokens }

    function setValueFromToken(something) {
        if (Object.keys(tokens).includes(something)) return tokens[something]
        return something
    }
    const themes = mapObject({ ...defaultThemes }, (themeName, themeObject) => {
        return mapObject(themeObject, (key, value) => {
            return setValueFromToken(value)
        })
    })

    function otherThemes() {
        let obj = {}
        mapObject(themes,  (themeName, themeObject) => {
            return mapObject(themeObject, (property, value) => {
                if (themeName !== currentThemeName) {
                    obj[property] = value
                }
            })
        })
        return obj
    }

    const currentTheme = {
        ...otherThemes(),
        ...tokens,
        ...themes[currentThemeName],
    }

    console.log(currentTheme)
    const value = x => currentTheme[x] || x
    
    return <Provider theme={{ ...currentTheme, value }} >
        <GlobalStyling />
        {props.children}
    </Provider>
}
