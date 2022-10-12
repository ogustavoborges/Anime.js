function box1(){
    anime({
        targets: '#box1',
        translateX: -200,
        borderRadius: ['0%', '50%'],
        backgroundColor: '#018F19',  
        duration: 3000,
        rotateZ: 360,
        direction: "alternate",
    })
    
}
function box2(){
    anime({
    targets: '#box2',
    translateY: 200,
    scale: 0.5,
    borderRadius: ['0%', '10%'],
    backgroundColor: '#DB3D5A',  
    duration: 3000,
    rotateZ: 360,
   direction: "alternate",
 
})}

function box3(){
    anime({
    targets: '#box3',
    translateY: -200,
    borderRadius: ['0%', '30%'],
    backgroundColor: '#4E91DB',  
    duration: 3000,
    rotateZ: 360,
   direction: "alternate",
 
})}

function box4(){
    anime({
    targets: '#box4',
    translateX: 200,
    scale: 2,
    borderRadius: ['0%', '40%'],
    backgroundColor: '#E89525',  
    duration: 3000,
    rotateZ: 360,
   direction: "alternate",
 
})}