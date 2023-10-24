from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import (TechnicianEncoder)
from .models import Technician

@require_http_methods(["GET","POST"])
def api_Technician_list(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse(
            {"technician": technician},
            encoder=TechnicianEncoder, safe=False,
        )
#     else:
#         try:
#             content = json.loads(request.body)
#             technician = Technician.objects.create(**content)
#             return JsonResponse(
#                 technician, encoder=TechnicianEncoder,
#                 safe=False,
#             )
#         except:
#             response = JsonResponse(
#                 {"Message": "Could not create technician"}
#             )
#             response.status_code = 400
#             return response


