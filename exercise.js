var exercise = {};

exercise.countRecords = function(data){
    // Return the total number of records

    var countRecords = 0;
    for (i=0 ; i < data.length; i++){
        countRecords++;
    } return countRecords;
    
};

exercise.countDistrictCrimes = function(data,district){
    // Return the number of crimes 
    // for the given district
    var districtCount = 0;
    for (i=0 ; i < data.length; i++){
        if(data[i][19]===district){
            districtCount++;
        }
    }return districtCount;
   
};

exercise.countPrimaryType = function(data,primaryType){
    // Return the number of crimes 
    // for the giving primary type

    var numCrimes = 0;
    for (i=0 ; i < data.length; i++){
        if(data[i][13]===primaryType){
            numCrimes++;
        }
    }return numCrimes;

};

exercise.countLocation = function(data,location){
    // Return the number of crimes 
    // for the given location
    var numCrimesLoc = 0;
    for (i=0 ; i < data.length; i++){
        if(data[i][15]==location){
            numCrimesLoc++;
        }
    }return numCrimesLoc;
    

};


exercise.buildLatLngPoint = function(crime){
    // build the point for the given crime
    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;    

};




