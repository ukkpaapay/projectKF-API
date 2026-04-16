class BaseResp<T> {
    errorCode: number;
    data: T | null;
    version: string;

    constructor(data: T | null, errorCode: number = 0, version: string = '1.0.0') {
        this.errorCode = errorCode;
        this.data = data;
        this.version = version;
    }

    static success<T>(data: T): BaseResp<T> {
        return new BaseResp<T>(data);
    }

    static error<T>(errorCode: number, data: T | null = null): BaseResp<T> {
        return new BaseResp(data, errorCode);
    }
}

export default BaseResp;
