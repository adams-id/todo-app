import {createTask} from '../pages/homePage'

//Test to check the createTask properly creates a todo and updates the existing list

test('Should Add task to the list', () => {
   const currentTasks = [        
      { "key": 1, "message": "one", "isDone": false },        
      { "key": 2, "message": "two", "isDone": false }
   ]     

   const expected = [                 
      { key: 1, message: "one", "isDone": false },        
      { key: 2, message: "two", "isDone": false },
      { key: 3, message: 'three', "isDone": false }     
   ]

   const result = createTask(currentTasks, "three", 3)
   expect(result).toEqual(expected)
})


