import { BowserService } from 'ngx-bowser';
export declare class SpacesLoggingService {
    private bowser;
    private _logLevel;
    private useColor;
    private browser;
    private defaultBackground;
    private defaultColor;
    private criticalBackground;
    private criticalColor;
    private debugBackground;
    private debugColor;
    private errorBackground;
    private errorColor;
    private importantBackground;
    private importantColor;
    private infoBackground;
    private infoColor;
    private warnBackground;
    private warnColor;
    private methodColors;
    private moduleColors;
    private levels;
    constructor(bowser: BowserService);
    logLevel: string;
    disableColor(): void;
    criticalColors(background: string, color: string): void;
    debugColors(background: string, color: string): void;
    errorColors(background: string, color: string): void;
    importantColors(background: string, color: string): void;
    infoColors(background: string, color: string): void;
    warnColors(background: string, color: string): void;
    methodColor(background: string, color: string, methodName?: string): void;
    moduleColor(background: string, color: string, moduleName?: string): void;
    log(level: string, title: string, msg: any, bg?: string, color?: string, headerBg?: string, headerColor?: string, methodIndex?: any): void;
    private getHeader(logLine);
    private parseLogLine(logLine);
    private methodIndex();
    critical(title: string, msg?: any, bg?: string, color?: string): void;
    debug(title: string, msg?: any, bg?: string, color?: string): void;
    error(title: string, msg?: any, bg?: string, color?: string): void;
    info(title: string, msg?: any, bg?: string, color?: string): void;
    important(title: string, msg?: any, bg?: string, color?: string): void;
    warn(title: string, msg?: any, bg?: string, color?: string): void;
    private css(background, color);
}