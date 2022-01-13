import {createTask} from '../pages/homePage'

test('Should Add task to the list', () => {
   const currentTasks = [        
      { "key": 1, "message": "one", "isDone": true },        
      { "key": 2, "message": "two", "isDone": true }
   ]     

   const expected = [                 
      { key: 1, message: "one", "isDone": true },        
      { key: 2, message: "two", "isDone": true },
      { key: 3, message: 'three', "isDone": false }     
   ]

   const result = createTask(currentTasks, "three", 3)
   expect(result).toEqual(expected)
})


