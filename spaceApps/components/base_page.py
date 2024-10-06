import reflex as rx

from .navbar import navbar
from .footer import  footer


def base_page(child: rx.Component, *args, **kwargs) -> rx.Component:
    return rx.flex(
        navbar(),
        rx.flex(child,
               padding_bottom="10%",
               flex="1",
               id="content-area"),
        height="100vh",
        display="flex",
        flex_direction="column",
        id="base-container",
    )