import reflex as rx

from ..components import base_page, data_table
from ..navigation import NavState
from ..state import ExoplanetState

def meet_an_exoplanet():
    return base_page(
        rx.container(
            rx.button("Back", on_click=NavState.return_to_prev),
            rx.spinner(loading=ExoplanetState.current_exoplanet["host_name"] == ""),
            rx.heading(ExoplanetState.current_exoplanet["name"],
                       text_align="center"),
            rx.flex(
                # rx.cond(ExoplanetState.current_exoplanet["picture_path"] != "",
                #         rx.vstack(
                #             rx.image(src=ExoplanetState.current_exoplanet["picture_path"],
                #                      min_width="250px",
                #                      height="auto", ),
                #             rx.text("This image is artist generated.",
                #                     font_size="8px",
                #                     text_align="center"),
                #             align="center"
                #             ),
                #         ),
                rx.text(ExoplanetState.generate_description),
                spacing="7",
                padding="5%",
                justify="between",
                align="start"
            ),
            data_table(ExoplanetState.get_exoplanet_data),
        ),
    )

