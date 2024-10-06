import reflex as rx

from ..components import base_page, data_table
from ..navigation import NavState
from ..state import ExoplanetState

def meet_an_exoplanet():
    return base_page(
        rx.box(
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
            rx.box(
                background="rgba(0, 0, 0, 0.7)",
                position="fixed",
                top="0",
                left="20%",
                width="60vw",
                height="100vh",
                z_index="-1",  # Place overlay above video
            ),
            rx.container(
                rx.button("Back", on_click=NavState.return_to_prev),
                rx.spinner(loading=ExoplanetState.current_exoplanet["host_name"] == ""),
                rx.heading(ExoplanetState.current_exoplanet["name"],
                           text_align="center"),
                rx.flex(
                    rx.text(ExoplanetState.generate_description),
                    spacing="7",
                    padding="5%",
                    justify="between",
                    align="start"
                ),
                data_table(ExoplanetState.get_exoplanet_data),
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

