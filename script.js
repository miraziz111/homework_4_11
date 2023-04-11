

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
    console.log("Vazifasi : uchish");
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
    console.log("Vaziafasi : pishirish");
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
    console.log(`Vazifasi : Uzoqni yaqin qilish`);
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
    console.log(`Vazifasi : O'qitish`);
  }
  
}

let pilotJob = new pilot ("Pilot","14000","23","180 sm")
let cooker = new cook ("Cooker","10000","27","8 years")
let driverJob = new driver ("Driver","17000","25","5 years")
let teacherJob = new teacher ("Teacher","4000","23","15 years")
pilotJob.sayType()
pilotJob.work()
console.log(pilotJob);
cooker.sayType()
cooker.work()
console.log(cooker);
driverJob.sayType()
driverJob.work()
console.log(driverJob);
teacherJob.sayType()
teacherJob.work()
console.log(teacherJob);

