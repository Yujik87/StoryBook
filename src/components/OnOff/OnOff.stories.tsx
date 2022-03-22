import React, {useState} from 'react';
import {OnOff} from './OnOff';
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff,
}

export const OnMode = () => <OnOff on={true} onChange={action('on or off changed')}/>
export const OffMode = () => <OnOff on={false} onChange={action('on or off changed')}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue}/>
}