// var f = new File("~~/01 - Match Source - High bitrate.epr");
// alert(f.exists.toString());
// f.close();

// alert(app.getSystemPath(SystemPath.EXTENSION).toString());
// alert(app.encoder.launchEncoder());

var epr = "";

$._PPP = {
    setepr: function(e) {
        epr = e;
    },
    export2: function(path) {

        var ameStatus = BridgeTalk.getStatus("ame");

        if (ameStatus == "ISNOTINSTALLED") {
            alert('未安装 Adobe Media Encoder！');
            // $._PPP_.updateEventPanel("未安装 Adobe Media Encoder！");

        } else {
            var sequence = app.project.activeSequence;

            var output = path + "\\temp.mp4";

            app.encoder.encodeSequence(sequence, output, epr, 1, 1);

            app.encoder.launchEncoder();
            app.encoder.startBatch();
        }

    },
    findfolder: function(path) {
        var f = new Folder(path);
        // alert(f.exists.toString());
        return (f.exists);
    }
}