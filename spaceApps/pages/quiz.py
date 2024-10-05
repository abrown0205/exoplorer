import reflex as rx

from spaceApps.components import base_page, quiz


def quiz_page():
    return base_page(
        rx.container(
                    quiz(),
                ),
    )