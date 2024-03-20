function distanceFromHqInBlocks(pickup){
    if (pickup >= 42){
    return pickup - 42 
    }else if(pickup < 42){
        return 42 - pickup
    }
}
function distanceFromHqInFeet(pickup) {
    distanceFromHqInBlocks(pickup);
    if (pickup >= 42){
        return (pickup - 42)*264
    }else if(pickup <= 42){
        return (42 - pickup)*264
    }
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
}
function distanceTravelledInFeet(start, destination) {
    if (destination >= start){ 
    return (destination - start)*264
    }else if(start >= destination){
    return (start - destination)*264
    }
    //returns the number of feet traveled
}
function calculatesFarePrice(start, destination,) {
    let func = distanceTravelledInFeet(start, destination);
    if (func <= 400){
        return 0
    }
    else if(func >400 && func < 2000){      
        return (func - 400) * 0.02
    }else if(func > 2000 && func <= 2500){
        return 25
    }else if (func > 2500){
        return 'cannot travel that far'
    }
    //returns the fare for the customer
}
// Code your solution in this file!
