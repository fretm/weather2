class Weather{
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
             + this.hightemp + 'temprature is above 50' + this.lowtemp +hightemp}
     
  else if (this.hightemp <= 10){
      return "temprature outside is below 10 its very cokd outside your current temprature is  " 
      +  this.hightemp +this.lowtemp +"temprature out side is bellow 10 " +this.higetemp + this.lowtemp

    }

else if (this.lowtemp !<= 50 && this.hightemp !<=10){
    return "temprature outside is normal your current temprature is" + this.lowtemp + this.hightemp 
}
    //notify user weather 
    notify_user(){

    }
}

