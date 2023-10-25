import json
from .encoders import SalespeopleListEncoder, CustomerListEncoder, SaleListEncoder
from .models import AutomobileVO, Salesperson, Customer, Sale
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

# Salespeople view methods
# List and Create salespeople
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

# Sales view methods
# List and create sales
@require_http_methods(["GET", "POST"])
def list_sales(request):
  if request.method == "GET":
    sales = Sale.objects.all()

    return JsonResponse(
      { "sales": sales},
      encoder=SaleListEncoder,
      safe=False
    )
  else:
    content = json.loads(request.body)

    # You have to get the corresponding Object from Vehicles for content["automobile"]
    try:
      auto = AutomobileVO.objects.get(vin=content["automobile"])
      content["automobile"] = auto

      salesperson = Salesperson.objects.get(employee_id=content["salesperson"])
      content["salesperson"] = salesperson

      customer = Customer.objects.get(id=content["customer"])
      content["customer"] = customer

    except AutomobileVO.DoesNotExist:
      return JsonResponse(
          {"message": "Invalid automobile id"},
          status=400,
      )

    except Salesperson.DoesNotExist:
      return JsonResponse(
          {"message": "Invalid salesperson id"},
          status=400,
      )

    except Customer.DoesNotExist:
      return JsonResponse(
          {"message": "Invalid Customer id"},
          status=400,
      )

    sale = Sale.objects.create(**content)
    return JsonResponse(
      sale,
      encoder=SaleListEncoder,
      safe=False
    )

# Delete a salesperson
@require_http_methods(["DELETE"])
def show_salespeople(request, pk):
  count, _ = Salesperson.objects.filter(id=pk).delete()
  return JsonResponse({"deleted": count > 0})

# Customer view methods
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