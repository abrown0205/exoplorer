import reflex as rx

from ..components.similar_planets import similar_planets_box
from ..navigation import NavState
from ..navigation.routes import GENERATE_ROUTE
from ..state import GenerateState, State
from ..components import base_page, data_table


def my_exoplanet():
    State.reset_loading()
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
                rx.link(rx.button("Back"), href=GENERATE_ROUTE),
                rx.heading(
                    rx.input(
                        value=GenerateState.generated_name,
                        on_change=GenerateState.set_name,
                        width="50%",
                        height="auto",
                        margin="auto",
                        text_align="center",
                        font_size="30px"
                    )),
                rx.flex(
                    rx.image(src=GenerateState.generated_data["picture_path"],
                             min_width="250px",
                             height="auto", ),
                    rx.text(GenerateState.updated_description),

                    spacing = "9",
                    padding="5%",
                    justify="between",
                    align="center"
                ),
                data_table(GenerateState.get_generated_data),
                similar_planets_box()
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
