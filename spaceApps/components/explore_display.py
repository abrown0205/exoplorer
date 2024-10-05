import reflex as rx
from ..state.explore_state import OptionsState
from .. import styles

def image_display() -> rx.Component:
    return rx.box(
            rx.box(
                rx.image(src="../../milkyway.jpg", width="93.7em", height="auto", slot="first"),
                position="relative",
                width="93.7em",
                height="auto",
            ),
            rx.foreach(
                OptionsState.filtered_planets,
                lambda item: rx.tooltip (
                    rx.button(
                        "",
                        position="absolute",
                        top=item[2],
                        left=item[1],
                        width="2em",
                        height="2em",
                        border_radius="50%",
                        border="2px solid white",
                        background_color="transparent",
                        color="transparent",
                        cursor="pointer",
                        _hover={
                            "background_color": "white",
                            "color": "black",
                        },
                        on_click=OptionsState.planet_selected(f"{item[0]}")
                    ),
                    content = f"{item[0]}"
                )
            )
        )