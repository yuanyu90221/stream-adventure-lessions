# stream-adventure

## Challenge 12 DUPLEXER

[child_process](https://medium.com/wenchin-rolls-around/node-js-%E7%9A%84%E5%AD%90%E7%A8%8B%E5%BA%8F%E6%A8%A1%E7%B5%84-child-process-196529aacfdd)

***Topic*** use child_process spawn to create a sub process to generate duplexer stream

***Notice*** 1. duplexer consume 2 paramaters, writable, and readable which is come from spawned sub process not main process
             2. for childProcess the writable stream is parent process's readable, the readable stream is parent process's writable. 
