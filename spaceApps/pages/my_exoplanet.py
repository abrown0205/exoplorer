import reflex as rx

from ..components.similar_planets import similar_planets_box
from ..navigation import NavState
from ..navigation.routes import GENERATE_ROUTE
from ..state import GenerateState
from ..components import base_page, data_table


def my_exoplanet():
    return base_page(
        rx.container(
            rx.link(rx.button("Back"), href=GENERATE_ROUTE),
            rx.spinner(loading=GenerateState.generated_data["description"] == ""),
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
        )
    )
