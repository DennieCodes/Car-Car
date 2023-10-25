from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import TechnicianEncoder, AppointmentEncoder, AutomobileVOEncoder
from .models import Technician, Appointment, AutomobileVO


@require_http_methods(["GET", "POST"])
def api_Technician_list(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse(
            {"technician": technician},
            encoder=TechnicianEncoder,
            safe=False,
        )
    else:
        # try:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )
        # except:
        #     response = JsonResponse(
        #         {"Message": "Could not create technician"}
        #     )
        #     response.status_code = 400
        #     return response


@require_http_methods(["GET", "PUT", "DELETE"])
def api_Technician_detail(request, pk):
    if request.method == "GET":
        try:
            technician = Technician.objects.get(id=pk)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            response = JsonResponse({"message": "Auto technician does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            technician = Technician.objects.get(id=pk)
            technician.delete()
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse({"message": "Auto technician has been deleted"})
    else:  # "PUT"
        try:
            content = json.loads(request.body)
            technician = Technician.objects.get(id=pk)
            properties = [
                "first_name",
                "last_name",
                "employee_id"
            ]
            for property in properties:
                if property in content:
                    setattr(technician, property, content[property])
            technician.save()
            return JsonResponse(
                technician, encoder=TechnicianEncoder, safe=False
            )
        except Technician.DoesNotExist:
            response = JsonResponse({"message": "Auto technician does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_Appointments_list(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        try:
            technician = {"technician": Technician.objects.get(id=content["technician"])}
            content.update(technician)

            inventory = AutomobileVO.objects.all().values_list('vin', flat=True)
            if content["vin"] in inventory:
                content["dealership_purchase"] = True
            
            appointments = Appointment.objects.create(**content)
            return JsonResponse(
                appointments,
                encoder=AppointmentEncoder,
                safe=False,
            )
 
        except Appointment.DoesNotExist:
            response = JsonResponse (
                { "message": "Could not create this Service appointment"}
                )
            response.status_code = 400
            return response


@require_http_methods(["GET","PUT","DELETE"])
def api_Appointment_detail(request, pk):
    if request.method == "GET":
        try:
            appointments = Appointment.objects.get(id=pk)
            return JsonResponse(
                appointments, encoder=AppointmentEncoder, safe=False,
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({
                "message": "Service appointment does not exist"
            })
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            appointments = Appointment.objects.get(id=pk)
            appointments.delete()
            return JsonResponse(
                appointments, encoder=AppointmentEncoder, safe=False
            )
        except Appointment.DoesNotExist:
            return JsonResponse({
                "message": "Service appointment has been deleted"
            })
            

@require_http_methods(["GET"])
def api_AutomobileVO_list(request):
    if request.method == "GET":
        autos = AutomobileVO.objects.all()
        return JsonResponse(
            {"autos": autos},
            AutomobileVOEncoder, safe=False
        )

        

