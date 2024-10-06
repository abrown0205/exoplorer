import reflex as rx

from ..components import base_page
from ..navigation.routes import MY_EXO_ROUTE, QUIZ_ROUTE, EXAMPLES_ROUTE
from ..state import GenerateState


def generate():
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
            rx.flex(
                rx.card(
                    rx.vstack(
                        rx.link(rx.heading("Generate an Exoplanet"),
                                href=QUIZ_ROUTE,
                                text_align="center",
                                margin="auto"),
                        rx.text("Take a short quiz to generate your own exoplanet",
                                text_align="center")
                    ),
                    width="25%",
                    min_height="150px",
                    justify="center"
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
                    min_height="150px"
                ),
                rx.cond(
                    GenerateState.generated_data["description"] != "",
                    rx.card(
                        rx.vstack(
                            rx.link(rx.heading("View My Exoplanet"),
                                    on_click=GenerateState.load_existing_planet,
                                    margin="auto"),
                            rx.text("Revisit your previously generated exoplanet",
                                    text_align="center")
                        ),
                        width="25%",
                        min_height="150px"
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
    )
