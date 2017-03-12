const path = a => v => {
  if (!v) return undefined
  if (!a.length) return undefined
   let name = a[0]
     if (v.hasOwnProperty(name)) {
       let o = v[name] 
       if (a.length == 1) {          
         return o
       }
        a.shift()
        return path(a)(o)
     } 
       
     return undefined;  
  
}


export default path
/*

console.log(path(['pet','kid','name'])(data))
console.log(path(['pet','kid','owner'])(data))
console.log(path(['pet', 'owner'])(data))
*/