import * as _angular_core from '@angular/core';
import { Type } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface ComponentWithSelector extends Type<BaseComponent> {
    selector: string;
}
declare abstract class BaseComponent {
    readonly translate: TranslateService;
    readonly language: _angular_core.InputSignalWithTransform<string, string>;
    static selector: string;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<BaseComponent, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<BaseComponent, never, never, { "language": { "alias": "language"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

interface Notification {
    severity: 'info' | 'warning' | 'error' | 'success';
    summary: string;
    detail?: string;
    sticky?: boolean;
}
interface TemplateData {
    id: string;
    name: string;
    language: string;
    category: string;
    status?: TemplateStatus;
    quality?: TemplateRating;
    components: TemplateComponents;
}
interface TemplateComponents {
    header?: TemplateHeader;
    body?: TemplateBody;
    footer?: TemplateFooter;
    buttons?: TemplateButtons;
}
declare class TemplateHeader {
    type: 'HEADER';
    format?: string;
    text?: string;
    example?: {
        header_text_named_params?: {
            example: string;
            param_name: string;
        }[];
    };
}
declare class TemplateBody {
    type: 'BODY';
    text?: string;
    example?: {
        body_text_named_params?: {
            example: string;
            param_name: string;
        }[];
    };
}
declare class TemplateFooter {
    type: 'FOOTER';
    text?: string;
    example?: {
        footer_text_named_params?: {
            example: string;
            param_name: string;
        }[];
    };
}
type TemplateStatus = 'APPROVED' | 'REJECTED' | 'PAUSED' | 'PENDING' | 'DELETED';
type TemplateRating = 'GREEN' | 'YELLOW' | 'RED' | 'UNKNOWN';
type TemplateButton = TemplateButtonUrl | TemplateButtonPhoneNumber | TemplateButtonQuickReply | TemplateButtonCopyCode;
interface TemplateButtonCopyCode {
    type: Extract<ButtonType, "COPY_CODE">;
    example: string;
}
interface TemplateButtonUrl {
    type: Extract<ButtonType, "URL">;
    url: string;
    example?: string;
}
interface TemplateButtonPhoneNumber {
    type: Extract<ButtonType, "PHONE_NUMBER">;
    phone_number: string;
    text: string;
}
interface TemplateButtonQuickReply {
    type: Extract<ButtonType, "QUICK_REPLY">;
    text: string;
}
interface TemplateButtons {
    type: 'BUTTONS';
    buttons: TemplateButton[];
}
type ButtonType = 'COPY_CODE' | 'URL' | 'PHONE_NUMBER' | 'QUICK_REPLY';
type Option<T = string> = {
    label: string;
    value: T;
    example?: string;
};

interface SaveEvent extends Event {
    data: TemplateData;
}

declare class TemplateEditor extends BaseComponent {
    static selector: string;
    readonly data: _angular_core.ModelSignal<TemplateData>;
    readonly options: _angular_core.InputSignalWithTransform<Option[], Option[]>;
    readonly onSave: _angular_core.OutputEmitterRef<SaveEvent>;
    readonly onReset: _angular_core.OutputEmitterRef<void | Event>;
    readonly onDelete: _angular_core.OutputEmitterRef<void | Event>;
    reset($event: Event, emitEvent?: boolean): void;
    save($event: Event): void;
    private prepareSave;
    delete($event: Event): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TemplateEditor, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<TemplateEditor, "ng-component", never, { "data": { "alias": "data"; "required": false; "isSignal": true; }; "options": { "alias": "options"; "required": false; "isSignal": true; }; }, { "data": "dataChange"; "onSave": "save"; "onReset": "reset"; "onDelete": "delete"; }, never, never, true, never>;
}

declare class TemplateList extends BaseComponent {
    static selector: string;
    readonly filter: _angular_core.WritableSignal<string>;
    readonly data: _angular_core.InputSignalWithTransform<TemplateData[], TemplateData[]>;
    readonly filteredData: _angular_core.Signal<TemplateData[]>;
    readonly onEdit: _angular_core.OutputEmitterRef<TemplateData>;
    protected edit(template: TemplateData): void;
    readonly qualitySeverity: (template: TemplateData) => "success" | "warning" | "error" | "secondary";
    readonly statusSeverity: (template: TemplateData) => "success" | "warning" | "secondary" | "danger" | "info";
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TemplateList, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<TemplateList, "ng-component", never, { "data": { "alias": "data"; "required": false; "isSignal": true; }; }, { "onEdit": "edit"; }, never, never, true, never>;
}

declare class FacebookLogin extends BaseComponent {
    static selector: string;
    private readonly document;
    private readonly http;
    private readonly renderer;
    private readonly COMPUTED_API_KEY;
    private readonly facebookSDKInjected;
    readonly onSuccess: _angular_core.OutputEmitterRef<string>;
    readonly onError: _angular_core.OutputEmitterRef<Notification>;
    readonly APP_ID: _angular_core.InputSignal<string>;
    readonly CONFIG_ID: _angular_core.InputSignal<string>;
    readonly URL: _angular_core.InputSignal<string>;
    readonly PROVIDED_API_KEY: _angular_core.InputSignal<string>;
    readonly API_KEY: _angular_core.WritableSignal<string>;
    readonly hasAPIKey: _angular_core.Signal<boolean>;
    readonly facebookButtonDisabled: _angular_core.WritableSignal<boolean>;
    readonly facebookState: _angular_core.WritableSignal<"default" | "loading">;
    readonly facebookResponse: _angular_core.WritableSignal<any>;
    readonly facebookLoginAuthCode: _angular_core.WritableSignal<string>;
    readonly facebookLoginToken: _angular_core.ResourceRef<string>;
    private readonly window;
    get FB_SDK(): any;
    onMessage(event: Event): void;
    constructor();
    launchSignUp(): Promise<void>;
    private getHeaders;
    private injectFB_SDK;
    private generateToken;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FacebookLogin, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FacebookLogin, "ng-component", never, { "APP_ID": { "alias": "APP_ID"; "required": true; "isSignal": true; }; "CONFIG_ID": { "alias": "CONFIG_ID"; "required": true; "isSignal": true; }; "URL": { "alias": "URL"; "required": false; "isSignal": true; }; "PROVIDED_API_KEY": { "alias": "API_KEY"; "required": false; "isSignal": true; }; }, { "onSuccess": "success"; "onError": "error"; }, never, never, true, never>;
}

declare function setup(): void;

export { BaseComponent, FacebookLogin, TemplateEditor, TemplateList, setup };
export type { ComponentWithSelector, Option, TemplateData };
