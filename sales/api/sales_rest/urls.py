from django.urls import path
from .views import list_salespeople

urlpatterns = [
  path("salespeople/", list_salespeople, name="list_salespeople")
]