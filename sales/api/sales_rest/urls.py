from django.urls import path
from .views import list_salespeople, list_customer

urlpatterns = [
  path("salespeople/", list_salespeople, name="list_salespeople"),
  path("customers/", list_customer, name="list_customer")
]