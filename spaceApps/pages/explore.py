import reflex as rx
from ..components.sidebar import sidebar
from ..components.base_page import base_page
from ..components.explore_display import image_display
from ..state.explore_state import OptionsState
from .. import styles
import random



def explore():
    return base_page(
        rx.flex(
            sidebar(),
            rx.center(
                rx.vstack(
                    image_display()
                )
            ),
            flex_direction=["column", "column", "column", "row"],
            position="relative",
            width="100%",
            height="100%",
            bg=rx.color("gray", 1),
        ),
    )