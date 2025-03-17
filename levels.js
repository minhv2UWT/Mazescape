const level1 = {
    walls: [
        // Out line wall
        { x: 0, y: 195, width: 100, height: 10 }, 
        { x: 100, y: 195, width: 100, height: 10 }, 
        { x: 200, y: 195, width: 100, height: 10 }, 
        { x: 300, y: 195, width: 100, height: 10 }, 
        { x: 400, y: 195, width: 100, height: 10 }, 
        { x: 500, y: 195, width: 100, height: 10 }, 
        { x: 595, y: 200, width: 10, height: 100 }, 
        { x: 595, y: 300, width: 10, height: 100 }, 
        { x: 595, y: 400, width: 10, height: 100 }, 
        { x: 595, y: 500, width: 10, height: 100 }, 
        { x: 595, y: 600, width: 10, height: 100 }, 
        { x: 595, y: 600, width: 10, height: 100 },
        { x: 595, y: 700, width: 10, height: 100 }, 
        
        { x: 0, y: 795, width: 100, height: 10 }, 
        { x: 100, y: 795, width: 100, height: 10 }, 
        { x: 200, y: 795, width: 100, height: 10 }, 
        { x: 300, y: 795, width: 100, height: 10 }, 
        { x: 400, y: 795, width: 100, height: 10 }, 
        { x: 500, y: 795, width: 100, height: 10 }, 
        { x: 0, y: 200, width: 10, height: 100 }, 
        { x: 0, y: 300, width: 10, height: 100 }, 
        { x: 0, y: 400, width: 10, height: 100 }, 
        { x: 0, y: 500, width: 10, height: 100 }, 
        { x: 0, y: 600, width: 10, height: 100 }, 
        { x: 0, y: 600, width: 10, height: 100 },
        { x: 0, y: 700, width: 10, height: 100 }, 

        
        // Inside Wall
        { x: 0, y: 495, width: 100, height: 10 }, 
        { x: 100, y: 295, width: 100, height: 10 }, 
        { x: 100, y: 495, width: 100, height: 10 }, 
        { x: 200, y: 395, width: 100, height: 10 }, 
        { x: 300, y: 695, width: 100, height: 10 }, 
        { x: 400, y: 595, width: 100, height: 10 }, 
        { x: 500, y: 595, width: 100, height: 10 },
        { x: 500, y: 395, width: 100, height: 10 },


        { x: 95, y: 300, width: 10, height: 100 }, 
        { x: 395, y: 300, width: 10, height: 100 }, 
        { x: 395, y: 400, width: 10, height: 100 },
        { x: 295, y: 400, width: 10, height: 100 },
        { x: 95, y: 500, width: 10, height: 100 },
        { x: 95, y: 600, width: 10, height: 100 }, 
        { x: 295, y: 600, width: 10, height: 100 }, 
        { x: 395, y: 600, width: 10, height: 100 }, 

    ],
    endZones: [{ x: 0, y: 200}],
    playerPos: { x: 300, y: 500},
    hunterPos :  { x: 0, y: 400} 

};
const level0 = {
    walls: [

    


    ],
     endZones: [],
    playerPos: {},
    hunterPos :{} 
    
};
const levelLose = {
    walls: [
    ],
    endZones: [],
    playerPos: {},
    hunterPos :{} 
    
};
const level5 = {
    walls: [
        // Out line wall
        { x: 0, y: 195, width: 100, height: 10 }, 
        { x: 100, y: 195, width: 100, height: 10 }, 
        { x: 200, y: 195, width: 100, height: 10 }, 
        { x: 300, y: 195, width: 100, height: 10 }, 
        { x: 400, y: 195, width: 100, height: 10 }, 
        { x: 500, y: 195, width: 100, height: 10 }, 
        { x: 595, y: 200, width: 10, height: 100 }, 
        { x: 595, y: 300, width: 10, height: 100 }, 
        { x: 595, y: 400, width: 10, height: 100 }, 
        { x: 595, y: 500, width: 10, height: 100 }, 
        { x: 595, y: 600, width: 10, height: 100 }, 
        { x: 595, y: 600, width: 10, height: 100 },
        { x: 595, y: 700, width: 10, height: 100 }, 
        
        { x: 0, y: 795, width: 100, height: 10 }, 
        { x: 100, y: 795, width: 100, height: 10 }, 
        { x: 200, y: 795, width: 100, height: 10 }, 
        { x: 300, y: 795, width: 100, height: 10 }, 
        { x: 400, y: 795, width: 100, height: 10 }, 
        { x: 500, y: 795, width: 100, height: 10 }, 
        { x: 0, y: 200, width: 10, height: 100 }, 
        { x: 0, y: 300, width: 10, height: 100 }, 
        { x: 0, y: 400, width: 10, height: 100 }, 
        { x: 0, y: 500, width: 10, height: 100 }, 
        { x: 0, y: 600, width: 10, height: 100 }, 
        { x: 0, y: 600, width: 10, height: 100 },
        { x: 0, y: 700, width: 10, height: 100 }, 

        
        // Inside Wall

        { x: 500, y: 395, width: 100, height: 10 },
        { x: 200, y: 695, width: 100, height: 10 },


        { x: 395, y: 300, width: 10, height: 100 }, 
        { x: 495, y: 300, width: 10, height: 100 }, 
        { x: 495, y: 500, width: 10, height: 100 }, 

    ],
    endZones: [ { x: 0, y: 600} ],
    playerPos: { x: 500, y: 500},
    hunterPos :  { x: 400, y: 200} 
    
};
const level3 = {
    walls: [
        // Out line wall
        { x: 0, y: 195, width: 100, height: 10 }, 
        { x: 100, y: 195, width: 100, height: 10 }, 
        { x: 200, y: 195, width: 100, height: 10 }, 
        { x: 300, y: 195, width: 100, height: 10 }, 
        { x: 400, y: 195, width: 100, height: 10 }, 
        { x: 500, y: 195, width: 100, height: 10 }, 
        { x: 595, y: 200, width: 10, height: 100 }, 
        { x: 595, y: 300, width: 10, height: 100 }, 
        { x: 595, y: 400, width: 10, height: 100 }, 
        { x: 595, y: 500, width: 10, height: 100 }, 
        { x: 595, y: 600, width: 10, height: 100 }, 
        { x: 595, y: 600, width: 10, height: 100 },
        { x: 595, y: 700, width: 10, height: 100 }, 
        
        { x: 0, y: 795, width: 100, height: 10 }, 
        { x: 100, y: 795, width: 100, height: 10 }, 
        { x: 200, y: 795, width: 100, height: 10 }, 
        { x: 300, y: 795, width: 100, height: 10 }, 
        { x: 400, y: 795, width: 100, height: 10 }, 
        { x: 500, y: 795, width: 100, height: 10 }, 
        { x: 0, y: 200, width: 10, height: 100 }, 
        { x: 0, y: 300, width: 10, height: 100 }, 
        { x: 0, y: 400, width: 10, height: 100 }, 
        { x: 0, y: 500, width: 10, height: 100 }, 
        { x: 0, y: 600, width: 10, height: 100 }, 
        { x: 0, y: 600, width: 10, height: 100 },
        { x: 0, y: 700, width: 10, height: 100 }, 

        
        // Inside Wall

        { x: 500, y: 595, width: 100, height: 10 },
        { x: 400, y: 595, width: 100, height: 10 },
        { x: 300, y: 595, width: 100, height: 10 },
        { x: 200, y: 595, width: 100, height: 10 },
        { x: 100, y: 595, width: 100, height: 10 },
        { x: 400, y: 495, width: 100, height: 10 },
        { x: 300, y: 495, width: 100, height: 10 },

        { x: 495, y: 600, width: 10, height: 100 }, 
        { x: 495, y: 500, width: 10, height: 100 }, 
        { x: 295, y: 400, width: 10, height: 100 },

    ],
    endZones: [{ x: 0, y: 200}],
    playerPos: { x: 400, y: 500},
    hunterPos :  { x: 100, y: 300} 

};
const level4 = {
    walls: [
        // Out line wall
        { x: 0, y: 195, width: 100, height: 10 }, 
        { x: 100, y: 195, width: 100, height: 10 }, 
        { x: 200, y: 195, width: 100, height: 10 }, 
        { x: 300, y: 195, width: 100, height: 10 }, 
        { x: 400, y: 195, width: 100, height: 10 }, 
        { x: 500, y: 195, width: 100, height: 10 }, 
        { x: 595, y: 200, width: 10, height: 100 }, 
        { x: 595, y: 300, width: 10, height: 100 }, 
        { x: 595, y: 400, width: 10, height: 100 }, 
        { x: 595, y: 500, width: 10, height: 100 }, 
        { x: 595, y: 600, width: 10, height: 100 }, 
        { x: 595, y: 600, width: 10, height: 100 },
        { x: 595, y: 700, width: 10, height: 100 }, 
        
        { x: 0, y: 795, width: 100, height: 10 }, 
        { x: 100, y: 795, width: 100, height: 10 }, 
        { x: 200, y: 795, width: 100, height: 10 }, 
        { x: 300, y: 795, width: 100, height: 10 }, 
        { x: 400, y: 795, width: 100, height: 10 }, 
        { x: 500, y: 795, width: 100, height: 10 }, 
        { x: 0, y: 200, width: 10, height: 100 }, 
        { x: 0, y: 300, width: 10, height: 100 }, 
        { x: 0, y: 400, width: 10, height: 100 }, 
        { x: 0, y: 500, width: 10, height: 100 }, 
        { x: 0, y: 600, width: 10, height: 100 }, 
        { x: 0, y: 600, width: 10, height: 100 },
        { x: 0, y: 700, width: 10, height: 100 }, 

        
        // Inside Wall

        { x: 500, y: 495, width: 100, height: 10 },
        { x: 400, y: 395, width: 100, height: 10 },
        { x: 400, y: 695, width: 100, height: 10 },
        { x: 200, y: 495, width: 100, height: 10 },
        { x: 100, y: 495, width: 100, height: 10 },
        { x: 0, y: 395, width: 100, height: 10 },
        { x: 200, y: 295, width: 100, height: 10 },
        { x: 95, y: 300, width: 10, height: 100 },
        { x: 100, y: 295, width: 100, height: 10 },
        { x: 395, y: 600, width: 10, height: 100 }, 
        { x: 295, y: 600, width: 10, height: 100 }, 
        { x: 295, y: 400, width: 10, height: 100 }, 


    ],
    endZones: [{ x: 0, y: 200}],
    playerPos: { x: 200, y: 300},
    hunterPos :  { x: 200, y: 500} 

};
const level2 = {
    walls: [
        // Out line wall
        { x: 0, y: 195, width: 100, height: 10 }, 
        { x: 100, y: 195, width: 100, height: 10 }, 
        { x: 200, y: 195, width: 100, height: 10 }, 
        { x: 300, y: 195, width: 100, height: 10 }, 
        { x: 400, y: 195, width: 100, height: 10 }, 
        { x: 500, y: 195, width: 100, height: 10 }, 
        { x: 595, y: 200, width: 10, height: 100 }, 
        { x: 595, y: 300, width: 10, height: 100 }, 
        { x: 595, y: 400, width: 10, height: 100 }, 
        { x: 595, y: 500, width: 10, height: 100 }, 
        { x: 595, y: 600, width: 10, height: 100 }, 
        { x: 595, y: 600, width: 10, height: 100 },
        { x: 595, y: 700, width: 10, height: 100 }, 
        
        { x: 0, y: 795, width: 100, height: 10 }, 
        { x: 100, y: 795, width: 100, height: 10 }, 
        { x: 200, y: 795, width: 100, height: 10 }, 
        { x: 300, y: 795, width: 100, height: 10 }, 
        { x: 400, y: 795, width: 100, height: 10 }, 
        { x: 500, y: 795, width: 100, height: 10 }, 
        { x: 0, y: 200, width: 10, height: 100 }, 
        { x: 0, y: 300, width: 10, height: 100 }, 
        { x: 0, y: 400, width: 10, height: 100 }, 
        { x: 0, y: 500, width: 10, height: 100 }, 
        { x: 0, y: 600, width: 10, height: 100 }, 
        { x: 0, y: 600, width: 10, height: 100 },
        { x: 0, y: 700, width: 10, height: 100 }, 

        
        // Inside Wall

        { x: 500, y: 495, width: 100, height: 10 },
        { x: 400, y: 395, width: 100, height: 10 },
        { x: 400, y: 695, width: 100, height: 10 },
        { x: 200, y: 495, width: 100, height: 10 },
        { x: 100, y: 495, width: 100, height: 10 },
        { x: 0, y: 395, width: 100, height: 10 },
        { x: 200, y: 295, width: 100, height: 10 },
        { x: 0, y: 295, width: 100, height: 10 },
        { x: 100, y: 295, width: 100, height: 10 },
        { x: 395, y: 600, width: 10, height: 100 }, 
        { x: 295, y: 600, width: 10, height: 100 }, 
        { x: 295, y: 400, width: 10, height: 100 }, 


    ],
    endZones: [{ x: 0, y: 200}],
    playerPos: { x: 200, y: 300},
    hunterPos :  { x: 500, y: 300} 

};
const level6 = {
    walls: [
        // Out line wall
        { x: 0, y: 195, width: 100, height: 10 }, 
        { x: 100, y: 195, width: 100, height: 10 }, 
        { x: 200, y: 195, width: 100, height: 10 }, 
        { x: 300, y: 195, width: 100, height: 10 }, 
        { x: 400, y: 195, width: 100, height: 10 }, 
        { x: 500, y: 195, width: 100, height: 10 }, 
        { x: 595, y: 200, width: 10, height: 100 }, 
        { x: 595, y: 300, width: 10, height: 100 }, 
        { x: 595, y: 400, width: 10, height: 100 }, 
        { x: 595, y: 500, width: 10, height: 100 }, 
        { x: 595, y: 600, width: 10, height: 100 }, 
        { x: 595, y: 600, width: 10, height: 100 },
        { x: 595, y: 700, width: 10, height: 100 }, 
        
        { x: 0, y: 795, width: 100, height: 10 }, 
        { x: 100, y: 795, width: 100, height: 10 }, 
        { x: 200, y: 795, width: 100, height: 10 }, 
        { x: 300, y: 795, width: 100, height: 10 }, 
        { x: 400, y: 795, width: 100, height: 10 }, 
        { x: 500, y: 795, width: 100, height: 10 }, 
        { x: 0, y: 200, width: 10, height: 100 }, 
        { x: 0, y: 300, width: 10, height: 100 }, 
        { x: 0, y: 400, width: 10, height: 100 }, 
        { x: 0, y: 500, width: 10, height: 100 }, 
        { x: 0, y: 600, width: 10, height: 100 }, 
        { x: 0, y: 600, width: 10, height: 100 },
        { x: 0, y: 700, width: 10, height: 100 }, 

        
        // // Inside Wall

       
        { x: 500, y: 395, width: 100, height: 10 },
        { x: 400, y: 395, width: 100, height: 10 },


        { x: 395, y: 200, width: 10, height: 100 }, 
        { x: 395, y: 300, width: 10, height: 100 }, 

    


    ],
     endZones: [ { x: 0, y: 600} ],
    playerPos: { x: 500, y: 500},
    hunterPos :  { x: 500, y: 200} 
    
};