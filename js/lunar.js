$(document).ready(function() {

    /**
     * Computes and update the maximums of peripheral and personal motes.
     * @param {} essence
     * @param {} willpower
     * @param {} virtueSum
     */
    function updateMaxMotes(essence, willpower, virtueSum) {
        $("#personalTotal").text(essence + (willpower * 2));
        $("#peripheralTotal").text((essence * 4) + (willpower * 2) + (virtueSum * 4));
    };

    $(document.body).on("click", "#essence, #willpower, .Virtue", function(e) {
        var virtueSum = 0;
        var highVirtue = 0;
        var highVirtue2 = 0;

        $(".virtueTotal").each(function(i, obj) {
            if (parseInt($(obj).attr("numValue")) >= highVirtue) {
                highVirtue = parseInt($(obj).attr("numValue"));
            }
        });

        virtueSum = highVirtue;

        updateMaxMotes(parseInt($("#essence").attr("numValue")), parseInt($("#willpower").attr("numValue")), virtueSum);
    });

});
