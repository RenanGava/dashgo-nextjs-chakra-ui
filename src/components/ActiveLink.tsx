import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps{
    children: ReactElement // essa tipagem serve somente para rfeceber components.
    shouldMatchExactHref?: boolean
}

// clonamos o elemento e trocamos a cor que ele vai utilizar 
// para identificar ele como ativo

export function ActiveLink({
    children, 
    shouldMatchExactHref= false, 
    ...rest }: ActiveLinkProps){

    const { asPath } = useRouter()

    let isActive = false

    //verificações para manter o link selecionado mesmo que ele não seja exato.
    if(shouldMatchExactHref && asPath === rest.href || asPath === rest.as){
        isActive = true
    }

    if(!shouldMatchExactHref && 
        (asPath.startsWith(String(rest.href)) || 
        asPath.startsWith(String(rest.as)))){
        isActive = true
    }

    return(
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50'
            })}
        </Link>
    )
}