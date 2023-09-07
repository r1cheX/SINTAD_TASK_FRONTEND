import { HttpErrorResponse } from "@angular/common/http";

export interface ApiResponse {
	status: 'success' | 'error' | 'fail' ;
	message: string;
	data: any
}

export interface ApiError extends HttpErrorResponse {
	status: number;
	message: string;
}
