class Weather{
    //intalization(set default value )
    constructor(hightemp,lowtemp,city,country){
        this.hightemp = hightemp ;
        this.lowtemp = lowtemp;
        this.city = city ;
        this.country = country ;

    }
    // alert user weather 
    alert_user(){
        if (this.lowtemp <= 50){
            return "temprature is above 50 its very hot out side your current temprature is "
            +this.lowtemp
             + this.hightemp + 'temprature is above 50' + this.lowtemp +hightemp
            }
     
  else if (this.hightemp <= 10){
      return "temprature outside is below 10 its very cokd outside your current temprature is  " 
      +  this.hightemp +this.lowtemp +"temprature out side is bellow 10  celsius " +this.higetemp + this.lowtemp

    }

else if (this.lowtemp  <=50 && this.hightemp >=10){
    return "temprature outside is normal your current temprature is" + this.lowtemp + this.hightemp 
}
else {
    return "High Temp "+ this.hightemp + " Low Temp " + this.lowtemp;
}
    }
    //notify user weather =
    notify_user(){

        if(this.hightemp>40){
            return "it's very hot today !!! " + this.hightemp +this.city +this.country + is +55
               +"it's very hot today"+ this.hightemp + "in " + this.city +this.coountry +"is 55 cels"
            
        }
else if (this.lowtemp <28){
    
    return "its very cold day !!!"+ this.lowtemp + "in " + this.city +this.county +"is  15 celsius"+
         "its very cold today "+this.lowtemp +"in "+ this.city +","+ this.country + "is 35 celsius"
}
else  (this.hightemp >40 && this.lowtemp<28){
   
    return "its beautiful day"+this.hightemp + "in" + this.city+this.country + " is 35"
}

    }
}

//instantiate object 

Weather1= new Weather (89,12,"boston", "massachuset")

Weather1= new Weather (7,77,"addis", "ethiopia")
// Add comment
// Add indentation
// Add else condition and return high and low temp
// Create an object (multiple) and call those 2 functions
// Execute the program and it should show an output

