import "../../prototype/array";
import { it, expect } from 'vitest'


it('should get first element', () => {
   const array = [1, 2, 3, 4, 5];
   const firstElement = array.mrFirst();
   
   expect (firstElement).toBe(1);
})