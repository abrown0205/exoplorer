import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"reflex___state____state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "reflex___state____state.space_apps___state___exoplanet_state____exoplanet_state": {"current_exoplanet": {"name": "", "description": "", "host_star": "", "discovery_method": "", "discovery_year": "", "discovery_facility": "", "distance": 0.0, "mass": 0.0, "radius": 0.0, "orbital_period": 0.0, "semimajor_axis": 0.0, "eccentricity": 0.0, "inclination": 0.0, "temperature": 0.0, "density": 0.0, "star_mass": 0.0, "star_radius": 0.0, "star_temp": 0.0, "star_metallicity": 0.0}, "generate_description": " is an exoplanet in the  system that was discovered in . It is about 0.0 parsecs from our solar system, meaning it would take about 0.0 years to get there if you could travel at the speed of light!  has a much smaller radius than Earth, with a radius of 0.0 Earth Radii. To learn more information about , see the data in the table below.", "get_exoplanet_data": [["Host Star", "The star that this planet is orbiting", ""], ["Discovery Method", "The method used to discover this planet", ""], ["Discovery Year", "The year this planet was discovered", ""], ["Discovery Facility", "The facility this planet was discovered at", ""], ["Radius (Earth Radii)", "The size of this planet, measured in Earth radii (R⊕)", 0.0], ["Mass (Jupiter Masses)", "The gravitational influence this planet exerts, in terms of Jupiter masses (M♃)", 0.0], ["Orbital Period (days)", "The time it takes for this planet to complete one full orbit around its host star in days", 0.0], ["Distance From Earth (pc)", "How far this planet is from Earth, in parsecs (1pc=~3.26 lightyears)", 0.0], ["Semi-Major Axis (AU)", "The average distance between this planet and its host star, typically measured in astronomical units (AU). An astronomical unit (AU) is defined as the average distance from the Earth to the Sun.", 0.0], ["Eccentricity", "The deviation of this planet's orbit from a perfect circle. Values range from 0 (circular) to 1 (parabolic),", 0.0], ["Orbital Inclination (deg)", "The tilt of this planet's orbit relative to the plane of the solar system", 0.0], ["Equilibrium Temperature (K)", "The temperature of this planet", 0.0], ["Planet Density (g/cm³)", "The density of this planet, calculated using the its mass and volume and can provide insights into whether a planet is rocky, gaseous, or a mixture of both.", 0.0], ["Host Star Mass (Solar Masses)", "The gravitational influence this planet's host star exerts, in terms of Solar masses (M⊙)", 0.0], ["Host Star Radius (Solar Radii)", "The size of this planet's host star, measured in Solar radii (R⊙)", 0.0], ["Host Star Effective Temperature (K)", "The temperature of this planet's host star", 0.0], ["Host Star Metallicity", "The abundance of elements heavier than hydrogen and helium in this planet's host star", 0.0]], "get_summary_data": [["Radius (Earth Radii)", "The size of this planet, measured in Earth radii (R⊕)", 0.0], ["Mass (Jupiter Masses)", "The gravitational influence this planet exerts, in terms of Jupiter masses (M♃)", 0.0], ["Orbital Period (days)", "The time it takes for this planet to complete one full orbit around its host star in days", 0.0], ["Distance From Earth (pc)", "How far this planet is from Earth, in parsecs (1pc=~3.26 lightyears)", 0.0], ["Semi-Major Axis (AU)", "The average distance between this planet and its host star, typically measured in astronomical units (AU). An astronomical unit (AU) is defined as the average distance from the Earth to the Sun.", 0.0], ["Equilibrium Temperature (K)", "The temperature of this planet", 0.0]], "matched_exoplanet": {"name": "", "description": "", "host_star": "", "discovery_method": "", "discovery_year": "", "discovery_facility": "", "distance": 0.0, "mass": 0.0, "radius": 0.0, "orbital_period": 0.0, "semimajor_axis": 0.0, "eccentricity": 0.0, "inclination": 0.0, "temperature": 0.0, "density": 0.0, "star_mass": 0.0, "star_radius": 0.0, "star_temp": 0.0, "star_metallicity": 0.0}, "questions": {}, "selectedAnswers": {}}, "reflex___state____state.space_apps___state___generate_state____generate_state": {"generated_data": {"description": "", "color": "", "terrain": "", "host_star": "", "discovery_method": "", "discovery_year": "", "discovery_facility": "", "distance": 0.0, "mass": 0.0, "radius": 0.0, "orbital_period": 0.0, "semimajor_axis": 0.0, "eccentricity": 0.0, "inclination": 0.0, "temperature": 0.0, "density": 0.0, "star_mass": 0.0, "star_radius": 0.0, "star_temp": 0.0, "star_metallicity": 0.0, "picture_path": ""}, "generated_name": "My Awesome Exoplanet", "get_generated_data": [["Radius (Earth Radii)", "The size of this planet, measured in Earth radii (R⊕)", 0.0], ["Mass (Jupiter Masses)", "The gravitational influence this planet exerts, in terms of Jupiter masses (M♃)", 0.0], ["Orbital Period (days)", "The time it takes for this planet to complete one full orbit around its host star in days", 0.0], ["Distance From Earth (pc)", "How far this planet is from Earth, in parsecs (1pc=~3.26 lightyears)", 0.0], ["Semi-Major Axis (AU)", "The average distance between this planet and its host star, typically measured in astronomical units (AU). An astronomical unit (AU) is defined as the average distance from the Earth to the Sun.", 0.0], ["Equilibrium Temperature (K)", "The temperature of this planet", 0.0]], "questions": {}, "selectedAnswers": {}, "updated_description": ""}, "reflex___state____state.reflex___state____update_vars_internal_state": {}, "reflex___state____state.space_apps___navigation___state____nav_state": {"back_href": "/"}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.space_apps___state___explore_state____options_state": {"advanced_options_open": false, "data_list": [], "distance": [1, 8500], "distance_max": 8500, "distance_min": 1, "filtered_planets": [], "guidance_scale": 0, "hover": false, "is_filtered": false, "is_selected": false, "mass": [0, 282], "mass_max": 282, "mass_min": 0, "negative_prompt": "deformed, distorted, disfigured, poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, mutated hands and fingers, disconnected limbs, mutation, mutated, ugly, disgusting, blurry, amputation, text, watermark, signature", "num_outputs": 1, "orb_period": [0, 402000000], "orb_period_max": 402000000, "orb_period_min": 0, "prompt": "", "radius": [0, 78], "radius_max": 78, "radius_min": 0, "scheduler": "K_EULER", "seed": 0, "selected_style": "Cinematic", "steps": 4, "year": [1992, 2024], "year_max": 2024, "year_min": 1992}, "reflex___state____state.space_apps___state___base____state": {"curQuestionNum": 0, "getMax": null, "getMin": null, "getSelectedAnswer": null, "get_cur_answers": ["Gas Giant", "Super Earth", "Ice Ball", "Lava Landscape"], "get_cur_meaning": "terrain", "get_cur_question": "What is the terrain of your exoplanet?", "get_cur_type": "mc", "get_cur_unit": "", "get_question_max": "Super Earth", "get_question_min": "Gas Giant", "load_questions": null, "loading": false, "max_question_num": 5, "questions": {}, "selectedAnswers": {}}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}, "reflex___state____state.space_apps___state___example_state____example_state": {"example_data": {"name": "", "description": "", "distance": 0.0, "mass": 0.0, "radius": 0.0, "orbital_period": 0.0, "semimajor_axis": 0.0, "eccentricity": 0.0, "inclination": 0.0, "temperature": 0.0, "density": 0.0, "picture_path": "", "matched_exoplanet_name": ""}, "get_example_data": [["Radius (Earth Radii)", "The size of this planet, measured in Earth radii (R⊕)", 0.0], ["Mass (Jupiter Masses)", "The gravitational influence this planet exerts, in terms of Jupiter masses (M♃)", 0.0], ["Orbital Period (days)", "The time it takes for this planet to complete one full orbit around its host star in days", 0.0], ["Distance From Earth (pc)", "How far this planet is from Earth, in parsecs (1pc=~3.26 lightyears)", 0.0], ["Semi-Major Axis (AU)", "The average distance between this planet and its host star, typically measured in astronomical units (AU). An astronomical unit (AU) is defined as the average distance from the Earth to the Sun.", 0.0], ["Equilibrium Temperature (K)", "The temperature of this planet", 0.0]]}}

export const defaultColorMode = "dark"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  reflex___state____state: createContext(null),
  reflex___state____state__space_apps___state___exoplanet_state____exoplanet_state: createContext(null),
  reflex___state____state__space_apps___state___generate_state____generate_state: createContext(null),
  reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),
  reflex___state____state__space_apps___navigation___state____nav_state: createContext(null),
  reflex___state____state__reflex___state____on_load_internal_state: createContext(null),
  reflex___state____state__space_apps___state___explore_state____options_state: createContext(null),
  reflex___state____state__space_apps___state___base____state: createContext(null),
  reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),
  reflex___state____state__space_apps___state___example_state____example_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {"reflex___state____state.space_apps___state___generate_state____generate_state.generated_name": {"path": "/", "sameSite": "lax"}}, "local_storage": {}, "session_storage": {}}

export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// Theses events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            Event(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(Event('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    Event('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export const lastCompiledTimeStamp = "2024-10-06 00:16:35.898524"

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectErrors]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
  const [reflex___state____state__space_apps___state___exoplanet_state____exoplanet_state, dispatch_reflex___state____state__space_apps___state___exoplanet_state____exoplanet_state] = useReducer(applyDelta, initialState["reflex___state____state.space_apps___state___exoplanet_state____exoplanet_state"])
  const [reflex___state____state__space_apps___state___generate_state____generate_state, dispatch_reflex___state____state__space_apps___state___generate_state____generate_state] = useReducer(applyDelta, initialState["reflex___state____state.space_apps___state___generate_state____generate_state"])
  const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
  const [reflex___state____state__space_apps___navigation___state____nav_state, dispatch_reflex___state____state__space_apps___navigation___state____nav_state] = useReducer(applyDelta, initialState["reflex___state____state.space_apps___navigation___state____nav_state"])
  const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
  const [reflex___state____state__space_apps___state___explore_state____options_state, dispatch_reflex___state____state__space_apps___state___explore_state____options_state] = useReducer(applyDelta, initialState["reflex___state____state.space_apps___state___explore_state____options_state"])
  const [reflex___state____state__space_apps___state___base____state, dispatch_reflex___state____state__space_apps___state___base____state] = useReducer(applyDelta, initialState["reflex___state____state.space_apps___state___base____state"])
  const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
  const [reflex___state____state__space_apps___state___example_state____example_state, dispatch_reflex___state____state__space_apps___state___example_state____example_state] = useReducer(applyDelta, initialState["reflex___state____state.space_apps___state___example_state____example_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
      "reflex___state____state.space_apps___state___exoplanet_state____exoplanet_state": dispatch_reflex___state____state__space_apps___state___exoplanet_state____exoplanet_state,
      "reflex___state____state.space_apps___state___generate_state____generate_state": dispatch_reflex___state____state__space_apps___state___generate_state____generate_state,
      "reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
      "reflex___state____state.space_apps___navigation___state____nav_state": dispatch_reflex___state____state__space_apps___navigation___state____nav_state,
      "reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
      "reflex___state____state.space_apps___state___explore_state____options_state": dispatch_reflex___state____state__space_apps___state___explore_state____options_state,
      "reflex___state____state.space_apps___state___base____state": dispatch_reflex___state____state__space_apps___state___base____state,
      "reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
      "reflex___state____state.space_apps___state___example_state____example_state": dispatch_reflex___state____state__space_apps___state___example_state____example_state,
    }
  }, [])

  return (
    <StateContexts.reflex___state____state.Provider value={ reflex___state____state }>
    <StateContexts.reflex___state____state__space_apps___state___exoplanet_state____exoplanet_state.Provider value={ reflex___state____state__space_apps___state___exoplanet_state____exoplanet_state }>
    <StateContexts.reflex___state____state__space_apps___state___generate_state____generate_state.Provider value={ reflex___state____state__space_apps___state___generate_state____generate_state }>
    <StateContexts.reflex___state____state__reflex___state____update_vars_internal_state.Provider value={ reflex___state____state__reflex___state____update_vars_internal_state }>
    <StateContexts.reflex___state____state__space_apps___navigation___state____nav_state.Provider value={ reflex___state____state__space_apps___navigation___state____nav_state }>
    <StateContexts.reflex___state____state__reflex___state____on_load_internal_state.Provider value={ reflex___state____state__reflex___state____on_load_internal_state }>
    <StateContexts.reflex___state____state__space_apps___state___explore_state____options_state.Provider value={ reflex___state____state__space_apps___state___explore_state____options_state }>
    <StateContexts.reflex___state____state__space_apps___state___base____state.Provider value={ reflex___state____state__space_apps___state___base____state }>
    <StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state.Provider value={ reflex___state____state__reflex___state____frontend_event_exception_state }>
    <StateContexts.reflex___state____state__space_apps___state___example_state____example_state.Provider value={ reflex___state____state__space_apps___state___example_state____example_state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.reflex___state____state__space_apps___state___example_state____example_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state.Provider>
    </StateContexts.reflex___state____state__space_apps___state___base____state.Provider>
    </StateContexts.reflex___state____state__space_apps___state___explore_state____options_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____on_load_internal_state.Provider>
    </StateContexts.reflex___state____state__space_apps___navigation___state____nav_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____update_vars_internal_state.Provider>
    </StateContexts.reflex___state____state__space_apps___state___generate_state____generate_state.Provider>
    </StateContexts.reflex___state____state__space_apps___state___exoplanet_state____exoplanet_state.Provider>
    </StateContexts.reflex___state____state.Provider>
  )
}