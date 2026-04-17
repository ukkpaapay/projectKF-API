export interface CustomRequest extends Express.Request {
    user?: string; // Add any custom properties you need
}

export interface CustomResponse extends Express.Response {
    sendResponse: (data: string) => 'success'; // Example of a custom method
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}