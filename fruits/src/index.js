import { choice, remove } from './helpers';
import foods from './foods';


let fruit = choice(foods);

console.log('Id like one' + {fruit} + ', please.');

console.log('Here you go:' + {fruit} + ', please.');

remove(foods,fruit);


 




