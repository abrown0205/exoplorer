import reflex as rx
from .. import styles
from ..state.explore_state import OptionsState

def sidebar_header() -> rx.Component:
    return rx.hstack(
        rx.icon("telescope", color = "red"),
        rx.spacer(),
        align="center",
        width="100%",
        border_bottom=styles.border,
        padding="1em",
    )
    
def generate_button() -> rx.Component:
    return rx.box(
        rx.button(
            rx.icon("sparkles", size=18),
            "Search",
            size="3",
            cursor="pointer",
            width="100%",
            on_click=OptionsState.filter_exoplanets,
        ),
        position="sticky",
        bottom="0",
        padding="1em",
        bg=rx.color("gray", 2),
        border_top=styles.border,
        width="100%",
    )

def prompt_input() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.icon("type", size=17, color=rx.color("green", 9)),
            rx.text("Prompt", size="3"),
            rx.spacer(),
            rx.hstack(
                rx.cond(
                    OptionsState.prompt,
                    rx.icon(
                        "eraser",
                        size=20,
                        color=rx.color("gray", 10),
                        cursor="pointer",
                        _hover={"opacity": "0.8"},
                        on_click=OptionsState.setvar("prompt", ""),
                    ),
                ),
                spacing="4",
                align="center",
            ),
            spacing="2",
            align="center",
            width="100%",
        ),
        rx.text_area(
            placeholder="What do you want to see?",
            width="100%",
            size="3",
            value=OptionsState.prompt,
            on_change=OptionsState.set_prompt,
        ),
        width="100%",
    )


def radius_selector() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.icon("radius", size=17, color=rx.color("blue", 9)),
            rx.text("Planet Radius", size="3"),
            rx.spacer(),
            rx.text(f"Min: {OptionsState.radius[0]}, Max: {OptionsState.radius[1]}", size="3"),
            spacing="2",
            align="center",
            width="100%",
        ),
        rx.slider(
            min=OptionsState.radius_min,
            max=OptionsState.radius_max,
            size="1",
            step = 5,
            default_value=OptionsState.radius,
            on_change=OptionsState.set_radius,
        ),
        rx.hstack(
            rx.icon("circle", size=10, color=rx.color("gray", 9)),
            rx.icon("circle", size=22, color=rx.color("gray", 9)),
            position="relative",
            justify="between",
            align="center",
            width="100%",
        ),
        width="100%",
    )

def distance_selector() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.icon("image", size=17, color=rx.color("crimson", 9)),
            rx.text("Distance from Earth", size="3"),
            rx.spacer(),
            rx.text(f"Min: {OptionsState.distance[0]}, Max: {OptionsState.distance[1]}", size="3"),
            spacing="2",
            align="center",
            width="100%",
        ),
        rx.slider(
            min=OptionsState.distance_min,
            max=OptionsState.distance_max,
            size="1",
            step = 100,
            default_value=OptionsState.distance,
            on_change=OptionsState.set_distance,
        ),
        rx.hstack(
            rx.icon("minimize-2", size=22, color=rx.color("gray", 9)),
            rx.icon("maximize-2", size=22, color=rx.color("gray", 9)),
            position="relative",
            justify="between",
            align="center",
            width="100%",
        ),
        width="100%",
    )

def mass_selector() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.icon("weight", size=17, color=rx.color("green", 9)),
            rx.text("Planet Mass", size="3"),
            rx.spacer(),
            rx.text(f"Min: {OptionsState.mass[0]}, Max: {OptionsState.mass[1]}", size="3"),
            spacing="2",
            align="center",
            width="100%",
        ),
        rx.slider(
            min=OptionsState.mass_min,
            max=OptionsState.mass_max,
            size="1",
            step = 5,
            default_value=OptionsState.mass,
            on_change=OptionsState.set_mass,
        ),
        rx.hstack(
            rx.icon("feather", size=22, color=rx.color("gray", 9)),
            rx.icon("anvil", size=22, color=rx.color("gray", 9)),
            position="relative",
            justify="between",
            align="center",
            width="100%",
        ),
        width="100%",
    )

def orbper_selector() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.icon("orbit", size=17, color=rx.color("white", 9)),
            rx.text("Planet Orbital Period", size="3"),
            rx.spacer(),
            rx.text(f"Min: {OptionsState.orb_period[0]}, Max: {OptionsState.orb_period[1]}", size="3"),
            spacing="2",
            align="center",
            width="100%",
        ),
        rx.slider(
            min=OptionsState.orb_period_min,
            max=OptionsState.orb_period_max,
            size="1",
            default_value=OptionsState.orb_period,
            on_change=OptionsState.set_orbper,
        ),
        rx.hstack(
            rx.icon("orbit", size=10, color=rx.color("gray", 9)),
            rx.icon("orbit", size=22, color=rx.color("gray", 9)),
            position="relative",
            justify="between",
            align="center",
            width="100%",
        ),
        width="100%",
    )

def year_selector() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.icon("calendar", size=17, color=rx.color("green", 9)),
            rx.text("Year discovered", size="3"),
            rx.spacer(),
            rx.text(f"Min: {OptionsState.year[0]}, Max: {OptionsState.year[1]}", size="3"),
            spacing="2",
            align="center",
            width="100%",
        ),
        rx.slider(
            min=OptionsState.year_min,
            max=OptionsState.year_max,
            size="1",
            step = 1,
            default_value=OptionsState.year,
            on_change=OptionsState.set_year,
        ),
        rx.hstack(
            rx.icon("calendar-minus-2", size=22, color=rx.color("gray", 9)),
            rx.icon("calendar-plus-2", size=22, color=rx.color("gray", 9)),
            position="relative",
            justify="between",
            align="center",
            width="100%",
        ),
        width="100%",
    )


def _negative_prompt() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.icon("type", size=17, color=rx.color("red", 9)),
            rx.text("Negative Prompt", size="3"),
            rx.tooltip(
                rx.icon(
                    "info",
                    size=15,
                    color=rx.color("gray", 10),
                ),
                content="Things you want to avoid in the image",
            ),
            rx.spacer(),
            rx.hstack(
                rx.cond(
                    OptionsState.negative_prompt,
                    rx.icon(
                        "eraser",
                        size=20,
                        color=rx.color("gray", 10),
                        cursor="pointer",
                        _hover={"opacity": "0.8"},
                        on_click=OptionsState.setvar("negative_prompt", ""),
                    ),
                ),
                spacing="4",
                align="center",
            ),
            spacing="2",
            align="center",
            width="100%",
        ),
        rx.text_area(
            placeholder="What do you want to avoid?",
            width="100%",
            size="3",
            value=OptionsState.negative_prompt,
            on_change=OptionsState.set_negative_prompt,
        ),
        width="100%",
    )


def _seed_input() -> rx.Component:
    return (
        rx.vstack(
            rx.hstack(
                rx.icon("sprout", size=17, color=rx.color("grass", 10)),
                rx.text("Seed", size="3"),
                rx.spacer(),
                rx.hstack(
                    rx.cond(
                        OptionsState.seed > 0,
                        rx.icon(
                            "eraser",
                            size=20,
                            color=rx.color("gray", 10),
                            cursor="pointer",
                            _hover={"opacity": "0.8"},
                            on_click=OptionsState.setvar("seed", 0),
                        ),
                    ),
                    spacing="4",
                    align="center",
                ),
                spacing="2",
                align="center",
                width="100%",
            ),
            rx.tooltip(
                rx.box(
                    rx.input(
                        type="number",
                        value=OptionsState.seed,
                        on_change=OptionsState.set_seed,
                        placeholder="0 (Auto)",
                        max_length=5,
                        width="100%",
                    ),
                    width="100%",
                ),
                content="A number that determines the randomness of the image. Use the same seed to get the same result every time. 0 = Auto",
                side="right",
            ),
            spacing="2",
        ),
    )


def _scheduler_input() -> rx.Component:
    return (
        rx.vstack(
            rx.hstack(
                rx.icon("align-left", size=17, color=rx.color("iris", 10)),
                rx.text("Scheduler", size="3"),
                align="center",
                width="100%",
                spacing="2",
            ),
            rx.tooltip(
                rx.box(
                    rx.select(
                        [
                            "DDIM",
                            "DPMSolverMultistep",
                            "HeunDiscrete",
                            "KarrasDPM",
                            "K_EULER_ANCESTRAL",
                            "K_EULER",
                            "PNDM",
                            "DPM++2MSDE",
                        ],
                        width="100%",
                        value=OptionsState.scheduler,
                        on_change=OptionsState.set_scheduler,
                    ),
                    width="100%",
                ),
                content="Schedulers guide the process of removing noise from the image",
                side="right",
            ),
            spacing="2",
        ),
    )


def _guidance_scale_input() -> rx.Component:
    return (
        rx.vstack(
            rx.hstack(
                rx.icon("scale", size=17, color=rx.color("cyan", 10)),
                rx.text("Guidance Scale", size="3"),
                rx.spacer(),
                rx.text(f"{OptionsState.guidance_scale}", size="3"),
                align="center",
                width="100%",
                spacing="2",
            ),
            rx.tooltip(
                rx.box(
                    rx.slider(
                        min=0,
                        max=50,
                        step=0.01,
                        size="1",
                        default_value=OptionsState.guidance_scale,
                        on_change=OptionsState.set_guidance_scale,
                    ),
                    width="100%",
                ),
                content="Controls the strength of the promptguidance. Recommended 0. (minimum: 0, maximum: 50)",
                side="right",
            ),
            spacing="2",
        ),
    )


def _steps_input() -> rx.Component:
    return (
        rx.vstack(
            rx.hstack(
                rx.icon("footprints", size=17, color=rx.color("purple", 10)),
                rx.text("Steps", size="3"),
                rx.spacer(),
                rx.text(f"{OptionsState.steps}", size="3"),
                align="center",
                width="100%",
                spacing="2",
            ),
            rx.tooltip(
                rx.box(
                    rx.slider(
                        min=1,
                        max=10,
                        step=1,
                        size="1",
                        default_value=OptionsState.steps,
                        on_change=OptionsState.set_steps,
                    ),
                    width="100%",
                ),
                content="Number of denoising steps. 4 for best results. (minimum: 1, maximum: 10)",
                side="right",
            ),
            spacing="2",
        ),
    )


def _advanced_options_grid() -> rx.Component:
    return rx.grid(
        _seed_input(),
        _steps_input(),
        _scheduler_input(),
        _guidance_scale_input(),
        width="100%",
        columns="2",
        rows="2",
        spacing_x="5",
        spacing_y="5",
        justify="between",
        align="center",
    )


def advanced_options() -> rx.Component:
    return rx.vstack(
        rx.cond(
            OptionsState.advanced_options_open,
            rx.hstack(
                rx.icon(
                    "eye",
                    size=17,
                    color=rx.color("jade", 10),
                ),
                rx.text("Advanced Options", size="3"),
                align="center",
                spacing="2",
                width="100%",
                cursor="pointer",
                _hover={"opacity": "0.8"},
                on_click=OptionsState.setvar("advanced_options_open", False),
            ),
            rx.hstack(
                rx.icon(
                    "eye-off",
                    size=17,
                    color=rx.color("jade", 10),
                ),
                rx.text("Advanced Options", size="3"),
                align="center",
                spacing="2",
                width="100%",
                cursor="pointer",
                _hover={"opacity": "0.8"},
                on_click=OptionsState.setvar("advanced_options_open", True),
            ),
        ),
        rx.cond(
            OptionsState.advanced_options_open,
            rx.vstack(_negative_prompt(), _advanced_options_grid(), width="100%"),
        ),
        width="100%",
    )