Notification.requestPermission( function(status) {
    console.log(status); // les notifications ne seront affichées que si "autorisées"
    var n = new Notification("title", {body: "notification body"}); // this also shows the notification
});