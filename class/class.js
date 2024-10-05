class person{

    constructor(fname,lname){
        this.firstName=fname
        this.lastName=lname
    }

    greet(){
        return this.firstName+ " " + this.lastName
    }
}
class completeDetailes extends person{
constructor(fname,lname,age,city){
super(fname,lname)
this.Age=age
this.City=city
}

getCompleteDetails(){
    return this.firstName+  " " + this.lastName + " " + this.City + " " + this.Age
}

}

const CompleteDetailes=new completeDetailes('Kumar','Borelli',27,'Boduppal')

console.log(CompleteDetailes.getCompleteDetails())