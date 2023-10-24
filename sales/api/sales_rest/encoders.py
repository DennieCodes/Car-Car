from common.json import ModelEncoder
from .models import AutomobileVO, Salesperson, Customer, Sale

class SalespeopleListEncoder(ModelEncoder):
  model = Salesperson
  properties = ["first_name", "last_name", "employee_id"]