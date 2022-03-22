import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from "@storybook/addon-actions";
import { Story } from '@storybook/react';


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordeon mode change event fired');
const onClickCallback = action('some item was clicked')

export const CollapsedMode = () => <Accordion
    titleValue={'Menu'}
    collapsed={true}
    onChange={callback}
    items={[]}
    onClick={onClickCallback} />

export const UncollapsedMode = () => <Accordion
    titleValue={'Users'}
    collapsed={false}
    onChange={callback}
    items={[
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Viktor', value: 3}
    ]}
    onClick={onClickCallback} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        titleValue={'Users'}
        collapsed={value}
        onChange={() => setValue(!value)}
        items={[
            {title: 'Dimych', value: 1},
            {title: 'Valera', value: 2},
            {title: 'Viktor', value: 3}
        ]}
        onClick={(value) => {alert('user wiith ID ${value} was clicked')}}/>
}



const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const CollapsedMode2 = Template.bind({});
CollapsedMode2.args = {
    titleValue: 'Menu',
    collapsed: true,
    onChange: callback
}