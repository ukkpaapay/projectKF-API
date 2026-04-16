export interface CustomRequest extends Express.Request {
    user?: any; // Add any custom properties you need
}

export interface CustomResponse extends Express.Response {
    sendResponse: (data: any) => 'success'; // Example of a custom method
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}