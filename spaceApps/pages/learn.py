import reflex as rx
from ..components.base_page import base_page


def learn():
    return base_page(
        rx.text("learn")
    )