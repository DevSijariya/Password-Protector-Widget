 /** @odoo-module **/
import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.PasswordWidget = publicWidget.Widget.extend({
    selector: "#password",
    start: function () {
        this.$el.wrap('<div class="password-container"></div>');
        this.$el.after('<button type="button" class="toggle-password"><i class="fa fa-eye"></i></button>');

        this.$el.siblings(".toggle-password").on("click", () => {
            const type = this.$el.attr("type") === "password" ? "text" : "password";
            this.$el.attr("type", type);
            this.$el.siblings(".toggle-password").html(
                type === "password" ? '<i class="fa fa-eye"></i>' : '<i class="fa fa-eye-slash"></i>'
            );
        });
    },
});
