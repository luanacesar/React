import fruit from './foods';

function choice(){
    
 Math.floor(Math.random() * fruit.length);

console.log()
}
function remove(){
    console.log('REMOVE');
}

export default choice;
export {choice, remove}; 