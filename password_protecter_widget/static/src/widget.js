/** @odoo-module */
import { _t } from "@web/core/l10n/translation";
import { registry } from "@web/core/registry";
import { Component, useState } from "@odoo/owl";


class PasswordProtector extends Component {
    static template = "password.protector";
    
    setup() {
        this.state = useState({
            type: "password",
        });
    }

    onShow() {
        this.state.type = this.state.type === "password" ? "text" : "password";
    }

    onInput(event) {
        if (this.props.record) {  // Only update record if it's in backend
            this.props.record.update({ [this.props.name]: event.target.value });
        }
    }
}

// Register for Backend (Form Views)
export const password_hide = {
    component: PasswordProtector,
    displayName: _t("Password"),
    supportedTypes: ["char", "password"],
};

registry.category("fields").add("password_hide", password_hide);


