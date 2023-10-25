import json
from .encoders import SalespeopleListEncoder, CustomerListEncoder, SaleListEncoder, AutomobileVOEncoder
from .models import AutomobileVO, Salesperson, Customer, Sale
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

# AutomobileVO view methods
########################################
# List automobiles
@require_http_methods(["GET"])
def list_automobiles(request):
  if request.method == "GET":
    automobiles = AutomobileVO.objects.all()

    return JsonResponse(
      { "automobiles": automobiles },
      encoder=AutomobileVOEncoder,
      safe=False
    )

# Get automobiles
@require_http_methods(["GET"])
def show_automobile(request, pk):
  try:
    if request.method == "GET":
      automobile = AutomobileVO.objects.get(vin=pk)

      return JsonResponse(
        { "automobile": automobile },
        encoder=AutomobileVOEncoder,
        safe=False
      )
  except AutomobileVO.DoesNotExist:
    return JsonResponse(
      {"message": "That Automobile id is invalid"},
        status=404,
    )


# Salespeople view methods
########################################
# List and Create salespeople
@require_http_methods(["GET", "POST"])
def list_salespeople(request):
  if request.method == "GET":
    salespersons = Salesperson.objects.all()

    return JsonResponse(
      { "salespeople": salespersons },
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
  if request.method == "DELETE":
    try:
      # Salesperson.objects.filter(id=pk).delete()
      salesperson = Salesperson.objects.get(id=pk)
      salesperson.delete()
      return JsonResponse(
            {"message": "The Salesperson was deleted"},
            status=200,
        )

    except Salesperson.DoesNotExist:
      return JsonResponse(
        {"message": "That Salesperon id is invalid"},
        status=404,
      )

# Sales view methods
########################################
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

# Show Sale view method: Delete
@require_http_methods(["DELETE"])
def show_sale(request, pk):
  if request.method == "DELETE":
    try:
      sale = Sale.objects.get(id=pk)
      sale.delete()

      return JsonResponse(
            {"message": "Sale was successfully deleted"},
            status=404,
        )
    except Sale.DoesNotExist:
      return JsonResponse(
            {"message": "Invalid Sale id"},
            status=404,
        )

# Customer view methods
########################################
# List Customer and create a customer
@require_http_methods(["GET", "POST"])
def list_customer(request):
  if request.method == "GET":
    customers = Customer.objects.all()

    return JsonResponse(
      { "customers": customers},
      encoder=CustomerListEncoder,
      safe=False
    )
  else:
    content = json.loads(request.body)

    customers = Customer.objects.create(**content)
    return JsonResponse(
      customers,
      encoder=CustomerListEncoder,
      safe=False
    )

# Show customer view method: Delete a customer
@require_http_methods(["DELETE"])
def show_customer(request, pk):
  if request.method == "DELETE":
    try:
        customer = Customer.objects.get(id=pk)
        customer.delete()
        return JsonResponse(
            {"message": "Customer was deleted"},
            status=200,
        )
    except Customer.DoesNotExist:
      return JsonResponse(
            {"message": "Invalid Customer id"},
            status=404,
        )