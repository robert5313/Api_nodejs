//Create Files
The File System module has methods for creating new files:

    fs.appendFile() - This method appends specified content to a file. If the file does not exist, it will be created. Here's an example usage:
    fs.open()  - This method takes a "flag" as the second argument. If the flag is set to 'w' for "writing", the specified file is opened for writing.
    If the file does not exist, an empty file will be created. 
    fs.writeFile()

The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

