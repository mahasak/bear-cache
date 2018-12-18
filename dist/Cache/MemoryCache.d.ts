import { ICache } from './ICache';
export declare class MemoryCache implements ICache {
    private cache;
    constructor();
    get<T>(key: string): Promise<T>;
    set(key: string, item: any): Promise<void>;
    delete(key: string): Promise<void>;
    clear(): Promise<void>;
    size(): Promise<number>;
}
