import reflex as rx
from ..state.base import State

def mode_switch():
    return rx.flex (
            rx.text(State.junior_mode_enabled),
            rx.switch(
                checked=State.junior_mode_enabled,
                on_change=State.change_mode),
            rx.cond(
                State.junior_mode_enabled,
                rx.text("Junior Explorer Mode"),
                rx.text("Senior Explorer Mode"),
            ),
            spacing="2",
            id="mode-switch",
            justify="end",
            align="center",
            padding="1%"
        )