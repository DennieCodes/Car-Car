from common.json import ModelEncoder
from .models import AutomobileVO, Salesperson, Customer, Sale

class AutomobileVOEncoder(ModelEncoder):
  model = AutomobileVO
  properties = ["vin", "sold"]

class SalespeopleListEncoder(ModelEncoder):
  model = Salesperson
  properties = ["first_name", "last_name", "employee_id", "id"]

class CustomerListEncoder(ModelEncoder):
  model = Customer
  properties = ["first_name", "last_name", "address", "phone_number", "id"]

class SaleListEncoder(ModelEncoder):
  model = Sale
  properties = ["price", "automobile", "salesperson", "customer", "id"]
  encoders = {
    "automobile": AutomobileVOEncoder(),
    "salesperson": SalespeopleListEncoder(),
    "customer": CustomerListEncoder()
  }