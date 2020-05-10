var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Element, Event, h, Host, Listen, Prop, State, } from '@stencil/core';
import { hasShadowDom } from '../../utils/utils';
let SelectComponent = class SelectComponent {
    constructor() {
        this.idOption = 'combobox';
        this.icon = 'caret-down-outline';
        this.isExpanded = false;
    }
    async onChange({ detail }) {
        this.value = detail;
        this.isShowList();
    }
    // @Watch('value')
    // hasMatchOption() {
    //   this.optionsValues.forEach((x) => {
    //     if (!x.textContent.toLowerCase().includes(this.value.toLowerCase())) {
    //       x.style.display = 'none'
    //     } else {
    //       this.icon = 'caret-up-outline'
    //       x.style.display = 'flex'
    //       this.isExpanded = true
    //     }
    //   })
    // }
    componentDidLoad() {
        this.optionsValues = Array.from(this.el.shadowRoot.querySelectorAll('mrb-select-option'));
        console.log(this.optionsValues);
        if (hasShadowDom(this.el))
            console.log('Padre, con el terminó todo');
    }
    render() {
        console.count();
        return (h(Host, null,
            h("div", { class: { combobox: true }, role: "combobox" },
                h("label", null, this.label),
                h("input", { type: "text", id: this.idOption, value: this.value, ref: (el) => (this.input = el), onInput: () => (this.value = this.input.value) }),
                h("ion-icon", { class: "icon", name: this.icon, onClick: this.isShowList.bind(this) })),
            h("div", { class: { 'options-list': true, 'is-expanded': this.isExpanded } }, this.options.map((option) => (h("mrb-select-option", null, option.name))))));
    }
    isShowList() {
        if (!this.isExpanded) {
            this.openList();
        }
        else {
            this.closeList();
        }
        this.isExpanded = !this.isExpanded;
    }
    closeList() {
        this.icon = 'caret-down-outline';
    }
    openList() {
        this.icon = 'caret-up-outline';
    }
};
__decorate([
    Element()
], SelectComponent.prototype, "el", void 0);
__decorate([
    Prop()
], SelectComponent.prototype, "options", void 0);
__decorate([
    Prop()
], SelectComponent.prototype, "label", void 0);
__decorate([
    Prop({ attribute: 'id' })
], SelectComponent.prototype, "idOption", void 0);
__decorate([
    State()
], SelectComponent.prototype, "value", void 0);
__decorate([
    State()
], SelectComponent.prototype, "icon", void 0);
__decorate([
    State()
], SelectComponent.prototype, "isExpanded", void 0);
__decorate([
    Event()
], SelectComponent.prototype, "changeVisibilityOption", void 0);
__decorate([
    Listen('clickOption')
], SelectComponent.prototype, "onChange", null);
SelectComponent = __decorate([
    Component({
        tag: 'mrb-select',
        styleUrl: 'select.scss',
        shadow: true,
    })
], SelectComponent);
export { SelectComponent };
