
$(document).ready(function() {

    /**
     * Computes and update the maximums of peripheral and personal motes.
     * @param {} essence
     * @param {} willpower
     * @param {} virtueSum
     */
    function updateMaxMotes(essence, willpower, virtueSum) {
        $("#personalTotal").text(essence + willpower);
        $("#peripheralTotal").text((essence*4) + willpower + virtueSum);
    };

    $(document.body).on("click", "#essence", function(e) {
        var virtueSum = 0;
        var highVirtue =0;
        var highVirtue2 =0;

        $(".virtueTotal").each(function(i, obj) {
            if (parseInt($(obj).attr("numValue")) >= highVirtue ) {
                highVirtue2 = highVirtue;
                highVirtue =  parseInt($(obj).attr("numValue"));
            }
        });

        virtueSum = highVirtue + highVirtue2;

        updateMaxMotes(parseInt($("#essence").attr("numValue")), parseInt($("#willpower").attr("numValue")), virtueSum);
    });

});
