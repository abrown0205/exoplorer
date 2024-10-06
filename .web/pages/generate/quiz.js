/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { MenuIcon as LucideMenuIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Dialog as RadixThemesDialog, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, RadioGroup as RadixThemesRadioGroup, Slider as RadixThemesSlider, Text as RadixThemesText } from "@radix-ui/themes"
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

export function Fragment_21dae34e4c8ac7d39830802b0d18e2e4 () {
  const reflex___state____state__space_apps___state___base____state = useContext(StateContexts.reflex___state____state__space_apps___state___base____state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(((reflex___state____state__space_apps___state___base____state.curQuestionNum) < (reflex___state____state__space_apps___state___base____state.max_question_num))) ? (
  <Fragment>
  <RadixThemesButton disabled={!reflex___state____state__space_apps___state___base____state.selectedAnswers.hasOwnProperty(reflex___state____state__space_apps___state___base____state.curQuestionNum)} onClick={(...args) => addEvents([Event("reflex___state____state.space_apps___state___base____state.increment_question_number", {})], args, {})}>
  {`Next`}
</RadixThemesButton>
</Fragment>
) : (
  <Fragment>
  <RadixThemesButton disabled={!reflex___state____state__space_apps___state___base____state.selectedAnswers.hasOwnProperty(reflex___state____state__space_apps___state___base____state.curQuestionNum)} onClick={(...args) => addEvents([Event("reflex___state____state.space_apps___state___base____state.handle_submit", {})], args, {})}>
  {`Submit`}
</RadixThemesButton>
</Fragment>
)}
</Fragment>
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

export function Dropdownmenu__item_e2c0e4726f44623b07ec064f41fc4d5a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_6869137282bbe801430eebe26f3cee97 = useCallback((...args) => addEvents([Event("reflex___state____state.space_apps___navigation___state____nav_state.to_generate", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_6869137282bbe801430eebe26f3cee97}>
  {`Generate`}
</RadixThemesDropdownMenu.Item>
  )
}

export function Fragment_4f76ce679fe3f873350a3296e156bdbd () {
  const reflex___state____state__space_apps___state___base____state = useContext(StateContexts.reflex___state____state__space_apps___state___base____state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(((reflex___state____state__space_apps___state___base____state.get_cur_type) === ("mc"))) ? (
  <Fragment>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"margin": "2%"}} direction={`column`} gap={`3`}>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}}>
  {reflex___state____state__space_apps___state___base____state.get_cur_question}
</RadixThemesHeading>
  <RadixThemesRadioGroup.Root defaultValue={JSON.stringify(reflex___state____state__space_apps___state___base____state.selectedAnswers[reflex___state____state__space_apps___state___base____state.curQuestionNum])} onValueChange={(_e0) => addEvents([Event("reflex___state____state.space_apps___state___base____state.set_answers", {answer:_e0})], [_e0], {})} size={`2`} variant={`classic`}>
  <RadixThemesFlex direction={`column`} gap={`2`}>
  {reflex___state____state__space_apps___state___base____state.get_cur_answers.map((value, index_86301751e64bdf19) => (
  <RadixThemesText as={`label`} key={index_86301751e64bdf19} size={`2`}>
  <RadixThemesFlex gap={`2`}>
  <RadixThemesRadioGroup.Item disabled={false} value={isTrue(((typeof value) === (`string`))) ? value : JSON.stringify(value)}/>
  {isTrue(((typeof value) === (`string`))) ? value : JSON.stringify(value)}
</RadixThemesFlex>
</RadixThemesText>
))}
</RadixThemesFlex>
</RadixThemesRadioGroup.Root>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"margin": "2%"}} direction={`column`} gap={`3`}>
  <RadixThemesHeading css={{"fontFamily": "Orbitron", "--default-font-family": "Orbitron", "fontWeight": "400"}}>
  {reflex___state____state__space_apps___state___base____state.get_cur_question}
</RadixThemesHeading>
  <RadixThemesFlex css={{"width": "100%"}} justify={`between`}>
  <RadixThemesBox>
  <RadixThemesText as={`p`}>
  {`${reflex___state____state__space_apps___state___base____state.get_question_min} ${reflex___state____state__space_apps___state___base____state.get_cur_unit}`}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox>
  <RadixThemesText as={`p`}>
  {`${reflex___state____state__space_apps___state___base____state.get_question_max} ${reflex___state____state__space_apps___state___base____state.get_cur_unit}`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesSlider css={{"width": "100%"}} defaultValue={[reflex___state____state__space_apps___state___base____state.getSelectedAnswer]} max={reflex___state____state__space_apps___state___base____state.get_question_max} min={reflex___state____state__space_apps___state___base____state.get_question_min} onValueChange={(_e0) => addEvents([Event("reflex___state____state.space_apps___state___base____state.set_answers", {answer:_e0})], [_e0], {})} size={`1`} step={1}/>
</RadixThemesFlex>
</Fragment>
)}
</Fragment>
  )
}

export function Fragment_ef7a3b9222a9fcbb88019b8deea39150 () {
  const reflex___state____state__space_apps___state___base____state = useContext(StateContexts.reflex___state____state__space_apps___state___base____state)



  return (
    <Fragment>
  {isTrue(reflex___state____state__space_apps___state___base____state.selectedAnswers[reflex___state____state__space_apps___state___base____state.curQuestionNum]) ? (
  <Fragment>
  {isTrue(((reflex___state____state__space_apps___state___base____state.get_cur_type) === ("slider"))) ? (
  <Fragment>
  <RadixThemesText as={`p`} css={{"textAlign": "center"}}>
  {`${reflex___state____state__space_apps___state___base____state.selectedAnswers[reflex___state____state__space_apps___state___base____state.curQuestionNum]} ${reflex___state____state__space_apps___state___base____state.get_cur_unit}`}
</RadixThemesText>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
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

export function Dialog__root_8364c727995216c712e731a2b68b3e34 () {
  const reflex___state____state__space_apps___state___base____state = useContext(StateContexts.reflex___state____state__space_apps___state___base____state)



  return (
    <RadixThemesDialog.Root open={reflex___state____state__space_apps___state___base____state.loading}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title css={{"textAlign": "center"}}>
  {`Finding your exoplanet...`}
</RadixThemesDialog.Title>
  <img src={`../../loading_screen.gif`}/>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
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
  <RadixThemesBox css={{"display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "width": "100%", "height": "100%", "margin": "0 auto"}}>
  <ReactPlayer controls={false} css={{"objectFit": "cover", "position": "fixed", "top": "-10vh", "left": "-10vw", "zIndex": "-1"}} height={`120vh`} loop={true} muted={true} playing={true} url={`https://github.com/user-attachments/assets/8a413b5d-ce7a-4a18-a2de-b151f4407f9c`} width={`120vw`}/>
  <RadixThemesBox css={{"background": "rgba(0, 0, 0, 0.7)", "position": "fixed", "top": "0", "left": "20%", "width": "60vw", "height": "40vh", "zIndex": "-1"}}/>
  <RadixThemesContainer css={{"padding": "16px"}} size={`3`}>
  <Fragment>
  <Fragment_4f76ce679fe3f873350a3296e156bdbd/>
  <Fragment_ef7a3b9222a9fcbb88019b8deea39150/>
  <RadixThemesFlex justify={`end`}>
  <Fragment_21dae34e4c8ac7d39830802b0d18e2e4/>
</RadixThemesFlex>
  <Dialog__root_8364c727995216c712e731a2b68b3e34/>
</Fragment>
</RadixThemesContainer>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Generate Quiz`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</ErrorBoundary>
  )
}
