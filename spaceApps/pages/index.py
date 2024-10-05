import reflex as rx
from ..components.base_page import base_page


def index():
    return base_page(
        rx.flex(
            rx.image(
                src="../../big_logo-v1.png",
                width="75%",
                margin="auto",
                align="center",
                justify="center"

            )
        )
    )

