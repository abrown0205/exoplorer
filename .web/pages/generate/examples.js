/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { MenuIcon as LucideMenuIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import dynamic from "next/dynamic"
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

export function Box_73932ed92bf84c2123d473976a3adf4f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_2334ca0b3c535a953c1acd826f82f331 = useCallback((...args) => addEvents([Event("reflex___state____state.space_apps___state___example_state____example_state.get_example_exoplanet", {name:`Mustafar`})], args, {}), [addEvents, Event])


  return (
    <RadixThemesBox css={{"justify": "center", "align": "center", "spacing": "2", "padding": "5%", "border": "1px solid #ccc", "borderRadius": "10px", "textAlign": "center"}} onClick={on_click_2334ca0b3c535a953c1acd826f82f331}>
  <img css={{"width": "150px", "height": "150px", "objectFit": "cover", "margin": "auto"}} src={`../../examples/Mustafar.jpg`}/>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`3`}>
  {`Mustafar`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`from the Star Wars universe`}
</RadixThemesText>
</RadixThemesBox>
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

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Box_5aefab67d1bc4bddbf722361a42055bc () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_a94a65483605a6fee7a47377a17694cd = useCallback((...args) => addEvents([Event("reflex___state____state.space_apps___state___example_state____example_state.get_example_exoplanet", {name:`Tatooine`})], args, {}), [addEvents, Event])


  return (
    <RadixThemesBox css={{"justify": "center", "align": "center", "spacing": "2", "padding": "5%", "border": "1px solid #ccc", "borderRadius": "10px", "textAlign": "center"}} onClick={on_click_a94a65483605a6fee7a47377a17694cd}>
  <img css={{"width": "150px", "height": "150px", "objectFit": "cover", "margin": "auto"}} src={`../../examples/Tatooine.jpg`}/>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`3`}>
  {`Tatooine`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`from the Star Wars universe`}
</RadixThemesText>
</RadixThemesBox>
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

export function Box_dd21170cf24afe301bf3f0af8fe5e8e9 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_30aa42855ebeafeda439b6ab1075dd5c = useCallback((...args) => addEvents([Event("reflex___state____state.space_apps___state___example_state____example_state.get_example_exoplanet", {name:`Arrakis`})], args, {}), [addEvents, Event])


  return (
    <RadixThemesBox css={{"justify": "center", "align": "center", "spacing": "2", "padding": "5%", "border": "1px solid #ccc", "borderRadius": "10px", "textAlign": "center"}} onClick={on_click_30aa42855ebeafeda439b6ab1075dd5c}>
  <img css={{"width": "150px", "height": "150px", "objectFit": "cover", "margin": "auto"}} src={`../../examples/Arrakis.jpg`}/>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`3`}>
  {`Arrakis`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`from the Dune universe`}
</RadixThemesText>
</RadixThemesBox>
  )
}

export function Box_e52c9ba3e42471164f61709097b3a64c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_f7f2e8d96c32c9f4a14af8383bd59845 = useCallback((...args) => addEvents([Event("reflex___state____state.space_apps___state___example_state____example_state.get_example_exoplanet", {name:`Vulcan`})], args, {}), [addEvents, Event])


  return (
    <RadixThemesBox css={{"justify": "center", "align": "center", "spacing": "2", "padding": "5%", "border": "1px solid #ccc", "borderRadius": "10px", "textAlign": "center"}} onClick={on_click_f7f2e8d96c32c9f4a14af8383bd59845}>
  <img css={{"width": "150px", "height": "150px", "objectFit": "cover", "margin": "auto"}} src={`../../examples/Vulcan.jpg`}/>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`3`}>
  {`Vulcan`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`from the Star Trek universe`}
</RadixThemesText>
</RadixThemesBox>
  )
}

export function Box_372522d980e06d0f8eb1bf3f6188526f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_3b0cbcd42c3e316344a8c6fc142f4cc0 = useCallback((...args) => addEvents([Event("reflex___state____state.space_apps___state___example_state____example_state.get_example_exoplanet", {name:`Hoth`})], args, {}), [addEvents, Event])


  return (
    <RadixThemesBox css={{"justify": "center", "align": "center", "spacing": "2", "padding": "5%", "border": "1px solid #ccc", "borderRadius": "10px", "textAlign": "center"}} onClick={on_click_3b0cbcd42c3e316344a8c6fc142f4cc0}>
  <img css={{"width": "150px", "height": "150px", "objectFit": "cover", "margin": "auto"}} src={`../../examples/Hoth.jpg`}/>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`3`}>
  {`Hoth`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`from the Star Wars universe`}
</RadixThemesText>
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

export function Box_10ccde14086cbb7fa5cc2222557bb3bc () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_dec8bd63bc743b90f9ced5726f688e21 = useCallback((...args) => addEvents([Event("reflex___state____state.space_apps___state___example_state____example_state.get_example_exoplanet", {name:`Pandora`})], args, {}), [addEvents, Event])


  return (
    <RadixThemesBox css={{"justify": "center", "align": "center", "spacing": "2", "padding": "5%", "border": "1px solid #ccc", "borderRadius": "10px", "textAlign": "center"}} onClick={on_click_dec8bd63bc743b90f9ced5726f688e21}>
  <img css={{"width": "150px", "height": "150px", "objectFit": "cover", "margin": "auto"}} src={`../../examples/Pandora.jpg`}/>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`3`}>
  {`Pandora`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`from the Avatar universe`}
</RadixThemesText>
</RadixThemesBox>
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
  <RadixThemesBox css={{"display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "width": "80%", "height": "100%", "margin": "0 auto"}}>
  <ReactPlayer controls={false} css={{"objectFit": "cover", "position": "fixed", "top": "-10vh", "left": "-10vw", "zIndex": "-1"}} height={`120vh`} loop={true} muted={true} playing={true} url={`https://github.com/user-attachments/assets/8a413b5d-ce7a-4a18-a2de-b151f4407f9c`} width={`120vw`}/>
  <RadixThemesBox css={{"background": "rgba(0, 0, 0, 0.7)", "position": "fixed", "top": "0", "left": "20%", "width": "60vw", "height": "100vh", "zIndex": "-1"}}/>
  <RadixThemesContainer css={{"padding": "16px"}} size={`3`}>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/generate`} passHref={true}>
  <RadixThemesButton>
  {`Back`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400", "textAlign": "center", "marginBottom": "2%"}} size={`8`}>
  {`Examples From Sci Fi`}
</RadixThemesHeading>
  <RadixThemesGrid css={{"@media screen and (min-width: 0)": {"gridTemplateColumns": "1fr", "flexDirection": "column"}, "@media screen and (min-width: 30em)": {"gridTemplateColumns": "repeat(1, 1fr)", "flexDirection": "column"}, "@media screen and (min-width: 48em)": {"gridTemplateColumns": "repeat(2, 1fr)", "flexDirection": "row"}, "@media screen and (min-width: 62em)": {"gridTemplateColumns": "repeat(3, 1fr)"}, "@media screen and (min-width: 80em)": {"gridTemplateColumns": "repeat(3, 1fr)"}}} gap={`7`}>
  <Box_5aefab67d1bc4bddbf722361a42055bc/>
  <Box_372522d980e06d0f8eb1bf3f6188526f/>
  <Box_73932ed92bf84c2123d473976a3adf4f/>
  <Box_10ccde14086cbb7fa5cc2222557bb3bc/>
  <Box_e52c9ba3e42471164f61709097b3a64c/>
  <Box_dd21170cf24afe301bf3f0af8fe5e8e9/>
</RadixThemesGrid>
</RadixThemesContainer>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Spaceapps | Generate/Examples`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</ErrorBoundary>
  )
}
