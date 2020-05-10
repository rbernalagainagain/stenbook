var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
let MyComponent = class MyComponent {
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", null,
            "Hello, World! I'm ",
            this.getText());
    }
};
__decorate([
    Prop()
], MyComponent.prototype, "first", void 0);
__decorate([
    Prop()
], MyComponent.prototype, "middle", void 0);
__decorate([
    Prop()
], MyComponent.prototype, "last", void 0);
MyComponent = __decorate([
    Component({
        tag: 'my-component',
        styleUrl: 'my-component.css',
        shadow: true,
    })
], MyComponent);
export { MyComponent };
