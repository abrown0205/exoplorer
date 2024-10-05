import reflex as rx

from spaceApps.components import base_page, mode_switch, quiz


def quiz_page():
    return base_page(
        rx.container(
                    mode_switch(),
                    quiz(),
                ),
    )