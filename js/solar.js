
$(document).ready(function() {

    function updateMaxMotes(essence, willpower, virtueSum) {
        $("#personalTotal").text((essence*3) + willpower);
        $("#peripheralTotal").text((essence*7) + willpower + virtueSum);
    };

    $(document.body).on("click", "#essence", function(e) {
        var virtueSum = 0;
        $(".virtueTotal").each(function(i, obj) {
            virtueSum += parseInt($(obj).attr("numValue"));
        });
        updateMaxMotes(parseInt($("#essence").attr("numValue")), parseInt($("#willpower").attr("numValue")), virtueSum);
    });

});
