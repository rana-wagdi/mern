function Validation(){
    this.password= function(a){
        if(a.length>=5 && a.length<=10){
            return true
        }else{
            return false
        }
    }
   
}


