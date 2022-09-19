document.onkeydown = function(e) {
    if (e.key=='ArrowRight') {
        next_button = $("ul.pagination li a:contains('下一頁')")[0];
        if (next_button) {
            next_button.click();
        }
    }
    else if (e.key=='ArrowLeft') {
        prev_button = $("ul.pagination li a:contains('上一頁')")[0];
        if (prev_button) {
            prev_button.click();
        }
    }
};
