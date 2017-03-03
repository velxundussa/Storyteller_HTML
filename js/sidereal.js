
$(document).ready(function() {

    /**
     * Computes and update the maximums of peripheral and personal motes.
     * @param {} essence
     * @param {} willpower
     * @param {} virtueSum
     */
    function updateMaxMotes(essence, willpower, virtueSum) {
        $("#personalTotal").text((essence*2) + willpower);
        $("#peripheralTotal").text((essence*6) + willpower + virtueSum);
    };

    $(document.body).on("click", "#essence, #willpower, .Virtue", function(e) {
        var virtueSum = 0;
        $(".virtueTotal").each(function(i, obj) {
            virtueSum += parseInt($(obj).attr("numValue"));
        });
        updateMaxMotes(parseInt($("#essence").attr("numValue")), parseInt($("#willpower").attr("numValue")), virtueSum);
    });

});
