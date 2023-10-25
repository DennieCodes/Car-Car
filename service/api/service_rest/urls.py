from django.urls import path
from .views import (
    api_Technician_list, api_Technician_detail, api_Appointments_list, api_Appointment_detail, api_AutomobileVO_list,api_Appointment_status
)


urlpatterns = [
    path("technicians/", api_Technician_list, name="api_technician"),
    path("technicians/<int:pk>/", api_Technician_detail, name="api_Technician_detail"),
    path("appointments/", api_Appointments_list, name="api_Appointments_list"),
    path("appointments/<int:pk>/", api_Appointment_detail, name="api_Appointment_detail"),
    path("automobilesVO/", api_AutomobileVO_list, name="api_AutomobileVO_list"),
    path("appointments/<int:pk>/finish/",api_Appointment_detail, name="api_Appointment_detail"),
    path("appointments/<int:pk>/cancel/",api_Appointment_status, name="api_Appointment_status"),

]
