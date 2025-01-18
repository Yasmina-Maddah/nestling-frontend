// src/services/apiService.js
export async function fetchChildProfile(childId) {
    const response = await fetch(`${API_BASE_URL}/children-profiles/${childId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Replace with your auth token mechanism
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch child profile');
    }
    return response.json();
  }
  
  export async function createChildProfile(childData) {
    const response = await fetch(`${API_BASE_URL}/children-profiles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(childData),
    });
    if (!response.ok) {
      throw new Error('Failed to create child profile');
    }
    return response.json();
  }
  
  export async function updateChildProfile(childId, childData) {
    const response = await fetch(`${API_BASE_URL}/children-profiles/${childId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(childData),
    });
    if (!response.ok) {
      throw new Error('Failed to update child profile');
    }
    return response.json();
  }
  