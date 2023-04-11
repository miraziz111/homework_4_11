

class jobs {
  constructor(type){
    this._type = type
    
  }
  sayType = function(){
   console.log("My profession : " + this._type);
  }

}
class pilot extends jobs{
  constructor(type,salary,age,tall){
    super(type),
    this._salary = salary,
    this._age = age,
    this._tall = tall
  }
  
  work = function(){
    console.log("uchish");
  }


}

class cook extends jobs{
  constructor(type,salary,age,experience){
    super(type),
    this._salary = salary,
    this._age = age,
    this._experience =experience
  }
  
  work = function(){
    console.log("pishirish");
  }

}
class driver extends jobs{
  constructor(type,salary,age,experience){
    super(type),
    this._salary = salary,
    this._age = age,
    this._experience =experience
  }
  work = function(){
    console.log("pishirish");
  }

}
class teacher extends jobs{
  constructor(type,salary,age,experience){
    super(type),
    this._salary = salary,
    this._age = age,
    this._experience =experience
  }
  work = function(){
   return "my profession :" + this.type
  }

}

let pilotJob = new pilot ("Pilot","14000","23","180 sm")
let cooker = new cook ("Cooker","10000","27","8 years")
let driverJob = new driver ("Driver","17000","25","5 years")
let teacherJob = new teacher ("Teacher","4000","23","15 years")

pilotJob.sayType()
console.log(pilotJob);
cooker.sayType()
console.log(cooker);
driverJob.sayType()
console.log(driverJob);
teacherJob.sayType()
console.log(teacherJob);

