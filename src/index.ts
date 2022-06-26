export interface ILogger {
    debug(...args: any[]): void;
    info(...args: any[]): void;
    log(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    stat(...args: any[]): void;
}

export class Logger implements ILogger {
    
    constructor(
        private name: string
    ) {
    }
    
    static create(value: unknown): Logger {
        const name = typeof(value) == "string" ? value : typeof(value) == "function" ? value.name : typeof(value) == "object" && value ? value.constructor.name : "<unknown>";
        return new Logger(name);
    }
    
    debug(...args: any[]) {
        args.splice(0, 0, "[" + new Date().toISOString() + "][" + this.name + "][DEBUG]");
        console.debug(...args);
    }
    
    info(...args: any[]) {
        args.splice(0, 0, "[" + new Date().toISOString() + "][" + this.name + "][INFO]");
        console.info(...args);
    }
    
    log(...args: any[]) {
        args.splice(0, 0, "[" + new Date().toISOString() + "][" + this.name + "][LOG]");
        console.log(...args);
    }
    
    warn(...args: any[]) {
        args.splice(0, 0, "[" + new Date().toISOString() + "][" + this.name + "][WARN]");
        console.warn(...args);
    }
    
    error(...args: any[]) {
        args.splice(0, 0, "[" + new Date().toISOString() + "][" + this.name + "][ERROR]");
        console.error(...args);
    }
    
    stat(...args: any[]) {
        args.splice(0, 0, "[" + new Date().toISOString() + "][" + this.name + "][STAT]");
        console.error(...args);
    }
}
