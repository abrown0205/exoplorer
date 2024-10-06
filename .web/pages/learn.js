/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, generateUUID, getBackendURL, isTrue, refs } from "/utils/state"
import { ChevronDownIcon as LucideChevronDownIcon, MenuIcon as LucideMenuIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Box as RadixThemesBox, Container as RadixThemesContainer, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import dynamic from "next/dynamic"
import { Content as RadixAccordionContent, Header as RadixAccordionHeader, Item as RadixAccordionItem, Root as RadixAccordionRoot, Trigger as RadixAccordionTrigger } from "@radix-ui/react-accordion"
import NextHead from "next/head"

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });


export function Toaster_6e90e5e87a1cac8c96c683214079bef3 () {
  const { resolvedColorMode } = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  
const toast_props = {"description": `Check if server is reachable at ${getBackendURL(env.EVENT).href}`, "closeButton": true, "duration": 120000, "id": "websocket-error"};
const [userDismissed, setUserDismissed] = useState(false);
useEffect(() => {
    if (connectErrors.length >= 2) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}, [connectErrors]);

  return (
    <Toaster closeButton={false} expand={true} position={`bottom-right`} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Item_503509d547d1a43df6a1e2be652c3d8b () {
  const vfvghxjp = useMemo(generateUUID, [])



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={vfvghxjp}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`Biosignature`}
</RadixThemesText>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`A chemical or physical indicator that suggests the presence of life, such as specific gases in an exoplanet's atmosphere.`}
</RadixThemesText>
  <img css={{"width": "150px"}} src={`../../biosignature.png`}/>
</RadixThemesFlex>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Item_3f0f5644925a6296f63756912783b661 () {
  const ierwfthj = useMemo(generateUUID, [])



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={ierwfthj}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`Astrobiology`}
</RadixThemesText>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`The study of the potential for life in the universe, including the search for habitable conditions on exoplanets.`}
</RadixThemesText>
  <img css={{"height": "200px"}} src={`../../tidal_locking.webp`}/>
</RadixThemesFlex>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_83dd0d3781b0d7a8262021aea5c19887 () {
  const lsdfqedp = useMemo(generateUUID, [])



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={lsdfqedp}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`Atmosphere`}
</RadixThemesText>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`The layer of gases surrounding a planet, which can influence climate, weather, and potential habitability.`}
</RadixThemesText>
  <img css={{"height": "150px"}} src={`../../atmosphere.jpg`}/>
</RadixThemesFlex>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_2b7522f54c79eaa76f81c5948b2029e1 () {
  const nubxmqxc = useMemo(generateUUID, [])



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={nubxmqxc}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`Tidal Locking`}
</RadixThemesText>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`Some exoplanets may be tidally locked, meaning one side always faces the star, creating extreme temperature differences.`}
</RadixThemesText>
  <img css={{"width": "250px"}} src={`../../tidal_locking.webp`}/>
</RadixThemesFlex>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_159c7ec71b07d154139ccf32dcfac2e9 () {
  const irmqrnig = useMemo(generateUUID, [])



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={irmqrnig}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`Atmospheric Composition:`}
</RadixThemesText>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`The gases present in an exoplanet’s atmosphere that can indicate potential habitability and climate.`}
</RadixThemesText>
  <img css={{"width": "150px"}} src={`../../atmospheric_composition.webp`}/>
</RadixThemesFlex>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Dropdownmenu__item_e2c0e4726f44623b07ec064f41fc4d5a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_6869137282bbe801430eebe26f3cee97 = useCallback((...args) => addEvents([Event("reflex___state____state.space_apps___navigation___state____nav_state.to_generate", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_6869137282bbe801430eebe26f3cee97}>
  {`Generate`}
</RadixThemesDropdownMenu.Item>
  )
}

export function Item_d42b91ce382660a6eb207c2bf080c447 () {
  const pcsxfnar = useMemo(generateUUID, [])



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={pcsxfnar}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`Rotation Period`}
</RadixThemesText>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`The time it takes for an exoplanet to complete one rotation on its axis, affecting its weather patterns and day-night cycle.`}
</RadixThemesText>
  <img css={{"width": "150px"}} src={`../../rotational_period.jpg`}/>
</RadixThemesFlex>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

                function Fallback({ error, resetErrorBoundary }) {
                    return (
                        <div>
  <p>
  {`Ooops...Unknown Reflex error has occured:`}
</p>
  <p css={{"color": "red"}}>
  {error.message}
</p>
  <p>
  {`Please contact the support.`}
</p>
</div>
                    );
                }
            

export function Item_037d02ff58bd56be72431331f3289a40 () {
  const kneyvsfb = useMemo(generateUUID, [])



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={kneyvsfb}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`Super-Earth`}
</RadixThemesText>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`A type of exoplanet with a mass larger than Earth's but smaller than that of gas giants like Neptune.`}
</RadixThemesText>
  <img css={{"width": "150px"}} src={`../../super_earth.webp`}/>
</RadixThemesFlex>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_1d1915b23a99b5e45656e14caafc632b () {
  const gyvpesrw = useMemo(generateUUID, [])



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={gyvpesrw}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`Gas Giant`}
</RadixThemesText>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`A large planet composed mostly of gases, with no definitive solid surface, such as Jupiter or Saturn.`}
</RadixThemesText>
  <img css={{"width": "150px"}} src={`../../gas_giant.jpg`}/>
</RadixThemesFlex>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_33a8048fa0e6354b8975282ab87fac37 () {
  const vaqhaiyi = useMemo(generateUUID, [])



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={vaqhaiyi}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`Orbital Distance`}
</RadixThemesText>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`The distance of an exoplanet from its host star, influencing its climate and atmospheric conditions.`}
</RadixThemesText>
  <img css={{"width": "150px"}} src={`../../orbital_period.png`}/>
</RadixThemesFlex>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Fragment_cf53a535ae2e610a113dd361eb6ac95b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length > 0) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "33px", "right": "33px", "animation": `${pulse} 1s infinite`}} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Item_138683c563e8797d80cee3a562366651 () {
  const cvnmnfes = useMemo(generateUUID, [])



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={cvnmnfes}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`Hot Jupiter`}
</RadixThemesText>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`A class of exoplanets that are gas giants, orbiting very close to their host stars, resulting in high surface temperatures.`}
</RadixThemesText>
  <img css={{"width": "150px"}} src={`../../hot_jupiter.jpg`}/>
</RadixThemesFlex>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_b512156f08b8959aa8b69bf06be15356 () {
  const waknmibu = useMemo(generateUUID, [])



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={waknmibu}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`Eccentricity of Orbit`}
</RadixThemesText>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`The shape of an exoplanet's orbit can affect its climate and seasonal changes.`}
</RadixThemesText>
  <img css={{"width": "150px"}} src={`../../eccentricity.jpg`}/>
</RadixThemesFlex>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Div_ac2a89ea84667d600a059f034bd91dfe () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={{"position": "fixed", "width": "100vw", "height": "0"}} title={`Connection Error: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}`}>
  <Fragment_cf53a535ae2e610a113dd361eb6ac95b/>
</div>
  )
}

export function Item_0e8b6b888336306d2c485a7c7d3b1397 () {
  const nyzmyeqi = useMemo(generateUUID, [])



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={nyzmyeqi}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`Magnetic Field`}
</RadixThemesText>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`The presence of a magnetic field can protect a planet from stellar radiation and help maintain its atmosphere.`}
</RadixThemesText>
  <img css={{"width": "150px"}} src={`../../magnetic_field.jpg`}/>
</RadixThemesFlex>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Dropdownmenu__item_de554e9d1924ff28d6097917263fe529 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_3f2c16d8ee46e6e0107c097443c815fc = useCallback((...args) => addEvents([Event("reflex___state____state.space_apps___navigation___state____nav_state.to_learn", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_3f2c16d8ee46e6e0107c097443c815fc}>
  {`Learn`}
</RadixThemesDropdownMenu.Item>
  )
}

const slideDown = keyframes`
from {
  height: 0;
}
to {
  height: var(--radix-accordion-content-height);
}
`
const slideUp = keyframes`
from {
  height: var(--radix-accordion-content-height);
}
to {
  height: 0;
}
`


export function Item_81c17a79888ad926a0fa218b215e3188 () {
  const boooztvj = useMemo(generateUUID, [])



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={boooztvj}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`Exoplanet`}
</RadixThemesText>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`A planet that orbits a star outside our solar system.`}
</RadixThemesText>
  <img css={{"width": "150px"}} src={`../../exoplanet.webp`}/>
</RadixThemesFlex>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_62b327915e6517094aa2d1e3fd1223f3 () {
  const rolablsf = useMemo(generateUUID, [])



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={rolablsf}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`Habitable Zone`}
</RadixThemesText>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`The region around a star where conditions might allow liquid water to exist on a planet's surface.`}
</RadixThemesText>
  <img css={{"width": "150px"}} src={`../../habitable_zone.webp`}/>
</RadixThemesFlex>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Dropdownmenu__item_774eeeb42d82ead31b3a026f13e7d2ee () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_b30e0a89f4f4e6f6faec0ff9d69b0aca = useCallback((...args) => addEvents([Event("reflex___state____state.space_apps___navigation___state____nav_state.to_about", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_b30e0a89f4f4e6f6faec0ff9d69b0aca}>
  {`About`}
</RadixThemesDropdownMenu.Item>
  )
}

export function Item_e73732136be0cd750dfa279eaec3fae1 () {
  const zuuzdiaq = useMemo(generateUUID, [])



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={zuuzdiaq}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`Star Type`}
</RadixThemesText>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`} css={{"color": "white"}}>
  {`The type of star an exoplanet orbits, which can determine the conditions for potential habitability.`}
</RadixThemesText>
  <img css={{"width": "150px"}} src={`../../star_type.png`}/>
</RadixThemesFlex>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Dropdownmenu__item_ff6161d9ae1d387d5b248aa7bfb18e79 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_fa3952249543ffb96728465109bef805 = useCallback((...args) => addEvents([Event("reflex___state____state.space_apps___navigation___state____nav_state.to_explore", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_fa3952249543ffb96728465109bef805}>
  {`Explore`}
</RadixThemesDropdownMenu.Item>
  )
}

export default function Component() {
  const ref_base_container = useRef(null); refs['ref_base_container'] = ref_base_container;
  const ref_nav_bar = useRef(null); refs['ref_nav_bar'] = ref_nav_bar;
  const ref_content_area = useRef(null); refs['ref_content_area'] = ref_content_area;
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  
    const logFrontendError = (error, info) => {
        if (process.env.NODE_ENV === "production") {
            addEvents([Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", {
                stack: error.stack,
            })])
        }
    }
    

  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={logFrontendError}>
  <Fragment>
  <Div_ac2a89ea84667d600a059f034bd91dfe/>
  <Toaster_6e90e5e87a1cac8c96c683214079bef3/>
</Fragment>
  <RadixThemesFlex css={{"height": "100vh", "display": "flex", "flexDirection": "column"}} id={`base-container`} ref={ref_base_container}>
  <RadixThemesBox css={{"background": "var(--accent-3)", "padding": "1em", "width": "100%"}} id={`nav-bar`} ref={ref_nav_bar}>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "none"}, "@media screen and (min-width: 30em)": {"display": "none"}, "@media screen and (min-width: 48em)": {"display": "none"}, "@media screen and (min-width: 62em)": {"display": "block"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center"}} direction={`row`} justify={`between`} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center"}} direction={`row`} gap={`3`}>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/`} passHref={true}>
  <img css={{"width": "2.25em", "height": "auto", "borderRadius": "25%"}} src={`../../logo.png`}/>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`7`} weight={`bold`}>
  {`Exo-plorer`}
</RadixThemesHeading>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} justify={`end`} gap={`5`}>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/generate`} passHref={true}>
  <RadixThemesText as={`p`} size={`4`} weight={`medium`}>
  {`Generate`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/explore`} passHref={true}>
  <RadixThemesText as={`p`} size={`4`} weight={`medium`}>
  {`Explore`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/learn`} passHref={true}>
  <RadixThemesText as={`p`} size={`4`} weight={`medium`}>
  {`Learn`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/about`} passHref={true}>
  <RadixThemesText as={`p`} size={`4`} weight={`medium`}>
  {`About`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "block"}, "@media screen and (min-width: 30em)": {"display": "block"}, "@media screen and (min-width: 48em)": {"display": "block"}, "@media screen and (min-width: 62em)": {"display": "none"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center"}} direction={`row`} justify={`between`} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center"}} direction={`row`} gap={`3`}>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/`} passHref={true}>
  <img css={{"width": "2em", "height": "auto", "borderRadius": "25%"}} src={`../../logo.png`}/>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`7`} weight={`bold`}>
  {`Exo-plorer`}
</RadixThemesHeading>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
  <RadixThemesDropdownMenu.Root css={{"justify": "end"}}>
  <RadixThemesDropdownMenu.Trigger>
  <LucideMenuIcon css={{"color": "var(--current-color)"}} size={30}/>
</RadixThemesDropdownMenu.Trigger>
  <RadixThemesDropdownMenu.Content>
  <Dropdownmenu__item_e2c0e4726f44623b07ec064f41fc4d5a/>
  <Dropdownmenu__item_ff6161d9ae1d387d5b248aa7bfb18e79/>
  <Dropdownmenu__item_de554e9d1924ff28d6097917263fe529/>
  <Dropdownmenu__item_774eeeb42d82ead31b3a026f13e7d2ee/>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesFlex css={{"paddingBottom": "10%", "flex": "1"}} id={`content-area`} ref={ref_content_area}>
  <RadixThemesBox css={{"width": "100vw", "height": "100vh"}}>
  <ReactPlayer controls={false} css={{"objectFit": "cover", "position": "fixed", "top": "-10vh", "left": "-10vw", "zIndex": "-1"}} height={`120vh`} loop={true} muted={true} playing={true} url={`https://github.com/user-attachments/assets/8a413b5d-ce7a-4a18-a2de-b151f4407f9c`} width={`120vw`}/>
  <RadixThemesBox css={{"background": "rgba(0, 0, 0, 0.7)", "position": "fixed", "top": "0", "left": "13%", "width": "74vw", "height": "100vh", "zIndex": "-1"}}/>
  <RadixThemesContainer css={{"padding": "16px"}} size={`10`}>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400", "textAlign": "center", "marginBottom": "2%"}} size={`8`}>
  {`Learn About Exoplanets!`}
</RadixThemesHeading>
  <RadixThemesBox css={{"marginBottom": "1em", "width": "100%", "size": "10"}}>
  <RadixThemesBox css={{"position": "relative", "left": "-135px", "width": "1400px", "border-radius": "5px", "minWidth": "1300px", "align": "center"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"padding": "20px", "border": "1px solid #ccc", "borderRadius": "10px"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`8`}>
  {`What is an exoplanet?`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"white-space": "pre-line", "text-align": "justify"}}>
  {`An exoplanet, or extrasolar planet, is a planet that orbits a star outside our solar system, like the ones we see in our night sky. These planets can vary widely in size and composition, ranging from massive gas giants to smaller, rocky worlds. Scientists have discovered thousands of exoplanets using various techniques, such as observing changes in starlight when a planet passes in front of its star. Studying exoplanets is important because it helps us understand how different planetary systems form and whether conditions for life exist beyond Earth. As we continue to explore these distant worlds, we gain insights into the vast possibilities of our universe.`}
</RadixThemesText>
</RadixThemesFlex>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <img css={{"width": "70%", "height": "auto", "objectFit": "cover", "margin": "auto"}} src={`../../exoplanets.jpg`}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400", "textAlign": "center", "margin": "2%"}} size={`6`}>
  {`Exoplanet Discovery Methods`}
</RadixThemesHeading>
  <RadixThemesGrid css={{"@media screen and (min-width: 0)": {"gridTemplateColumns": "repeat(2, 1fr)"}, "gridAutoFlow": "row", "marginBottom": "1em", "justifyItems": "center", "justifyContent": "center"}} gap={`7`}>
  <RadixThemesBox css={{"padding": "20px", "border": "1px solid #ccc", "borderRadius": "20px", "textAlign": "center"}}>
  <ReactPlayer controls={true} url={`https://svs.gsfc.nasa.gov/vis/a010000/a013000/a013022/Exoplanet_Single_Transit-HD_1080p.webm`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"padding": "5%"}} direction={`column`} justify={`center`} gap={`2`}>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`7`}>
  {`Transit Method`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"text-align": "justify"}}>
  {`Popularized by NASA's Kepler Space Telescope, launched in 2009, this method detects exoplanets by monitoring the dimming of a star’s light when a planet passes in front of it. This method allows astronomers to determine the planet's size and orbit.`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox css={{"padding": "20px", "border": "1px solid #ccc", "borderRadius": "20px", "textAlign": "center"}}>
  <ReactPlayer controls={true} url={`https://science.nasa.gov/wp-content/uploads/2023/09/radial_velocity.mp4`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"padding": "5%"}} direction={`column`} justify={`center`} gap={`2`}>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`7`}>
  {`Radial Velocity (Doppler Method)`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"text-align": "justify"}}>
  {`Introduced by Michel Mayor and Didier Queloz in 1995 with their discovery of 51 Pegasi b, this technique measures the wobble of a star caused by the gravitational pull of an orbiting planet. The resulting shifts in the star's light spectrum help estimate the planet's mass and distance from the star.`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox css={{"padding": "20px", "border": "1px solid #ccc", "borderRadius": "20px", "textAlign": "center"}}>
  <ReactPlayer controls={true} url={`https://science.nasa.gov/wp-content/uploads/2023/10/direct-imaging-video.mp4`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"padding": "5%"}} direction={`column`} justify={`center`} gap={`2`}>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`7`}>
  {`Direct Imaging`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"text-align": "justify"}}>
  {`Although theorized for years, significant advancements were made with telescopes like the Very Large Telescope and Hubble. The first confirmed direct image of an exoplanet, 2M1207b, was captured in 2004 by Amanda S. B. D. Strubbe and her team. This method involves taking pictures of exoplanets by blocking out the light from their host stars.`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox css={{"padding": "20px", "border": "1px solid #ccc", "borderRadius": "20px", "textAlign": "center"}}>
  <ReactPlayer controls={true} url={`https://svs.gsfc.nasa.gov/vis/a020000/a020200/a020242/WFIRST_Microlensing_H264_1080p.webm`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"padding": "5%"}} direction={`column`} justify={`center`} gap={`2`}>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`7`}>
  {`Gravitational Microlensing`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"text-align": "justify"}}>
  {`Proposed in the 1990s by Robert A. Caldwell, this technique uses the gravitational field of a foreground star to magnify the light from a more distant star. If a planet orbits the foreground star, it can create distinctive light patterns that indicate the planet's presence. The first successful observation was made in 2004 by David Bennett and others.`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox css={{"padding": "20px", "border": "1px solid #ccc", "borderRadius": "20px", "textAlign": "center"}}>
  <ReactPlayer controls={true} url={`https://science.nasa.gov/wp-content/uploads/2023/09/astrometry.mp4`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"padding": "5%"}} direction={`column`} justify={`center`} gap={`2`}>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`7`}>
  {`Astrometry`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"text-align": "justify"}}>
  {`This method has roots in the early 19th century, with Friedrich Bessel laying the groundwork. It involves measuring the precise movements of a star in the sky. If a star wobbles due to an orbiting planet, it can reveal the planet\s existence. Recent advancements, especially with the Gaia mission, have enhanced this method’s effectiveness.`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox css={{"padding": "20px", "border": "1px solid #ccc", "borderRadius": "20px", "textAlign": "center"}}>
  <ReactPlayer controls={true} url={`https://upload.wikimedia.org/wikipedia/commons/transcoded/9/96/201008-2a_PlanetOrbits_16x9-_Transit_timing_of_1-planet_vs_2-planet_systems.ogv/201008-2a_PlanetOrbits_16x9-_Transit_timing_of_1-planet_vs_2-planet_systems.ogv.720p.vp9.webm`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"padding": "5%"}} direction={`column`} justify={`center`} gap={`2`}>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`7`}>
  {`Timing Variations Method`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"text-align": "justify"}}>
  {`Transit Timing Variations (TTVs): If a known planet transits (passes in front of) its host star, astronomers can measure the exact time of each transit. If there is a second, unseen planet in the system, its gravitational pull will slightly alter the orbit of the known planet, causing the timing of the transits to shift from one transit to the next.`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesGrid>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400", "textAlign": "center", "margin": "2%"}} size={`6`}>
  {`Important Exoplanet Definitions`}
</RadixThemesHeading>
  <RadixThemesBox>
  <RadixAccordionRoot collapsible={true} css={{"borderRadius": "var(--radius-4)", "boxShadow": "0 2px 10px var(--black-a1)", "&[data-variant='classic']": {"backgroundColor": "var(--accent-9)", "boxShadow": "0 2px 10px var(--black-a4)"}, "&[data-variant='soft']": {"backgroundColor": "var(--accent-3)"}, "&[data-variant='outline']": {"border": "1px solid var(--accent-6)", "--divider-px": "1px"}, "&[data-variant='surface']": {"border": "1px solid var(--accent-6)", "backgroundColor": "var(--accent-surface)", "--divider-px": "1px"}, "&[data-variant='ghost']": {"backgroundColor": "none", "boxShadow": "None"}, "--animation-duration": "250ms", "--animation-easing": `cubic-bezier(0.87, 0, 0.13, 1)`, "width": "1200px"}} data-variant={`outline`}>
  <Item_3f0f5644925a6296f63756912783b661/>
  <Item_83dd0d3781b0d7a8262021aea5c19887/>
  <Item_159c7ec71b07d154139ccf32dcfac2e9/>
  <Item_503509d547d1a43df6a1e2be652c3d8b/>
  <Item_b512156f08b8959aa8b69bf06be15356/>
  <Item_81c17a79888ad926a0fa218b215e3188/>
  <Item_1d1915b23a99b5e45656e14caafc632b/>
  <Item_62b327915e6517094aa2d1e3fd1223f3/>
  <Item_138683c563e8797d80cee3a562366651/>
  <Item_0e8b6b888336306d2c485a7c7d3b1397/>
  <Item_33a8048fa0e6354b8975282ab87fac37/>
  <Item_d42b91ce382660a6eb207c2bf080c447/>
  <Item_e73732136be0cd750dfa279eaec3fae1/>
  <Item_037d02ff58bd56be72431331f3289a40/>
  <Item_2b7522f54c79eaa76f81c5948b2029e1/>
</RadixAccordionRoot>
</RadixThemesBox>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400", "textAlign": "center", "margin": "2%"}} size={`6`}>
  {`Timeline of Important Events`}
</RadixThemesHeading>
  <RadixThemesBox>
  <img css={{"position": "relative", "left": "-135px", "min-width": "1400px", "border-radius": "5px"}} src={`../../timeline.png`}/>
</RadixThemesBox>
</RadixThemesContainer>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Spaceapps | Learn`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</ErrorBoundary>
  )
}
