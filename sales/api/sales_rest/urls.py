from django.urls import path
from .views import list_salespeople, list_customer, show_salespeople, show_customer, list_sales, show_sale, list_automobiles, show_automobile

urlpatterns = [
  path("automobiles/", list_automobiles, name="list_automobiles"),
  path("automobiles/<int:pk>/", show_automobile, name="show_automobile"),
  path("salespeople/", list_salespeople, name="list_salespeople"),
  path("salespeople/<int:pk>/", show_salespeople, name="show_salespeople"),
  path("customers/", list_customer, name="list_customer"),
  path("customers/<int:pk>/", show_customer, name="show_customer"),
  path("sales/", list_sales, name="list_sales"),
  path("sales/<int:pk>/", show_sale, name="show_sale")
]