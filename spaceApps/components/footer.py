import reflex as rx

def footer():
    return rx.box(
        bg=rx.color("accent", 3),
        padding="2.5%",
        width="100%",
        position="fixed",
        left=0,
        bottom=0,
        id="footer")