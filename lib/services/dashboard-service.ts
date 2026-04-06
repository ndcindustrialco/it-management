import { ApiClient } from '@/lib/api-client';

export class DashboardService {
  static async getRequests() {
    return ApiClient.get<any[]>('/api/requests?limit=1000');
  }

  static async getEquipmentEntries() {
    return ApiClient.get<any[]>('/api/equipment-entry-lists?limit=1000');
  }

  static async getInventory() {
    return ApiClient.get<any[]>('/api/equipment-lists?limit=1000');
  }

  static async postComment(requestId: string, content: string, parentId?: string | null) {
    return ApiClient.post('/api/comments', {
      requestId,
      content,
      parentId
    });
  }
}
