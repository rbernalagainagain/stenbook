var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Element, Event, h, Host, Listen, Prop, } from '@stencil/core';
let SelectOptionComponent = class SelectOptionComponent {
    constructor() {
        this.role = 'option';
    }
    clickOptionHandler() {
        this.el.setAttribute('aria-selected', 'true');
        this.clickOption.emit(this.value || this.el.textContent);
    }
    render() {
        return h(Host, null);
    }
};
__decorate([
    Element()
], SelectOptionComponent.prototype, "el", void 0);
__decorate([
    Prop()
], SelectOptionComponent.prototype, "value", void 0);
__decorate([
    Prop({ reflect: true })
], SelectOptionComponent.prototype, "role", void 0);
__decorate([
    Event()
], SelectOptionComponent.prototype, "clickOption", void 0);
__decorate([
    Listen('click')
], SelectOptionComponent.prototype, "clickOptionHandler", null);
SelectOptionComponent = __decorate([
    Component({
        tag: 'mrb-select-option',
        styleUrl: 'select-option.scss',
        shadow: true,
    })
], SelectOptionComponent);
export { SelectOptionComponent };
