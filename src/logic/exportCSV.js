/**
 * Generates the csv file content
 * 
 * @param {{key:String, message:String, isDone:String}[]} taskList 
 * @returns multiline string content to be added to csv file
 */
export const getCSVData = (taskList) => {
    let csvFile = 'Message,IsDone\n';

    taskList.map( item => {
        const row = `${item['message']},${item['isDone'].toString()}\n` 
        csvFile += row
    })
    return csvFile;
}