/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { AnvilIcon as LucideAnvilIcon, CalendarIcon as LucideCalendarIcon, CalendarMinus2Icon as LucideCalendarMinus2Icon, CalendarPlus2Icon as LucideCalendarPlus2Icon, CircleIcon as LucideCircleIcon, FeatherIcon as LucideFeatherIcon, ImageIcon as LucideImageIcon, Maximize2Icon as LucideMaximize2Icon, MenuIcon as LucideMenuIcon, Minimize2Icon as LucideMinimize2Icon, OrbitIcon as LucideOrbitIcon, RadiusIcon as LucideRadiusIcon, SparklesIcon as LucideSparklesIcon, TelescopeIcon as LucideTelescopeIcon, WeightIcon as LucideWeightIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Slider as RadixThemesSlider, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import NextLink from "next/link"
import NextHead from "next/head"



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

export function Slider_f3ed41ca6862fbb8494f89ad82ff5c6f () {
  const reflex___state____state__space_apps___state___explore_state____options_state = useContext(StateContexts.reflex___state____state__space_apps___state___explore_state____options_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_6d7fffcb0337a0d78244daf6315ad7ae = useCallback((_e0) => addEvents([Event("reflex___state____state.space_apps___state___explore_state____options_state.set_mass", {value:_e0})], [_e0], {}), [addEvents, Event])


  return (
    <RadixThemesSlider css={{"width": "100%"}} defaultValue={reflex___state____state__space_apps___state___explore_state____options_state.mass} max={reflex___state____state__space_apps___state___explore_state____options_state.mass_max} min={reflex___state____state__space_apps___state___explore_state____options_state.mass_min} onValueChange={on_change_6d7fffcb0337a0d78244daf6315ad7ae} size={`1`} step={5}/>
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


export function Slider_07cfd0e3f45d14b73e7c2435c204543f () {
  const reflex___state____state__space_apps___state___explore_state____options_state = useContext(StateContexts.reflex___state____state__space_apps___state___explore_state____options_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_c8952c29994afaf1c97972d9a95e59e7 = useCallback((_e0) => addEvents([Event("reflex___state____state.space_apps___state___explore_state____options_state.set_distance", {value:_e0})], [_e0], {}), [addEvents, Event])


  return (
    <RadixThemesSlider css={{"width": "100%"}} defaultValue={reflex___state____state__space_apps___state___explore_state____options_state.distance} max={reflex___state____state__space_apps___state___explore_state____options_state.distance_max} min={reflex___state____state__space_apps___state___explore_state____options_state.distance_min} onValueChange={on_change_c8952c29994afaf1c97972d9a95e59e7} size={`1`} step={100}/>
  )
}

export function Slider_06d6001d4313b0bdc84277a6219cdb74 () {
  const reflex___state____state__space_apps___state___explore_state____options_state = useContext(StateContexts.reflex___state____state__space_apps___state___explore_state____options_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_8b63725672a588c3aa3fb07d3032475d = useCallback((_e0) => addEvents([Event("reflex___state____state.space_apps___state___explore_state____options_state.set_year", {value:_e0})], [_e0], {}), [addEvents, Event])


  return (
    <RadixThemesSlider css={{"width": "100%"}} defaultValue={reflex___state____state__space_apps___state___explore_state____options_state.year} max={reflex___state____state__space_apps___state___explore_state____options_state.year_max} min={reflex___state____state__space_apps___state___explore_state____options_state.year_min} onValueChange={on_change_8b63725672a588c3aa3fb07d3032475d} size={`1`} step={1}/>
  )
}

export function Box_29311803390ea8d3e578ce3e0058c8ef () {
  const reflex___state____state__space_apps___state___explore_state____options_state = useContext(StateContexts.reflex___state____state__space_apps___state___explore_state____options_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <RadixThemesBox>
  <RadixThemesBox css={{"position": "relative", "width": "93.7em", "height": "auto"}}>
  <img css={{"width": "93.7em", "height": "auto"}} slot={`first`} src={`../../milkyway.jpg`}/>
</RadixThemesBox>
  {reflex___state____state__space_apps___state___explore_state____options_state.filtered_planets.map((item, index_32a721c8e61d3e2e) => (
  <RadixThemesTooltip content={`${item.at(0)}`} key={index_32a721c8e61d3e2e}>
  <RadixThemesButton css={{"position": "absolute", "top": item.at(2), "left": item.at(1), "width": "2em", "height": "2em", "borderRadius": "50%", "border": "2px solid white", "backgroundColor": "transparent", "color": "transparent", "cursor": "pointer", "&:hover": {"backgroundColor": "white", "color": "black"}}} onClick={(...args) => addEvents([Event("reflex___state____state.space_apps___state___explore_state____options_state.planet_selected", {value:`${item.at(0)}`})], args, {})}>
  {``}
</RadixThemesButton>
</RadixThemesTooltip>
))}
</RadixThemesBox>
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

export function Dropdownmenu__item_ff6161d9ae1d387d5b248aa7bfb18e79 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_fa3952249543ffb96728465109bef805 = useCallback((...args) => addEvents([Event("reflex___state____state.space_apps___navigation___state____nav_state.to_explore", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_fa3952249543ffb96728465109bef805}>
  {`Explore`}
</RadixThemesDropdownMenu.Item>
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
            

export function Text_5e608b098b4e5eec9e1169dda3389f98 () {
  const reflex___state____state__space_apps___state___explore_state____options_state = useContext(StateContexts.reflex___state____state__space_apps___state___explore_state____options_state)



  return (
    <RadixThemesText as={`p`} size={`3`}>
  {`Min: ${reflex___state____state__space_apps___state___explore_state____options_state.distance.at(0)}, Max: ${reflex___state____state__space_apps___state___explore_state____options_state.distance.at(1)}`}
</RadixThemesText>
  )
}

export function Text_b573716d23b1aefb0973f8df54e37f44 () {
  const reflex___state____state__space_apps___state___explore_state____options_state = useContext(StateContexts.reflex___state____state__space_apps___state___explore_state____options_state)



  return (
    <RadixThemesText as={`p`} size={`3`}>
  {`Min: ${reflex___state____state__space_apps___state___explore_state____options_state.orb_period.at(0)}, Max: ${reflex___state____state__space_apps___state___explore_state____options_state.orb_period.at(1)}`}
</RadixThemesText>
  )
}

export function Slider_fa4d60a9401c4d7aa87347ed09a1b647 () {
  const reflex___state____state__space_apps___state___explore_state____options_state = useContext(StateContexts.reflex___state____state__space_apps___state___explore_state____options_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_fa9c400d7efbb11a9cb55bd9df8f90c6 = useCallback((_e0) => addEvents([Event("reflex___state____state.space_apps___state___explore_state____options_state.set_radius", {value:_e0})], [_e0], {}), [addEvents, Event])


  return (
    <RadixThemesSlider css={{"width": "100%"}} defaultValue={reflex___state____state__space_apps___state___explore_state____options_state.radius} max={reflex___state____state__space_apps___state___explore_state____options_state.radius_max} min={reflex___state____state__space_apps___state___explore_state____options_state.radius_min} onValueChange={on_change_fa9c400d7efbb11a9cb55bd9df8f90c6} size={`1`} step={5}/>
  )
}

export function Text_9b8a760f49bd2f8478bd631150115bd5 () {
  const reflex___state____state__space_apps___state___explore_state____options_state = useContext(StateContexts.reflex___state____state__space_apps___state___explore_state____options_state)



  return (
    <RadixThemesText as={`p`} size={`3`}>
  {`Min: ${reflex___state____state__space_apps___state___explore_state____options_state.year.at(0)}, Max: ${reflex___state____state__space_apps___state___explore_state____options_state.year.at(1)}`}
</RadixThemesText>
  )
}

export function Text_494cdf173787086ce4939e69e866d81f () {
  const reflex___state____state__space_apps___state___explore_state____options_state = useContext(StateContexts.reflex___state____state__space_apps___state___explore_state____options_state)



  return (
    <RadixThemesText as={`p`} size={`3`}>
  {`Min: ${reflex___state____state__space_apps___state___explore_state____options_state.mass.at(0)}, Max: ${reflex___state____state__space_apps___state___explore_state____options_state.mass.at(1)}`}
</RadixThemesText>
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

export function Text_d4753ede46e440a246270946d8c6260f () {
  const reflex___state____state__space_apps___state___explore_state____options_state = useContext(StateContexts.reflex___state____state__space_apps___state___explore_state____options_state)



  return (
    <RadixThemesText as={`p`} size={`3`}>
  {`Min: ${reflex___state____state__space_apps___state___explore_state____options_state.radius.at(0)}, Max: ${reflex___state____state__space_apps___state___explore_state____options_state.radius.at(1)}`}
</RadixThemesText>
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

export function Dropdownmenu__item_de554e9d1924ff28d6097917263fe529 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_3f2c16d8ee46e6e0107c097443c815fc = useCallback((...args) => addEvents([Event("reflex___state____state.space_apps___navigation___state____nav_state.to_learn", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_3f2c16d8ee46e6e0107c097443c815fc}>
  {`Learn`}
</RadixThemesDropdownMenu.Item>
  )
}

export function Button_08e221fee03a83c1e9adafdccd68dee4 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_214bd3fd15fa38813b22b0f411ab3e7b = useCallback((...args) => addEvents([Event("reflex___state____state.space_apps___state___explore_state____options_state.filter_exoplanets", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"cursor": "pointer", "width": "100%"}} onClick={on_click_214bd3fd15fa38813b22b0f411ab3e7b} size={`3`}>
  <LucideSparklesIcon css={{"color": "var(--current-color)"}} size={18}/>
  {`Search`}
</RadixThemesButton>
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

export function Slider_f09ca66ce980dfc5be6caf622e21c22b () {
  const reflex___state____state__space_apps___state___explore_state____options_state = useContext(StateContexts.reflex___state____state__space_apps___state___explore_state____options_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_e52d5349572208c1f508b58e26144066 = useCallback((_e0) => addEvents([Event("reflex___state____state.space_apps___state___explore_state____options_state.set_orbper", {value:_e0})], [_e0], {}), [addEvents, Event])


  return (
    <RadixThemesSlider css={{"width": "100%"}} defaultValue={reflex___state____state__space_apps___state___explore_state____options_state.orb_period} max={reflex___state____state__space_apps___state___explore_state____options_state.orb_period_max} min={reflex___state____state__space_apps___state___explore_state____options_state.orb_period_min} onValueChange={on_change_e52d5349572208c1f508b58e26144066} size={`1`}/>
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
  <RadixThemesFlex css={{"@media screen and (min-width: 0)": {"flexDirection": "column"}, "@media screen and (min-width: 30em)": {"flexDirection": "column"}, "@media screen and (min-width: 48em)": {"flexDirection": "column"}, "@media screen and (min-width: 62em)": {"flexDirection": "row"}, "position": "relative", "width": "100%", "height": "100%", "background": "var(--gray-1)"}}>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "none", "width": "100%"}, "@media screen and (min-width: 30em)": {"display": "none", "width": "100%"}, "@media screen and (min-width: 48em)": {"display": "none", "width": "100%"}, "@media screen and (min-width: 62em)": {"display": "block", "width": "375px"}, "@media screen and (min-width: 80em)": {"width": "450px"}, "height": "100vh", "position": "sticky", "top": "0px", "left": "0px", "background": "var(--gray-2)", "borderRight": "1.5px solid var(--gray-a5)"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "height": "100%"}} direction={`column`} gap={`0`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%", "borderBottom": "1.5px solid var(--gray-a5)", "padding": "1em"}} direction={`row`} gap={`3`}>
  <LucideTelescopeIcon css={{"color": "red"}}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"overflowY": "auto", "flex": "1", "height": "100%", "width": "100%"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "overflowY": "auto", "padding": "1em"}} direction={`column`} gap={`6`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`2`}>
  <LucideRadiusIcon css={{"color": "var(--blue-9)"}} size={17}/>
  <RadixThemesText as={`p`} size={`3`}>
  {`Planet Radius`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Text_d4753ede46e440a246270946d8c6260f/>
</RadixThemesFlex>
  <Slider_fa4d60a9401c4d7aa87347ed09a1b647/>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"position": "relative", "width": "100%"}} direction={`row`} justify={`between`} gap={`3`}>
  <LucideCircleIcon css={{"color": "var(--gray-9)"}} size={10}/>
  <LucideCircleIcon css={{"color": "var(--gray-9)"}} size={22}/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`2`}>
  <LucideImageIcon css={{"color": "var(--crimson-9)"}} size={17}/>
  <RadixThemesText as={`p`} size={`3`}>
  {`Distance from Earth`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Text_5e608b098b4e5eec9e1169dda3389f98/>
</RadixThemesFlex>
  <Slider_07cfd0e3f45d14b73e7c2435c204543f/>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"position": "relative", "width": "100%"}} direction={`row`} justify={`between`} gap={`3`}>
  <LucideMinimize2Icon css={{"color": "var(--gray-9)"}} size={22}/>
  <LucideMaximize2Icon css={{"color": "var(--gray-9)"}} size={22}/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`2`}>
  <LucideOrbitIcon css={{"color": "var(--white-9)"}} size={17}/>
  <RadixThemesText as={`p`} size={`3`}>
  {`Planet Orbital Period`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Text_b573716d23b1aefb0973f8df54e37f44/>
</RadixThemesFlex>
  <Slider_f09ca66ce980dfc5be6caf622e21c22b/>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"position": "relative", "width": "100%"}} direction={`row`} justify={`between`} gap={`3`}>
  <LucideOrbitIcon css={{"color": "var(--gray-9)"}} size={10}/>
  <LucideOrbitIcon css={{"color": "var(--gray-9)"}} size={22}/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`2`}>
  <LucideWeightIcon css={{"color": "var(--green-9)"}} size={17}/>
  <RadixThemesText as={`p`} size={`3`}>
  {`Planet Mass`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Text_494cdf173787086ce4939e69e866d81f/>
</RadixThemesFlex>
  <Slider_f3ed41ca6862fbb8494f89ad82ff5c6f/>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"position": "relative", "width": "100%"}} direction={`row`} justify={`between`} gap={`3`}>
  <LucideFeatherIcon css={{"color": "var(--gray-9)"}} size={22}/>
  <LucideAnvilIcon css={{"color": "var(--gray-9)"}} size={22}/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`2`}>
  <LucideCalendarIcon css={{"color": "var(--green-9)"}} size={17}/>
  <RadixThemesText as={`p`} size={`3`}>
  {`Year discovered`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Text_9b8a760f49bd2f8478bd631150115bd5/>
</RadixThemesFlex>
  <Slider_06d6001d4313b0bdc84277a6219cdb74/>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"position": "relative", "width": "100%"}} direction={`row`} justify={`between`} gap={`3`}>
  <LucideCalendarMinus2Icon css={{"color": "var(--gray-9)"}} size={22}/>
  <LucideCalendarPlus2Icon css={{"color": "var(--gray-9)"}} size={22}/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesBox css={{"position": "sticky", "bottom": "0", "padding": "1em", "background": "var(--gray-2)", "borderTop": "1.5px solid var(--gray-a5)", "width": "100%"}}>
  <Button_08e221fee03a83c1e9adafdccd68dee4/>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <Box_29311803390ea8d3e578ce3e0058c8ef/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Spaceapps | Explore`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</ErrorBoundary>
  )
}
