const $dupsko = jQuery("#get_in_n2");
const $button_n1 = jQuery("#get_in_n1");
const changeColor = () => {
    $dupsko.toggleClass("red_n1");
};
$button_n1.click(changeColor);
