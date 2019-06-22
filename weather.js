class Weather {
  
  constructor(temprature,city,country){
   this.temprature = temprature ;
   this.city = city;
   this.country = country;
   
  }
   alert (user){
    if (temprature < 10){
    
      return "its very cold outside   your current temprature is high 5 celsius and low -3 celsius  ";
    }
    
    else if (temprature > 70){
      
      return "its very hot outside ";
    }
    else if (temprature !=< 10 && temprature !=>70){
      
      return " temprature is notrmal outside ";
    }
  
   notify (user){
    if (temprature > 40 )
    return "its very hot out side in " + this.city + this.country
    
  }
  else if (temprature <20 ){
    return "its very colde" +this.city + this.country 
    
  }
  else if (temprature !>=40 && temprature !<=20)
  return "its a beutifu day " +this.city + this .country ;
  
  }
}
let lowtemp1 = new lowtemp (20,"addis" ,"ethiopia ");
let hightemp2 = new hightemp(56,"boston","massachusets")