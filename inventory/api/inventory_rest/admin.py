from django.contrib import admin
from .models import Manufacturer, VehicleModel, Automobile


@admin.register(Automobile)
class AutomobileAdmin(admin.ModelAdmin):
  list_display = ("color", "year", "vin", "sold", "model", "id")

@admin.register(Manufacturer)
class ManufacturerAdmin(admin.ModelAdmin):
  list_display = ("name", "id")

@admin.register(VehicleModel)
class VehicleModelAdmin(admin.ModelAdmin):
  list_display = ("name", "picture_url", "manufacturer", "id")
