import json
from .encoders import SalespeopleListEncoder, CustomerListEncoder
from .models import AutomobileVO, Salesperson, Customer, Sale
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

# List Salespeople and create a salesperson
@require_http_methods(["GET", "POST"])
def list_salespeople(request):
  if request.method == "GET":
    salespersons = Salesperson.objects.all()

    return JsonResponse(
      { "salesperson": salespersons },
        encoder=SalespeopleListEncoder,
        safe=False,
    )
  else:
    content = json.loads(request.body)

    salesperson = Salesperson.objects.create(**content)
    return JsonResponse(
      salesperson,
      encoder=SalespeopleListEncoder,
      safe=False
    )

# Delete a salesperson
@require_http_methods(["DELETE"])
def show_salespeople(request, pk):
  count, _ = Salesperson.objects.filter(id=pk).delete()
  return JsonResponse({"deleted": count > 0})

# List Customer and create a customer
@require_http_methods(["GET", "POST"])
def list_customer(request):
  if request.method == "GET":
    customer = Customer.objects.all()

    return JsonResponse(
      { "customer": customer},
      encoder=CustomerListEncoder,
      safe=False
    )
  else:
    content = json.loads(request.body)

    customer = Customer.objects.create(**content)
    return JsonResponse(
      customer,
      encoder=CustomerListEncoder,
      safe=False
    )

# Delete a customer
@require_http_methods(["DELETE"])
def show_customer(request, pk):
  count, _ = Customer.objects.filter(id=pk).delete()
  return JsonResponse({"deleted": count > 0})