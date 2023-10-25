from django.contrib import admin
from .models import AutomobileVO, Technician, Appointment
# Register your models here.
# @admin.register(AutomobileVO)


@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    list_display = (
        "first_name",
        "last_name",
        "employee_id",
        "id"
    )

@admin.register(Appointment)
class ApppointmentAdmin(admin.ModelAdmin):
    list_display = (
        "date_time",
        "vin", 
        "customer",
        "reason", 
        "dealership_purchase",
        "status",
        "technician"
      )
    

@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    list_display = (
            "vin",
            "sold", 
            "import_href",
            "color",
            "year",
         )
