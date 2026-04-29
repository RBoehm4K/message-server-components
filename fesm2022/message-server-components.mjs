import * as i0 from '@angular/core';
import { inject, input, effect, Directive, Component, DOCUMENT, Renderer2, computed, signal, output, resource, HostListener, ViewEncapsulation, ApplicationRef, EnvironmentInjector, createComponent, inputBinding, Injectable, Optional, Self, ElementRef, NgZone, forwardRef, Input, ViewContainerRef, model, HostBinding, provideZonelessChangeDetection } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import * as i1 from '@angular/common';
import { CommonModule, DOCUMENT as DOCUMENT$1 } from '@angular/common';
import * as i2 from '@angular/forms';
import { FormsModule, NG_VALIDATORS } from '@angular/forms';
import { TranslateService, TranslateDirective, TranslatePipe, provideTranslateService } from '@ngx-translate/core';
import { HttpClient, HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { createApplication } from '@angular/platform-browser';

var INTEGRATION$1 = {
	API_KEY: "API Key",
	FACEBOOK: {
		LOGIN: "Login with Facebook"
	},
	RELOAD: "Reload"
};
var TEMPLATE_EDITOR$1 = {
	TITLE: "Template Editor",
	SEARCH_PLACEHOLDER: "Search...",
	HEADER: {
		TITLE: "Name",
		TITLE_VALIDATION_HINT: "Name of the template must be lowercase and unique.",
		DESCRIPTION: "Create and customize your message templates here.",
		CATEGORY: "Category",
		LANGUAGE: "Language"
	},
	TEMPLATE: {
		HEADER: "Header",
		HEADER_PLACEHOLDER: "Title",
		BODY: "Body",
		BODY_PLACEHOLDER: "Message",
		FOOTER: "Footer",
		FOOTER_PLACEHOLDER: "Footer",
		LIST_HEADER: {
			TITLE: "Templates",
			NAME: "Name",
			LANGUAGE: "Language",
			CATEGORY: "Category",
			QUALITY: "Quality",
			STATUS: "Status"
		},
		LIST_NO_RESULTS: "No templates found matching your search."
	},
	PREVIEW: {
		DEFAULT_HEADER: "Title",
		DEFAULT_BODY: "Message",
		DEFAULT_FOOTER: "Footer"
	},
	CATEGORY: {
		MARKETING: "Marketing",
		UTILITY: "Utility"
	},
	LANGUAGE: {
		EN: "EN (US)",
		DE: "DE (DE)"
	},
	STATUS: {
		APPROVED: "Approved",
		REJECTED: "Rejected",
		PAUSED: "Paused",
		PENDING: "Pending",
		DELETED: "Deleted"
	},
	QUALITY: {
		HIGH_QUALITY: "High Quality",
		MEDIUM_QUALITY: "Medium Quality",
		LOW_QUALITY: "Low Quality",
		UNKNOWN: "Unknown Quality"
	},
	BUTTONS: {
		ADD_BUTTON: "Add Button",
		ADD_TOOLTIP: "You can add up to 10 buttons. If you add more than 3 buttons, they will appear in a list.",
		URL_TOOLTIP: "You can only have one URL button per template.",
		BUTTON_TYPE_URL: "URL Button",
		BUTTON_TYPE_PHONE_NUMBER: "Phone Number Button",
		BUTTON_TYPE_QUICK_REPLY: "Quick Reply Button",
		BUTTON_TYPE_COPY_CODE: "Copy Code Button",
		CANCEL: "Cancel",
		SAVE: "Save",
		DELETE: "Delete"
	},
	CONFIRMATION: {
		DELETE_TEMPLATE: "Are you sure you want to delete this template? This action cannot be undone."
	},
	SELECT_LANGUAGE: "Select Language",
	SELECT_CATEGORY: "Select Category",
	BUTTON: {
		TYPE: "Type of Button",
		TEXT: "Button Text",
		COPY_CODE: "Offer Code",
		PHONE_NUMBER: "Phone Number",
		URL: "Website URL",
		EXAMPLE: "Example",
		ALL_OPTIONS: "See all options",
		ADD_BUTTON: "Add Button"
	}
};
var BUTTONS$1 = {
	CONFIRM: "Confirm",
	CANCEL: "Cancel"
};
var BUTTON$1 = {
	TYPE: {
		QUICK_REPLY: "Reply",
		URL: "Visit website",
		PHONE_NUMBER: "Call Phone Number",
		COPY_CODE: "Copy offer code"
	}
};
var ERROR$1 = {
	HEADER: {
		ENDS_WITH_PLACEHOLDER: "Header may not end with a placeholder."
	},
	BODY: {
		ENDS_WITH_PLACEHOLDER: "Body may not end with a placeholder."
	},
	FOOTER: {
		ENDS_WITH_PLACEHOLDER: "Footer may not end with a placeholder."
	}
};
var translationsEN = {
	INTEGRATION: INTEGRATION$1,
	TEMPLATE_EDITOR: TEMPLATE_EDITOR$1,
	BUTTONS: BUTTONS$1,
	BUTTON: BUTTON$1,
	ERROR: ERROR$1
};

var INTEGRATION = {
	API_KEY: "API-Schlüssel",
	FACEBOOK: {
		LOGIN: "Mit Facebook anmelden"
	},
	RELOAD: "Neu laden"
};
var TEMPLATE_EDITOR = {
	TITLE: "Vorlageneditor",
	SEARCH_PLACEHOLDER: "Suchen...",
	HEADER: {
		TITLE: "Name",
		TITLE_VALIDATION_HINT: "Der Name der Vorlage muss klein geschrieben und eindeutig sein.",
		DESCRIPTION: "Erstellen und passen Sie hier Ihre Nachrichtenvorlagen an.",
		CATEGORY: "Kategorie",
		LANGUAGE: "Sprache"
	},
	TEMPLATE: {
		HEADER: "Kopfzeile",
		HEADER_PLACEHOLDER: "Titel",
		BODY: "Nachrichtentext",
		BODY_PLACEHOLDER: "Nachricht",
		FOOTER: "Fußzeile",
		FOOTER_PLACEHOLDER: "Fußzeile",
		LIST_HEADER: {
			TITLE: "Vorlagen",
			NAME: "Name",
			LANGUAGE: "Sprache",
			CATEGORY: "Kategorie",
			QUALITY: "Qualität",
			STATUS: "Status"
		},
		LIST_NO_RESULTS: "Keine Vorlagen gefunden, die Ihrer Suche entsprechen."
	},
	PREVIEW: {
		DEFAULT_HEADER: "Titel",
		DEFAULT_BODY: "Nachricht",
		DEFAULT_FOOTER: "Fußzeile"
	},
	CATEGORY: {
		MARKETING: "Marketing",
		UTILITY: "Verwaltung"
	},
	LANGUAGE: {
		EN: "EN (US)",
		DE: "DE (DE)"
	},
	STATUS: {
		APPROVED: "Genehmigt",
		REJECTED: "Abgelehnt",
		PAUSED: "Pausiert",
		PENDING: "Ausstehend",
		DELETED: "Gelöscht"
	},
	QUALITY: {
		HIGH_QUALITY: "Hohe Qualität",
		MEDIUM_QUALITY: "Mittlere Qualität",
		LOW_QUALITY: "Niedrige Qualität",
		UNKNOWN: "Unbekannte Qualität"
	},
	BUTTONS: {
		ADD_BUTTON: "Button hinzufügen",
		ADD_TOOLTIP: "Sie können bis zu 10 Buttons hinzufügen. Wenn Sie mehr als 3 Buttons hinzufügen, werden diese in einer Liste angezeigt.",
		URL_TOOLTIP: "Sie können nur einen URL-Button pro Vorlage haben.",
		BUTTON_TYPE_URL: "URL-Button",
		BUTTON_TYPE_PHONE_NUMBER: "Telefonnummer-Button",
		BUTTON_TYPE_QUICK_REPLY: "Schnellantwort-Button",
		BUTTON_TYPE_COPY_CODE: "Code kopieren Button",
		CANCEL: "Abbrechen",
		SAVE: "Speichern",
		DELETE: "Löschen"
	},
	CONFIRMATION: {
		DELETE_TEMPLATE: "Sind Sie sicher, dass Sie diese Vorlage löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden."
	},
	SELECT_LANGUAGE: "Sprache auswählen",
	SELECT_CATEGORY: "Kategorie auswählen",
	BUTTON: {
		TYPE: "Button-Typ",
		TEXT: "Button-Text",
		COPY_CODE: "Angebotscode",
		PHONE_NUMBER: "Telefonnummer",
		URL: "Webseiten-URL",
		EXAMPLE: "Beispiel",
		ALL_OPTIONS: "Alle Optionen anzeigen",
		ADD_BUTTON: "Button hinzufügen"
	}
};
var BUTTONS = {
	CONFIRM: "Bestätigen",
	CANCEL: "Abbrechen"
};
var BUTTON = {
	TYPE: {
		QUICK_REPLY: "Antwort",
		URL: "Webseite besuchen",
		PHONE_NUMBER: "Telefonnummer anrufen",
		COPY_CODE: "Angebotscode kopieren"
	}
};
var ERROR = {
	HEADER: {
		ENDS_WITH_PLACEHOLDER: "Die Kopfzeile darf nicht mit einem Platzhalter enden."
	},
	BODY: {
		ENDS_WITH_PLACEHOLDER: "Der Nachrichtentext darf nicht mit einem Platzhalter enden."
	},
	FOOTER: {
		ENDS_WITH_PLACEHOLDER: "Die Fußzeile darf nicht mit einem Platzhalter enden."
	}
};
var translationsDE = {
	INTEGRATION: INTEGRATION,
	TEMPLATE_EDITOR: TEMPLATE_EDITOR,
	BUTTONS: BUTTONS,
	BUTTON: BUTTON,
	ERROR: ERROR
};

const DEFAULT_LANG = 'de'; // TODO: language switch in web component doesn't seem to work? 
class BaseComponent {
    translate = inject(TranslateService);
    language = input(DEFAULT_LANG, { ...(ngDevMode ? { debugName: "language" } : /* istanbul ignore next */ {}), transform: (value) => (value ?? DEFAULT_LANG).toLocaleLowerCase() });
    static selector;
    constructor() {
        this.translate.setTranslation('en', translationsEN);
        this.translate.setTranslation('de', translationsDE);
        this.translate.setFallbackLang(DEFAULT_LANG);
        effect(() => {
            const lang = this.language() ?? DEFAULT_LANG;
            console.log(`Setting language to ${lang}`);
            this.translate.use(lang);
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: BaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.9", type: BaseComponent, isStandalone: true, inputs: { language: { classPropertyName: "language", publicName: "language", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: BaseComponent, decorators: [{
            type: Directive,
            args: [{}]
        }], ctorParameters: () => [], propDecorators: { language: [{ type: i0.Input, args: [{ isSignal: true, alias: "language", required: false }] }] } });

class SpinnerIcon {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: SpinnerIcon, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: SpinnerIcon, isStandalone: true, selector: "spinner-icon", ngImport: i0, template: `
<svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
    <path
    d="M286.7 96.1C291.7 113 282.1 130.9 265.2 135.9C185.9 159.5 128.1 233 128.1 320C128.1 426 214.1 512 320.1 512C426.1 512 512.1 426 512.1 320C512.1 233.1 454.3 159.6 375 135.9C358.1 130.9 348.4 113 353.5 96.1C358.6 79.2 376.4 69.5 393.3 74.6C498.9 106.1 576 204 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 204 141.1 106.1 246.9 74.6C263.8 69.6 281.7 79.2 286.7 96.1z" />
</svg>`, isInline: true, styles: [":host{width:1em;height:1em;display:inline-block;vertical-align:middle;animation:spin 2s linear infinite}@keyframes spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: SpinnerIcon, decorators: [{
            type: Component,
            args: [{ selector: 'spinner-icon', template: `
<svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
    <path
    d="M286.7 96.1C291.7 113 282.1 130.9 265.2 135.9C185.9 159.5 128.1 233 128.1 320C128.1 426 214.1 512 320.1 512C426.1 512 512.1 426 512.1 320C512.1 233.1 454.3 159.6 375 135.9C358.1 130.9 348.4 113 353.5 96.1C358.6 79.2 376.4 69.5 393.3 74.6C498.9 106.1 576 204 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 204 141.1 106.1 246.9 74.6C263.8 69.6 281.7 79.2 286.7 96.1z" />
</svg>`, imports: [CommonModule], styles: [":host{width:1em;height:1em;display:inline-block;vertical-align:middle;animation:spin 2s linear infinite}@keyframes spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n"] }]
        }] });

class FacebookLogin extends BaseComponent {
    static selector = 'vierkant-facebook-login';
    document = inject(DOCUMENT);
    http = inject(HttpClient);
    renderer = inject(Renderer2);
    COMPUTED_API_KEY = computed(() => this.API_KEY() ?? this.PROVIDED_API_KEY(), ...(ngDevMode ? [{ debugName: "COMPUTED_API_KEY" }] : /* istanbul ignore next */ []));
    facebookSDKInjected = signal(false, ...(ngDevMode ? [{ debugName: "facebookSDKInjected" }] : /* istanbul ignore next */ []));
    onSuccess = output({ alias: 'success' });
    onError = output({ alias: 'error' });
    APP_ID = input.required(...(ngDevMode ? [{ debugName: "APP_ID" }] : /* istanbul ignore next */ []));
    CONFIG_ID = input.required(...(ngDevMode ? [{ debugName: "CONFIG_ID" }] : /* istanbul ignore next */ []));
    URL = input("https://richarddev.vierkant.dev", ...(ngDevMode ? [{ debugName: "URL" }] : /* istanbul ignore next */ []));
    PROVIDED_API_KEY = input(undefined, { ...(ngDevMode ? { debugName: "PROVIDED_API_KEY" } : /* istanbul ignore next */ {}), alias: 'API_KEY' });
    API_KEY = signal(undefined, ...(ngDevMode ? [{ debugName: "API_KEY" }] : /* istanbul ignore next */ []));
    hasAPIKey = computed(() => !!this.COMPUTED_API_KEY(), ...(ngDevMode ? [{ debugName: "hasAPIKey" }] : /* istanbul ignore next */ []));
    facebookButtonDisabled = signal(true, ...(ngDevMode ? [{ debugName: "facebookButtonDisabled" }] : /* istanbul ignore next */ []));
    facebookState = signal("loading", ...(ngDevMode ? [{ debugName: "facebookState" }] : /* istanbul ignore next */ []));
    facebookResponse = signal(null, ...(ngDevMode ? [{ debugName: "facebookResponse" }] : /* istanbul ignore next */ []));
    facebookLoginAuthCode = signal(undefined, ...(ngDevMode ? [{ debugName: "facebookLoginAuthCode" }] : /* istanbul ignore next */ []));
    facebookLoginToken = resource({ ...(ngDevMode ? { debugName: "facebookLoginToken" } : /* istanbul ignore next */ {}), defaultValue: undefined,
        params: () => ({
            authCode: this.facebookLoginAuthCode(),
            facebookResponse: this.facebookResponse(),
        }),
        loader: async ({ params }) => {
            try {
                if (!params.authCode || !params.facebookResponse)
                    return undefined;
                this.facebookState.set("loading");
                const result = await this.generateToken(params.authCode);
                if (result)
                    this.onSuccess.emit(this.COMPUTED_API_KEY());
                return result;
            }
            catch (error) {
                if (error instanceof HttpErrorResponse) {
                    const errorDetail = error.error;
                    this.onError.emit({
                        severity: 'error',
                        summary: `${errorDetail.code || error.status}`,
                        detail: errorDetail.message || error.message || 'An error occurred',
                    });
                }
                else {
                    this.onError.emit({
                        severity: 'error',
                        summary: 'Facebook Login Error',
                        detail: error.message,
                    });
                }
                return undefined;
            }
            finally {
                this.facebookButtonDisabled.set(false);
                this.facebookState.set("default");
            }
        } });
    window = this.document.defaultView;
    get FB_SDK() {
        return this.window.FB;
    }
    onMessage(event) {
        const messageEvent = event;
        if (!['https://web.facebook.com', 'https://www.facebook.com'].includes(messageEvent.origin)) {
            console.warn('Origin mismatch:', messageEvent.origin);
            return;
        }
        try {
            if (typeof messageEvent.data !== 'string' || !messageEvent.data.startsWith('{'))
                return;
            const data = JSON.parse(messageEvent.data);
            switch (data.event) {
                case 'FINISH':
                    this.facebookResponse.set(data.data);
                    break;
                case 'CANCEL':
                    this.facebookButtonDisabled.set(false);
                    break;
                case 'ERROR':
                    {
                        this.onError.emit({
                            severity: 'error',
                            summary: 'Facebook SDK Error',
                            detail: data.data?.message || 'An error occurred',
                        });
                        this.facebookButtonDisabled.set(false);
                        break;
                    }
                    ;
            }
        }
        catch (err) {
            // Log unexpected errors for debugging
            console.error('Error handling message event:', err, event);
            this.onError.emit({
                severity: 'error',
                summary: 'Message Error',
                detail: err.message,
            });
        }
    }
    constructor() {
        super();
        effect(() => {
            if (this.hasAPIKey()) {
                this.facebookButtonDisabled.set(false);
            }
            else {
                this.facebookButtonDisabled.set(true);
            }
        });
    }
    async launchSignUp() {
        try {
            this.facebookButtonDisabled.set(true);
            const API_KEY = this.COMPUTED_API_KEY();
            console.log('Using API Key:', API_KEY);
            if (!API_KEY?.length)
                throw new Error("API Key is required");
            await new Promise((resolve, reject) => {
                this.http.get(`${this.URL()}/account/me`, { headers: this.getHeaders() }).subscribe({ next: (response) => {
                        console.log('Account info retrieved:', response);
                        resolve(true);
                    },
                    error: (error) => {
                        reject(error);
                    }
                });
            });
        }
        catch (error) {
            if (error instanceof HttpErrorResponse) {
                this.onError.emit({
                    severity: 'error',
                    summary: error.status.toString(),
                    detail: error.message,
                });
            }
            this.facebookButtonDisabled.set(false);
            this.facebookState.set("default");
            return;
        }
        this.injectFB_SDK();
        if (this.FB_SDK && 'login' in this.FB_SDK) {
            try {
                this.FB_SDK.logout(() => {
                    this.FB_SDK.login((response) => this.facebookLoginAuthCode.set(response.authResponse?.code), {
                        config_id: this.CONFIG_ID(),
                        response_type: 'code',
                        override_default_response_type: true,
                        extras: { "version": "v3", }
                    });
                });
            }
            catch (error) {
                this.FB_SDK.login((response) => this.facebookLoginAuthCode.set(response.authResponse?.code), {
                    config_id: this.CONFIG_ID(),
                    response_type: 'code',
                    override_default_response_type: true,
                    extras: { "version": "v3", }
                });
            }
        }
        else {
            this.window.fbAsyncInit = () => {
                this.FB_SDK.init({
                    appId: this.APP_ID(),
                    autoLogAppEvents: true,
                    xfbml: false,
                    version: 'v24.0'
                });
                this.FB_SDK.login((response) => this.facebookLoginAuthCode.set(response.authResponse?.code), {
                    config_id: this.CONFIG_ID(),
                    response_type: 'code',
                    override_default_response_type: true,
                    extras: { "version": "v3", }
                });
            };
        }
    }
    getHeaders(headers) {
        const API_KEY = this.COMPUTED_API_KEY();
        if (!API_KEY?.length)
            throw new Error("API Key is required");
        return {
            ...headers,
            'x-api-key': API_KEY,
        };
    }
    injectFB_SDK() {
        if (this.facebookSDKInjected())
            return;
        if (this.FB_SDK) {
            this.facebookSDKInjected.set(true);
            return;
        }
        const script = this.renderer.createElement('script');
        script.src = "https://connect.facebook.net/en_US/sdk.js";
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";
        this.renderer.appendChild(this.document.body, script);
    }
    async generateToken(code) {
        const data = this.facebookResponse();
        if (!data) {
            throw new Error("No Facebook response data available");
        }
        const params = new URLSearchParams({
            code: code ?? '',
            phone: data.phone_number_id ?? '',
            account: data.waba_id ?? ''
        });
        return await new Promise((resolve, reject) => {
            this.http.get(`${this.URL()}/integrations/whatsapp/token?${params.toString()}`, { headers: this.getHeaders() }).subscribe({
                next: (response) => {
                    resolve(response);
                },
                error: (error) => reject(error)
            });
        });
        //
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: FacebookLogin, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: FacebookLogin, isStandalone: true, selector: "ng-component", inputs: { APP_ID: { classPropertyName: "APP_ID", publicName: "APP_ID", isSignal: true, isRequired: true, transformFunction: null }, CONFIG_ID: { classPropertyName: "CONFIG_ID", publicName: "CONFIG_ID", isSignal: true, isRequired: true, transformFunction: null }, URL: { classPropertyName: "URL", publicName: "URL", isSignal: true, isRequired: false, transformFunction: null }, PROVIDED_API_KEY: { classPropertyName: "PROVIDED_API_KEY", publicName: "API_KEY", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { onSuccess: "success", onError: "error" }, host: { listeners: { "window:message": "onMessage($event)" } }, usesInheritance: true, ngImport: i0, template: "<div class=\"input\">\n    <label for=\"api-key\" translate>INTEGRATION.API_KEY</label>\n    <input type=\"password\" id=\"api-key\" name=\"api-key\" [(ngModel)]=\"API_KEY\" />\n</div>\n@let isLoading = facebookState() === 'loading';\n<button class=\"button facebook\" [ngClass]=\"{'loading': isLoading}\" type=\"button\" [disabled]=\"isLoading || facebookButtonDisabled()\" translate (click)=\"launchSignUp()\">\n    @if(isLoading) {\n        <spinner-icon></spinner-icon>\n    } @else {\n        INTEGRATION.FACEBOOK.LOGIN\n    }\n</button>\n<!-- <button id=\"reloadButton\" type=\"button\"  translate>INTEGRATION.RELOAD</button> -->", styles: ["vierkant-facebook-login{display:grid;gap:.5rem;max-width:300px}vierkant-facebook-login .input{display:grid;gap:.25rem}vierkant-facebook-login .button.facebook{--vierkant-template-editor-button-background: #4D6CA4;--vierkant-template-editor-button-color: #FFF}vierkant-facebook-login .button.facebook:hover:not(:disabled){--vierkant-template-editor-button-background: rgb(90.2514522822, 121.3929460581, 177.6485477178);--vierkant-template-editor-button-color: #FFF}vierkant-facebook-login .button.facebook:active:not(:disabled){--vierkant-template-editor-button-background: rgb(69.3, 97.2, 147.6);--vierkant-template-editor-button-color: #FFF}vierkant-facebook-login .button.loading{--vierkant-template-editor-button-background: #E5E5E5;--vierkant-template-editor-button-color: #000;transition:background .3s ease,color .3s ease,fill .3s ease}\n", "button{background:var(--vierkant-template-editor-button-background, #fff);border:var(--vierkant-template-editor-button-border, 1px solid #c9c9c9);color:var(--vierkant-template-editor-button-color, #000);fill:var(--vierkant-template-editor-button-color, #000);border-radius:var(--vierkant-template-editor-button-border-radius, 3px);padding:var(--vierkant-template-editor-button-padding, .5rem .75rem);opacity:var(--vierkant-template-editor-button-opacity, 1);cursor:var(--vierkant-template-editor-button-cursor, pointer);display:flex;align-items:center;justify-content:center;gap:.25rem}button:disabled{--vierkant-template-editor-button-cursor: var(--vierkant-template-editor-button-disabled-cursor, not-allowed);--vierkant-template-editor-button-opacity: var(--vierkant-template-editor-button-disabled-opacity, .65)}button:not(:disabled):hover{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-hover-background, #f0f0f0);--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-hover-color)}button:not(:disabled):active{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-active-background, rgba(0, 0, 0, .1));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-active-color, var(--vierkant-template-editor-button-color, #000))}button.button-cancel{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-cancel-background, rgb(211, 47, 47));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-cancel-border, 1px solid rgb(211, 47, 47));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-cancel-color, #fff);--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-cancel-active-background, rgb(185, 28, 28));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-cancel-active-color, #fff);--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-cancel-hover-background, rgb(185, 28, 28));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-cancel-hover-color, #fff);--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-cancel-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-cancel-disabled-opacity, .65)}button.button-confirm{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-confirm-background, rgb(76, 188, 134));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-confirm-border, 1px solid rgb(76, 188, 134));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-confirm-color, rgb(30, 41, 59));--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-confirm-active-background, rgb(56, 148, 104));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-confirm-active-color, rgb(30, 41, 59));--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-confirm-hover-background, rgb(56, 148, 104));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-confirm-hover-color, rgb(30, 41, 59));--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-confirm-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-confirm-disabled-opacity, .65)}button.button-error{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-error-background, rgb(248, 113, 113));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-error-border, 1px solid rgb(185, 28, 28));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-error-color, #000);--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-error-active-background, rgb(185, 28, 28));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-error-active-color, #000);--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-error-hover-background, rgb(185, 28, 28));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-error-hover-color, #000);--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-error-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-error-disabled-opacity, .65)}button.button-icon{--vierkant-template-editor-button-padding: var(--vierkant-template-editor-button-icon-padding, .5rem);line-height:0}\n", "input,textarea{font-feature-settings:inherit;font-size:var(--vierkant-template-editor-input-font-size, 1rem);color:var(--vierkant-template-editor-input-color, #0f172a);background:var(--vierkant-template-editor-input-background, #ffffff);padding-block:var(--vierkant-template-editor-input-padding-block, .5rem);padding-inline:var(--vierkant-template-editor-input-padding-inline, .75rem);border:var(--vierkant-template-editor-input-border, 1px solid #64748b);transition:background 0s,color 0s,border-color 0s,outline-color 0s,box-shadow 0s;appearance:none;border-radius:var(--vierkant-template-editor-input-border-radius, .25rem);outline-color:transparent;box-shadow:none}input:focus,textarea:focus{border-color:var(--vierkant-template-editor-input-focus-border-color, #64748b);box-shadow:none;outline:var(--vierkant-template-editor-input-focus-outline, .2rem solid #7cb6d3);outline-offset:0}input.ng-invalid,textarea.ng-invalid{border-color:var(--vierkant-template-editor-input-error-border-color, #dc2626)}input.ng-invalid:focus,textarea.ng-invalid:focus{outline:var(--vierkant-template-editor-input-error-focus-outline, .2rem solid #fca5a5)}textarea{min-height:10rem;resize:vertical}select{font-feature-settings:inherit;font-size:var(--vierkant-template-editor-input-font-size, 1rem);color:var(--vierkant-template-editor-input-color, #0f172a);background:var(--vierkant-template-editor-input-background, #ffffff);padding-block:var(--vierkant-template-editor-input-padding-block, .5rem);padding-inline:var(--vierkant-template-editor-input-padding-inline, .75rem);border:var(--vierkant-template-editor-input-border, 1px solid #64748b);transition:background 0s,color 0s,border-color 0s,outline-color 0s,box-shadow 0s;border-radius:var(--vierkant-template-editor-input-border-radius, .25rem);outline-color:transparent;box-shadow:none}select:focus{border-color:var(--vierkant-template-editor-input-focus-border-color, #64748b);box-shadow:none;outline:var(--vierkant-template-editor-input-focus-outline, .2rem solid #7cb6d3);outline-offset:0}select.ng-invalid{border-color:var(--vierkant-template-editor-input-error-border-color, #dc2626)}select.ng-invalid:focus{outline:var(--vierkant-template-editor-input-error-focus-outline, .2rem solid #fca5a5)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: TranslateDirective, selector: "[translate],[ngx-translate]", inputs: ["translate", "translateParams"] }, { kind: "component", type: SpinnerIcon, selector: "spinner-icon" }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: FacebookLogin, decorators: [{
            type: Component,
            args: [{ encapsulation: ViewEncapsulation.None, imports: [CommonModule, FormsModule, TranslateDirective, SpinnerIcon], template: "<div class=\"input\">\n    <label for=\"api-key\" translate>INTEGRATION.API_KEY</label>\n    <input type=\"password\" id=\"api-key\" name=\"api-key\" [(ngModel)]=\"API_KEY\" />\n</div>\n@let isLoading = facebookState() === 'loading';\n<button class=\"button facebook\" [ngClass]=\"{'loading': isLoading}\" type=\"button\" [disabled]=\"isLoading || facebookButtonDisabled()\" translate (click)=\"launchSignUp()\">\n    @if(isLoading) {\n        <spinner-icon></spinner-icon>\n    } @else {\n        INTEGRATION.FACEBOOK.LOGIN\n    }\n</button>\n<!-- <button id=\"reloadButton\" type=\"button\"  translate>INTEGRATION.RELOAD</button> -->", styles: ["vierkant-facebook-login{display:grid;gap:.5rem;max-width:300px}vierkant-facebook-login .input{display:grid;gap:.25rem}vierkant-facebook-login .button.facebook{--vierkant-template-editor-button-background: #4D6CA4;--vierkant-template-editor-button-color: #FFF}vierkant-facebook-login .button.facebook:hover:not(:disabled){--vierkant-template-editor-button-background: rgb(90.2514522822, 121.3929460581, 177.6485477178);--vierkant-template-editor-button-color: #FFF}vierkant-facebook-login .button.facebook:active:not(:disabled){--vierkant-template-editor-button-background: rgb(69.3, 97.2, 147.6);--vierkant-template-editor-button-color: #FFF}vierkant-facebook-login .button.loading{--vierkant-template-editor-button-background: #E5E5E5;--vierkant-template-editor-button-color: #000;transition:background .3s ease,color .3s ease,fill .3s ease}\n", "button{background:var(--vierkant-template-editor-button-background, #fff);border:var(--vierkant-template-editor-button-border, 1px solid #c9c9c9);color:var(--vierkant-template-editor-button-color, #000);fill:var(--vierkant-template-editor-button-color, #000);border-radius:var(--vierkant-template-editor-button-border-radius, 3px);padding:var(--vierkant-template-editor-button-padding, .5rem .75rem);opacity:var(--vierkant-template-editor-button-opacity, 1);cursor:var(--vierkant-template-editor-button-cursor, pointer);display:flex;align-items:center;justify-content:center;gap:.25rem}button:disabled{--vierkant-template-editor-button-cursor: var(--vierkant-template-editor-button-disabled-cursor, not-allowed);--vierkant-template-editor-button-opacity: var(--vierkant-template-editor-button-disabled-opacity, .65)}button:not(:disabled):hover{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-hover-background, #f0f0f0);--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-hover-color)}button:not(:disabled):active{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-active-background, rgba(0, 0, 0, .1));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-active-color, var(--vierkant-template-editor-button-color, #000))}button.button-cancel{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-cancel-background, rgb(211, 47, 47));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-cancel-border, 1px solid rgb(211, 47, 47));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-cancel-color, #fff);--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-cancel-active-background, rgb(185, 28, 28));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-cancel-active-color, #fff);--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-cancel-hover-background, rgb(185, 28, 28));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-cancel-hover-color, #fff);--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-cancel-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-cancel-disabled-opacity, .65)}button.button-confirm{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-confirm-background, rgb(76, 188, 134));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-confirm-border, 1px solid rgb(76, 188, 134));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-confirm-color, rgb(30, 41, 59));--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-confirm-active-background, rgb(56, 148, 104));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-confirm-active-color, rgb(30, 41, 59));--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-confirm-hover-background, rgb(56, 148, 104));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-confirm-hover-color, rgb(30, 41, 59));--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-confirm-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-confirm-disabled-opacity, .65)}button.button-error{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-error-background, rgb(248, 113, 113));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-error-border, 1px solid rgb(185, 28, 28));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-error-color, #000);--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-error-active-background, rgb(185, 28, 28));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-error-active-color, #000);--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-error-hover-background, rgb(185, 28, 28));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-error-hover-color, #000);--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-error-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-error-disabled-opacity, .65)}button.button-icon{--vierkant-template-editor-button-padding: var(--vierkant-template-editor-button-icon-padding, .5rem);line-height:0}\n", "input,textarea{font-feature-settings:inherit;font-size:var(--vierkant-template-editor-input-font-size, 1rem);color:var(--vierkant-template-editor-input-color, #0f172a);background:var(--vierkant-template-editor-input-background, #ffffff);padding-block:var(--vierkant-template-editor-input-padding-block, .5rem);padding-inline:var(--vierkant-template-editor-input-padding-inline, .75rem);border:var(--vierkant-template-editor-input-border, 1px solid #64748b);transition:background 0s,color 0s,border-color 0s,outline-color 0s,box-shadow 0s;appearance:none;border-radius:var(--vierkant-template-editor-input-border-radius, .25rem);outline-color:transparent;box-shadow:none}input:focus,textarea:focus{border-color:var(--vierkant-template-editor-input-focus-border-color, #64748b);box-shadow:none;outline:var(--vierkant-template-editor-input-focus-outline, .2rem solid #7cb6d3);outline-offset:0}input.ng-invalid,textarea.ng-invalid{border-color:var(--vierkant-template-editor-input-error-border-color, #dc2626)}input.ng-invalid:focus,textarea.ng-invalid:focus{outline:var(--vierkant-template-editor-input-error-focus-outline, .2rem solid #fca5a5)}textarea{min-height:10rem;resize:vertical}select{font-feature-settings:inherit;font-size:var(--vierkant-template-editor-input-font-size, 1rem);color:var(--vierkant-template-editor-input-color, #0f172a);background:var(--vierkant-template-editor-input-background, #ffffff);padding-block:var(--vierkant-template-editor-input-padding-block, .5rem);padding-inline:var(--vierkant-template-editor-input-padding-inline, .75rem);border:var(--vierkant-template-editor-input-border, 1px solid #64748b);transition:background 0s,color 0s,border-color 0s,outline-color 0s,box-shadow 0s;border-radius:var(--vierkant-template-editor-input-border-radius, .25rem);outline-color:transparent;box-shadow:none}select:focus{border-color:var(--vierkant-template-editor-input-focus-border-color, #64748b);box-shadow:none;outline:var(--vierkant-template-editor-input-focus-outline, .2rem solid #7cb6d3);outline-offset:0}select.ng-invalid{border-color:var(--vierkant-template-editor-input-error-border-color, #dc2626)}select.ng-invalid:focus{outline:var(--vierkant-template-editor-input-error-focus-outline, .2rem solid #fca5a5)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { onSuccess: [{ type: i0.Output, args: ["success"] }], onError: [{ type: i0.Output, args: ["error"] }], APP_ID: [{ type: i0.Input, args: [{ isSignal: true, alias: "APP_ID", required: true }] }], CONFIG_ID: [{ type: i0.Input, args: [{ isSignal: true, alias: "CONFIG_ID", required: true }] }], URL: [{ type: i0.Input, args: [{ isSignal: true, alias: "URL", required: false }] }], PROVIDED_API_KEY: [{ type: i0.Input, args: [{ isSignal: true, alias: "API_KEY", required: false }] }], onMessage: [{
                type: HostListener,
                args: ['window:message', ['$event']]
            }] } });

function fb(text, fallback) {
    return text && text.trim().length > 0 ? text : fallback;
}
function sortBy(array, ...by) {
    const result = [...array];
    return result.sort((a, b) => {
        for (const x of by) {
            let xA;
            let xB;
            // catch for null access
            try {
                xA = x(a);
            }
            catch (error) {
                try {
                    xB = x(b);
                    return 1;
                }
                catch (errorB) {
                    continue;
                }
            }
            try {
                xB = x(b);
            }
            catch (error) {
                try {
                    xA = x(a);
                    return -1;
                }
                catch (errorA) {
                    continue;
                }
            }
            // sort missing props to the end
            if (xA === undefined) {
                if (xB === undefined)
                    continue;
                return 1;
            }
            if (xB === undefined)
                return -1;
            // check props
            if (xA < xB)
                return -1;
            if (xA > xB)
                return 1;
        }
        return 0;
    });
}

class ClearIcon {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: ClearIcon, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: ClearIcon, isStandalone: true, selector: "clear-icon", ngImport: i0, template: `
<svg class="icon" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
    <path
        d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z" />
</svg>`, isInline: true, styles: [":host{width:1em;height:1em;display:inline-block;vertical-align:middle;cursor:pointer}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: ClearIcon, decorators: [{
            type: Component,
            args: [{ selector: 'clear-icon', template: `
<svg class="icon" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
    <path
        d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z" />
</svg>`, imports: [CommonModule], styles: [":host{width:1em;height:1em;display:inline-block;vertical-align:middle;cursor:pointer}\n"] }]
        }] });

class EditIcon {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: EditIcon, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: EditIcon, isStandalone: true, selector: "edit-icon", ngImport: i0, template: `
<svg class="icon" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
            <path
                d="M535.6 85.7C513.7 63.8 478.3 63.8 456.4 85.7L432 110.1L529.9 208L554.3 183.6C576.2 161.7 576.2 126.3 554.3 104.4L535.6 85.7zM236.4 305.7C230.3 311.8 225.6 319.3 222.9 327.6L193.3 416.4C190.4 425 192.7 434.5 199.1 441C205.5 447.5 215 449.7 223.7 446.8L312.5 417.2C320.7 414.5 328.2 409.8 334.4 403.7L496 241.9L398.1 144L236.4 305.7zM160 128C107 128 64 171 64 224L64 480C64 533 107 576 160 576L416 576C469 576 512 533 512 480L512 384C512 366.3 497.7 352 480 352C462.3 352 448 366.3 448 384L448 480C448 497.7 433.7 512 416 512L160 512C142.3 512 128 497.7 128 480L128 224C128 206.3 142.3 192 160 192L256 192C273.7 192 288 177.7 288 160C288 142.3 273.7 128 256 128L160 128z" />
        </svg>`, isInline: true, styles: [":host{width:1em;height:1em;display:inline-block;vertical-align:middle}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: EditIcon, decorators: [{
            type: Component,
            args: [{ selector: 'edit-icon', template: `
<svg class="icon" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
            <path
                d="M535.6 85.7C513.7 63.8 478.3 63.8 456.4 85.7L432 110.1L529.9 208L554.3 183.6C576.2 161.7 576.2 126.3 554.3 104.4L535.6 85.7zM236.4 305.7C230.3 311.8 225.6 319.3 222.9 327.6L193.3 416.4C190.4 425 192.7 434.5 199.1 441C205.5 447.5 215 449.7 223.7 446.8L312.5 417.2C320.7 414.5 328.2 409.8 334.4 403.7L496 241.9L398.1 144L236.4 305.7zM160 128C107 128 64 171 64 224L64 480C64 533 107 576 160 576L416 576C469 576 512 533 512 480L512 384C512 366.3 497.7 352 480 352C462.3 352 448 366.3 448 384L448 480C448 497.7 433.7 512 416 512L160 512C142.3 512 128 497.7 128 480L128 224C128 206.3 142.3 192 160 192L256 192C273.7 192 288 177.7 288 160C288 142.3 273.7 128 256 128L160 128z" />
        </svg>`, imports: [CommonModule], styles: [":host{width:1em;height:1em;display:inline-block;vertical-align:middle}\n"] }]
        }] });

class TemplateList extends BaseComponent {
    static selector = 'vierkant-template-list';
    filter = signal('', ...(ngDevMode ? [{ debugName: "filter" }] : /* istanbul ignore next */ []));
    data = input([], { ...(ngDevMode ? { debugName: "data" } : /* istanbul ignore next */ {}), transform: (value) => sortBy(value, t => t.name, t => t.language, t => t.category, t => t.status) });
    filteredData = computed(() => {
        const filter = this.filter()?.toLowerCase() ?? '';
        const data = this.data();
        if (!filter.length)
            return data;
        return data.filter(t => t.name.toLowerCase().includes(filter));
    }, ...(ngDevMode ? [{ debugName: "filteredData" }] : /* istanbul ignore next */ []));
    onEdit = output({ alias: 'edit' });
    edit(template) {
        this.onEdit.emit(structuredClone(template));
    }
    qualitySeverity = (template) => {
        switch (template.quality) {
            case 'GREEN': return "success";
            case 'YELLOW': return "warning";
            case 'RED': return "error";
            default: return "secondary";
        }
    };
    statusSeverity = (template) => {
        switch (template.status) {
            case 'APPROVED': return "success";
            case 'REJECTED': return "danger";
            case 'PAUSED': return "warning";
            case 'PENDING': return "info";
            case 'DELETED': return "secondary";
            default: return "secondary";
        }
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: TemplateList, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: TemplateList, isStandalone: true, selector: "ng-component", inputs: { data: { classPropertyName: "data", publicName: "data", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { onEdit: "edit" }, usesInheritance: true, ngImport: i0, template: "<div class=\"template-header\">\n    <div class=\"row\">\n        <h2 translate>TEMPLATE_EDITOR.TEMPLATE.LIST_HEADER.TITLE</h2>\n        <div class=\"search\">\n            <input type=\"text\" [placeholder]=\"'TEMPLATE_EDITOR.SEARCH_PLACEHOLDER' | translate\" [(ngModel)]=\"filter\" />\n            @if(filter().length) {\n            <clear-icon (click)=\"filter.set('')\"></clear-icon>\n            }\n        </div>\n    </div>\n    <span translate>TEMPLATE_EDITOR.TEMPLATE.LIST_HEADER.CATEGORY</span>\n    <span translate>TEMPLATE_EDITOR.TEMPLATE.LIST_HEADER.STATUS</span>\n    <span translate>TEMPLATE_EDITOR.TEMPLATE.LIST_HEADER.QUALITY</span>\n    <span translate>TEMPLATE_EDITOR.TEMPLATE.LIST_HEADER.LANGUAGE</span>\n    <span></span>\n</div>\n@for(template of filteredData(); track template) {\n<div class=\"template-item\">\n    <h3>{{template.name}}</h3>\n    <span translate>TEMPLATE_EDITOR.CATEGORY.{{template.category}}</span>\n    <div class=\"chip\" [ngClass]=\"statusSeverity(template)\" translate>TEMPLATE_EDITOR.STATUS.{{template.status}}</div>\n    <div class=\"chip\" [ngClass]=\"qualitySeverity(template)\" translate>TEMPLATE_EDITOR.QUALITY.{{template.quality}}</div>\n    <span>{{template.language}}</span>\n    @if(template.status !== 'PENDING') {\n        <button class=\"button-icon\" (click)=\"edit(template)\"><edit-icon></edit-icon></button>\n    }\n</div>\n}\n@empty {\n    <div class=\"template-item no-results\" translate>\n        TEMPLATE_EDITOR.TEMPLATE.LIST_NO_RESULTS\n    </div>\n}", styles: ["vierkant-template-list{--background-primary: #f5f5f5;--background-accent: #e0e7ff;--background-success: #d1fae5;--background-warning: #fef3c7;--background-error: #fee2e2;--background-info: #e0f2fe;--font-family: Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-family:var(--vierkant-template-editor-font-family, var(--font-family));display:grid;grid-template-columns:1fr repeat(5,auto);gap:.5rem 1.5rem}vierkant-template-list .template-header,vierkant-template-list .template-item{grid-column:1/-1;display:grid;grid-template-columns:subgrid;align-items:center;-webkit-user-select:none;user-select:none}vierkant-template-list .template-header>span,vierkant-template-list .template-item>span{padding:var(--vierkant-template-list-item-cell-padding, .5rem)}vierkant-template-list .template-header{position:sticky;top:0;background:var(--vierkant-template-list-item-background, #f9f9f9)}vierkant-template-list .template-header>span{font-weight:700}vierkant-template-list .template-item{background-color:var(--vierkant-template-list-item-background, #f9f9f9);border:var(--vierkant-template-list-item-border, 1px solid #ccc);padding:var(--vierkant-template-list-item-padding, 1rem);border-radius:var(--vierkant-template-list-item-border-radius, 4px)}vierkant-template-list .template-item:hover{--vierkant-template-list-item-background: var(--vierkant-template-list-item-hover-background, #f0f0f0)}vierkant-template-list .template-item.no-results{grid-template-columns:1fr}vierkant-template-list h1,vierkant-template-list h2,vierkant-template-list h3,vierkant-template-list h4{margin:0}vierkant-template-list .icon{cursor:pointer;width:1rem;height:1rem}vierkant-template-list .search{position:relative;display:inline-block}vierkant-template-list .search input{padding-right:1.5rem}vierkant-template-list .search clear-icon{position:absolute;right:.5rem;top:50%;transform:translateY(-50%)}\n", "button{background:var(--vierkant-template-editor-button-background, #fff);border:var(--vierkant-template-editor-button-border, 1px solid #c9c9c9);color:var(--vierkant-template-editor-button-color, #000);fill:var(--vierkant-template-editor-button-color, #000);border-radius:var(--vierkant-template-editor-button-border-radius, 3px);padding:var(--vierkant-template-editor-button-padding, .5rem .75rem);opacity:var(--vierkant-template-editor-button-opacity, 1);cursor:var(--vierkant-template-editor-button-cursor, pointer);display:flex;align-items:center;justify-content:center;gap:.25rem}button:disabled{--vierkant-template-editor-button-cursor: var(--vierkant-template-editor-button-disabled-cursor, not-allowed);--vierkant-template-editor-button-opacity: var(--vierkant-template-editor-button-disabled-opacity, .65)}button:not(:disabled):hover{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-hover-background, #f0f0f0);--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-hover-color)}button:not(:disabled):active{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-active-background, rgba(0, 0, 0, .1));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-active-color, var(--vierkant-template-editor-button-color, #000))}button.button-cancel{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-cancel-background, rgb(211, 47, 47));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-cancel-border, 1px solid rgb(211, 47, 47));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-cancel-color, #fff);--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-cancel-active-background, rgb(185, 28, 28));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-cancel-active-color, #fff);--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-cancel-hover-background, rgb(185, 28, 28));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-cancel-hover-color, #fff);--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-cancel-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-cancel-disabled-opacity, .65)}button.button-confirm{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-confirm-background, rgb(76, 188, 134));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-confirm-border, 1px solid rgb(76, 188, 134));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-confirm-color, rgb(30, 41, 59));--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-confirm-active-background, rgb(56, 148, 104));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-confirm-active-color, rgb(30, 41, 59));--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-confirm-hover-background, rgb(56, 148, 104));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-confirm-hover-color, rgb(30, 41, 59));--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-confirm-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-confirm-disabled-opacity, .65)}button.button-error{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-error-background, rgb(248, 113, 113));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-error-border, 1px solid rgb(185, 28, 28));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-error-color, #000);--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-error-active-background, rgb(185, 28, 28));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-error-active-color, #000);--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-error-hover-background, rgb(185, 28, 28));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-error-hover-color, #000);--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-error-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-error-disabled-opacity, .65)}button.button-icon{--vierkant-template-editor-button-padding: var(--vierkant-template-editor-button-icon-padding, .5rem);line-height:0}\n", "input,textarea{font-feature-settings:inherit;font-size:var(--vierkant-template-editor-input-font-size, 1rem);color:var(--vierkant-template-editor-input-color, #0f172a);background:var(--vierkant-template-editor-input-background, #ffffff);padding-block:var(--vierkant-template-editor-input-padding-block, .5rem);padding-inline:var(--vierkant-template-editor-input-padding-inline, .75rem);border:var(--vierkant-template-editor-input-border, 1px solid #64748b);transition:background 0s,color 0s,border-color 0s,outline-color 0s,box-shadow 0s;appearance:none;border-radius:var(--vierkant-template-editor-input-border-radius, .25rem);outline-color:transparent;box-shadow:none}input:focus,textarea:focus{border-color:var(--vierkant-template-editor-input-focus-border-color, #64748b);box-shadow:none;outline:var(--vierkant-template-editor-input-focus-outline, .2rem solid #7cb6d3);outline-offset:0}input.ng-invalid,textarea.ng-invalid{border-color:var(--vierkant-template-editor-input-error-border-color, #dc2626)}input.ng-invalid:focus,textarea.ng-invalid:focus{outline:var(--vierkant-template-editor-input-error-focus-outline, .2rem solid #fca5a5)}textarea{min-height:10rem;resize:vertical}select{font-feature-settings:inherit;font-size:var(--vierkant-template-editor-input-font-size, 1rem);color:var(--vierkant-template-editor-input-color, #0f172a);background:var(--vierkant-template-editor-input-background, #ffffff);padding-block:var(--vierkant-template-editor-input-padding-block, .5rem);padding-inline:var(--vierkant-template-editor-input-padding-inline, .75rem);border:var(--vierkant-template-editor-input-border, 1px solid #64748b);transition:background 0s,color 0s,border-color 0s,outline-color 0s,box-shadow 0s;border-radius:var(--vierkant-template-editor-input-border-radius, .25rem);outline-color:transparent;box-shadow:none}select:focus{border-color:var(--vierkant-template-editor-input-focus-border-color, #64748b);box-shadow:none;outline:var(--vierkant-template-editor-input-focus-outline, .2rem solid #7cb6d3);outline-offset:0}select.ng-invalid{border-color:var(--vierkant-template-editor-input-error-border-color, #dc2626)}select.ng-invalid:focus{outline:var(--vierkant-template-editor-input-error-focus-outline, .2rem solid #fca5a5)}\n", ".row{display:flex;gap:1rem;align-items:center}.column{display:grid;gap:.5rem;grid-template-rows:repeat(auto-fit,minmax(40px,auto))}.chip{padding:var(--vierkant-template-editor-chip-padding, .25rem .5rem);background:var(--vierkant-template-editor-chip-background, var(--background-accent));border-radius:var(--vierkant-template-editor-chip-border-radius, 9999px);font-size:var(--vierkant-template-editor-chip-font-size, .875rem);font-weight:500;color:var(--vierkant-template-editor-chip-color, #000);-webkit-user-select:none;user-select:none}.chip.success{background:var(--vierkant-template-editor-chip-success-background, var(--background-success))}.chip.warning{background:var(--vierkant-template-editor-chip-warning-background, var(--background-warning))}.chip.error{background:var(--vierkant-template-editor-chip-error-background, var(--background-error))}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: TranslateDirective, selector: "[translate],[ngx-translate]", inputs: ["translate", "translateParams"] }, { kind: "component", type: ClearIcon, selector: "clear-icon" }, { kind: "component", type: EditIcon, selector: "edit-icon" }, { kind: "pipe", type: TranslatePipe, name: "translate" }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: TemplateList, decorators: [{
            type: Component,
            args: [{ encapsulation: ViewEncapsulation.None, imports: [CommonModule, FormsModule, TranslateDirective, TranslatePipe, ClearIcon, EditIcon], template: "<div class=\"template-header\">\n    <div class=\"row\">\n        <h2 translate>TEMPLATE_EDITOR.TEMPLATE.LIST_HEADER.TITLE</h2>\n        <div class=\"search\">\n            <input type=\"text\" [placeholder]=\"'TEMPLATE_EDITOR.SEARCH_PLACEHOLDER' | translate\" [(ngModel)]=\"filter\" />\n            @if(filter().length) {\n            <clear-icon (click)=\"filter.set('')\"></clear-icon>\n            }\n        </div>\n    </div>\n    <span translate>TEMPLATE_EDITOR.TEMPLATE.LIST_HEADER.CATEGORY</span>\n    <span translate>TEMPLATE_EDITOR.TEMPLATE.LIST_HEADER.STATUS</span>\n    <span translate>TEMPLATE_EDITOR.TEMPLATE.LIST_HEADER.QUALITY</span>\n    <span translate>TEMPLATE_EDITOR.TEMPLATE.LIST_HEADER.LANGUAGE</span>\n    <span></span>\n</div>\n@for(template of filteredData(); track template) {\n<div class=\"template-item\">\n    <h3>{{template.name}}</h3>\n    <span translate>TEMPLATE_EDITOR.CATEGORY.{{template.category}}</span>\n    <div class=\"chip\" [ngClass]=\"statusSeverity(template)\" translate>TEMPLATE_EDITOR.STATUS.{{template.status}}</div>\n    <div class=\"chip\" [ngClass]=\"qualitySeverity(template)\" translate>TEMPLATE_EDITOR.QUALITY.{{template.quality}}</div>\n    <span>{{template.language}}</span>\n    @if(template.status !== 'PENDING') {\n        <button class=\"button-icon\" (click)=\"edit(template)\"><edit-icon></edit-icon></button>\n    }\n</div>\n}\n@empty {\n    <div class=\"template-item no-results\" translate>\n        TEMPLATE_EDITOR.TEMPLATE.LIST_NO_RESULTS\n    </div>\n}", styles: ["vierkant-template-list{--background-primary: #f5f5f5;--background-accent: #e0e7ff;--background-success: #d1fae5;--background-warning: #fef3c7;--background-error: #fee2e2;--background-info: #e0f2fe;--font-family: Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-family:var(--vierkant-template-editor-font-family, var(--font-family));display:grid;grid-template-columns:1fr repeat(5,auto);gap:.5rem 1.5rem}vierkant-template-list .template-header,vierkant-template-list .template-item{grid-column:1/-1;display:grid;grid-template-columns:subgrid;align-items:center;-webkit-user-select:none;user-select:none}vierkant-template-list .template-header>span,vierkant-template-list .template-item>span{padding:var(--vierkant-template-list-item-cell-padding, .5rem)}vierkant-template-list .template-header{position:sticky;top:0;background:var(--vierkant-template-list-item-background, #f9f9f9)}vierkant-template-list .template-header>span{font-weight:700}vierkant-template-list .template-item{background-color:var(--vierkant-template-list-item-background, #f9f9f9);border:var(--vierkant-template-list-item-border, 1px solid #ccc);padding:var(--vierkant-template-list-item-padding, 1rem);border-radius:var(--vierkant-template-list-item-border-radius, 4px)}vierkant-template-list .template-item:hover{--vierkant-template-list-item-background: var(--vierkant-template-list-item-hover-background, #f0f0f0)}vierkant-template-list .template-item.no-results{grid-template-columns:1fr}vierkant-template-list h1,vierkant-template-list h2,vierkant-template-list h3,vierkant-template-list h4{margin:0}vierkant-template-list .icon{cursor:pointer;width:1rem;height:1rem}vierkant-template-list .search{position:relative;display:inline-block}vierkant-template-list .search input{padding-right:1.5rem}vierkant-template-list .search clear-icon{position:absolute;right:.5rem;top:50%;transform:translateY(-50%)}\n", "button{background:var(--vierkant-template-editor-button-background, #fff);border:var(--vierkant-template-editor-button-border, 1px solid #c9c9c9);color:var(--vierkant-template-editor-button-color, #000);fill:var(--vierkant-template-editor-button-color, #000);border-radius:var(--vierkant-template-editor-button-border-radius, 3px);padding:var(--vierkant-template-editor-button-padding, .5rem .75rem);opacity:var(--vierkant-template-editor-button-opacity, 1);cursor:var(--vierkant-template-editor-button-cursor, pointer);display:flex;align-items:center;justify-content:center;gap:.25rem}button:disabled{--vierkant-template-editor-button-cursor: var(--vierkant-template-editor-button-disabled-cursor, not-allowed);--vierkant-template-editor-button-opacity: var(--vierkant-template-editor-button-disabled-opacity, .65)}button:not(:disabled):hover{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-hover-background, #f0f0f0);--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-hover-color)}button:not(:disabled):active{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-active-background, rgba(0, 0, 0, .1));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-active-color, var(--vierkant-template-editor-button-color, #000))}button.button-cancel{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-cancel-background, rgb(211, 47, 47));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-cancel-border, 1px solid rgb(211, 47, 47));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-cancel-color, #fff);--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-cancel-active-background, rgb(185, 28, 28));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-cancel-active-color, #fff);--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-cancel-hover-background, rgb(185, 28, 28));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-cancel-hover-color, #fff);--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-cancel-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-cancel-disabled-opacity, .65)}button.button-confirm{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-confirm-background, rgb(76, 188, 134));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-confirm-border, 1px solid rgb(76, 188, 134));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-confirm-color, rgb(30, 41, 59));--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-confirm-active-background, rgb(56, 148, 104));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-confirm-active-color, rgb(30, 41, 59));--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-confirm-hover-background, rgb(56, 148, 104));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-confirm-hover-color, rgb(30, 41, 59));--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-confirm-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-confirm-disabled-opacity, .65)}button.button-error{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-error-background, rgb(248, 113, 113));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-error-border, 1px solid rgb(185, 28, 28));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-error-color, #000);--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-error-active-background, rgb(185, 28, 28));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-error-active-color, #000);--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-error-hover-background, rgb(185, 28, 28));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-error-hover-color, #000);--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-error-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-error-disabled-opacity, .65)}button.button-icon{--vierkant-template-editor-button-padding: var(--vierkant-template-editor-button-icon-padding, .5rem);line-height:0}\n", "input,textarea{font-feature-settings:inherit;font-size:var(--vierkant-template-editor-input-font-size, 1rem);color:var(--vierkant-template-editor-input-color, #0f172a);background:var(--vierkant-template-editor-input-background, #ffffff);padding-block:var(--vierkant-template-editor-input-padding-block, .5rem);padding-inline:var(--vierkant-template-editor-input-padding-inline, .75rem);border:var(--vierkant-template-editor-input-border, 1px solid #64748b);transition:background 0s,color 0s,border-color 0s,outline-color 0s,box-shadow 0s;appearance:none;border-radius:var(--vierkant-template-editor-input-border-radius, .25rem);outline-color:transparent;box-shadow:none}input:focus,textarea:focus{border-color:var(--vierkant-template-editor-input-focus-border-color, #64748b);box-shadow:none;outline:var(--vierkant-template-editor-input-focus-outline, .2rem solid #7cb6d3);outline-offset:0}input.ng-invalid,textarea.ng-invalid{border-color:var(--vierkant-template-editor-input-error-border-color, #dc2626)}input.ng-invalid:focus,textarea.ng-invalid:focus{outline:var(--vierkant-template-editor-input-error-focus-outline, .2rem solid #fca5a5)}textarea{min-height:10rem;resize:vertical}select{font-feature-settings:inherit;font-size:var(--vierkant-template-editor-input-font-size, 1rem);color:var(--vierkant-template-editor-input-color, #0f172a);background:var(--vierkant-template-editor-input-background, #ffffff);padding-block:var(--vierkant-template-editor-input-padding-block, .5rem);padding-inline:var(--vierkant-template-editor-input-padding-inline, .75rem);border:var(--vierkant-template-editor-input-border, 1px solid #64748b);transition:background 0s,color 0s,border-color 0s,outline-color 0s,box-shadow 0s;border-radius:var(--vierkant-template-editor-input-border-radius, .25rem);outline-color:transparent;box-shadow:none}select:focus{border-color:var(--vierkant-template-editor-input-focus-border-color, #64748b);box-shadow:none;outline:var(--vierkant-template-editor-input-focus-outline, .2rem solid #7cb6d3);outline-offset:0}select.ng-invalid{border-color:var(--vierkant-template-editor-input-error-border-color, #dc2626)}select.ng-invalid:focus{outline:var(--vierkant-template-editor-input-error-focus-outline, .2rem solid #fca5a5)}\n", ".row{display:flex;gap:1rem;align-items:center}.column{display:grid;gap:.5rem;grid-template-rows:repeat(auto-fit,minmax(40px,auto))}.chip{padding:var(--vierkant-template-editor-chip-padding, .25rem .5rem);background:var(--vierkant-template-editor-chip-background, var(--background-accent));border-radius:var(--vierkant-template-editor-chip-border-radius, 9999px);font-size:var(--vierkant-template-editor-chip-font-size, .875rem);font-weight:500;color:var(--vierkant-template-editor-chip-color, #000);-webkit-user-select:none;user-select:none}.chip.success{background:var(--vierkant-template-editor-chip-success-background, var(--background-success))}.chip.warning{background:var(--vierkant-template-editor-chip-warning-background, var(--background-warning))}.chip.error{background:var(--vierkant-template-editor-chip-error-background, var(--background-error))}\n"] }]
        }], propDecorators: { data: [{ type: i0.Input, args: [{ isSignal: true, alias: "data", required: false }] }], onEdit: [{ type: i0.Output, args: ["edit"] }] } });

class Confirmation extends BaseComponent {
    message = input(...(ngDevMode ? [undefined, { debugName: "message" }] : /* istanbul ignore next */ []));
    confirmText = input("TEMPLATE_EDITOR.BUTTONS.CANCEL", ...(ngDevMode ? [{ debugName: "confirmText" }] : /* istanbul ignore next */ []));
    cancelText = input("TEMPLATE_EDITOR.BUTTONS.CONFIRM", ...(ngDevMode ? [{ debugName: "cancelText" }] : /* istanbul ignore next */ []));
    onCancel = output({ alias: 'cancel' });
    onConfirm = output({ alias: 'confirm' });
    cancel() {
        this.onCancel.emit();
    }
    confirm() {
        this.onConfirm.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: Confirmation, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.2.9", type: Confirmation, isStandalone: true, selector: "vierkant-confirmation", inputs: { message: { classPropertyName: "message", publicName: "message", isSignal: true, isRequired: false, transformFunction: null }, confirmText: { classPropertyName: "confirmText", publicName: "confirmText", isSignal: true, isRequired: false, transformFunction: null }, cancelText: { classPropertyName: "cancelText", publicName: "cancelText", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { onCancel: "cancel", onConfirm: "confirm" }, usesInheritance: true, ngImport: i0, template: "<div class=\"confirmation-dialog\">\n    <div class=\"confirmation-content\">\n        <span translate>{{ message() }}</span>\n        <div class=\"confirmation-buttons\">\n            <button (click)=\"cancel()\" class=\"button-cancel\" translate>{{ cancelText() }}</button>\n            <button (click)=\"confirm()\" class=\"button-confirm\" translate>{{ confirmText() }}</button>\n        </div>\n    </div>\n</div>", styles: ["vierkant-confirmation{position:absolute;z-index:var(--vierkant-template-editor-confirmation-z-index, 9999);background:var(--vierkant-template-editor-confirmation-background, #fff);padding:var(--vierkant-template-editor-confirmation-padding, .5rem .75rem);border:var(--vierkant-template-editor-confirmation-border, 1px solid #ddd);border-radius:var(--vierkant-template-editor-confirmation-border-radius, 0px);box-shadow:var(--vierkant-template-editor-confirmation-shadow, rgba(149, 157, 165, .2) 0px 8px 24px)}vierkant-confirmation .confirmation-content{display:flex;flex-direction:column;gap:var(--vierkant-template-editor-confirmation-gap, .5rem)}vierkant-confirmation .confirmation-buttons{display:flex;justify-content:flex-end;gap:.5rem;margin-top:var(--vierkant-template-editor-confirmation-margin-top, .5rem)}\n", "button{background:var(--vierkant-template-editor-button-background, #fff);border:var(--vierkant-template-editor-button-border, 1px solid #c9c9c9);color:var(--vierkant-template-editor-button-color, #000);fill:var(--vierkant-template-editor-button-color, #000);border-radius:var(--vierkant-template-editor-button-border-radius, 3px);padding:var(--vierkant-template-editor-button-padding, .5rem .75rem);opacity:var(--vierkant-template-editor-button-opacity, 1);cursor:var(--vierkant-template-editor-button-cursor, pointer);display:flex;align-items:center;justify-content:center;gap:.25rem}button:disabled{--vierkant-template-editor-button-cursor: var(--vierkant-template-editor-button-disabled-cursor, not-allowed);--vierkant-template-editor-button-opacity: var(--vierkant-template-editor-button-disabled-opacity, .65)}button:not(:disabled):hover{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-hover-background, #f0f0f0);--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-hover-color)}button:not(:disabled):active{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-active-background, rgba(0, 0, 0, .1));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-active-color, var(--vierkant-template-editor-button-color, #000))}button.button-cancel{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-cancel-background, rgb(211, 47, 47));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-cancel-border, 1px solid rgb(211, 47, 47));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-cancel-color, #fff);--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-cancel-active-background, rgb(185, 28, 28));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-cancel-active-color, #fff);--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-cancel-hover-background, rgb(185, 28, 28));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-cancel-hover-color, #fff);--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-cancel-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-cancel-disabled-opacity, .65)}button.button-confirm{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-confirm-background, rgb(76, 188, 134));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-confirm-border, 1px solid rgb(76, 188, 134));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-confirm-color, rgb(30, 41, 59));--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-confirm-active-background, rgb(56, 148, 104));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-confirm-active-color, rgb(30, 41, 59));--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-confirm-hover-background, rgb(56, 148, 104));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-confirm-hover-color, rgb(30, 41, 59));--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-confirm-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-confirm-disabled-opacity, .65)}button.button-error{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-error-background, rgb(248, 113, 113));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-error-border, 1px solid rgb(185, 28, 28));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-error-color, #000);--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-error-active-background, rgb(185, 28, 28));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-error-active-color, #000);--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-error-hover-background, rgb(185, 28, 28));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-error-hover-color, #000);--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-error-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-error-disabled-opacity, .65)}button.button-icon{--vierkant-template-editor-button-padding: var(--vierkant-template-editor-button-icon-padding, .5rem);line-height:0}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: TranslateDirective, selector: "[translate],[ngx-translate]", inputs: ["translate", "translateParams"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: Confirmation, decorators: [{
            type: Component,
            args: [{ selector: 'vierkant-confirmation', encapsulation: ViewEncapsulation.None, imports: [CommonModule, TranslateDirective], template: "<div class=\"confirmation-dialog\">\n    <div class=\"confirmation-content\">\n        <span translate>{{ message() }}</span>\n        <div class=\"confirmation-buttons\">\n            <button (click)=\"cancel()\" class=\"button-cancel\" translate>{{ cancelText() }}</button>\n            <button (click)=\"confirm()\" class=\"button-confirm\" translate>{{ confirmText() }}</button>\n        </div>\n    </div>\n</div>", styles: ["vierkant-confirmation{position:absolute;z-index:var(--vierkant-template-editor-confirmation-z-index, 9999);background:var(--vierkant-template-editor-confirmation-background, #fff);padding:var(--vierkant-template-editor-confirmation-padding, .5rem .75rem);border:var(--vierkant-template-editor-confirmation-border, 1px solid #ddd);border-radius:var(--vierkant-template-editor-confirmation-border-radius, 0px);box-shadow:var(--vierkant-template-editor-confirmation-shadow, rgba(149, 157, 165, .2) 0px 8px 24px)}vierkant-confirmation .confirmation-content{display:flex;flex-direction:column;gap:var(--vierkant-template-editor-confirmation-gap, .5rem)}vierkant-confirmation .confirmation-buttons{display:flex;justify-content:flex-end;gap:.5rem;margin-top:var(--vierkant-template-editor-confirmation-margin-top, .5rem)}\n", "button{background:var(--vierkant-template-editor-button-background, #fff);border:var(--vierkant-template-editor-button-border, 1px solid #c9c9c9);color:var(--vierkant-template-editor-button-color, #000);fill:var(--vierkant-template-editor-button-color, #000);border-radius:var(--vierkant-template-editor-button-border-radius, 3px);padding:var(--vierkant-template-editor-button-padding, .5rem .75rem);opacity:var(--vierkant-template-editor-button-opacity, 1);cursor:var(--vierkant-template-editor-button-cursor, pointer);display:flex;align-items:center;justify-content:center;gap:.25rem}button:disabled{--vierkant-template-editor-button-cursor: var(--vierkant-template-editor-button-disabled-cursor, not-allowed);--vierkant-template-editor-button-opacity: var(--vierkant-template-editor-button-disabled-opacity, .65)}button:not(:disabled):hover{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-hover-background, #f0f0f0);--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-hover-color)}button:not(:disabled):active{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-active-background, rgba(0, 0, 0, .1));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-active-color, var(--vierkant-template-editor-button-color, #000))}button.button-cancel{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-cancel-background, rgb(211, 47, 47));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-cancel-border, 1px solid rgb(211, 47, 47));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-cancel-color, #fff);--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-cancel-active-background, rgb(185, 28, 28));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-cancel-active-color, #fff);--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-cancel-hover-background, rgb(185, 28, 28));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-cancel-hover-color, #fff);--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-cancel-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-cancel-disabled-opacity, .65)}button.button-confirm{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-confirm-background, rgb(76, 188, 134));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-confirm-border, 1px solid rgb(76, 188, 134));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-confirm-color, rgb(30, 41, 59));--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-confirm-active-background, rgb(56, 148, 104));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-confirm-active-color, rgb(30, 41, 59));--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-confirm-hover-background, rgb(56, 148, 104));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-confirm-hover-color, rgb(30, 41, 59));--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-confirm-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-confirm-disabled-opacity, .65)}button.button-error{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-error-background, rgb(248, 113, 113));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-error-border, 1px solid rgb(185, 28, 28));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-error-color, #000);--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-error-active-background, rgb(185, 28, 28));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-error-active-color, #000);--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-error-hover-background, rgb(185, 28, 28));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-error-hover-color, #000);--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-error-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-error-disabled-opacity, .65)}button.button-icon{--vierkant-template-editor-button-padding: var(--vierkant-template-editor-button-icon-padding, .5rem);line-height:0}\n"] }]
        }], propDecorators: { message: [{ type: i0.Input, args: [{ isSignal: true, alias: "message", required: false }] }], confirmText: [{ type: i0.Input, args: [{ isSignal: true, alias: "confirmText", required: false }] }], cancelText: [{ type: i0.Input, args: [{ isSignal: true, alias: "cancelText", required: false }] }], onCancel: [{ type: i0.Output, args: ["cancel"] }], onConfirm: [{ type: i0.Output, args: ["confirm"] }] } });

class ConfirmationService {
    appRef = inject(ApplicationRef);
    injector = inject(EnvironmentInjector);
    confirmationRef = null;
    eventRefs = [];
    clickOutsideListener = null;
    show(options) {
        this.remove();
        const { target, onConfirm, onCancel } = options;
        this.confirmationRef = createComponent(Confirmation, {
            environmentInjector: this.injector,
            bindings: [
                inputBinding('message', () => options.message),
                inputBinding('confirmText', () => options.confirmText || 'BUTTONS.CONFIRM'),
                inputBinding('cancelText', () => options.cancelText || 'BUTTONS.CANCEL'),
            ]
        });
        this.appRef.attachView(this.confirmationRef.hostView);
        const domElem = this.confirmationRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        if (target && target instanceof HTMLElement) {
            const rect = target.getBoundingClientRect();
            const domRect = domElem.getBoundingClientRect();
            const spaceAbove = rect.top;
            const spaceNeeded = domRect.height + rect.height;
            if (spaceAbove >= spaceNeeded) {
                // Position above the element
                domElem.style.top = `${rect.top - rect.height - domRect.height + window.scrollY}px`;
            }
            else {
                // Position below the element
                domElem.style.top = `${rect.bottom + window.scrollY}px`;
            }
            // Adjust horizontal position based on available space
            let left = rect.left + window.scrollX;
            const spaceRight = window.innerWidth - (rect.left + domRect.width);
            if (spaceRight < 0) {
                // Not enough space on the right, position from the right side
                left = rect.right - domRect.width + window.scrollX;
            }
            // Ensure the element doesn't overflow the left edge
            left = Math.max(0, left);
            domElem.style.left = `${left}px`;
        }
        this.eventRefs.push(this.confirmationRef.instance.onCancel.subscribe(() => {
            if (onCancel) {
                onCancel();
            }
            this.remove();
        }));
        this.eventRefs.push(this.confirmationRef.instance.onConfirm.subscribe(() => {
            onConfirm();
            this.remove();
        }));
        this.clickOutsideListener = (event) => {
            if (domElem && !domElem.contains(event.target)) {
                this.remove();
            }
        };
        setTimeout(() => {
            // Delay adding listener to avoid immediate trigger
            document.addEventListener('click', this.clickOutsideListener, true);
        }, 0);
    }
    remove() {
        if (this.clickOutsideListener) {
            document.removeEventListener('click', this.clickOutsideListener, true);
            this.clickOutsideListener = null;
        }
        if (this.confirmationRef) {
            this.appRef.detachView(this.confirmationRef.hostView);
            this.confirmationRef.destroy();
            this.confirmationRef = null;
        }
        this.eventRefs.forEach(ref => ref.unsubscribe());
        this.eventRefs.length = 0;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: ConfirmationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: ConfirmationService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: ConfirmationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class MaxLengthDirective {
    el;
    renderer;
    ngControl;
    counterSpan = null;
    wrapper = null;
    valueSignal = signal('', ...(ngDevMode ? [{ debugName: "valueSignal" }] : /* istanbul ignore next */ []));
    unlistenInput;
    constructor(el, renderer, ngControl) {
        this.el = el;
        this.renderer = renderer;
        this.ngControl = ngControl;
        effect(() => {
            const value = this.valueSignal();
            this.updateCounter();
        });
        // Listen for input events and update signal
        this.unlistenInput = this.renderer.listen(this.el.nativeElement, 'input', () => {
            this.valueSignal.set(this.el.nativeElement.value);
        });
        if (this.ngControl) {
            this.ngControl.valueChanges?.subscribe((value) => this.valueSignal.set(value || ''));
        }
        // Initialize signal with current value
        this.valueSignal.set(this.el.nativeElement.value);
    }
    ngAfterViewInit() {
        this.createCounter();
        this.updateCounter();
        // Update counter after ngModel has set initial value
        setTimeout(() => {
            this.valueSignal.set(this.el.nativeElement.value);
        }, 0);
    }
    createCounter() {
        const parent = this.el.nativeElement.parentElement;
        // Create wrapper div
        this.wrapper = this.renderer.createElement('div');
        this.renderer.setStyle(this.wrapper, 'position', 'relative');
        this.renderer.setStyle(this.wrapper, 'display', 'grid');
        this.renderer.setStyle(this.wrapper, 'width', '100%');
        // Create counter span
        this.counterSpan = this.renderer.createElement('span');
        this.renderer.setStyle(this.counterSpan, 'position', 'absolute');
        this.renderer.setStyle(this.counterSpan, 'top', '4px');
        this.renderer.setStyle(this.counterSpan, 'right', '8px');
        this.renderer.setStyle(this.counterSpan, 'font-size', '10px');
        this.renderer.setStyle(this.counterSpan, 'color', '#666');
        this.renderer.setStyle(this.counterSpan, 'pointer-events', 'none');
        // Wrap input and add counter
        if (parent) {
            this.renderer.insertBefore(parent, this.wrapper, this.el.nativeElement);
            this.renderer.removeChild(parent, this.el.nativeElement);
            this.renderer.appendChild(this.wrapper, this.el.nativeElement);
            this.renderer.appendChild(this.wrapper, this.counterSpan);
        }
    }
    updateCounter() {
        if (this.counterSpan) {
            const currentLength = this.el.nativeElement.value.length;
            const maxLength = this.el.nativeElement.maxLength;
            this.renderer.setProperty(this.counterSpan, 'textContent', `${currentLength}/${maxLength}`);
        }
    }
    ngOnDestroy() {
        // Clean up input listener
        if (this.unlistenInput) {
            this.unlistenInput();
        }
        if (this.wrapper && this.wrapper.parentElement) {
            const parent = this.wrapper.parentElement;
            this.renderer.insertBefore(parent, this.el.nativeElement, this.wrapper);
            this.renderer.removeChild(parent, this.wrapper);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: MaxLengthDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i2.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.9", type: MaxLengthDirective, isStandalone: true, selector: "[maxlength]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: MaxLengthDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[maxlength]'
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i2.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }] });

class TooltipDirective {
    tooltipText = input.required({ ...(ngDevMode ? { debugName: "tooltipText" } : /* istanbul ignore next */ {}), alias: 'tooltip' });
    isTooltipDisabled = input(false, { ...(ngDevMode ? { debugName: "isTooltipDisabled" } : /* istanbul ignore next */ {}), alias: 'tooltipDisabled' });
    el = inject(ElementRef);
    renderer = inject(Renderer2);
    document = inject(DOCUMENT$1);
    ngZone = inject(NgZone);
    isVisible = signal(false, ...(ngDevMode ? [{ debugName: "isVisible" }] : /* istanbul ignore next */ []));
    unlistenMouseEnter;
    unlistenMouseLeave;
    unlistenScroll;
    unlistenResize;
    tooltipRef = null;
    tooltipId = `tooltip-${Math.random().toString(36).substring(2)}`;
    onEscape() {
        this.isVisible.set(false);
    }
    constructor() {
        effect(() => {
            if (this.isTooltipDisabled())
                return;
            if (this.isVisible()) {
                this.createTooltip();
            }
            else {
                this.removeTooltip();
            }
        });
        this.unlistenMouseEnter = this.renderer.listen(this.el.nativeElement, 'mouseenter', () => {
            this.isVisible.set(true);
        });
        this.unlistenMouseLeave = this.renderer.listen(this.el.nativeElement, 'mouseleave', (e) => {
            const popover = this.tooltipRef;
            if (popover && (popover === e.relatedTarget || popover.contains(e.relatedTarget))) {
                return;
            }
            this.isVisible.set(false);
        });
    }
    createTooltip() {
        if (this.tooltipRef)
            return;
        this.tooltipRef = this.renderer.createElement('span');
        this.renderer.setAttribute(this.tooltipRef, 'id', this.tooltipId);
        this.renderer.setAttribute(this.tooltipRef, 'role', 'tooltip');
        const text = this.renderer.createText(this.tooltipText());
        this.renderer.appendChild(this.tooltipRef, text);
        this.renderer.addClass(this.tooltipRef, 'tooltip');
        this.renderer.addClass(this.tooltipRef, 'vierkant-template-editor');
        // Append to body to avoid clipping
        this.renderer.appendChild(this.document.body, this.tooltipRef);
        this.renderer.setAttribute(this.el.nativeElement, 'aria-describedby', this.tooltipId);
        this.updatePosition();
        // Run scroll and resize listeners outside zone to prevent excessive change detection
        this.ngZone.runOutsideAngular(() => {
            this.unlistenScroll = this.renderer.listen('window', 'scroll', () => {
                requestAnimationFrame(() => this.updatePosition());
            });
            this.unlistenResize = this.renderer.listen('window', 'resize', () => {
                requestAnimationFrame(() => this.updatePosition());
            });
        });
    }
    updatePosition() {
        if (!this.tooltipRef)
            return;
        const element = this.tooltipRef;
        const elementRect = element.getBoundingClientRect();
        const hostRect = this.el.nativeElement.getBoundingClientRect();
        const top = hostRect.top - (elementRect.height / 4);
        const left = hostRect.right;
        this.renderer.setStyle(element, 'position', 'fixed');
        this.renderer.setStyle(element, 'top', `${top}px`);
        this.renderer.setStyle(element, 'left', `${left}px`);
    }
    removeTooltip() {
        if (this.unlistenScroll) {
            this.unlistenScroll();
            this.unlistenScroll = undefined;
        }
        if (this.unlistenResize) {
            this.unlistenResize();
            this.unlistenResize = undefined;
        }
        if (this.tooltipRef) {
            this.renderer.removeChild(this.document.body, this.tooltipRef);
            this.tooltipRef = null;
        }
        this.renderer.removeAttribute(this.el.nativeElement, 'aria-describedby');
    }
    ngOnDestroy() {
        this.removeTooltip();
        this.unlistenMouseEnter?.();
        this.unlistenMouseLeave?.();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: TooltipDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.9", type: TooltipDirective, isStandalone: true, selector: "[tooltip]", inputs: { tooltipText: { classPropertyName: "tooltipText", publicName: "tooltip", isSignal: true, isRequired: true, transformFunction: null }, isTooltipDisabled: { classPropertyName: "isTooltipDisabled", publicName: "tooltipDisabled", isSignal: true, isRequired: false, transformFunction: null } }, host: { listeners: { "keyup.esc": "onEscape()" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: TooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tooltip]',
                    standalone: true
                }]
        }], ctorParameters: () => [], propDecorators: { tooltipText: [{ type: i0.Input, args: [{ isSignal: true, alias: "tooltip", required: true }] }], isTooltipDisabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "tooltipDisabled", required: false }] }], onEscape: [{
                type: HostListener,
                args: ['keyup.esc']
            }] } });

class DeleteIcon {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: DeleteIcon, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: DeleteIcon, isStandalone: true, selector: "delete-icon", ngImport: i0, template: `
<svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"><!--!Font Awesome Pro v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2026 Fonticons, Inc.-->
                <path
                    d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z" />
            </svg>`, isInline: true, styles: [":host{width:1em;height:1em;display:inline-block;vertical-align:middle}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: DeleteIcon, decorators: [{
            type: Component,
            args: [{ selector: 'delete-icon', template: `
<svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"><!--!Font Awesome Pro v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2026 Fonticons, Inc.-->
                <path
                    d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z" />
            </svg>`, imports: [CommonModule], styles: [":host{width:1em;height:1em;display:inline-block;vertical-align:middle}\n"] }]
        }] });

class ValidationDirective {
    validateFn = null;
    onChange = null;
    ngOnChanges(changes) {
        if (changes['validateFn']) {
            if (this.onChange)
                this.onChange();
        }
    }
    validate(control) {
        if (!this.validateFn)
            return null;
        const result = this.validateFn(control.value);
        if (result === true)
            return null;
        if (result === false)
            return { validation: true };
        return result;
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: ValidationDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.9", type: ValidationDirective, isStandalone: true, selector: "[validate]", inputs: { validateFn: ["validate", "validateFn"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => ValidationDirective),
                multi: true
            }
        ], usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: ValidationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[validate]',
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => ValidationDirective),
                            multi: true
                        }
                    ]
                }]
        }], propDecorators: { validateFn: [{
                type: Input,
                args: ['validate']
            }] } });

class HeaderPart {
    confirmationService = inject(ConfirmationService);
    data = input.required(...(ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []));
    onDelete = output({ alias: 'delete' });
    categories = ['MARKETING', 'UTILITY'];
    languages = ['en', 'de'];
    isNew = computed(() => {
        return !this.data().id?.length;
    }, ...(ngDevMode ? [{ debugName: "isNew" }] : /* istanbul ignore next */ []));
    quality = computed(() => {
        switch (this.data().quality) {
            case 'GREEN': return "high_quality";
            case 'YELLOW': return "medium_quality";
            case 'RED': return "low_quality";
            default: return "unknown";
        }
    }, ...(ngDevMode ? [{ debugName: "quality" }] : /* istanbul ignore next */ []));
    status = computed(() => {
        switch (this.data().status) {
            case 'APPROVED': return "approved";
            case 'REJECTED': return "rejected";
            case 'PAUSED': return "paused";
            case 'PENDING': return "pending";
            case 'DELETED': return "deleted";
            default: return "unknown";
        }
    }, ...(ngDevMode ? [{ debugName: "status" }] : /* istanbul ignore next */ []));
    qualitySeverity = computed(() => {
        switch (this.quality()) {
            case 'high_quality': return "success";
            case 'medium_quality': return "warning";
            case 'low_quality': return "error";
            default: return "secondary";
        }
    }, ...(ngDevMode ? [{ debugName: "qualitySeverity" }] : /* istanbul ignore next */ []));
    statusSeverity = computed(() => {
        switch (this.status()) {
            case 'approved': return "success";
            case 'rejected': return "danger";
            case 'paused': return "warning";
            case 'pending': return "info";
            case 'deleted': return "secondary";
            default: return "secondary";
        }
    }, ...(ngDevMode ? [{ debugName: "statusSeverity" }] : /* istanbul ignore next */ []));
    category = computed(() => {
        switch (this.data().category.toLowerCase()) {
            case 'marketing': return "TEMPLATE_EDITOR.CATEGORY.MARKETING";
            case 'utility': return "TEMPLATE_EDITOR.CATEGORY.UTILITY";
            default: return "TEMPLATE_EDITOR.CATEGORY.UNKNOWN";
        }
    }, ...(ngDevMode ? [{ debugName: "category" }] : /* istanbul ignore next */ []));
    language = computed(() => {
        const [lang, region] = this.data().language.split('_');
        if (region === undefined)
            return lang.toUpperCase();
        else
            return `${lang.toUpperCase()} (${region.toUpperCase()})`;
    }, ...(ngDevMode ? [{ debugName: "language" }] : /* istanbul ignore next */ []));
    delete($event) {
        this.confirmationService.show({
            target: $event.currentTarget,
            message: 'TEMPLATE_EDITOR.CONFIRMATION.DELETE_TEMPLATE',
            confirmText: 'BUTTONS.CONFIRM',
            cancelText: 'BUTTONS.CANCEL',
            onConfirm: () => {
                this.onDelete.emit($event);
            }
        });
    }
    validate(input) {
        if (!input || typeof input !== 'string')
            return { validation: 'invalid_input' };
        const value = input.toLowerCase().replace(/[^a-z\-\_]/g, '');
        if (value.length === 0)
            return { validation: 'required' };
        if (value.startsWith('-') || value.startsWith('_') || value.endsWith('-') || value.endsWith('_')) {
            return { validation: 'invalid_format' };
        }
        return true;
    }
    sanitizeName(input, el) {
        if (!input || typeof input !== 'string')
            return '';
        let value = input.toLowerCase().replace(/[^a-z\-\_]/g, '');
        if (value.startsWith('-') || value.startsWith('_')) {
            value = value.substring(1);
        }
        if (el)
            el.value = value;
        if (value.length === 0)
            return null;
        return value;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: HeaderPart, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: HeaderPart, isStandalone: true, selector: "template-header", inputs: { data: { classPropertyName: "data", publicName: "data", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { onDelete: "delete" }, ngImport: i0, template: "@if (isNew()) {\n    <h1 translate>TEMPLATE_EDITOR.TITLE</h1>\n} @else {\n    <h1>{{data().name}}</h1>\n    <div class=\"row\">\n        <div class=\"chip\" [ngClass]=\"statusSeverity()\">{{'TEMPLATE_EDITOR.STATUS.' + status().toUpperCase() | translate}}</div>\n        <div class=\"chip\" [ngClass]=\"qualitySeverity()\">{{'TEMPLATE_EDITOR.QUALITY.' + quality().toUpperCase() | translate}}</div>\n    </div>\n}\n<div class=\"row flex-1\">\n    @if (isNew()) {\n        <div class=\"input\">\n            <label for=\"category_select\" translate>TEMPLATE_EDITOR.HEADER.CATEGORY</label>\n            <select id=\"category_select\" [(ngModel)]=\"data().category\" required>\n                @if (!data().category) {\n                <option value=\"\" disabled [selected]=\"!data().category.length\" translate>TEMPLATE_EDITOR.SELECT_CATEGORY</option>\n                }\n                @for (cat of categories; track cat) {\n                    <option [value]=\"cat\">{{'TEMPLATE_EDITOR.CATEGORY.' + cat.toUpperCase() | translate}}</option>\n                }\n            </select>\n        </div>\n        <div class=\"input\">\n            <label for=\"language_select\" translate>TEMPLATE_EDITOR.HEADER.LANGUAGE</label>\n            <select id=\"language_select\" [(ngModel)]=\"data().language\" required>\n                @if (!data().language) {\n                <option value=\"\" disabled [selected]=\"!data().language.length\" translate>TEMPLATE_EDITOR.SELECT_LANGUAGE</option>\n                }\n                @for (lang of languages; track lang) {\n                <option [value]=\"lang\">{{'TEMPLATE_EDITOR.LANGUAGE.' + lang.toUpperCase() | translate}}</option>\n                }\n            </select>\n        </div>\n    } @else {\n        {{category() | translate}}\n        {{language()}}\n        <button (click)=\"delete($event)\" class=\"button-delete button-cancel\">\n            <delete-icon></delete-icon>\n            <span translate>\n                TEMPLATE_EDITOR.BUTTONS.DELETE\n            </span>\n        </button>\n    }\n</div>\n\n@if (isNew()) {\n    <div class=\"input\" >\n        <label for=\"template_name\" translate>TEMPLATE_EDITOR.HEADER.TITLE</label>\n        <div [tabIndex]=\"-1\" [tooltip]=\"'TEMPLATE_EDITOR.HEADER.TITLE_VALIDATION_HINT' | translate\">\n            <input #el type=\"text\" name=\"template_name\" id=\"template_name\" [ngModel]=\"data().name | lowercase\" (ngModelChange)=\"data().name = $any(sanitizeName($event, el))\" [maxlength]=\"512\" required [validate]=\"validate\"/>\n        </div>\n    </div>\n}", styles: [".row{display:flex;gap:1rem;align-items:center}.column{display:grid;gap:.5rem;grid-template-rows:repeat(auto-fit,minmax(40px,auto))}.chip{padding:var(--vierkant-template-editor-chip-padding, .25rem .5rem);background:var(--vierkant-template-editor-chip-background, var(--background-accent));border-radius:var(--vierkant-template-editor-chip-border-radius, 9999px);font-size:var(--vierkant-template-editor-chip-font-size, .875rem);font-weight:500;color:var(--vierkant-template-editor-chip-color, #000);-webkit-user-select:none;user-select:none}.chip.success{background:var(--vierkant-template-editor-chip-success-background, var(--background-success))}.chip.warning{background:var(--vierkant-template-editor-chip-warning-background, var(--background-warning))}.chip.error{background:var(--vierkant-template-editor-chip-error-background, var(--background-error))}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: TranslateDirective, selector: "[translate],[ngx-translate]", inputs: ["translate", "translateParams"] }, { kind: "directive", type: MaxLengthDirective, selector: "[maxlength]" }, { kind: "directive", type: TooltipDirective, selector: "[tooltip]", inputs: ["tooltip", "tooltipDisabled"] }, { kind: "component", type: DeleteIcon, selector: "delete-icon" }, { kind: "directive", type: ValidationDirective, selector: "[validate]", inputs: ["validate"] }, { kind: "pipe", type: i1.LowerCasePipe, name: "lowercase" }, { kind: "pipe", type: TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: HeaderPart, decorators: [{
            type: Component,
            args: [{ selector: 'template-header', imports: [CommonModule, FormsModule, TranslatePipe, TranslateDirective, MaxLengthDirective, TooltipDirective, DeleteIcon, ValidationDirective], template: "@if (isNew()) {\n    <h1 translate>TEMPLATE_EDITOR.TITLE</h1>\n} @else {\n    <h1>{{data().name}}</h1>\n    <div class=\"row\">\n        <div class=\"chip\" [ngClass]=\"statusSeverity()\">{{'TEMPLATE_EDITOR.STATUS.' + status().toUpperCase() | translate}}</div>\n        <div class=\"chip\" [ngClass]=\"qualitySeverity()\">{{'TEMPLATE_EDITOR.QUALITY.' + quality().toUpperCase() | translate}}</div>\n    </div>\n}\n<div class=\"row flex-1\">\n    @if (isNew()) {\n        <div class=\"input\">\n            <label for=\"category_select\" translate>TEMPLATE_EDITOR.HEADER.CATEGORY</label>\n            <select id=\"category_select\" [(ngModel)]=\"data().category\" required>\n                @if (!data().category) {\n                <option value=\"\" disabled [selected]=\"!data().category.length\" translate>TEMPLATE_EDITOR.SELECT_CATEGORY</option>\n                }\n                @for (cat of categories; track cat) {\n                    <option [value]=\"cat\">{{'TEMPLATE_EDITOR.CATEGORY.' + cat.toUpperCase() | translate}}</option>\n                }\n            </select>\n        </div>\n        <div class=\"input\">\n            <label for=\"language_select\" translate>TEMPLATE_EDITOR.HEADER.LANGUAGE</label>\n            <select id=\"language_select\" [(ngModel)]=\"data().language\" required>\n                @if (!data().language) {\n                <option value=\"\" disabled [selected]=\"!data().language.length\" translate>TEMPLATE_EDITOR.SELECT_LANGUAGE</option>\n                }\n                @for (lang of languages; track lang) {\n                <option [value]=\"lang\">{{'TEMPLATE_EDITOR.LANGUAGE.' + lang.toUpperCase() | translate}}</option>\n                }\n            </select>\n        </div>\n    } @else {\n        {{category() | translate}}\n        {{language()}}\n        <button (click)=\"delete($event)\" class=\"button-delete button-cancel\">\n            <delete-icon></delete-icon>\n            <span translate>\n                TEMPLATE_EDITOR.BUTTONS.DELETE\n            </span>\n        </button>\n    }\n</div>\n\n@if (isNew()) {\n    <div class=\"input\" >\n        <label for=\"template_name\" translate>TEMPLATE_EDITOR.HEADER.TITLE</label>\n        <div [tabIndex]=\"-1\" [tooltip]=\"'TEMPLATE_EDITOR.HEADER.TITLE_VALIDATION_HINT' | translate\">\n            <input #el type=\"text\" name=\"template_name\" id=\"template_name\" [ngModel]=\"data().name | lowercase\" (ngModelChange)=\"data().name = $any(sanitizeName($event, el))\" [maxlength]=\"512\" required [validate]=\"validate\"/>\n        </div>\n    </div>\n}", styles: [".row{display:flex;gap:1rem;align-items:center}.column{display:grid;gap:.5rem;grid-template-rows:repeat(auto-fit,minmax(40px,auto))}.chip{padding:var(--vierkant-template-editor-chip-padding, .25rem .5rem);background:var(--vierkant-template-editor-chip-background, var(--background-accent));border-radius:var(--vierkant-template-editor-chip-border-radius, 9999px);font-size:var(--vierkant-template-editor-chip-font-size, .875rem);font-weight:500;color:var(--vierkant-template-editor-chip-color, #000);-webkit-user-select:none;user-select:none}.chip.success{background:var(--vierkant-template-editor-chip-success-background, var(--background-success))}.chip.warning{background:var(--vierkant-template-editor-chip-warning-background, var(--background-warning))}.chip.error{background:var(--vierkant-template-editor-chip-error-background, var(--background-error))}\n"] }]
        }], propDecorators: { data: [{ type: i0.Input, args: [{ isSignal: true, alias: "data", required: true }] }], onDelete: [{ type: i0.Output, args: ["delete"] }] } });

class PlaceholderInsertComponent {
    targetInput = input.required(...(ngDevMode ? [{ debugName: "targetInput" }] : /* istanbul ignore next */ []));
    options = input.required(...(ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []));
    filter = signal('', ...(ngDevMode ? [{ debugName: "filter" }] : /* istanbul ignore next */ []));
    filteredOptions = computed(() => {
        const filterValue = this.filter().toLowerCase();
        return this.options().filter(option => option.label.toLowerCase().includes(filterValue));
    }, ...(ngDevMode ? [{ debugName: "filteredOptions" }] : /* istanbul ignore next */ []));
    insertText(insert) {
        const el = this.targetInput();
        let position = el.selectionStart || 0;
        let text = el.value;
        if (!text.endsWith(' ') && text.length > 0) {
            text += ' ';
            position += 1;
        }
        text = text.slice(0, position) + `{{${insert}}} ` + text.slice(position);
        el.value = text;
        const newPosition = position + (`{{${insert}}}`).length + 1;
        el.setSelectionRange(newPosition, newPosition);
        el.dispatchEvent(new Event('input'));
        el.focus();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: PlaceholderInsertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: PlaceholderInsertComponent, isStandalone: true, selector: "placeholder-insert", inputs: { targetInput: { classPropertyName: "targetInput", publicName: "targetInput", isSignal: true, isRequired: true, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: `
        <input type="text" class="placeholder-search" [placeholder]="'TEMPLATE_EDITOR.SEARCH_PLACEHOLDER' | translate" [(ngModel)]="filter" />
        <div class="placeholder-options">
            @for(option of filteredOptions(); track option) {
                <button class="placeholder-option" (click)="insertText(option.value)">
                    {{ option.label }}
                    @if(option.example) {
                        <span class="preview">{{option.example}}</span>
                    }
                </button>
            } 
        </div>
    `, isInline: true, styles: [":host{display:flex;flex-direction:column;gap:1rem}.placeholder-options{max-height:var(--vierkant-template-editor-placeholder-options-max-height, 300px);overflow-y:auto;min-width:150px;display:flex;flex-direction:column;gap:var(--vierkant-template-editor-placeholder-options-gap, 4px)}.placeholder-option{padding:var(--vierkant-template-editor-placeholder-option-padding, .5rem .75rem);text-align:left;background:transparent;border:var(--vierkant-template-editor-placeholder-option-border, 1px solid #e0e0e0);border-radius:var(--vierkant-template-editor-placeholder-option-border-radius, 4px);cursor:pointer;transition:background-color .2s;justify-content:flex-start}.placeholder-option:hover{background-color:var(--vierkant-template-editor-placeholder-option-hover-background, #f5f5f5)}.placeholder-option:active{background-color:var(--vierkant-template-editor-placeholder-option-active-background, #e0e0e0)}.preview{float:right;margin-left:1rem;font-size:.6rem;line-height:1rem;opacity:.75}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: PlaceholderInsertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'placeholder-insert', standalone: true, imports: [CommonModule, FormsModule, TranslatePipe], template: `
        <input type="text" class="placeholder-search" [placeholder]="'TEMPLATE_EDITOR.SEARCH_PLACEHOLDER' | translate" [(ngModel)]="filter" />
        <div class="placeholder-options">
            @for(option of filteredOptions(); track option) {
                <button class="placeholder-option" (click)="insertText(option.value)">
                    {{ option.label }}
                    @if(option.example) {
                        <span class="preview">{{option.example}}</span>
                    }
                </button>
            } 
        </div>
    `, styles: [":host{display:flex;flex-direction:column;gap:1rem}.placeholder-options{max-height:var(--vierkant-template-editor-placeholder-options-max-height, 300px);overflow-y:auto;min-width:150px;display:flex;flex-direction:column;gap:var(--vierkant-template-editor-placeholder-options-gap, 4px)}.placeholder-option{padding:var(--vierkant-template-editor-placeholder-option-padding, .5rem .75rem);text-align:left;background:transparent;border:var(--vierkant-template-editor-placeholder-option-border, 1px solid #e0e0e0);border-radius:var(--vierkant-template-editor-placeholder-option-border-radius, 4px);cursor:pointer;transition:background-color .2s;justify-content:flex-start}.placeholder-option:hover{background-color:var(--vierkant-template-editor-placeholder-option-hover-background, #f5f5f5)}.placeholder-option:active{background-color:var(--vierkant-template-editor-placeholder-option-active-background, #e0e0e0)}.preview{float:right;margin-left:1rem;font-size:.6rem;line-height:1rem;opacity:.75}\n"] }]
        }], propDecorators: { targetInput: [{ type: i0.Input, args: [{ isSignal: true, alias: "targetInput", required: true }] }], options: [{ type: i0.Input, args: [{ isSignal: true, alias: "options", required: true }] }] } });

class PlaceholderInsertPopover {
    componentRef = null;
    el = inject(ElementRef);
    renderer = inject(Renderer2);
    viewContainerRef = inject(ViewContainerRef);
    isFocused = signal(false, ...(ngDevMode ? [{ debugName: "isFocused" }] : /* istanbul ignore next */ []));
    unlistenFocus;
    unlistenBlur;
    unlistenPopoverMousedown;
    unlistenScroll;
    unlistenResize;
    unlistenPopoverFocusOut;
    onEscape() {
        this.removePopover();
    }
    placeholderOptions = input.required({ ...(ngDevMode ? { debugName: "placeholderOptions" } : /* istanbul ignore next */ {}), alias: 'placeholderInsert' });
    constructor() {
        effect(() => {
            const options = this.placeholderOptions();
            if (options.length === 0)
                return;
            if (this.isFocused()) {
                this.createPopover();
            }
            else {
                this.removePopover();
            }
        });
        effect(() => {
            const options = this.placeholderOptions();
            if (this.componentRef) {
                this.componentRef.setInput('options', options);
            }
        });
        this.unlistenFocus = this.renderer.listen(this.el.nativeElement, 'focus', () => {
            this.isFocused.set(true);
        });
        this.unlistenBlur = this.renderer.listen(this.el.nativeElement, 'blur', (e) => {
            const popover = this.componentRef?.location.nativeElement;
            if (popover?.contains(e.relatedTarget)) {
                return;
            }
            this.isFocused.set(false);
        });
    }
    createPopover() {
        if (this.componentRef)
            return;
        this.componentRef = this.viewContainerRef.createComponent(PlaceholderInsertComponent);
        this.componentRef.setInput('targetInput', this.el.nativeElement);
        this.componentRef.setInput('options', this.placeholderOptions());
        const element = this.componentRef.location.nativeElement;
        this.renderer.addClass(element, 'placeholder-popover');
        // this.unlistenPopoverMousedown = this.renderer.listen(element, 'mousedown', (e: Event) => {
        //     e.preventDefault();
        // });
        this.unlistenPopoverFocusOut = this.renderer.listen(element, 'focusout', (e) => {
            const related = e.relatedTarget;
            if (related !== this.el.nativeElement && !element.contains(related)) {
                this.isFocused.set(false);
            }
        });
        this.updatePosition();
        this.unlistenScroll = this.renderer.listen('window', 'scroll', () => this.updatePosition());
        this.unlistenResize = this.renderer.listen('window', 'resize', () => this.updatePosition());
    }
    updatePosition() {
        if (!this.componentRef)
            return;
        const element = this.componentRef.location.nativeElement;
        const inputRect = this.el.nativeElement.getBoundingClientRect();
        let top = inputRect.bottom;
        let left = inputRect.left;
        top += 10;
        left += 4;
        this.renderer.setStyle(element, 'top', `${top}px`);
        this.renderer.setStyle(element, 'left', `${left}px`);
    }
    removePopover() {
        if (this.unlistenPopoverMousedown) {
            this.unlistenPopoverMousedown();
            this.unlistenPopoverMousedown = undefined;
        }
        if (this.unlistenPopoverFocusOut) {
            this.unlistenPopoverFocusOut();
            this.unlistenPopoverFocusOut = undefined;
        }
        if (this.unlistenScroll) {
            this.unlistenScroll();
            this.unlistenScroll = undefined;
        }
        if (this.unlistenResize) {
            this.unlistenResize();
            this.unlistenResize = undefined;
        }
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
    ngOnDestroy() {
        this.removePopover();
        this.unlistenFocus?.();
        this.unlistenBlur?.();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: PlaceholderInsertPopover, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.9", type: PlaceholderInsertPopover, isStandalone: true, selector: "[placeholderInsert]", inputs: { placeholderOptions: { classPropertyName: "placeholderOptions", publicName: "placeholderInsert", isSignal: true, isRequired: true, transformFunction: null } }, host: { listeners: { "keyup.esc": "onEscape()" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: PlaceholderInsertPopover, decorators: [{
            type: Directive,
            args: [{
                    selector: '[placeholderInsert]',
                }]
        }], ctorParameters: () => [], propDecorators: { onEscape: [{
                type: HostListener,
                args: ['keyup.esc']
            }], placeholderOptions: [{ type: i0.Input, args: [{ isSignal: true, alias: "placeholderInsert", required: true }] }] } });

class BodyPart {
    data = input.required(...(ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []));
    options = input.required(...(ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []));
    addButton() {
        if (!this.data().components.buttons) {
            this.data().components.buttons = { type: 'BUTTONS', buttons: [] };
        }
        if ((this.data().components.buttons.buttons?.length ?? 0) >= 10)
            return;
        this.data().components.buttons.buttons.push({ type: 'QUICK_REPLY', text: '' });
    }
    removeButton(index) {
        const length = this.data().components.buttons?.buttons?.length ?? 0;
        if (!length || index < 0 || index >= length)
            return;
        this.data().components.buttons?.buttons.splice(index, 1);
    }
    isUrlButtonTypeDisabled(index) {
        const buttons = this.data().components.buttons?.buttons;
        ;
        if (!buttons)
            return false;
        return !!buttons.find((b, i) => i !== index && b.type === 'URL');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: BodyPart, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: BodyPart, isStandalone: true, selector: "template-body", inputs: { data: { classPropertyName: "data", publicName: "data", isSignal: true, isRequired: true, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: "<div class=\"input\">\n    <label for=\"template_title\" translate>TEMPLATE_EDITOR.TEMPLATE.HEADER</label>\n    <input type=\"text\" name=\"template_title\" id=\"template_title\" \n        [ngModel]=\"data().components.header?.text ?? ''\" (ngModelChange)=\"(data().components.header ??= {type: 'HEADER', text: ''} ).text  = $event\"\n        [placeholder]=\"'TEMPLATE_EDITOR.TEMPLATE.HEADER_PLACEHOLDER'| translate\" [maxlength]=\"60\" [placeholderInsert]=\"options()\" required/>\n</div><div class=\"input\">\n    <label for=\"template_body\" translate>TEMPLATE_EDITOR.TEMPLATE.BODY</label>\n    <textarea name=\"template_body\" id=\"template_body\" \n        [ngModel]=\"data().components.body?.text ?? ''\" (ngModelChange)=\"(data().components.body ??= {type: 'BODY', text: ''} ).text  = $event\"\n        [placeholder]=\"'TEMPLATE_EDITOR.TEMPLATE.BODY_PLACEHOLDER'| translate\" [maxlength]=\"1024\" [placeholderInsert]=\"options()\" required></textarea>\n</div>\n<div class=\"input\">\n    <label for=\"template_footer\" translate>TEMPLATE_EDITOR.TEMPLATE.FOOTER</label>\n    <input type=\"text\" name=\"template_footer\" id=\"template_footer\"\n        [ngModel]=\"data().components.footer?.text ?? ''\" (ngModelChange)=\"(data().components.footer ??= {type: 'FOOTER', text: ''} ).text  = $event\"\n        [placeholder]=\"'TEMPLATE_EDITOR.TEMPLATE.FOOTER_PLACEHOLDER'| translate\" [maxlength]=\"60\"/>\n</div>\n@if(data().components.buttons?.buttons?.length) {\n<div class=\"buttons\">\n        @for(button of data().components.buttons?.buttons ?? []; track button; let index = $index) {\n            @let isUrlDisabled = isUrlButtonTypeDisabled(index);\n            <div class=\"button\" [ngClass]=\"button.type.toLowerCase()\"  [tooltip]=\"'TEMPLATE_EDITOR.BUTTONS.URL_TOOLTIP' | translate\" [tooltipDisabled]=\"button.type !== 'URL'\">\n                <div class=\"type\">\n                    <label [for]=\"'type_select_' + index\" translate>TEMPLATE_EDITOR.BUTTON.TYPE</label>\n                    <select [id]=\"'type_select_' + index\" [(ngModel)]=\"button.type\">\n                        <option value=\"QUICK_REPLY\" translate>BUTTON.TYPE.QUICK_REPLY</option>\n                        <option value=\"COPY_CODE\" translate>BUTTON.TYPE.COPY_CODE</option>\n                        <option value=\"PHONE_NUMBER\" translate>BUTTON.TYPE.PHONE_NUMBER</option>\n                        <option value=\"URL\" [disabled]=\"isUrlDisabled\" translate>BUTTON.TYPE.URL</option>\n                    </select>\n                </div>\n                <div class=\"text\">\n                    @if (button.type === 'QUICK_REPLY') {\n                        <div class=\"input\">\n                            <label [for]=\"'button_text_' + index\" translate>TEMPLATE_EDITOR.BUTTON.TEXT</label>\n                            <input type=\"text\" name=\"button_text\" [id]=\"'button_text_' + index\" [(ngModel)]=\"button.text\" [maxlength]=\"25\" required/>\n                        </div>\n                    } @else if (button.type === 'COPY_CODE') {\n                        <div class=\"input\">\n                            <label [for]=\"'button_code_' + index\" translate>TEMPLATE_EDITOR.BUTTON.COPY_CODE</label>\n                            <input type=\"text\" [name]=\"'button_code_' + index\" [id]=\"'button_code_' + index\" [(ngModel)]=\"button.example\" [maxlength]=\"20\" required/>\n                        </div>\n                    } @else if (button.type === 'PHONE_NUMBER') {\n                        <div class=\"input\">\n                            <label [for]=\"'button_text_' + index\" translate>TEMPLATE_EDITOR.BUTTON.TEXT</label>\n                            <input type=\"text\" name=\"button_text\" [id]=\"'button_text_' + index\" [(ngModel)]=\"button.text\" [maxlength]=\"25\" required/>\n                        </div>\n                        <div class=\"input\">\n                            <label [for]=\"'button_phone_number_' + index\" translate>TEMPLATE_EDITOR.BUTTON.PHONE_NUMBER</label>\n                            <input type=\"text\" [name]=\"'button_phone_number_' + index\" [id]=\"'button_phone_number_' + index\" [(ngModel)]=\"button.phone_number\" [maxlength]=\"20\" required/>\n                        </div>\n                    } @else if (button.type === 'URL') {\n                        <div class=\"input\">\n                            <label [for]=\"'button_text_' + index\" translate>TEMPLATE_EDITOR.BUTTON.TEXT</label>\n                            <input type=\"text\" name=\"button_text\" [id]=\"'button_text_' + index\" [(ngModel)]=\"button.example\" [maxlength]=\"25\" required/>\n                        </div>\n                        <div class=\"input\">\n                            <label [for]=\"'button_url_' + index\" translate>TEMPLATE_EDITOR.BUTTON.URL</label>\n                            <input type=\"text\" [name]=\"'button_url_' + index\" [id]=\"'button_url_' + index\" [(ngModel)]=\"button.url\" required/>\n                        </div>\n                    }\n                </div>\n                <clear-icon (click)=\"removeButton(index)\"></clear-icon>\n            </div>\n        }\n    </div>\n}\n<button class=\"add-button\" (click)=\"addButton()\" [tooltip]=\"'TEMPLATE_EDITOR.BUTTONS.ADD_TOOLTIP' | translate\" translate>TEMPLATE_EDITOR.BUTTON.ADD_BUTTON</button>", styles: [".row{display:flex;gap:1rem;align-items:center}.column{display:grid;gap:.5rem;grid-template-rows:repeat(auto-fit,minmax(40px,auto))}.chip{padding:var(--vierkant-template-editor-chip-padding, .25rem .5rem);background:var(--vierkant-template-editor-chip-background, var(--background-accent));border-radius:var(--vierkant-template-editor-chip-border-radius, 9999px);font-size:var(--vierkant-template-editor-chip-font-size, .875rem);font-weight:500;color:var(--vierkant-template-editor-chip-color, #000);-webkit-user-select:none;user-select:none}.chip.success{background:var(--vierkant-template-editor-chip-success-background, var(--background-success))}.chip.warning{background:var(--vierkant-template-editor-chip-warning-background, var(--background-warning))}.chip.error{background:var(--vierkant-template-editor-chip-error-background, var(--background-error))}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: TranslateDirective, selector: "[translate],[ngx-translate]", inputs: ["translate", "translateParams"] }, { kind: "directive", type: MaxLengthDirective, selector: "[maxlength]" }, { kind: "directive", type: PlaceholderInsertPopover, selector: "[placeholderInsert]", inputs: ["placeholderInsert"] }, { kind: "component", type: ClearIcon, selector: "clear-icon" }, { kind: "directive", type: TooltipDirective, selector: "[tooltip]", inputs: ["tooltip", "tooltipDisabled"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: BodyPart, decorators: [{
            type: Component,
            args: [{ selector: 'template-body', imports: [CommonModule, FormsModule, TranslateDirective, TranslatePipe, MaxLengthDirective, PlaceholderInsertPopover, ClearIcon, TooltipDirective], template: "<div class=\"input\">\n    <label for=\"template_title\" translate>TEMPLATE_EDITOR.TEMPLATE.HEADER</label>\n    <input type=\"text\" name=\"template_title\" id=\"template_title\" \n        [ngModel]=\"data().components.header?.text ?? ''\" (ngModelChange)=\"(data().components.header ??= {type: 'HEADER', text: ''} ).text  = $event\"\n        [placeholder]=\"'TEMPLATE_EDITOR.TEMPLATE.HEADER_PLACEHOLDER'| translate\" [maxlength]=\"60\" [placeholderInsert]=\"options()\" required/>\n</div><div class=\"input\">\n    <label for=\"template_body\" translate>TEMPLATE_EDITOR.TEMPLATE.BODY</label>\n    <textarea name=\"template_body\" id=\"template_body\" \n        [ngModel]=\"data().components.body?.text ?? ''\" (ngModelChange)=\"(data().components.body ??= {type: 'BODY', text: ''} ).text  = $event\"\n        [placeholder]=\"'TEMPLATE_EDITOR.TEMPLATE.BODY_PLACEHOLDER'| translate\" [maxlength]=\"1024\" [placeholderInsert]=\"options()\" required></textarea>\n</div>\n<div class=\"input\">\n    <label for=\"template_footer\" translate>TEMPLATE_EDITOR.TEMPLATE.FOOTER</label>\n    <input type=\"text\" name=\"template_footer\" id=\"template_footer\"\n        [ngModel]=\"data().components.footer?.text ?? ''\" (ngModelChange)=\"(data().components.footer ??= {type: 'FOOTER', text: ''} ).text  = $event\"\n        [placeholder]=\"'TEMPLATE_EDITOR.TEMPLATE.FOOTER_PLACEHOLDER'| translate\" [maxlength]=\"60\"/>\n</div>\n@if(data().components.buttons?.buttons?.length) {\n<div class=\"buttons\">\n        @for(button of data().components.buttons?.buttons ?? []; track button; let index = $index) {\n            @let isUrlDisabled = isUrlButtonTypeDisabled(index);\n            <div class=\"button\" [ngClass]=\"button.type.toLowerCase()\"  [tooltip]=\"'TEMPLATE_EDITOR.BUTTONS.URL_TOOLTIP' | translate\" [tooltipDisabled]=\"button.type !== 'URL'\">\n                <div class=\"type\">\n                    <label [for]=\"'type_select_' + index\" translate>TEMPLATE_EDITOR.BUTTON.TYPE</label>\n                    <select [id]=\"'type_select_' + index\" [(ngModel)]=\"button.type\">\n                        <option value=\"QUICK_REPLY\" translate>BUTTON.TYPE.QUICK_REPLY</option>\n                        <option value=\"COPY_CODE\" translate>BUTTON.TYPE.COPY_CODE</option>\n                        <option value=\"PHONE_NUMBER\" translate>BUTTON.TYPE.PHONE_NUMBER</option>\n                        <option value=\"URL\" [disabled]=\"isUrlDisabled\" translate>BUTTON.TYPE.URL</option>\n                    </select>\n                </div>\n                <div class=\"text\">\n                    @if (button.type === 'QUICK_REPLY') {\n                        <div class=\"input\">\n                            <label [for]=\"'button_text_' + index\" translate>TEMPLATE_EDITOR.BUTTON.TEXT</label>\n                            <input type=\"text\" name=\"button_text\" [id]=\"'button_text_' + index\" [(ngModel)]=\"button.text\" [maxlength]=\"25\" required/>\n                        </div>\n                    } @else if (button.type === 'COPY_CODE') {\n                        <div class=\"input\">\n                            <label [for]=\"'button_code_' + index\" translate>TEMPLATE_EDITOR.BUTTON.COPY_CODE</label>\n                            <input type=\"text\" [name]=\"'button_code_' + index\" [id]=\"'button_code_' + index\" [(ngModel)]=\"button.example\" [maxlength]=\"20\" required/>\n                        </div>\n                    } @else if (button.type === 'PHONE_NUMBER') {\n                        <div class=\"input\">\n                            <label [for]=\"'button_text_' + index\" translate>TEMPLATE_EDITOR.BUTTON.TEXT</label>\n                            <input type=\"text\" name=\"button_text\" [id]=\"'button_text_' + index\" [(ngModel)]=\"button.text\" [maxlength]=\"25\" required/>\n                        </div>\n                        <div class=\"input\">\n                            <label [for]=\"'button_phone_number_' + index\" translate>TEMPLATE_EDITOR.BUTTON.PHONE_NUMBER</label>\n                            <input type=\"text\" [name]=\"'button_phone_number_' + index\" [id]=\"'button_phone_number_' + index\" [(ngModel)]=\"button.phone_number\" [maxlength]=\"20\" required/>\n                        </div>\n                    } @else if (button.type === 'URL') {\n                        <div class=\"input\">\n                            <label [for]=\"'button_text_' + index\" translate>TEMPLATE_EDITOR.BUTTON.TEXT</label>\n                            <input type=\"text\" name=\"button_text\" [id]=\"'button_text_' + index\" [(ngModel)]=\"button.example\" [maxlength]=\"25\" required/>\n                        </div>\n                        <div class=\"input\">\n                            <label [for]=\"'button_url_' + index\" translate>TEMPLATE_EDITOR.BUTTON.URL</label>\n                            <input type=\"text\" [name]=\"'button_url_' + index\" [id]=\"'button_url_' + index\" [(ngModel)]=\"button.url\" required/>\n                        </div>\n                    }\n                </div>\n                <clear-icon (click)=\"removeButton(index)\"></clear-icon>\n            </div>\n        }\n    </div>\n}\n<button class=\"add-button\" (click)=\"addButton()\" [tooltip]=\"'TEMPLATE_EDITOR.BUTTONS.ADD_TOOLTIP' | translate\" translate>TEMPLATE_EDITOR.BUTTON.ADD_BUTTON</button>", styles: [".row{display:flex;gap:1rem;align-items:center}.column{display:grid;gap:.5rem;grid-template-rows:repeat(auto-fit,minmax(40px,auto))}.chip{padding:var(--vierkant-template-editor-chip-padding, .25rem .5rem);background:var(--vierkant-template-editor-chip-background, var(--background-accent));border-radius:var(--vierkant-template-editor-chip-border-radius, 9999px);font-size:var(--vierkant-template-editor-chip-font-size, .875rem);font-weight:500;color:var(--vierkant-template-editor-chip-color, #000);-webkit-user-select:none;user-select:none}.chip.success{background:var(--vierkant-template-editor-chip-success-background, var(--background-success))}.chip.warning{background:var(--vierkant-template-editor-chip-warning-background, var(--background-warning))}.chip.error{background:var(--vierkant-template-editor-chip-error-background, var(--background-error))}\n"] }]
        }], propDecorators: { data: [{ type: i0.Input, args: [{ isSignal: true, alias: "data", required: true }] }], options: [{ type: i0.Input, args: [{ isSignal: true, alias: "options", required: true }] }] } });

class FooterPart {
    data = input.required(...(ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []));
    onCancel = output({ alias: 'cancel' });
    onSave = output({ alias: 'save' });
    cancel($event) {
        this.onCancel.emit($event);
    }
    save($event) {
        this.onSave.emit($event);
    }
    get error() {
        const { category, language } = this.data();
        const { body, header, footer } = this.data().components;
        const error = [];
        if (body?.text?.trim().endsWith('}}')) {
            error.push("ERROR.BODY.ENDS_WITH_PLACEHOLDER");
        }
        if (header?.text?.trim().endsWith('}}')) {
            error.push("ERROR.HEADER.ENDS_WITH_PLACEHOLDER");
        }
        if (footer?.text?.trim().endsWith('}}')) {
            error.push("ERROR.FOOTER.ENDS_WITH_PLACEHOLDER");
        }
        return error.length ? error : null;
    }
    get isInvalid() {
        if (this.error?.length)
            return true;
        const { category, language } = this.data();
        if (category == null || category.trim() === '')
            return true;
        if (language == null || language.trim() === '')
            return true;
        const { body, buttons } = this.data().components;
        if (!body || body.text == null || body.text.trim() === '')
            return true;
        if (this.data().name == null || this.data().name.trim() === '')
            return true;
        if ((buttons?.buttons ?? []).length > 10)
            return true;
        if (buttons?.buttons.find(x => {
            if (x.type === 'QUICK_REPLY')
                return x.text?.trim().length === 0;
            if (x.type === 'URL')
                return x.example?.trim().length === 0 || x.url?.trim().length === 0;
            if (x.type === 'PHONE_NUMBER')
                return x.text?.trim().length === 0 || x.phone_number?.trim().length === 0;
            if (x.type === 'COPY_CODE')
                return x.example?.trim().length === 0;
            return false;
        }))
            return true;
        if ((buttons?.buttons ?? []).filter(x => x.type === 'URL').length > 1)
            return true;
        return false;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: FooterPart, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: FooterPart, isStandalone: true, selector: "template-footer", inputs: { data: { classPropertyName: "data", publicName: "data", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { onCancel: "cancel", onSave: "save" }, ngImport: i0, template: "<div class=\"column\">\n    @if (error?.length) {\n    <div class=\"notification error\">\n        @for (err of error; track err) {\n        <div translate>{{ err }}</div>\n        }\n    </div>\n    }\n    \n    <div class=\"row\">\n        <button type=\"button\" (click)=\"cancel($event)\" class=\"button-cancel\" translate>TEMPLATE_EDITOR.BUTTONS.CANCEL</button>\n        <button type=\"submit\" (click)=\"save($event)\" class=\"button-confirm\" [disabled]=\"isInvalid\" translate>TEMPLATE_EDITOR.BUTTONS.SAVE</button>\n    </div>\n</div>", styles: [".row{display:flex;gap:1rem;align-items:center}.column{display:grid;gap:.5rem;grid-template-rows:repeat(auto-fit,minmax(40px,auto))}.chip{padding:var(--vierkant-template-editor-chip-padding, .25rem .5rem);background:var(--vierkant-template-editor-chip-background, var(--background-accent));border-radius:var(--vierkant-template-editor-chip-border-radius, 9999px);font-size:var(--vierkant-template-editor-chip-font-size, .875rem);font-weight:500;color:var(--vierkant-template-editor-chip-color, #000);-webkit-user-select:none;user-select:none}.chip.success{background:var(--vierkant-template-editor-chip-success-background, var(--background-success))}.chip.warning{background:var(--vierkant-template-editor-chip-warning-background, var(--background-warning))}.chip.error{background:var(--vierkant-template-editor-chip-error-background, var(--background-error))}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: TranslateDirective, selector: "[translate],[ngx-translate]", inputs: ["translate", "translateParams"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: FooterPart, decorators: [{
            type: Component,
            args: [{ selector: 'template-footer', imports: [CommonModule, FormsModule, TranslateDirective], template: "<div class=\"column\">\n    @if (error?.length) {\n    <div class=\"notification error\">\n        @for (err of error; track err) {\n        <div translate>{{ err }}</div>\n        }\n    </div>\n    }\n    \n    <div class=\"row\">\n        <button type=\"button\" (click)=\"cancel($event)\" class=\"button-cancel\" translate>TEMPLATE_EDITOR.BUTTONS.CANCEL</button>\n        <button type=\"submit\" (click)=\"save($event)\" class=\"button-confirm\" [disabled]=\"isInvalid\" translate>TEMPLATE_EDITOR.BUTTONS.SAVE</button>\n    </div>\n</div>", styles: [".row{display:flex;gap:1rem;align-items:center}.column{display:grid;gap:.5rem;grid-template-rows:repeat(auto-fit,minmax(40px,auto))}.chip{padding:var(--vierkant-template-editor-chip-padding, .25rem .5rem);background:var(--vierkant-template-editor-chip-background, var(--background-accent));border-radius:var(--vierkant-template-editor-chip-border-radius, 9999px);font-size:var(--vierkant-template-editor-chip-font-size, .875rem);font-weight:500;color:var(--vierkant-template-editor-chip-color, #000);-webkit-user-select:none;user-select:none}.chip.success{background:var(--vierkant-template-editor-chip-success-background, var(--background-success))}.chip.warning{background:var(--vierkant-template-editor-chip-warning-background, var(--background-warning))}.chip.error{background:var(--vierkant-template-editor-chip-error-background, var(--background-error))}\n"] }]
        }], propDecorators: { data: [{ type: i0.Input, args: [{ isSignal: true, alias: "data", required: true }] }], onCancel: [{ type: i0.Output, args: ["cancel"] }], onSave: [{ type: i0.Output, args: ["save"] }] } });

class PreviewComponent {
    data = input.required(...(ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []));
    options = input.required(...(ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []));
    get header() {
        return this.replacePlaceholders(this.data().components.header?.text ?? '');
    }
    get body() {
        return this.replacePlaceholders(this.data().components.body?.text ?? '', 'TEMPLATE_EDITOR.PREVIEW.DEFAULT_BODY');
    }
    get buttons() {
        return this.data().components.buttons?.buttons ?? [];
    }
    get footer() {
        return this.data().components.footer?.text ?? '';
    }
    replacePlaceholders(text, fallback) {
        if (!text && fallback) {
            text = fallback;
        }
        let result = text ?? '';
        this.options().forEach(option => {
            const regex = new RegExp(`{{\\s*${option.value}\\s*}}`, 'g');
            result = result.replace(regex, option.example || option.label);
        });
        return result;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: PreviewComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: PreviewComponent, isStandalone: true, selector: "template-preview", inputs: { data: { classPropertyName: "data", publicName: "data", isSignal: true, isRequired: true, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: "<div class=\"message\">\n    <div class=\"content\">\n        <div class=\"header\">\n            {{header | translate}}\n        </div>\n        <div class=\"body\">{{body | translate}}</div>\n        <div class=\"footer\">\n            {{footer | translate}}\n        </div>\n        <time>13:20</time>\n    </div>\n    <div class=\"buttons\" translate>\n        @if (buttons.length > 3) {\n        @let buttonsToShow = buttons.slice(0, 2);\n        @let overflowButtons = buttons.slice(2, buttons.length);\n        @for(button of buttonsToShow; track button; let index = $index) {\n        <ng-container *ngTemplateOutlet=\"buttonTpl; context: {$implicit: button}\"></ng-container>\n        }\n        @if (overflowButtons.length > 0) {\n        <div class=\"button overflow\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->\n                <path\n                    d=\"M104 112C90.7 112 80 122.7 80 136L80 184C80 197.3 90.7 208 104 208L152 208C165.3 208 176 197.3 176 184L176 136C176 122.7 165.3 112 152 112L104 112zM256 128C238.3 128 224 142.3 224 160C224 177.7 238.3 192 256 192L544 192C561.7 192 576 177.7 576 160C576 142.3 561.7 128 544 128L256 128zM256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L256 288zM256 448C238.3 448 224 462.3 224 480C224 497.7 238.3 512 256 512L544 512C561.7 512 576 497.7 576 480C576 462.3 561.7 448 544 448L256 448zM80 296L80 344C80 357.3 90.7 368 104 368L152 368C165.3 368 176 357.3 176 344L176 296C176 282.7 165.3 272 152 272L104 272C90.7 272 80 282.7 80 296zM104 432C90.7 432 80 442.7 80 456L80 504C80 517.3 90.7 528 104 528L152 528C165.3 528 176 517.3 176 504L176 456C176 442.7 165.3 432 152 432L104 432z\" />\n            </svg>\n            <span translate>TEMPLATE_EDITOR.BUTTON.ALL_OPTIONS</span>\n        </div>\n        }\n        } @else {\n        @let buttonsToShow = buttons.slice(0, 3);\n        @for(button of buttonsToShow; track button; let index = $index) {\n        <ng-container *ngTemplateOutlet=\"buttonTpl; context: {$implicit: button}\"></ng-container>\n\n        }\n        }\n    </div>\n</div>\n\n<ng-template #buttonTpl let-button>\n    <div class=\"button\">\n    @switch (button.type) {\n        @case ('QUICK_REPLY') {\n            <ng-container *ngTemplateOutlet=\"replyButtonTpl; context: {$implicit: button}\"></ng-container>\n        }\n        @case ('URL') {\n            <ng-container *ngTemplateOutlet=\"websiteButtonTpl; context: {$implicit: button}\"></ng-container>\n        }\n        @case ('PHONE_NUMBER') {\n            <ng-container *ngTemplateOutlet=\"callButtonTpl; context: {$implicit: button}\"></ng-container>\n        }\n        @case ('COPY_CODE') {\n            <ng-container *ngTemplateOutlet=\"codeButtonTpl; context: {$implicit: button}\"></ng-container>\n        }\n    }\n    </div>\n</ng-template>\n<ng-template #replyButtonTpl let-button>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" style=\"transform: scaleX(-1);\"\n        viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->\n        <path\n            d=\"M371.8 82.4C359.8 87.4 352 99 352 112L352 192L240 192C142.8 192 64 270.8 64 368C64 481.3 145.5 531.9 164.2 542.1C166.7 543.5 169.5 544 172.3 544C183.2 544 192 535.1 192 524.3C192 516.8 187.7 509.9 182.2 504.8C172.8 496 160 478.4 160 448.1C160 395.1 203 352.1 256 352.1L352 352.1L352 432.1C352 445 359.8 456.7 371.8 461.7C383.8 466.7 397.5 463.9 406.7 454.8L566.7 294.8C579.2 282.3 579.2 262 566.7 249.5L406.7 89.5C397.5 80.3 383.8 77.6 371.8 82.6z\" />\n    </svg>\n    <span>{{button.text || 'TEMPLATE_EDITOR.BUTTON.TEXT' | translate}}</span>\n</ng-template>\n<ng-template #websiteButtonTpl let-button>\n    <svg xmlns=\"http://www.w3.org/2000/svg\"\n        viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->\n        <path\n            d=\"M416.5 88L416.5 160L352.5 160C273 160 208.5 224.5 208.5 304C208.5 397.4 291.3 438.8 309.1 446.6C311.3 447.6 313.7 448 316.2 448L318.7 448C328.5 448 336.5 440 336.5 430.2C336.5 421.9 330.6 414.7 323.7 409.9C314.8 403.7 304.5 391.7 304.5 369.4C304.5 324.4 341 287.9 386 287.9L416.5 287.9L416.5 359.9C416.5 369.6 422.3 378.4 431.3 382.1C440.3 385.8 450.6 383.8 457.5 376.9L593.5 240.9C602.9 231.5 602.9 216.3 593.5 207L457.5 71C450.6 64.1 440.3 62.1 431.3 65.8C422.3 69.5 416.5 78.3 416.5 88zM144.5 160C100.3 160 64.5 195.8 64.5 240L64.5 496C64.5 540.2 100.3 576 144.5 576L400.5 576C444.7 576 480.5 540.2 480.5 496L480.5 464C480.5 446.3 466.2 432 448.5 432C430.8 432 416.5 446.3 416.5 464L416.5 496C416.5 504.8 409.3 512 400.5 512L144.5 512C135.7 512 128.5 504.8 128.5 496L128.5 240C128.5 231.2 135.7 224 144.5 224L160.5 224C178.2 224 192.5 209.7 192.5 192C192.5 174.3 178.2 160 160.5 160L144.5 160z\" />\n    </svg>\n    <span>{{button.example || 'TEMPLATE_EDITOR.BUTTON.URL' | translate}}</span>\n</ng-template>\n<ng-template #callButtonTpl let-button>\n    <svg xmlns=\"http://www.w3.org/2000/svg\"\n        viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->\n        <path\n            d=\"M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z\" />\n    </svg>\n    <span>{{button.text || 'TEMPLATE_EDITOR.BUTTON.PHONE_NUMBER' | translate}}</span>\n</ng-template>\n<ng-template #codeButtonTpl>\n    <svg xmlns=\"http://www.w3.org/2000/svg\"\n        viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->\n        <path\n            d=\"M480 400L288 400C279.2 400 272 392.8 272 384L272 128C272 119.2 279.2 112 288 112L421.5 112C425.7 112 429.8 113.7 432.8 116.7L491.3 175.2C494.3 178.2 496 182.3 496 186.5L496 384C496 392.8 488.8 400 480 400zM288 448L480 448C515.3 448 544 419.3 544 384L544 186.5C544 169.5 537.3 153.2 525.3 141.2L466.7 82.7C454.7 70.7 438.5 64 421.5 64L288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L368 496L368 512C368 520.8 360.8 528 352 528L160 528C151.2 528 144 520.8 144 512L144 256C144 247.2 151.2 240 160 240L176 240L176 192L160 192z\" />\n    </svg>\n    <span>{{'TEMPLATE_EDITOR.BUTTON.COPY_CODE' | translate}}</span>\n</ng-template>", styles: [".row{display:flex;gap:1rem;align-items:center}.column{display:grid;gap:.5rem;grid-template-rows:repeat(auto-fit,minmax(40px,auto))}.chip{padding:var(--vierkant-template-editor-chip-padding, .25rem .5rem);background:var(--vierkant-template-editor-chip-background, var(--background-accent));border-radius:var(--vierkant-template-editor-chip-border-radius, 9999px);font-size:var(--vierkant-template-editor-chip-font-size, .875rem);font-weight:500;color:var(--vierkant-template-editor-chip-color, #000);-webkit-user-select:none;user-select:none}.chip.success{background:var(--vierkant-template-editor-chip-success-background, var(--background-success))}.chip.warning{background:var(--vierkant-template-editor-chip-warning-background, var(--background-warning))}.chip.error{background:var(--vierkant-template-editor-chip-error-background, var(--background-error))}\n", ".body{white-space-collapse:preserve}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: TranslateDirective, selector: "[translate],[ngx-translate]", inputs: ["translate", "translateParams"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: PreviewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'template-preview', imports: [CommonModule, FormsModule, TranslatePipe, TranslateDirective], template: "<div class=\"message\">\n    <div class=\"content\">\n        <div class=\"header\">\n            {{header | translate}}\n        </div>\n        <div class=\"body\">{{body | translate}}</div>\n        <div class=\"footer\">\n            {{footer | translate}}\n        </div>\n        <time>13:20</time>\n    </div>\n    <div class=\"buttons\" translate>\n        @if (buttons.length > 3) {\n        @let buttonsToShow = buttons.slice(0, 2);\n        @let overflowButtons = buttons.slice(2, buttons.length);\n        @for(button of buttonsToShow; track button; let index = $index) {\n        <ng-container *ngTemplateOutlet=\"buttonTpl; context: {$implicit: button}\"></ng-container>\n        }\n        @if (overflowButtons.length > 0) {\n        <div class=\"button overflow\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->\n                <path\n                    d=\"M104 112C90.7 112 80 122.7 80 136L80 184C80 197.3 90.7 208 104 208L152 208C165.3 208 176 197.3 176 184L176 136C176 122.7 165.3 112 152 112L104 112zM256 128C238.3 128 224 142.3 224 160C224 177.7 238.3 192 256 192L544 192C561.7 192 576 177.7 576 160C576 142.3 561.7 128 544 128L256 128zM256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L256 288zM256 448C238.3 448 224 462.3 224 480C224 497.7 238.3 512 256 512L544 512C561.7 512 576 497.7 576 480C576 462.3 561.7 448 544 448L256 448zM80 296L80 344C80 357.3 90.7 368 104 368L152 368C165.3 368 176 357.3 176 344L176 296C176 282.7 165.3 272 152 272L104 272C90.7 272 80 282.7 80 296zM104 432C90.7 432 80 442.7 80 456L80 504C80 517.3 90.7 528 104 528L152 528C165.3 528 176 517.3 176 504L176 456C176 442.7 165.3 432 152 432L104 432z\" />\n            </svg>\n            <span translate>TEMPLATE_EDITOR.BUTTON.ALL_OPTIONS</span>\n        </div>\n        }\n        } @else {\n        @let buttonsToShow = buttons.slice(0, 3);\n        @for(button of buttonsToShow; track button; let index = $index) {\n        <ng-container *ngTemplateOutlet=\"buttonTpl; context: {$implicit: button}\"></ng-container>\n\n        }\n        }\n    </div>\n</div>\n\n<ng-template #buttonTpl let-button>\n    <div class=\"button\">\n    @switch (button.type) {\n        @case ('QUICK_REPLY') {\n            <ng-container *ngTemplateOutlet=\"replyButtonTpl; context: {$implicit: button}\"></ng-container>\n        }\n        @case ('URL') {\n            <ng-container *ngTemplateOutlet=\"websiteButtonTpl; context: {$implicit: button}\"></ng-container>\n        }\n        @case ('PHONE_NUMBER') {\n            <ng-container *ngTemplateOutlet=\"callButtonTpl; context: {$implicit: button}\"></ng-container>\n        }\n        @case ('COPY_CODE') {\n            <ng-container *ngTemplateOutlet=\"codeButtonTpl; context: {$implicit: button}\"></ng-container>\n        }\n    }\n    </div>\n</ng-template>\n<ng-template #replyButtonTpl let-button>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" style=\"transform: scaleX(-1);\"\n        viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->\n        <path\n            d=\"M371.8 82.4C359.8 87.4 352 99 352 112L352 192L240 192C142.8 192 64 270.8 64 368C64 481.3 145.5 531.9 164.2 542.1C166.7 543.5 169.5 544 172.3 544C183.2 544 192 535.1 192 524.3C192 516.8 187.7 509.9 182.2 504.8C172.8 496 160 478.4 160 448.1C160 395.1 203 352.1 256 352.1L352 352.1L352 432.1C352 445 359.8 456.7 371.8 461.7C383.8 466.7 397.5 463.9 406.7 454.8L566.7 294.8C579.2 282.3 579.2 262 566.7 249.5L406.7 89.5C397.5 80.3 383.8 77.6 371.8 82.6z\" />\n    </svg>\n    <span>{{button.text || 'TEMPLATE_EDITOR.BUTTON.TEXT' | translate}}</span>\n</ng-template>\n<ng-template #websiteButtonTpl let-button>\n    <svg xmlns=\"http://www.w3.org/2000/svg\"\n        viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->\n        <path\n            d=\"M416.5 88L416.5 160L352.5 160C273 160 208.5 224.5 208.5 304C208.5 397.4 291.3 438.8 309.1 446.6C311.3 447.6 313.7 448 316.2 448L318.7 448C328.5 448 336.5 440 336.5 430.2C336.5 421.9 330.6 414.7 323.7 409.9C314.8 403.7 304.5 391.7 304.5 369.4C304.5 324.4 341 287.9 386 287.9L416.5 287.9L416.5 359.9C416.5 369.6 422.3 378.4 431.3 382.1C440.3 385.8 450.6 383.8 457.5 376.9L593.5 240.9C602.9 231.5 602.9 216.3 593.5 207L457.5 71C450.6 64.1 440.3 62.1 431.3 65.8C422.3 69.5 416.5 78.3 416.5 88zM144.5 160C100.3 160 64.5 195.8 64.5 240L64.5 496C64.5 540.2 100.3 576 144.5 576L400.5 576C444.7 576 480.5 540.2 480.5 496L480.5 464C480.5 446.3 466.2 432 448.5 432C430.8 432 416.5 446.3 416.5 464L416.5 496C416.5 504.8 409.3 512 400.5 512L144.5 512C135.7 512 128.5 504.8 128.5 496L128.5 240C128.5 231.2 135.7 224 144.5 224L160.5 224C178.2 224 192.5 209.7 192.5 192C192.5 174.3 178.2 160 160.5 160L144.5 160z\" />\n    </svg>\n    <span>{{button.example || 'TEMPLATE_EDITOR.BUTTON.URL' | translate}}</span>\n</ng-template>\n<ng-template #callButtonTpl let-button>\n    <svg xmlns=\"http://www.w3.org/2000/svg\"\n        viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->\n        <path\n            d=\"M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z\" />\n    </svg>\n    <span>{{button.text || 'TEMPLATE_EDITOR.BUTTON.PHONE_NUMBER' | translate}}</span>\n</ng-template>\n<ng-template #codeButtonTpl>\n    <svg xmlns=\"http://www.w3.org/2000/svg\"\n        viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->\n        <path\n            d=\"M480 400L288 400C279.2 400 272 392.8 272 384L272 128C272 119.2 279.2 112 288 112L421.5 112C425.7 112 429.8 113.7 432.8 116.7L491.3 175.2C494.3 178.2 496 182.3 496 186.5L496 384C496 392.8 488.8 400 480 400zM288 448L480 448C515.3 448 544 419.3 544 384L544 186.5C544 169.5 537.3 153.2 525.3 141.2L466.7 82.7C454.7 70.7 438.5 64 421.5 64L288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L368 496L368 512C368 520.8 360.8 528 352 528L160 528C151.2 528 144 520.8 144 512L144 256C144 247.2 151.2 240 160 240L176 240L176 192L160 192z\" />\n    </svg>\n    <span>{{'TEMPLATE_EDITOR.BUTTON.COPY_CODE' | translate}}</span>\n</ng-template>", styles: [".row{display:flex;gap:1rem;align-items:center}.column{display:grid;gap:.5rem;grid-template-rows:repeat(auto-fit,minmax(40px,auto))}.chip{padding:var(--vierkant-template-editor-chip-padding, .25rem .5rem);background:var(--vierkant-template-editor-chip-background, var(--background-accent));border-radius:var(--vierkant-template-editor-chip-border-radius, 9999px);font-size:var(--vierkant-template-editor-chip-font-size, .875rem);font-weight:500;color:var(--vierkant-template-editor-chip-color, #000);-webkit-user-select:none;user-select:none}.chip.success{background:var(--vierkant-template-editor-chip-success-background, var(--background-success))}.chip.warning{background:var(--vierkant-template-editor-chip-warning-background, var(--background-warning))}.chip.error{background:var(--vierkant-template-editor-chip-error-background, var(--background-error))}\n", ".body{white-space-collapse:preserve}\n"] }]
        }], propDecorators: { data: [{ type: i0.Input, args: [{ isSignal: true, alias: "data", required: true }] }], options: [{ type: i0.Input, args: [{ isSignal: true, alias: "options", required: true }] }] } });

const DEFAULT_DATA = {
    id: '',
    name: '',
    category: '',
    language: '',
    components: {
        header: { type: 'HEADER' },
        body: { type: 'BODY' },
        footer: { type: 'FOOTER' },
        buttons: { type: 'BUTTONS', buttons: [] },
    },
};
const DEFAULT_OPTIONS = sortBy([
    { label: 'First Name', value: 'first', example: 'Tom' },
    { label: 'Last Name', value: 'last', example: 'Tomson' },
    { label: 'Email', value: 'email', example: 'tom.tomson@vierkant-software.eu' },
], x => x.label.toLowerCase());
class TemplateEditor extends BaseComponent {
    static selector = 'vierkant-template-editor';
    data = model(structuredClone(DEFAULT_DATA), ...(ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []));
    options = input(DEFAULT_OPTIONS, { ...(ngDevMode ? { debugName: "options" } : /* istanbul ignore next */ {}), transform: (val) => sortBy(val, x => x.label.toLowerCase()) });
    onSave = output({ alias: 'save' });
    onReset = output({ alias: 'reset' });
    onDelete = output({ alias: 'delete' });
    loading = model(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    get _loading() { return this.loading(); }
    reset($event, emitEvent = true) {
        this.data.set(structuredClone(DEFAULT_DATA));
        if (emitEvent) {
            this.onReset.emit($event);
        }
    }
    save($event) {
        if (this.loading())
            return;
        const data = this.prepareSave(this.data());
        const result = { ...$event, data };
        this.onSave.emit(result);
        // this.reset($event, false);
    }
    prepareSave(inputData) {
        const data = structuredClone(inputData);
        // remove not savable fields
        delete data.quality;
        delete data.status;
        // ensure header format
        (data.components.header ??= { type: 'HEADER' }).format = "TEXT";
        // clear old examples
        (data.components.body.example ??= { body_text_named_params: [] }).body_text_named_params = [];
        (data.components.header.example ??= { header_text_named_params: [] }).header_text_named_params = [];
        // (data.components.footer!.example ??= {footer_text_named_params: []}).footer_text_named_params = [];
        delete data.components.footer?.example;
        // prepare variables
        new Set(data.components.body?.text?.match(/{{(.*?)}}/g) || []).forEach(v => {
            console.log('found body variable', v);
            const param_name = v.replace('{{', '').replace('}}', '').trim();
            const variable = this.options().find(variable => variable.value === param_name);
            if (!variable)
                return;
            data.components.body.example.body_text_named_params.push({
                example: variable.example ?? param_name,
                param_name,
            });
        });
        new Set(data.components.header?.text?.match(/{{(.*?)}}/g) || []).forEach(v => {
            console.log('found header variable', v);
            const param_name = v.replace('{{', '').replace('}}', '').trim();
            const variable = this.options().find(variable => variable.value === param_name);
            if (!variable)
                return;
            data.components.header.example.header_text_named_params.push({
                example: variable.example ?? param_name,
                param_name,
            });
        });
        // footer has no variables for now, as they are not supported by the API, but we keep the code here for future reference
        // new Set(data.components.footer?.text?.match(/{{(.*?)}}/g) || []).forEach(v => {
        //     console.log('found footer variable', v);
        //     const param_name = v.replace('{{', '').replace('}}', '').trim();
        //     const variable = this.options().find(variable => variable.value === param_name);
        //     if (!variable) return;
        //     data.components.footer!.example!.footer_text_named_params!.push({
        //         example: variable.example ?? param_name,
        //         param_name,
        //     });
        // });
        if (!data.components.footer?.text?.length)
            delete data.components.footer;
        if (!data.components.buttons?.buttons.length)
            delete data.components.buttons;
        return data;
    }
    delete($event) {
        const result = { ...$event, data: this.data() };
        this.onDelete.emit(result);
        this.reset($event, false);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: TemplateEditor, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: TemplateEditor, isStandalone: true, selector: "ng-component", inputs: { data: { classPropertyName: "data", publicName: "data", isSignal: true, isRequired: false, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: false, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { data: "dataChange", onSave: "save", onReset: "reset", onDelete: "delete", loading: "loadingChange" }, host: { properties: { "class.loading": "this._loading" } }, usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n    <div class=\"form\">\n        <template-header [data]=\"data()\" (delete)=\"delete($event)\"></template-header>\n        <template-body [data]=\"data()\" [options]=\"options()\"></template-body>\n        <template-footer [data]=\"data()\" (cancel)=\"reset($event)\" (save)=\"save($event)\" (delete)=\"delete($event)\"></template-footer>\n    </div>\n    <template-preview [data]=\"data()\" [options]=\"options()\"></template-preview>\n    @if(loading()) {\n    <div class=\"loading-overlay\">\n        <spinner-icon></spinner-icon>\n    </div>\n    }\n</div>\n\n", styles: ["vierkant-template-editor{--background-primary: #f5f5f5;--background-accent: #e0e7ff;--background-success: #d1fae5;--background-warning: #fef3c7;--background-error: #fee2e2;--background-info: #e0f2fe;--font-family: Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"}vierkant-template-editor.loading{position:relative;pointer-events:none}vierkant-template-editor.loading .loading-overlay{position:absolute;inset:0;background:#ffffffb3;display:flex;justify-content:center;align-items:center;z-index:99999}vierkant-template-editor{font-family:var(--vierkant-template-editor-font-family, var(--font-family));display:flex;gap:1rem;width:min-content;background:var(--vierkant-template-editor-background, var(--background-primary));padding:var(--vierkant-template-editor-padding, var(--vierkant-template-editor-padding-y, .5rem) var(--vierkant-template-editor-padding-x, .5rem));border:var(--vierkant-template-editor-border, solid #ddd);border-radius:var(--vierkant-template-editor-border-radius, .25rem);border-width:var(--vierkant-template-editor-border-width, 1px);overflow:hidden}vierkant-template-editor h1{margin:0;font-size:var(--vierkant-template-editor-heading-font-size, 1.5rem);font-weight:var(--vierkant-template-editor-heading-font-weight, 600);color:var(--vierkant-template-editor-heading-color, inherit)}vierkant-template-editor .form{display:flex;flex-direction:column;gap:.5rem;min-width:min-content;width:750px;padding:10px 0}vierkant-template-editor .input{display:grid;gap:.25rem}vierkant-template-editor .flex-1{flex:1}vierkant-template-editor label,vierkant-template-editor button{-webkit-user-select:none;user-select:none}vierkant-template-editor .button-delete{margin-left:auto}vierkant-template-editor .placeholder-popover{position:fixed;background-color:var(--vierkant-template-editor-popover-background, #fff);border:var(--vierkant-template-editor-popover-border, 1px solid #ccc);border-radius:var(--vierkant-template-editor-popover-border-radius, 4px);padding:var(--vierkant-template-editor-popover-padding, .5rem .75rem);box-shadow:var(--vierkant-template-editor-popover-box-shadow, 0 2px 8px rgba(0, 0, 0, .1));font-size:var(--vierkant-template-editor-popover-font-size, 12px);z-index:var(--vierkant-template-editor-popover-z-index, 1000)}vierkant-template-editor template-header{display:flex;flex-direction:column;gap:.5rem}vierkant-template-editor template-body{display:flex;flex-direction:column;gap:.5rem}vierkant-template-editor template-footer{display:flex;flex-direction:column;gap:.5rem}vierkant-template-editor template-body .buttons{display:grid;grid-template-columns:minmax(200px,min-content) 1fr auto;gap:.5rem;border:var(--vierkant-template-editor-border, 1px solid #ddd);border-radius:var(--vierkant-template-editor-border-radius, 4px);overflow:hidden}vierkant-template-editor template-body .buttons .title,vierkant-template-editor template-body .buttons .add-button{grid-column:1/-1}vierkant-template-editor template-body .buttons .button{display:grid;grid-template-columns:subgrid;grid-column:1/-1;align-items:end;padding:.5rem .25rem}vierkant-template-editor template-body .buttons .button select{width:100%}vierkant-template-editor template-body .buttons .button .text{display:grid;gap:.25rem;grid-template-columns:repeat(2,1fr)}vierkant-template-editor template-body .buttons .button:hover{background:var(--vierkant-template-editor-buttons-hover-background, #f0f0f0)}vierkant-template-editor template-body .buttons clear-icon{margin-bottom:.6rem}vierkant-template-editor template-preview{margin:-.5rem -.5rem -.5rem 0;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;background:#e5ddd5;width:100%;min-width:330px;max-width:500px;position:relative;display:flex;justify-content:center;align-items:center;border:var(--vierkant-template-editor-border, 1px solid #ddd);align-self:normal}vierkant-template-editor template-preview .message{position:relative;border-radius:0 7.5px 7.5px;box-shadow:0 1px .5px #00000026;background-color:#fff;max-width:280px;min-width:250px;margin:30px}vierkant-template-editor template-preview .message .content{position:relative}vierkant-template-editor template-preview .message .content .header{margin-top:4px;margin-left:8px;margin-right:8px;word-break:break-word;text-wrap-mode:wrap;white-space-collapse:collapse;font-weight:700;color:#1c2b33}vierkant-template-editor template-preview .message .content .body{font-size:13.6px;line-height:19px;padding:7px 7px 6px 9px;color:#262626}vierkant-template-editor template-preview .message .footer{color:#00000073;font-size:13px;line-height:17px;padding:0 7px 8px 9px}vierkant-template-editor template-preview .message .button{display:flex;justify-content:center;align-items:center;-webkit-user-select:none;user-select:none;border-top:1px solid #DADDE1;color:#00a5f4;fill:#00a5f4;column-gap:4px;font-size:14px;height:44px;line-height:20px;min-width:240px;white-space:pre-wrap}vierkant-template-editor template-preview .message .button svg{width:16px;height:16px}vierkant-template-editor template-preview .message time{position:absolute;color:#0006;bottom:3px;right:7px;font-size:11px;height:15px;line-height:15px}vierkant-template-editor template-preview .message:after{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAABE0lEQVR42u3UIWiEYBjG8e8OBhvekrjgyorIRcPiyeqScc22bDAMVma46JWL4vqBfcFqGcfhbAPbBhpuMmeZIIr3hcEbJ4MnzR889fuXj5cNZdu2EMfxfd/3z3w53wff/pd9soEmeZ6v+z9gQ0iSNKuq6h0W4E6KotgBAsT3/TtoQJZlMcuyLSBADMNYNE3zBQgQ13UtTIAcR1G0AQSIqqoXZVm+AgLENM3rruu+UYHJz9d9AASIKIqnSZI8AQJE07R5XddvgACxLOuGv9XCAtw0CIIVKECnJE3TCBAguq5ftm27BwSI4zi3mAA5CsPwkQIAiqKc89P+ggnQab/i7zcMyfO8JUMSBOGMgU3ZaDQa/QcH7bv0oNrfJdQAAAAASUVORK5CYII=) 50% 50% no-repeat;background-size:contain;content:\"\";height:31px;left:-12px;position:absolute;top:-6px;width:12px}vierkant-template-editor template-preview:before{background:url(data:image/png;base64,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);content:\"\";height:100%;left:0;opacity:.03;position:absolute;top:0;width:100%}vierkant-template-editor .notification{padding:var(--vierkant-template-editor-notification-padding, .5rem 1rem);border-radius:var(--vierkant-template-editor-notification-border-radius, .25rem);border:1px solid var(--vierkant-template-editor-notification-border-color, #ccc);background:var(--vierkant-template-editor-notification-background, #f0f0f0);font-size:var(--vierkant-template-editor-notification-font-size, .875rem);color:var(--vierkant-template-editor-notification-color, #000)}vierkant-template-editor .notification.success{--vierkant-template-editor-notification-background: var(--vierkant-template-editor-notification-success-background, var(--background-success));--vierkant-template-editor-notification-border-color: var(--vierkant-template-editor-notification-success-border-color, var(--vierkant-template-editor-notification-border-color))}vierkant-template-editor .notification.warning{--vierkant-template-editor-notification-background: var(--vierkant-template-editor-notification-warning-background, var(--background-warning));--vierkant-template-editor-notification-border-color: var(--vierkant-template-editor-notification-warning-border-color, var(--vierkant-template-editor-notification-border-color))}vierkant-template-editor .notification.error{--vierkant-template-editor-notification-background: var(--vierkant-template-editor-notification-error-background, var(--background-error));--vierkant-template-editor-notification-border-color: var(--vierkant-template-editor-notification-error-border-color, var(--vierkant-template-editor-notification-border-color))}.vierkant-template-editor.tooltip{--font-family: Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-family:var(--vierkant-template-editor-font-family, var(--font-family));position:fixed;display:inline-block;z-index:var(--vierkant-template-editor-tooltip-z-index, 1000);padding:var(--vierkant-template-editor-tooltip-padding, .5rem .75rem);margin:var(--vierkant-template-editor-tooltip-margin, .25rem);background:var(--vierkant-template-editor-tooltip-background, rgba(0, 0, 0, .75));color:var(--vierkant-template-editor-tooltip-color, #fff);border-radius:var(--vierkant-template-editor-tooltip-border-radius, 4px);max-width:200px}\n", "button{background:var(--vierkant-template-editor-button-background, #fff);border:var(--vierkant-template-editor-button-border, 1px solid #c9c9c9);color:var(--vierkant-template-editor-button-color, #000);fill:var(--vierkant-template-editor-button-color, #000);border-radius:var(--vierkant-template-editor-button-border-radius, 3px);padding:var(--vierkant-template-editor-button-padding, .5rem .75rem);opacity:var(--vierkant-template-editor-button-opacity, 1);cursor:var(--vierkant-template-editor-button-cursor, pointer);display:flex;align-items:center;justify-content:center;gap:.25rem}button:disabled{--vierkant-template-editor-button-cursor: var(--vierkant-template-editor-button-disabled-cursor, not-allowed);--vierkant-template-editor-button-opacity: var(--vierkant-template-editor-button-disabled-opacity, .65)}button:not(:disabled):hover{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-hover-background, #f0f0f0);--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-hover-color)}button:not(:disabled):active{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-active-background, rgba(0, 0, 0, .1));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-active-color, var(--vierkant-template-editor-button-color, #000))}button.button-cancel{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-cancel-background, rgb(211, 47, 47));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-cancel-border, 1px solid rgb(211, 47, 47));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-cancel-color, #fff);--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-cancel-active-background, rgb(185, 28, 28));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-cancel-active-color, #fff);--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-cancel-hover-background, rgb(185, 28, 28));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-cancel-hover-color, #fff);--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-cancel-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-cancel-disabled-opacity, .65)}button.button-confirm{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-confirm-background, rgb(76, 188, 134));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-confirm-border, 1px solid rgb(76, 188, 134));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-confirm-color, rgb(30, 41, 59));--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-confirm-active-background, rgb(56, 148, 104));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-confirm-active-color, rgb(30, 41, 59));--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-confirm-hover-background, rgb(56, 148, 104));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-confirm-hover-color, rgb(30, 41, 59));--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-confirm-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-confirm-disabled-opacity, .65)}button.button-error{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-error-background, rgb(248, 113, 113));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-error-border, 1px solid rgb(185, 28, 28));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-error-color, #000);--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-error-active-background, rgb(185, 28, 28));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-error-active-color, #000);--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-error-hover-background, rgb(185, 28, 28));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-error-hover-color, #000);--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-error-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-error-disabled-opacity, .65)}button.button-icon{--vierkant-template-editor-button-padding: var(--vierkant-template-editor-button-icon-padding, .5rem);line-height:0}\n", "input,textarea{font-feature-settings:inherit;font-size:var(--vierkant-template-editor-input-font-size, 1rem);color:var(--vierkant-template-editor-input-color, #0f172a);background:var(--vierkant-template-editor-input-background, #ffffff);padding-block:var(--vierkant-template-editor-input-padding-block, .5rem);padding-inline:var(--vierkant-template-editor-input-padding-inline, .75rem);border:var(--vierkant-template-editor-input-border, 1px solid #64748b);transition:background 0s,color 0s,border-color 0s,outline-color 0s,box-shadow 0s;appearance:none;border-radius:var(--vierkant-template-editor-input-border-radius, .25rem);outline-color:transparent;box-shadow:none}input:focus,textarea:focus{border-color:var(--vierkant-template-editor-input-focus-border-color, #64748b);box-shadow:none;outline:var(--vierkant-template-editor-input-focus-outline, .2rem solid #7cb6d3);outline-offset:0}input.ng-invalid,textarea.ng-invalid{border-color:var(--vierkant-template-editor-input-error-border-color, #dc2626)}input.ng-invalid:focus,textarea.ng-invalid:focus{outline:var(--vierkant-template-editor-input-error-focus-outline, .2rem solid #fca5a5)}textarea{min-height:10rem;resize:vertical}select{font-feature-settings:inherit;font-size:var(--vierkant-template-editor-input-font-size, 1rem);color:var(--vierkant-template-editor-input-color, #0f172a);background:var(--vierkant-template-editor-input-background, #ffffff);padding-block:var(--vierkant-template-editor-input-padding-block, .5rem);padding-inline:var(--vierkant-template-editor-input-padding-inline, .75rem);border:var(--vierkant-template-editor-input-border, 1px solid #64748b);transition:background 0s,color 0s,border-color 0s,outline-color 0s,box-shadow 0s;border-radius:var(--vierkant-template-editor-input-border-radius, .25rem);outline-color:transparent;box-shadow:none}select:focus{border-color:var(--vierkant-template-editor-input-focus-border-color, #64748b);box-shadow:none;outline:var(--vierkant-template-editor-input-focus-outline, .2rem solid #7cb6d3);outline-offset:0}select.ng-invalid{border-color:var(--vierkant-template-editor-input-error-border-color, #dc2626)}select.ng-invalid:focus{outline:var(--vierkant-template-editor-input-error-focus-outline, .2rem solid #fca5a5)}\n", ".row{display:flex;gap:1rem;align-items:center}.column{display:grid;gap:.5rem;grid-template-rows:repeat(auto-fit,minmax(40px,auto))}.chip{padding:var(--vierkant-template-editor-chip-padding, .25rem .5rem);background:var(--vierkant-template-editor-chip-background, var(--background-accent));border-radius:var(--vierkant-template-editor-chip-border-radius, 9999px);font-size:var(--vierkant-template-editor-chip-font-size, .875rem);font-weight:500;color:var(--vierkant-template-editor-chip-color, #000);-webkit-user-select:none;user-select:none}.chip.success{background:var(--vierkant-template-editor-chip-success-background, var(--background-success))}.chip.warning{background:var(--vierkant-template-editor-chip-warning-background, var(--background-warning))}.chip.error{background:var(--vierkant-template-editor-chip-error-background, var(--background-error))}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "component", type: HeaderPart, selector: "template-header", inputs: ["data"], outputs: ["delete"] }, { kind: "component", type: BodyPart, selector: "template-body", inputs: ["data", "options"] }, { kind: "component", type: FooterPart, selector: "template-footer", inputs: ["data"], outputs: ["cancel", "save"] }, { kind: "component", type: PreviewComponent, selector: "template-preview", inputs: ["data", "options"] }, { kind: "component", type: SpinnerIcon, selector: "spinner-icon" }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: TemplateEditor, decorators: [{
            type: Component,
            args: [{ encapsulation: ViewEncapsulation.None, imports: [CommonModule, HeaderPart, BodyPart, FooterPart, PreviewComponent, SpinnerIcon], template: "<div class=\"row\">\n    <div class=\"form\">\n        <template-header [data]=\"data()\" (delete)=\"delete($event)\"></template-header>\n        <template-body [data]=\"data()\" [options]=\"options()\"></template-body>\n        <template-footer [data]=\"data()\" (cancel)=\"reset($event)\" (save)=\"save($event)\" (delete)=\"delete($event)\"></template-footer>\n    </div>\n    <template-preview [data]=\"data()\" [options]=\"options()\"></template-preview>\n    @if(loading()) {\n    <div class=\"loading-overlay\">\n        <spinner-icon></spinner-icon>\n    </div>\n    }\n</div>\n\n", styles: ["vierkant-template-editor{--background-primary: #f5f5f5;--background-accent: #e0e7ff;--background-success: #d1fae5;--background-warning: #fef3c7;--background-error: #fee2e2;--background-info: #e0f2fe;--font-family: Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"}vierkant-template-editor.loading{position:relative;pointer-events:none}vierkant-template-editor.loading .loading-overlay{position:absolute;inset:0;background:#ffffffb3;display:flex;justify-content:center;align-items:center;z-index:99999}vierkant-template-editor{font-family:var(--vierkant-template-editor-font-family, var(--font-family));display:flex;gap:1rem;width:min-content;background:var(--vierkant-template-editor-background, var(--background-primary));padding:var(--vierkant-template-editor-padding, var(--vierkant-template-editor-padding-y, .5rem) var(--vierkant-template-editor-padding-x, .5rem));border:var(--vierkant-template-editor-border, solid #ddd);border-radius:var(--vierkant-template-editor-border-radius, .25rem);border-width:var(--vierkant-template-editor-border-width, 1px);overflow:hidden}vierkant-template-editor h1{margin:0;font-size:var(--vierkant-template-editor-heading-font-size, 1.5rem);font-weight:var(--vierkant-template-editor-heading-font-weight, 600);color:var(--vierkant-template-editor-heading-color, inherit)}vierkant-template-editor .form{display:flex;flex-direction:column;gap:.5rem;min-width:min-content;width:750px;padding:10px 0}vierkant-template-editor .input{display:grid;gap:.25rem}vierkant-template-editor .flex-1{flex:1}vierkant-template-editor label,vierkant-template-editor button{-webkit-user-select:none;user-select:none}vierkant-template-editor .button-delete{margin-left:auto}vierkant-template-editor .placeholder-popover{position:fixed;background-color:var(--vierkant-template-editor-popover-background, #fff);border:var(--vierkant-template-editor-popover-border, 1px solid #ccc);border-radius:var(--vierkant-template-editor-popover-border-radius, 4px);padding:var(--vierkant-template-editor-popover-padding, .5rem .75rem);box-shadow:var(--vierkant-template-editor-popover-box-shadow, 0 2px 8px rgba(0, 0, 0, .1));font-size:var(--vierkant-template-editor-popover-font-size, 12px);z-index:var(--vierkant-template-editor-popover-z-index, 1000)}vierkant-template-editor template-header{display:flex;flex-direction:column;gap:.5rem}vierkant-template-editor template-body{display:flex;flex-direction:column;gap:.5rem}vierkant-template-editor template-footer{display:flex;flex-direction:column;gap:.5rem}vierkant-template-editor template-body .buttons{display:grid;grid-template-columns:minmax(200px,min-content) 1fr auto;gap:.5rem;border:var(--vierkant-template-editor-border, 1px solid #ddd);border-radius:var(--vierkant-template-editor-border-radius, 4px);overflow:hidden}vierkant-template-editor template-body .buttons .title,vierkant-template-editor template-body .buttons .add-button{grid-column:1/-1}vierkant-template-editor template-body .buttons .button{display:grid;grid-template-columns:subgrid;grid-column:1/-1;align-items:end;padding:.5rem .25rem}vierkant-template-editor template-body .buttons .button select{width:100%}vierkant-template-editor template-body .buttons .button .text{display:grid;gap:.25rem;grid-template-columns:repeat(2,1fr)}vierkant-template-editor template-body .buttons .button:hover{background:var(--vierkant-template-editor-buttons-hover-background, #f0f0f0)}vierkant-template-editor template-body .buttons clear-icon{margin-bottom:.6rem}vierkant-template-editor template-preview{margin:-.5rem -.5rem -.5rem 0;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;background:#e5ddd5;width:100%;min-width:330px;max-width:500px;position:relative;display:flex;justify-content:center;align-items:center;border:var(--vierkant-template-editor-border, 1px solid #ddd);align-self:normal}vierkant-template-editor template-preview .message{position:relative;border-radius:0 7.5px 7.5px;box-shadow:0 1px .5px #00000026;background-color:#fff;max-width:280px;min-width:250px;margin:30px}vierkant-template-editor template-preview .message .content{position:relative}vierkant-template-editor template-preview .message .content .header{margin-top:4px;margin-left:8px;margin-right:8px;word-break:break-word;text-wrap-mode:wrap;white-space-collapse:collapse;font-weight:700;color:#1c2b33}vierkant-template-editor template-preview .message .content .body{font-size:13.6px;line-height:19px;padding:7px 7px 6px 9px;color:#262626}vierkant-template-editor template-preview .message .footer{color:#00000073;font-size:13px;line-height:17px;padding:0 7px 8px 9px}vierkant-template-editor template-preview .message .button{display:flex;justify-content:center;align-items:center;-webkit-user-select:none;user-select:none;border-top:1px solid #DADDE1;color:#00a5f4;fill:#00a5f4;column-gap:4px;font-size:14px;height:44px;line-height:20px;min-width:240px;white-space:pre-wrap}vierkant-template-editor template-preview .message .button svg{width:16px;height:16px}vierkant-template-editor template-preview .message time{position:absolute;color:#0006;bottom:3px;right:7px;font-size:11px;height:15px;line-height:15px}vierkant-template-editor template-preview .message:after{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAABE0lEQVR42u3UIWiEYBjG8e8OBhvekrjgyorIRcPiyeqScc22bDAMVma46JWL4vqBfcFqGcfhbAPbBhpuMmeZIIr3hcEbJ4MnzR889fuXj5cNZdu2EMfxfd/3z3w53wff/pd9soEmeZ6v+z9gQ0iSNKuq6h0W4E6KotgBAsT3/TtoQJZlMcuyLSBADMNYNE3zBQgQ13UtTIAcR1G0AQSIqqoXZVm+AgLENM3rruu+UYHJz9d9AASIKIqnSZI8AQJE07R5XddvgACxLOuGv9XCAtw0CIIVKECnJE3TCBAguq5ftm27BwSI4zi3mAA5CsPwkQIAiqKc89P+ggnQab/i7zcMyfO8JUMSBOGMgU3ZaDQa/QcH7bv0oNrfJdQAAAAASUVORK5CYII=) 50% 50% no-repeat;background-size:contain;content:\"\";height:31px;left:-12px;position:absolute;top:-6px;width:12px}vierkant-template-editor template-preview:before{background:url(data:image/png;base64,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);content:\"\";height:100%;left:0;opacity:.03;position:absolute;top:0;width:100%}vierkant-template-editor .notification{padding:var(--vierkant-template-editor-notification-padding, .5rem 1rem);border-radius:var(--vierkant-template-editor-notification-border-radius, .25rem);border:1px solid var(--vierkant-template-editor-notification-border-color, #ccc);background:var(--vierkant-template-editor-notification-background, #f0f0f0);font-size:var(--vierkant-template-editor-notification-font-size, .875rem);color:var(--vierkant-template-editor-notification-color, #000)}vierkant-template-editor .notification.success{--vierkant-template-editor-notification-background: var(--vierkant-template-editor-notification-success-background, var(--background-success));--vierkant-template-editor-notification-border-color: var(--vierkant-template-editor-notification-success-border-color, var(--vierkant-template-editor-notification-border-color))}vierkant-template-editor .notification.warning{--vierkant-template-editor-notification-background: var(--vierkant-template-editor-notification-warning-background, var(--background-warning));--vierkant-template-editor-notification-border-color: var(--vierkant-template-editor-notification-warning-border-color, var(--vierkant-template-editor-notification-border-color))}vierkant-template-editor .notification.error{--vierkant-template-editor-notification-background: var(--vierkant-template-editor-notification-error-background, var(--background-error));--vierkant-template-editor-notification-border-color: var(--vierkant-template-editor-notification-error-border-color, var(--vierkant-template-editor-notification-border-color))}.vierkant-template-editor.tooltip{--font-family: Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-family:var(--vierkant-template-editor-font-family, var(--font-family));position:fixed;display:inline-block;z-index:var(--vierkant-template-editor-tooltip-z-index, 1000);padding:var(--vierkant-template-editor-tooltip-padding, .5rem .75rem);margin:var(--vierkant-template-editor-tooltip-margin, .25rem);background:var(--vierkant-template-editor-tooltip-background, rgba(0, 0, 0, .75));color:var(--vierkant-template-editor-tooltip-color, #fff);border-radius:var(--vierkant-template-editor-tooltip-border-radius, 4px);max-width:200px}\n", "button{background:var(--vierkant-template-editor-button-background, #fff);border:var(--vierkant-template-editor-button-border, 1px solid #c9c9c9);color:var(--vierkant-template-editor-button-color, #000);fill:var(--vierkant-template-editor-button-color, #000);border-radius:var(--vierkant-template-editor-button-border-radius, 3px);padding:var(--vierkant-template-editor-button-padding, .5rem .75rem);opacity:var(--vierkant-template-editor-button-opacity, 1);cursor:var(--vierkant-template-editor-button-cursor, pointer);display:flex;align-items:center;justify-content:center;gap:.25rem}button:disabled{--vierkant-template-editor-button-cursor: var(--vierkant-template-editor-button-disabled-cursor, not-allowed);--vierkant-template-editor-button-opacity: var(--vierkant-template-editor-button-disabled-opacity, .65)}button:not(:disabled):hover{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-hover-background, #f0f0f0);--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-hover-color)}button:not(:disabled):active{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-active-background, rgba(0, 0, 0, .1));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-active-color, var(--vierkant-template-editor-button-color, #000))}button.button-cancel{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-cancel-background, rgb(211, 47, 47));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-cancel-border, 1px solid rgb(211, 47, 47));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-cancel-color, #fff);--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-cancel-active-background, rgb(185, 28, 28));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-cancel-active-color, #fff);--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-cancel-hover-background, rgb(185, 28, 28));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-cancel-hover-color, #fff);--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-cancel-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-cancel-disabled-opacity, .65)}button.button-confirm{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-confirm-background, rgb(76, 188, 134));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-confirm-border, 1px solid rgb(76, 188, 134));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-confirm-color, rgb(30, 41, 59));--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-confirm-active-background, rgb(56, 148, 104));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-confirm-active-color, rgb(30, 41, 59));--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-confirm-hover-background, rgb(56, 148, 104));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-confirm-hover-color, rgb(30, 41, 59));--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-confirm-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-confirm-disabled-opacity, .65)}button.button-error{--vierkant-template-editor-button-background: var(--vierkant-template-editor-button-error-background, rgb(248, 113, 113));--vierkant-template-editor-button-border: var(--vierkant-template-editor-button-error-border, 1px solid rgb(185, 28, 28));--vierkant-template-editor-button-color: var(--vierkant-template-editor-button-error-color, #000);--vierkant-template-editor-button-active-background: var(--vierkant-template-editor-button-error-active-background, rgb(185, 28, 28));--vierkant-template-editor-button-active-color: var(--vierkant-template-editor-button-error-active-color, #000);--vierkant-template-editor-button-hover-background: var(--vierkant-template-editor-button-error-hover-background, rgb(185, 28, 28));--vierkant-template-editor-button-hover-color: var(--vierkant-template-editor-button-error-hover-color, #000);--vierkant-template-editor-button-disabled-cursor: var(--vierkant-template-editor-button-error-disabled-cursor, not-allowed);--vierkant-template-editor-button-disabled-opacity: var(--vierkant-template-editor-button-error-disabled-opacity, .65)}button.button-icon{--vierkant-template-editor-button-padding: var(--vierkant-template-editor-button-icon-padding, .5rem);line-height:0}\n", "input,textarea{font-feature-settings:inherit;font-size:var(--vierkant-template-editor-input-font-size, 1rem);color:var(--vierkant-template-editor-input-color, #0f172a);background:var(--vierkant-template-editor-input-background, #ffffff);padding-block:var(--vierkant-template-editor-input-padding-block, .5rem);padding-inline:var(--vierkant-template-editor-input-padding-inline, .75rem);border:var(--vierkant-template-editor-input-border, 1px solid #64748b);transition:background 0s,color 0s,border-color 0s,outline-color 0s,box-shadow 0s;appearance:none;border-radius:var(--vierkant-template-editor-input-border-radius, .25rem);outline-color:transparent;box-shadow:none}input:focus,textarea:focus{border-color:var(--vierkant-template-editor-input-focus-border-color, #64748b);box-shadow:none;outline:var(--vierkant-template-editor-input-focus-outline, .2rem solid #7cb6d3);outline-offset:0}input.ng-invalid,textarea.ng-invalid{border-color:var(--vierkant-template-editor-input-error-border-color, #dc2626)}input.ng-invalid:focus,textarea.ng-invalid:focus{outline:var(--vierkant-template-editor-input-error-focus-outline, .2rem solid #fca5a5)}textarea{min-height:10rem;resize:vertical}select{font-feature-settings:inherit;font-size:var(--vierkant-template-editor-input-font-size, 1rem);color:var(--vierkant-template-editor-input-color, #0f172a);background:var(--vierkant-template-editor-input-background, #ffffff);padding-block:var(--vierkant-template-editor-input-padding-block, .5rem);padding-inline:var(--vierkant-template-editor-input-padding-inline, .75rem);border:var(--vierkant-template-editor-input-border, 1px solid #64748b);transition:background 0s,color 0s,border-color 0s,outline-color 0s,box-shadow 0s;border-radius:var(--vierkant-template-editor-input-border-radius, .25rem);outline-color:transparent;box-shadow:none}select:focus{border-color:var(--vierkant-template-editor-input-focus-border-color, #64748b);box-shadow:none;outline:var(--vierkant-template-editor-input-focus-outline, .2rem solid #7cb6d3);outline-offset:0}select.ng-invalid{border-color:var(--vierkant-template-editor-input-error-border-color, #dc2626)}select.ng-invalid:focus{outline:var(--vierkant-template-editor-input-error-focus-outline, .2rem solid #fca5a5)}\n", ".row{display:flex;gap:1rem;align-items:center}.column{display:grid;gap:.5rem;grid-template-rows:repeat(auto-fit,minmax(40px,auto))}.chip{padding:var(--vierkant-template-editor-chip-padding, .25rem .5rem);background:var(--vierkant-template-editor-chip-background, var(--background-accent));border-radius:var(--vierkant-template-editor-chip-border-radius, 9999px);font-size:var(--vierkant-template-editor-chip-font-size, .875rem);font-weight:500;color:var(--vierkant-template-editor-chip-color, #000);-webkit-user-select:none;user-select:none}.chip.success{background:var(--vierkant-template-editor-chip-success-background, var(--background-success))}.chip.warning{background:var(--vierkant-template-editor-chip-warning-background, var(--background-warning))}.chip.error{background:var(--vierkant-template-editor-chip-error-background, var(--background-error))}\n"] }]
        }], propDecorators: { data: [{ type: i0.Input, args: [{ isSignal: true, alias: "data", required: false }] }, { type: i0.Output, args: ["dataChange"] }], options: [{ type: i0.Input, args: [{ isSignal: true, alias: "options", required: false }] }], onSave: [{ type: i0.Output, args: ["save"] }], onReset: [{ type: i0.Output, args: ["reset"] }], onDelete: [{ type: i0.Output, args: ["delete"] }], loading: [{ type: i0.Input, args: [{ isSignal: true, alias: "loading", required: false }] }, { type: i0.Output, args: ["loadingChange"] }], _loading: [{
                type: HostBinding,
                args: ['class.loading']
            }] } });

// Public API Surface of message-server-components
function registerElement(component, app) {
    if (!customElements.get(component.selector)) {
        customElements.define(component.selector, createCustomElement(component, { injector: app.injector }));
    }
}
function setup() {
    (async () => {
        const app = await createApplication({
            providers: [
                provideZonelessChangeDetection(),
                provideHttpClient(),
                provideTranslateService({
                    fallbackLang: 'en',
                    lang: 'en'
                })
            ]
        });
        registerElement(TemplateEditor, app);
        registerElement(TemplateList, app);
        registerElement(FacebookLogin, app);
    })();
}

/**
 * Generated bundle index. Do not edit.
 */

export { BaseComponent, FacebookLogin, TemplateEditor, TemplateList, ValidationDirective, setup };
//# sourceMappingURL=message-server-components.mjs.map
