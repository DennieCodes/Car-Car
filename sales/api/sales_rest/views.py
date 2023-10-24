from .encoders import SalespeopleListEncoder
from .models import AutomobileVO, Salesperson, Customer, Sale
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

@require_http_methods(["GET"])
def list_salespeople(request):
  if request.method == "GET":
    salespersons = Salesperson.objects.all()

    return JsonResponse(
      { "salesperson": salespersons}, encoder=SalespeopleListEncoder, safe=False,
    )