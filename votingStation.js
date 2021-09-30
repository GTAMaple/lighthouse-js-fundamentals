const stations  = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'School'],
  ['Moose Mountain Community Centre', 45, 'Community Centre']
 ];
 
 function chooseStations(stations){
     const chosenStations = [];
     
     for( const station of stations){ // for .. of go through each array
       const capacity = station[1];
         
       if(capacity >= 20) {
          const type = station[2];
           
          if(type === "School" || type === "Community Centre") {
           chosenStations.push(station[0]);
       }
     }
   }
   return chosenStations;
 }
 console.log(chooseStations(stations));
 