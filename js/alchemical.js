$(document).ready(function() {

    /**
     * Computes and update the maximums of peripheral and personal motes.
     * @param {} essence
     * @param {} willpower
     * @param {} virtueSum
     */
    function updateMaxMotes(essence, willpower, virtueSum) {
        $("#personalTotal").text((essence*3) + (willpower));
        $("#peripheralTotal").text((essence * 5) + (willpower * 3) + (virtueSum * 2));
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
