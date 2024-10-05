import reflex as rx
from .. import navigation

def navbar_link(text: str, url: str) -> rx.Component:
    return rx.link(
        rx.text(text, size="4", weight="medium"), href=url
    )


def navbar() -> rx.Component:
    return rx.box(
        rx.desktop_only(
            rx.hstack(
                rx.hstack(
                    rx.link(
                        rx.image(
                            src="../../logo.png",
                            width="2.25em",
                            height="auto",
                            border_radius="25%",
                        ), href=navigation.routes.HOME_ROUTE
                    ),
                    rx.link(
                        rx.heading(
                        "Exo-plorer", size="7", weight="bold"
                        ),
                        href=navigation.routes.HOME_ROUTE
                    ),
                    align_items="center",
                ),
                rx.hstack(
                    navbar_link("Generate", navigation.routes.GENERATE_ROUTE),
                    navbar_link("Explore", navigation.routes.EXPLORE_ROUTE),
                    navbar_link("Learn", navigation.routes.LEARN_ROUTE),
                    navbar_link("About", navigation.routes.ABOUT_ROUTE),
                    rx.color_mode.button(
                        style={"padding": "0", "height": "1.15em", "width": "1.15em"},
                    ),
                    align="center",
                    justify="end",
                    spacing="5",
                ),
                justify="between",
                align_items="center",
            ),
        ),
        rx.mobile_and_tablet(
            rx.hstack(
                rx.hstack(
                    rx.link(
                        rx.image(
                            src="../../logo.png",
                            width="2em",
                            height="auto",
                            border_radius="25%",
                        ), href=navigation.routes.HOME_ROUTE
                    ),
                    rx.link(
                        rx.heading(
                            "Exo-plorer", size="7", weight="bold"
                        ),
                        href=navigation.routes.HOME_ROUTE
                    ),
                    align_items="center",
                ),
                rx.menu.root(
                    rx.menu.trigger(
                        rx.icon("menu", size=30)
                    ),
                    rx.menu.content(
                        rx.menu.item("Generate", on_click=navigation.NavState.to_generate),
                        rx.menu.item("Explore", on_click=navigation.NavState.to_explore),
                        rx.menu.item("Learn", on_click=navigation.NavState.to_learn),
                        rx.menu.item("About", on_click=navigation.NavState.to_about),
                        rx.color_mode.button(
                            style={"padding": "0", "height": "1.15em", "width": "1.15em", "margin": "auto"},
                        ),
                    ),
                    justify="end",
                ),
                justify="between",
                align_items="center",
            ),
        ),
        bg=rx.color("accent", 3),
        padding="1em",
        width="100%",
        id="nav-bar",
    )