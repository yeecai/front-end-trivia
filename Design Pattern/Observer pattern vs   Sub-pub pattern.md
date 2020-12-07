Observer pattern vs   Sub-pub pattern

Observer give callback to the subject/observable, the subject/observable save it by push it into an array, when the specific event is triggered, subject will fire all the callback one by one

Publisher-subscriber pattern instead using middleman to handle it

like message queue, the publisher and subscriber don't have to know each other.