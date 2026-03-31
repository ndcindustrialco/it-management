import { logger } from './logger';

export type ApiResponse<T> = {
  data?: T;
  error?: string;
  status: number;
};

export class ApiClient {
  private static async handleResponse<T>(res: Response): Promise<ApiResponse<T>> {
    const status = res.status;
    
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      const errorMessage = errorData.message || errorData.error || `HTTP error! status: ${status}`;
      logger.error('API request failed', { status, errorMessage });
      return { status, error: errorMessage };
    }

    const data = await res.json();
    return { status, data };
  }

  public static async get<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
    logger.debug(`GET request to ${url}`);
    try {
      const res = await fetch(url, { ...options, method: 'GET' });
      return this.handleResponse<T>(res);
    } catch (e: any) {
      logger.error(`GET request to ${url} threw exception`, e);
      return { status: 500, error: 'Network or internal error occurred' };
    }
  }

  public static async post<T>(url: string, body?: any, options?: RequestInit): Promise<ApiResponse<T>> {
    logger.debug(`POST request to ${url}`);
    try {
      const res = await fetch(url, {
        ...options,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(options?.headers || {}),
        },
        body: body ? JSON.stringify(body) : undefined,
      });
      return this.handleResponse<T>(res);
    } catch (e: any) {
      logger.error(`POST request to ${url} threw exception`, e);
      return { status: 500, error: 'Network or internal error occurred' };
    }
  }

  public static async put<T>(url: string, body?: any, options?: RequestInit): Promise<ApiResponse<T>> {
    logger.debug(`PUT request to ${url}`);
    try {
      const res = await fetch(url, {
        ...options,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...(options?.headers || {}),
        },
        body: body ? JSON.stringify(body) : undefined,
      });
      return this.handleResponse<T>(res);
    } catch (e: any) {
      logger.error(`PUT request to ${url} threw exception`, e);
      return { status: 500, error: 'Network or internal error occurred' };
    }
  }

  public static async delete<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
    logger.debug(`DELETE request to ${url}`);
    try {
      const res = await fetch(url, { ...options, method: 'DELETE' });
      return this.handleResponse<T>(res);
    } catch (e: any) {
      logger.error(`DELETE request to ${url} threw exception`, e);
      return { status: 500, error: 'Network or internal error occurred' };
    }
  }
}
