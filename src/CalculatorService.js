
export function Calculate(hours) {
   
   const bar = hours/40
   const parts = bar.toString().split('.');

   const remainder = hours%40;

   if (remainder !== 0){
       return{fte:parts[0], remainder:`.${parts[1]}`}
   }

return {fte:parts[0], remainder:remainder.toString()}
}