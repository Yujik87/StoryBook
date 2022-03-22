import React from 'react';
import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

//const callback = action('onoff changed')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={action('onoff changed')}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={action('onoff changed')}/>
export const DefaultInputValue = () => <input defaultValue={'yo'}/>
