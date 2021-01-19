function choice(itens){

let item = Math.floor(Math.random() * itens.length)
return itens[item];
}

function remove(itens, item){
    for(let i=0; i< itens.length; i++){
        if(itens[i] === item){
            return [... itens.slice(0,i), ...itens.slice(i+1)];
        }
    }
}
export {choice, remove}; 