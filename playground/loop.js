// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];


// new timers, tasks, operations are recorded from myFile running
myFile.runContents();


function shouldContinue(){
    // check one: any pending setTimeout, setInterval, setImmediate?
    // check two: any pending OS tasks? (like server listening to port)
    // check three: any pending long running operations? (like fs module
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}


// entire body executes in one 'tick'
while(shouldContinue()) {
    // 1) Node looks at pendingTimer and sees if any functions
    // are ready to be called

    // 2) Node looks at pendingOSTasks and pendingOperations
    // and calls relevant callbacks

    // 3) Pause execution. Continue when...
    // - a new pendingOSTask is done
    // - a new pendingOperation is done
    // - a timer is about to complete

    // 4) Look at pendingTimers. Call any setImmediate

    // 5) Handle any 'close' events
}



// exit back to terminal