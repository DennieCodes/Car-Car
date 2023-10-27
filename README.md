# CarCar

### Team:

* Anthony Spence - Service microservice
* Dennie Chan - Sales microservice

**Steps to Run Project**
1. Fork the project located at https://gitlab.com/

1. Once the project is forked, clone via git clone https link.

1. Once cloned, CD into project directory and run the following commands:

1. docker volume create beta-data

1. docker-compose build

1. docker-compose up

*When you run docker-compose up and if you're on macOS, you will see a warning about an environment variable named OS being missing. You can safely ignore this.*

visit http://localhost:3000/ in your browser to view the React application once all containers are up and running

In order to work with data you can create it in insomnia.

**CRUD**



**Service microservice**

```
    Technician:
  - "first_name","last_name","employee_id" inputs are received through form.

Service Appointment:
    - "vin", Vehicle vin.
    - "customer_name", vehicle ownwer name.
    - "date_and_time", scheduled service appointment date and time; inputs received thorugh form
    - "reason", reason for service appointment.
    - "dealership_purchase", determines whether the vehicle vin for the service appointment matches inventory vehicle vin, for access to VIP treatment.
    - "technician", the selected technician for the service appointment.Technician was a Foreign Key with Appointment as the related word.

AutomobileVO:
    -"sold", a boolean that would answer whether the car had been sold
    - "vin", of the vehicle in inventory.
```



**Sales microservice**





## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.

