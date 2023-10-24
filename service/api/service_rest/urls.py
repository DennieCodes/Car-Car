from django.urls import path
from .views import (
    api_Technician_list, api_Technician_detail
)


urlpatterns = [
    path("technicians/", api_Technician_list, name="api_technician"),
    path("technicians/<int:pk>/", api_Technician_detail, name="api_technician_detail"),
    # path("appointments/", api_Appointments_list, name="api_Appointments_list"),
    # path("appointments/<int:pk>/", api_Appointment_detail, name="api_Appointment_detail"),
    # path("automobilesVO/", api_AutomobileVO_list, name="api_AutomobileVO_list" )

]
