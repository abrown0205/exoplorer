import reflex as rx


def tinted_image(src: str, tint_color: str = "rgba(0, 0, 0, 0.5)"):
    return rx.box(
        rx.image(src=src, width="100%", height="auto", position="absolute", z_index=1,
                 object_fit="cover"),
        rx.box(
            width="100%", height="100%",
            background_color=tint_color,  # Set the tint color here
            position="absolute",
            z_index=2,
        ),
        object_fit="cover",
        position="relative",
        overflow="hidden",  # Ensure the image and overlay fit within the box
    )

