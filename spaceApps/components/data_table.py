import reflex as rx

def data_table(planet_data: list[list[str]]):
    return rx.table.root(
        rx.table.header(
            rx.table.row(
                rx.table.column_header_cell("Attribute"),
                rx.table.column_header_cell("Value"),
            )
        ),
        rx.table.body(
            rx.foreach(planet_data,
                fill_table
           )
        )
    )

def fill_table(data_point: list[str]):
    return rx.cond(data_point[2] != 0,
                   rx.cond(data_point[2] != "",
                           rx.table.row(
                            rx.table.row_header_cell(rx.tooltip(rx.text(data_point[0]), content=data_point[1])),  # Attribute column
                            rx.table.cell(data_point[2]))  # Value column
                   )
    )
