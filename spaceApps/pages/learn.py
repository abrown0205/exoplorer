import reflex as rx
from ..components.base_page import base_page
from ..components.bio_box import bio_box, card_box, method_box, definitions_box

METHODS : list[dict[str, str]]= [
    {
        "Name": "Transit Method",
        "Text": "Popularized by NASA's Kepler Space Telescope, launched in 2009, this method detects exoplanets by monitoring the dimming of a star’s light when a planet passes in front of it. This method allows astronomers to determine the planet's size and orbit.",
        "picture_path": "https://svs.gsfc.nasa.gov/vis/a010000/a013000/a013022/Exoplanet_Single_Transit-HD_1080p.webm"
    },
    {
        "Name": "Radial Velocity (Doppler Method)",
        "Text": "Introduced by Michel Mayor and Didier Queloz in 1995 with their discovery of 51 Pegasi b, this technique measures the wobble of a star caused by the gravitational pull of an orbiting planet. The resulting shifts in the star's light spectrum help estimate the planet's mass and distance from the star.",
        "picture_path": "https://science.nasa.gov/wp-content/uploads/2023/09/radial_velocity.mp4"
    },
    {
        "Name": "Direct Imaging",
        "Text": "Although theorized for years, significant advancements were made with telescopes like the Very Large Telescope and Hubble. The first confirmed direct image of an exoplanet, 2M1207b, was captured in 2004 by Amanda S. B. D. Strubbe and her team. This method involves taking pictures of exoplanets by blocking out the light from their host stars.",
        "picture_path": "https://science.nasa.gov/wp-content/uploads/2023/10/direct-imaging-video.mp4"
    },
    {
        "Name": "Gravitational Microlensing",
        "Text": "Proposed in the 1990s by Robert A. Caldwell, this technique uses the gravitational field of a foreground star to magnify the light from a more distant star. If a planet orbits the foreground star, it can create distinctive light patterns that indicate the planet's presence. The first successful observation was made in 2004 by David Bennett and others.",
        "picture_path": "https://svs.gsfc.nasa.gov/vis/a020000/a020200/a020242/WFIRST_Microlensing_H264_1080p.webm"
    },
    {
        "Name": "Astrometry",
        "Text": "This method has roots in the early 19th century, with Friedrich Bessel laying the groundwork. It involves measuring the precise movements of a star in the sky. If a star wobbles due to an orbiting planet, it can reveal the planet\s existence. Recent advancements, especially with the Gaia mission, have enhanced this method’s effectiveness.",
        "picture_path": "https://science.nasa.gov/wp-content/uploads/2023/09/astrometry.mp4"
    },
    {
        "Name": "Timing Variations Method",
        "Text": "Transit Timing Variations (TTVs): If a known planet transits (passes in front of) its host star, astronomers can measure the exact time of each transit. If there is a second, unseen planet in the system, its gravitational pull will slightly alter the orbit of the known planet, causing the timing of the transits to shift from one transit to the next.",
        "picture_path": "https://upload.wikimedia.org/wikipedia/commons/transcoded/9/96/201008-2a_PlanetOrbits_16x9-_Transit_timing_of_1-planet_vs_2-planet_systems.ogv/201008-2a_PlanetOrbits_16x9-_Transit_timing_of_1-planet_vs_2-planet_systems.ogv.720p.vp9.webm"
    }
]


about: dict[str, str] = {
    "title": "What is an exoplanet?",
    "text": "An exoplanet, or extrasolar planet, is a planet that orbits a star outside our solar system, like the ones we see in our night sky. These planets can vary widely in size and composition, ranging from massive gas giants to smaller, rocky worlds. Scientists have discovered thousands of exoplanets using various techniques, such as observing changes in starlight when a planet passes in front of its star. Studying exoplanets is important because it helps us understand how different planetary systems form and whether conditions for life exist beyond Earth. As we continue to explore these distant worlds, we gain insights into the vast possibilities of our universe.",
    "image":"../../exoplanets.jpg"
}

definitions: dict[str, str] = {
    "title": "Important Exoplanet Definitions!",
    "text": """Astrobiology: The study of the potential for life in the universe, including the search for habitable conditions on exoplanets. \n
            Atmosphere: The layer of gases surrounding a planet, which can influence climate, weather, and potential habitability.\n
            Atmospheric Composition: The gases present in an exoplanet’s atmosphere that can indicate potential habitability and climate.\n
            Biosignature: A chemical or physical indicator that suggests the presence of life, such as specific gases in an exoplanet's atmosphere.\n
            Eccentricity of Orbit: The shape of an exoplanet's orbit can affect its climate and seasonal changes.\n
            Exoplanet: A planet that orbits a star outside our solar system.\n
            Gas Giant: A large planet composed mostly of gases, with no definitive solid surface, such as Jupiter or Saturn.\n
            Habitable Zone: The region around a star where conditions might allow liquid water to exist on a planet's surface.\n
            Hot Jupiter: A class of exoplanets that are gas giants, orbiting very close to their host stars, resulting in high surface temperatures.\n
            Magnetic Field: The presence of a magnetic field can protect a planet from stellar radiation and help maintain its atmosphere.\n
            Orbital Distance: The distance of an exoplanet from its host star, influencing its climate and atmospheric conditions.\n
            Rotation Period: The time it takes for an exoplanet to complete one rotation on its axis, affecting its weather patterns and day-night cycle.\n
            Star Type: The type of star an exoplanet orbits, which can determine the conditions for potential habitability.\n
            Super-Earth: A type of exoplanet with a mass larger than Earth's but smaller than that of gas giants like Neptune.\n
            Tidal Locking: Some exoplanets may be tidally locked, meaning one side always faces the star, creating extreme temperature differences.""",
    "image": "None"
}

def learn():
    return base_page(
        rx.container(
            rx.heading("Learn About Exoplanets!", size="8",
                text_align="center",
                margin_bottom="2%"),
            rx.box(
                card_box(about),
                margin_bottom= "1em",
                width="100%",
                size = "10"
            ),
            rx.heading("Exoplanet Discovery Methods",
                size="6",
                text_align="center",
                margin="2%",),
            rx.grid(
                *[method_box(method) for method in METHODS],  # Use method_box here
                grid_template_columns=[
                    "repeat(2, 1fr)"
                ],
                grid_auto_flow="row",
                spacing="7",
                margin_bottom="1em",
                justify_items="center",  
                justify_content="center",
            ),
            rx.heading("Important Exoplanet Definitions",
                size="6",
                text_align="center",
                margin="2%",
            ),
            rx.box(
                definitions_box()
            ),
            # rx.box(
            #     card_box(definitions),
            #     width = "100%",
            #     margin_bottom= "1em",
            # ),
            rx.heading("Timeline of Important Events",
                size="6",
                text_align="center",
                margin="2%",),
            rx.box(
                rx.image(src = "../../timeline.png", style={"position": "relative", "left": "-135px", "min-width": "1400px", "border-radius": "5px"})
            ),
            size = "10"
        )
    )