from django.db import models


#model for technician in service microservice; it contains first and last name and employee id


class Technician(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.employee_id

#model for Appointment in the service microservice it covers date and time, vin, Customername, reason they are in
#whether they purchased the car from them, status of the repairs, and the tehnician who worked on it.Technician is 
#the only foreign key

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)


    def __str__(self):
        return "Auto Vin -" + self.vin
    
    def get_api_url(self):
        return reverse("api_show_location", kwargs={"pk": self.pk})


class Appointment(models.Model):
    date_time = models.DateTimeField(max_length=17) 
    vin = models.CharField(max_length=17)
    customer = models.CharField(max_length=20)
    reason = models.CharField(max_length=100)
    dealership_purchase = models.BooleanField(default=False)
    status = models.CharField(max_length=100)
    technician = models.ForeignKey(
        Technician, related_name="Appointment", on_delete=models.CASCADE
    )








