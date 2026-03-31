import { ApiClient } from '@/lib/api-client';

export class DashboardService {
  static async getRequests() {
    return ApiClient.get<any[]>('/api/requests');
  }

  static async getEquipmentEntries() {
    return ApiClient.get<any[]>('/api/equipment-entry-lists');
  }

  static async getInventory() {
    return ApiClient.get<any[]>('/api/equipment-lists');
  }

  static async postComment(requestId: string, content: string, parentId?: string | null) {
    return ApiClient.post('/api/comments', {
      requestId,
      content,
      parentId
    });
  }
}
