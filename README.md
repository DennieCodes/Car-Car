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

#CRUD#







http://localhost:8100/apimanufacturers/


Inventory
GET
8100
Gets a list of all manufacturers
http://localhost:8100/apimanufacturers/


Inventory
PUT
8100
Update a specific manufactuer
http://localhost:8100/api/manufacturers/{manufacturer.id}/


Inventory
DELETE
8100
Delete a specific manufacturer
http://localhost:8100/api/manufacturers/{manufacturer.id}/


Inventory
POST
8100
Creates a new vehicle model
http://localhost:8100/api/models/


Inventory
GET
8100
Gets a list of all models
http://localhost:8100/api/models/


Inventory
PUT
8100
update a specific model
http://localhost:8100/api/models/{model.id}/


Inventory
DELETE
8100
update a specific model
http://localhost:8100/api/models/{model.id}/


Inventory
GET
8100
Creates a new automobile
http://localhost:8100/api/automobiles/


Inventory
GET
8100
Gets a list of all automobiles
http://localhost:8100/api/automobiles/


Inventory
PUT
8100
Update a specific automobile
http://localhost:8100/api/automobiles/{automobile.vin}/


Inventory
DELETE
8100
Delete a specific automobile
http://localhost:8100/api/automobiles/{automobile.vin}/


Sales
GET
8090
Gets a list of all AutomobileVOs
http://localhost:8090/api/automobiles/


Sales
POST
8090
Creates a new customer
http://localhost:8090/api/customers/


Sales
GET
8090
Gets a list of all customers
http://localhost:8090/api/customers/


Sales
PUT
8090
Updates a specific customer
http://localhost:8090/api/customers/{customer.id}/


Sales
DELET
8090
Delete a specific customer
http://localhost:8090/api/customers/{customer.id}/


Sales
POST
8090
Creates a new salesperson
http://localhost:8090/api/salesteam/


Sales
POST
8090
Gets a list of all salespeople
http://localhost:8090/api/salesteam/


Sales
PUT
8090
Update a specific salesperson
http://localhost:8090/api/salesteam/{salesperson.id}/


Sales
DELETE
8090
Delete a specific salesperson
http://localhost:8090/api/salesteam/{salesperson.id}/


Sales
POST
8090
Creates a new sale
http://localhost:8090/api/salesteam/


Sales
POST
8090
Gets a list of all sales
http://localhost:8090/api/salesteam/


Service
GET
8080
Gets a list of all Auto technicians
http://localhost:8080/api/autotechnician/


Service
GET
8080
Gets details of a specific Auto technician
http://localhost:8080/api/autotechnician/{technician.id}/


Service
POST
8080
Creates a new Auto technician
http://localhost:8080/api/autotechnician/


Service
GET
8080
List Service appointments
http://localhost:8080/api/serviceappointments/


Service
GET
8080
Gets details of a specific Service appointment
http://localhost:8080/api/serviceappointments/service_appointments.id}/


Service
POST
8080
Creates a Service appointment
http://localhost:8080/api/serviceappointments/


## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.

