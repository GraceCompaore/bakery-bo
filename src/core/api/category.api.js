import { apiClient, apiSecureClient } from './api';

export default class CategoryApi {
  static findAll() {
    return apiSecureClient.get('/category').then((response) => response.data);
  }
}
