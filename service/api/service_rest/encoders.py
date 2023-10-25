from common.json import ModelEncoder
from .models import Technician, Appointment, AutomobileVO
# from common.json import DateEncoder


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
    ]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "vin",
        "customer_name",
        "date_time",
        "reason",
        "technician",
        "dealership_purchase",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "color",
        "year",
        "vin",
    ]
