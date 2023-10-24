from common.json import ModelEncoder
from .models import AutomobileVO, Salesperson, Customer, Sale

class SalespeopleListEncoder(ModelEncoder):
  model = Salesperson
  properties = ["first_name", "last_name", "employee_id"]

class CustomerListEncoder(ModelEncoder):
  model = Customer
  properties = ["first_name", "last_name", "address", "phone_number"]