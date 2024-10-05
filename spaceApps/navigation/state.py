import reflex as rx
from . import routes
from .routes import HOME_ROUTE


class NavState(rx.State):
    back_href: str = HOME_ROUTE

    def set_back(self, back: str):
        self.back_href = back

    def set_current_as_back(self):
        self.back_href  = self.router.page.path

    def return_to_prev(self):
        return rx.redirect(self.back_href)

    def to_home(self):
        return rx.redirect(routes.HOME_ROUTE)

    def to_explore(self):
        return rx.redirect(routes.EXPLORE_ROUTE)

    def to_generate(self):
        return rx.redirect(routes.GENERATE_ROUTE)

    def to_learn(self):
        return rx.redirect(routes.LEARN_ROUTE)

    def to_my_exo(self):
        return rx.redirect(routes.MY_EXO_ROUTE)

    def to_about(self):
        return rx.redirect(routes.ABOUT_ROUTE)

    def to_meet(self):
        return rx.redirect(routes.MEET_AN_EXOPLANET_ROUTE)

    def to_quiz(self):
        return rx.redirect(routes.QUIZ_ROUTE)

    def to_examples(self):
        return rx.redirect(routes.EXAMPLES_ROUTE)

    def to_example_planet(self):
        return rx.redirect(routes.EXAMPLE_PLANET_ROUTE)