from django.db import models
from django.urls import reverse

# Automobile
class AutomobileVO(models.Model):
  # import_href = models.CharField(max_length=200, unique=True)
  # color = models.CharField(max_length=50)
  vin = models.CharField(max_length=50, unique=True)
  sold = models.BooleanField(default=False)
  # year = models.PositiveSmallIntegerField(null=False, default=2023)

  def __str__(self):
    return self.vin

# Salesperson
class Salesperson(models.Model):
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=50)
  employee_id = models.CharField(max_length=50)

  def ___str__(self):
    return self.employee_id

  def get_api_url(self):
        return reverse("show_salespeople", kwargs={"pk": self.pk})

# Customer
class Customer(models.Model):
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=50)
  address = models.CharField(max_length=200)
  phone_number = models.CharField(max_length=50)

  def ___str__(self):
    return f"{self.first_name} {self.last_name}"

  def get_api_url(self):
        return reverse("show_customer", kwargs={"pk": self.pk})

# Sale
class Sale(models.Model):
  price = models.PositiveIntegerField()

  automobile = models.ForeignKey(
    AutomobileVO,
    related_name="sale",
    on_delete=models.CASCADE
  )

  salesperson = models.ForeignKey(
    Salesperson,
    related_name="sale",
    on_delete=models.CASCADE
  )

  customer = models.ForeignKey(
    Customer,
    related_name="sale",
    on_delete=models.CASCADE
  )

  def __str__(self):
    return f"{self.salesperson.first_name} {self.salesperson.last_name}"

  def get_api_url(self):
        return reverse("show_sale", kwargs={"pk": self.pk})