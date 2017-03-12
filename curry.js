import add from './add'

const cu = fn => {

  const c = (...args) => {  
    return (args.length >= fn.length) ? fn(...args) : (...a) => c(...[...args, ...a])
  }    

  return c
}

const cuAdd = cu(add)

export default  cuAdd