// intersection types

type Admin = {
  name: String;
  privileges: String[];
};

type Employee = {
  name: String;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; //it will combine properties of both types

const el1: ElevatedEmployee = {
  name: "elevated",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = String | Number;
type Numeric = Number | Boolean;
type Universal = Combinable & Numeric //it will act as intersection of both types

const u1:Universal=12