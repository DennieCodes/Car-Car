from django.urls import path
from .views import list_salespeople, list_customer, show_salespeople

urlpatterns = [
  path("salespeople/", list_salespeople, name="list_salespeople"),
  path("salespeople/<int:pk>/", show_salespeople, name="show_salespeople"),
  path("customers/", list_customer, name="list_customer")
]