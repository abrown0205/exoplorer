import reflex as rx
from ..components.base_page import base_page
from ..components.carousel import Carousel


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
            # rx.box(
            #     rx.image(src="https://images-assets.nasa.gov/image/carina_nebula/carina_nebula~orig.png",
            #              width="100%",
            #              height="350px",
            #              object_fit="cover"),
            #     rx.heading(
            #         "Exo-plorer",
            #         position="absolute",
            #         top="50%",
            #         left="50%",
            #         transform="translate(-50%, -50%)",
            #         color="white",
            #         font_family="Zekton",
            #         size="9",
            #     ),
            #     position="relative",
            # )
    )

