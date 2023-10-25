from django.contrib import admin
from .models import Salesperson, Customer, Sale, AutomobileVO

@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):
  list_display = ("price", "automobile", "salesperson", "customer", "id")

@admin.register(Salesperson)
class SalespersonAdmin(admin.ModelAdmin):
  list_display = ("first_name", "last_name", "employee_id", "id")

@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
  list_display = ("vin", "sold")