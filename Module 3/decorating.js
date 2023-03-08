function doSomething(name) {
    console.log('Hello, ' + name);
}


function timingDecorator(wrappedFunction){
    return function(){
        //let origFuncName = (wrappedFunction.name ? wrappedFunctiion.name : 'WrappedFunction')
        let origFuncName = 'wrappedFunction' + `(${[...arguments].join(', ')})`;
        console.log('');
        console.time(origFuncName + ' took');
        const result = wrappedFunction.apply(this, arguments);
        console.timeEnd(origFuncName + ' took');
        
        return result;
    }
}


const timedDoSomething = timingDecorator(doSomething);
timedDoSomething('Jo');
