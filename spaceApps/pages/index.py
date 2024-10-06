import reflex as rx
from ..components.base_page import base_page


import reflex as rx
from ..components.base_page import base_page
from .. import navigation

PAGES : list[list[str]]= [[navigation.routes.GENERATE_ROUTE, "Build your own exoplanet!"], [navigation.routes.EXPLORE_ROUTE, "Search and filter exoplanets!"],
                          [navigation.routes.LEARN_ROUTE, "Learn about key exoplanet features!"], [navigation.routes.ABOUT_ROUTE, "Meet the team!"]]

def index():
    return base_page(
        rx.box(
            # Video background
            rx.video(
                url="https://github.com/user-attachments/assets/8a413b5d-ce7a-4a18-a2de-b151f4407f9c",
                playing=True,
                loop=True,
                controls=False,
                muted=True,
                width="120vw",
                height="120vh",
                object_fit="cover",
                position="fixed",
                top="-10vh",
                left="-10vw",
                z_index="-1",
            ),
            # Centering the image
            rx.image(
                src="../../new_logo.png",
                width="80%",  # Set width to 80%
                margin="auto",  # Center the image
            ),
            # Centering the grid
            rx.grid(
                rx.card(
                        rx.link(rx.heading("Build your own exoplanet!", size="6"), href=navigation.routes.GENERATE_ROUTE),
                        text_align="center"
                    ),
                rx.card(
                    rx.link(rx.heading("Search and filter exoplanets!", size="6"), href=navigation.routes.EXPLORE_ROUTE),
                    text_align="center"
                ),
                rx.card(
                    rx.link(rx.heading("Learn about key exoplanet features!", size="6"), href=navigation.routes.LEARN_ROUTE),
                    text_align="center"
                ),
                rx.card(
                    rx.link(rx.heading("Meet the team!", size="6"), href=navigation.routes.ABOUT_ROUTE),
                    text_align="center"
                ),
                columns="2",
                spacing="4",
                width="100%",
            ),
            display="flex",
            flex_direction="column",
            justify_content="center",
            align_items="center",
            width="80%",
            height="100%",
            margin="0 auto",
        )
    )