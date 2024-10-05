import reflex as rx

from ..backend.exoplanets import get_saved_exoplanet
from ..components import base_page
from ..navigation.routes import MY_EXO_ROUTE, QUIZ_ROUTE, EXAMPLES_ROUTE
from ..state import GenerateState


def generate():
    return base_page(
        rx.flex(
            rx.card(
                rx.vstack(
                    rx.link(rx.heading("Generate an Exoplanet"),
                            href=QUIZ_ROUTE,
                            margin="auto"),
                    rx.text("Take a short quiz to generate your own exoplanet",
                            text_align="center")
                ),
                width="25%",
                min_height="125px"
            ),
            rx.card(
                rx.vstack(
                    rx.link(rx.heading("See Some Examples"),
                            href=EXAMPLES_ROUTE,
                            margin="auto"),
                    rx.text("Look at some examples from your favorite sci-fi franchises",
                            text_align="center")
                ),
                width="25%",
                min_height="125px"
            ),
            rx.cond(
                GenerateState.generated_data["description"] != "",
                rx.card(
                    rx.vstack(
                        rx.link(rx.heading("View My Exoplanet"),
                                href=MY_EXO_ROUTE,
                                margin="auto"),
                        rx.text("Revisit your previously generated exoplanet",
                                text_align="center")
                    ),
                    width="25%",
                    min_height="125px"
                )
            ),
            width="100%",
            justify="center",
            align="center",
            min_height="100%",
            flex_direction=["column", "column", "row"],
            spacing="6",
        ),
        flex="1",
        display="flex"
    )
