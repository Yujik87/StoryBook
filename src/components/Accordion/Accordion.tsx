import React from 'react';

export type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    /**
     * Show list when 'false'
     * @param logical parameter
     */
    collapsed: boolean
    /**
     * Elements
     */
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onClick={props.onChange}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={props.onClick}>{props.title}</h3>;
}

type AccordionBodyItemsType = {
    items: ItemType[]
    onClick: (value: any) => void
}
function AccordionBody(props: AccordionBodyItemsType) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i}</li>)}
        </ul>
    );
}
