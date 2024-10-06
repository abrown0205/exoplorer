/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { LinkedinIcon as LucideLinkedinIcon, MenuIcon as LucideMenuIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Box as RadixThemesBox, Container as RadixThemesContainer, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
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

export function Link_b6fae0876cc766e26cd1e2b426ab27b3 () {



  return (
    <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/michael-y-scott/`} passHref={true}>
  <LucideLinkedinIcon css={{"strokeWidth": 1, "color": "var(--current-color)"}} size={15}/>
</NextLink>
</RadixThemesLink>
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

export function Link_2126e45e40ee8953618c46ed5a731632 () {



  return (
    <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/srajan-dube-913378170/`} passHref={true}>
  <LucideLinkedinIcon css={{"strokeWidth": 1, "color": "var(--current-color)"}} size={15}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_6833c6e92cab9119f451e76a42d9feb6 () {



  return (
    <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/shawn-robertson-chemical-engineering/`} passHref={true}>
  <LucideLinkedinIcon css={{"strokeWidth": 1, "color": "var(--current-color)"}} size={15}/>
</NextLink>
</RadixThemesLink>
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


export function Dropdownmenu__item_de554e9d1924ff28d6097917263fe529 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_3f2c16d8ee46e6e0107c097443c815fc = useCallback((...args) => addEvents([Event("reflex___state____state.space_apps___navigation___state____nav_state.to_learn", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_3f2c16d8ee46e6e0107c097443c815fc}>
  {`Learn`}
</RadixThemesDropdownMenu.Item>
  )
}

export function Link_7b2910ad2966dfbc9cbb3980860244f7 () {



  return (
    <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/alexandra-brown-a6a549192`} passHref={true}>
  <LucideLinkedinIcon css={{"strokeWidth": 1, "color": "var(--current-color)"}} size={15}/>
</NextLink>
</RadixThemesLink>
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

export function Link_13b936ff1df6169b180313c50907bd57 () {



  return (
    <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/uday-katravulapalli-50a9ab145/`} passHref={true}>
  <LucideLinkedinIcon css={{"strokeWidth": 1, "color": "var(--current-color)"}} size={15}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_5c7f02db0027ef3bdf34b246f21cb648 () {



  return (
    <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/jared-diaz-34b81616a/`} passHref={true}>
  <LucideLinkedinIcon css={{"strokeWidth": 1, "color": "var(--current-color)"}} size={15}/>
</NextLink>
</RadixThemesLink>
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
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400", "textAlign": "center", "marginBottom": "2%"}} size={`8`}>
  {`About the Exo-plorer Team`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"textAlign": "justify"}}>
  {`The Exo-plorer team developed an interactive web app for students that teaches them about exoplanets by allowing them to create their own using AI. Students can customize features like planet size, orbit, terrain, and temperature, and then compare their creations to real exoplanets. Students can also explore a database of actual exoplanets discovered by astronomers. This addresses the challenge of making complex astronomical concepts engaging and accessible by transforming abstract ideas into hands-on activities. The app fosters curiosity and active learning, encouraging students to think critically about planetary science and the universe. By combining creativity with real-world data, it helps students connect classroom lessons with scientific discoveries, making astronomy more exciting and relevant to their lives.`}
</RadixThemesText>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400", "textAlign": "center", "margin": "2%"}} size={`6`}>
  {`Meet the Team!`}
</RadixThemesHeading>
  <RadixThemesGrid css={{"@media screen and (min-width: 0)": {"gridTemplateColumns": "1fr"}, "@media screen and (min-width: 30em)": {"gridTemplateColumns": "repeat(1, 1fr)"}, "@media screen and (min-width: 48em)": {"gridTemplateColumns": "repeat(2, 1fr)"}, "@media screen and (min-width: 62em)": {"gridTemplateColumns": "repeat(3, 1fr)"}, "@media screen and (min-width: 80em)": {"gridTemplateColumns": "repeat(3, 1fr)"}}} gap={`7`}>
  <RadixThemesBox css={{"padding": "20px", "border": "1px solid #ccc", "borderRadius": "20px", "textAlign": "center"}}>
  <img css={{"width": "150px", "height": "150px", "objectFit": "cover", "margin": "auto"}} src={`../../headshots/alex_headshot.jpeg`}/>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"padding": "5%"}} direction={`row`} justify={`center`} gap={`2`}>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`3`}>
  {`Alex Brown`}
</RadixThemesHeading>
  <Link_7b2910ad2966dfbc9cbb3980860244f7/>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"textAlign": "center"}}>
  {`Alex is a Software Engineer at Code.org. She graduated with a bachelor’s degree in Computer Science from the University of Central Florida. `}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={{"padding": "20px", "border": "1px solid #ccc", "borderRadius": "20px", "textAlign": "center"}}>
  <img css={{"width": "150px", "height": "150px", "objectFit": "cover", "margin": "auto"}} src={`../../headshots/jared_headshot.jpg`}/>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"padding": "5%"}} direction={`row`} justify={`center`} gap={`2`}>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`3`}>
  {`Jared Diaz`}
</RadixThemesHeading>
  <Link_5c7f02db0027ef3bdf34b246f21cb648/>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"textAlign": "center"}}>
  {`Jared is a Graduate Student at Duke University. He graduated from Stanford University with a bachelor's degree in Mechanical Engineering. In his time off, Jared enjoys traveling the world. `}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={{"padding": "20px", "border": "1px solid #ccc", "borderRadius": "20px", "textAlign": "center"}}>
  <img css={{"width": "150px", "height": "150px", "objectFit": "cover", "margin": "auto"}} src={`../../headshots/srajan_headshot.jpg`}/>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"padding": "5%"}} direction={`row`} justify={`center`} gap={`2`}>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`3`}>
  {`Srajan Dube`}
</RadixThemesHeading>
  <Link_2126e45e40ee8953618c46ed5a731632/>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"textAlign": "center"}}>
  {`Srajan is a Data and AI Technical Specialist at IBM. He graduated from the Georgia Institute of Technology with a bachelor’s & master’s in Computer Science. Srajan plays tennis recreationally outside of work. `}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={{"padding": "20px", "border": "1px solid #ccc", "borderRadius": "20px", "textAlign": "center"}}>
  <img css={{"width": "150px", "height": "150px", "objectFit": "cover", "margin": "auto"}} src={`../../headshots/uday_headshot.jpg`}/>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"padding": "5%"}} direction={`row`} justify={`center`} gap={`2`}>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`3`}>
  {`Uday Katravulapalli`}
</RadixThemesHeading>
  <Link_13b936ff1df6169b180313c50907bd57/>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"textAlign": "center"}}>
  {`Uday is a Software Engineer at Aerodyne. He graduated from the University of Florida  with a bachelor’s degree in Mechanical Engineering. Uday loves taking hikes and being in nature.`}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={{"padding": "20px", "border": "1px solid #ccc", "borderRadius": "20px", "textAlign": "center"}}>
  <img css={{"width": "150px", "height": "150px", "objectFit": "cover", "margin": "auto"}} src={`../../headshots/shawn_headshot.jpg`}/>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"padding": "5%"}} direction={`row`} justify={`center`} gap={`2`}>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`3`}>
  {`Shawn Robertson`}
</RadixThemesHeading>
  <Link_6833c6e92cab9119f451e76a42d9feb6/>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"textAlign": "center"}}>
  {`Shawn is a Process Engineer at Mitsubishi Power. He graduated from the University of Florida with a bachelor's degree in Chemical Engineering. Outside of work, Shawn loves to go fishing & kayaking.`}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={{"padding": "20px", "border": "1px solid #ccc", "borderRadius": "20px", "textAlign": "center"}}>
  <img css={{"width": "150px", "height": "150px", "objectFit": "cover", "margin": "auto"}} src={`../../headshots/michael_headshot.png`}/>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"padding": "5%"}} direction={`row`} justify={`center`} gap={`2`}>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}} size={`3`}>
  {`Michael Scott`}
</RadixThemesHeading>
  <Link_b6fae0876cc766e26cd1e2b426ab27b3/>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"textAlign": "center"}}>
  {`Michael is a Systems Engineer at Northrup Grumman. He graduated from the University of Central Florida with a bachelor's degree in Aerospace Engineering. In his free time, Michael enjoys editing videos & creating online content.`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesGrid>
</RadixThemesContainer>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Spaceapps | About`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</ErrorBoundary>
  )
}
