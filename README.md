# CarCar

### Team:

* Anthony Spence - Service microservice
* Dennie Chan - Sales microservice

## Steps to Run Project
```
1. Fork the project located at https://gitlab.com/

1. Once the project is forked, clone via git clone https link.

1. Once cloned, CD into project directory and run the following commands:

1. docker volume create beta-data

1. docker-compose build

1. docker-compose up

When you run docker-compose up and if you're on macOS, you will see a 
warning about an environment variable named OS being missing. You can safely ignore this.*

visit http://localhost:3000/ in your browser to view the React application 
once all containers are up and running

In order to work with data you can create it in insomnia.
```


## CRUD


 **React Front End for Sales**

 ```
http://localhost:3000/sales/ - Lists out all sales records

http://localhost:3000/sales/{id} - Form to create a new salerecord

http://localhost:3000/sales/history - List all salesrecords by selected salesperson

http://localhost:3000/customers/{id}- Form to create a new customer

http://localhost:3000/salesteam/{id} - Form to create a new salesperson
```


**React Front End for Service**

```
http://localhost:3000/technician/{id}/ - Form to create a new Auto technician

http://localhost:3000/appointment/{id}/ - Form to create a new Service appointment

http://localhost:3000/appointments/ - List all Service appointments
```
# Api's/Method/Port/Result/URLs
![](images/REST%20API%20diagram.png)


# Models Diagram
![](images/Beta%20Project%20Model%20Diagram.png)

 ### Poller
Automobiles from inventory are polled every 60 seconds which creates an AutmobileVO (valueobject) for the Sales and Service microservices.

## Service microservice

```
Technician:
  - "first_name",
  - "last_name",
  - "employee_id" inputs are received through form.

Service Appointment:
    - "vin", Vehicle vin.
    - "customer_name", vehicle ownwer name.
    - "date_and_time", scheduled service appointment date and time; inputs received thorugh form
    - "reason", reason for service appointment.
    - "dealership_purchase", determines whether the vehicle vin for the service appointment matches inventory vehicle vin, for access to VIP treatment.
    - "technician", the selected technician for the service appointment. Technician was a Foreign Key with Appointment as the related word.

AutomobileVO:
    -"sold", a boolean that would answer whether the car had been sold
    - "vin", of the vehicle in inventory.

Relation of Inventory microservice:
    -The Service microservice relied on the Inventory polling and we made a AutomobileVO that reflected all the inventories vin     numbers so that: 1. We could determine whether they were VIP, 2. The search bar in the Service History form also needed the Inventory.
```



## Sales microservice





## Project Architecture Diagram
![](images/Car%20Car%20project%20architecture.png)


