import {createElement, HTMLAttributes} from "react";
import sanitize from 'sanitize-html'

type SanitizeHTMLProps ={
    children:string;
    tag:keyof HTMLElementTagNameMap
} & HTMLAttributes<HTMLElement>;

export const SanitizeHTML=({tag,children,...rest}:SanitizeHTMLProps)=>{
    const sanitizedHtml=sanitize(children,{
        allowedTags:['p', 'em', 'strong'],

    })

    return createElement(
            tag,
        {
            ...rest,
            dangerouslySetInnerHTML: {
                __html: sanitizedHtml,
            },
        })
}