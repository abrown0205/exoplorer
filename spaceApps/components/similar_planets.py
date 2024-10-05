import reflex as rx

from . import data_table
from ..navigation import NavState
from ..navigation.routes import MEET_AN_EXOPLANET_ROUTE
from ..state import GenerateState, ExoplanetState


def similar_planets_box():
    return rx.vstack(
        rx.heading("Now, see a real life exoplanet that shares features of your exoplanet!"),
        rx.hstack(
            rx.box(
                rx.vstack(
                    rx.link(rx.heading(ExoplanetState.current_exoplanet["name"]),
                            on_click=NavState.set_current_as_back(),
                            href=MEET_AN_EXOPLANET_ROUTE),
                    rx.cond(ExoplanetState.current_exoplanet["picture_path"] != "",
                            rx.image(src=ExoplanetState.current_exoplanet["picture_path"],
                                     width="100%",
                                     height="auto")
                            )
                ),
                width="40%",
            ),
            rx.box(
                data_table(ExoplanetState.get_summary_data),
                width="60%",
            ),
            align="center",
            spacing="4",
            padding="5%",
            border="solid",
            border_color="gray",
            border_radius="10px"
        ),
        margin_top="10%"
    )
