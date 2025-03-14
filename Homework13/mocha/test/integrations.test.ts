import axios from 'axios';
import { describe, it, before, after } from 'mocha';
import { expect } from 'chai';

const API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_D8BNtCNcLHWZdBfVklIE1LUr8dFZssYU6Hp6FsM9QDRitFAkBx7pnZmGLjFrLRT8';
const headers = { 'x-api-key': API_KEY };

let imageId: string;
let favouriteId: number | null = null;
let voteId: number | null = null;

before(async () => {
  try {
    const response = await axios.get<{ id: string }[]>(`${API_URL}/images/search`, { headers });
    imageId = response.data[0].id;
    console.log('Image ID:', imageId);
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error;
  }
});

after(async () => {
  try {
    if (favouriteId) {
      await axios.delete(`${API_URL}/favourites/${favouriteId}`, { headers });
      console.log('Deleted favourite:', favouriteId);
    }
    if (voteId) {
      await axios.delete(`${API_URL}/votes/${voteId}`, { headers });
      console.log('Deleted vote:', voteId);
    }
  } catch (error) {
    console.error('Error during cleanup:', error);
  }
});

describe('TheCatAPI Integration Tests', () => {
  it('should add an image to favourites', async () => {
    try {
      const response = await axios.post<{ id: number; message: string }>(
        `${API_URL}/favourites`,
        { image_id: imageId },
        { headers }
      );

      console.log('Favourite response:', response.data);

      expect(response.status).to.equal(200);
      expect(response.data.message).to.equal('SUCCESS');

      favouriteId = response.data.id;
    } catch (error) {
      console.error('Error adding to favourites:', error);
      throw error;
    }
  });

  it('should retrieve the list of favourites and verify the image', async () => {
    try {
      const response = await axios.get<{ id: number; image_id: string }[]>(
        `${API_URL}/favourites`,
        { headers }
      );

      console.log('Favourites list:', response.data);

      expect(response.status).to.equal(200);
      const favourite = response.data.find((item) => item.image_id === imageId);
      expect(favourite).to.not.be.undefined;
    } catch (error) {
      console.error('Error retrieving favourites:', error);
      throw error;
    }
  });

  it('should vote for an image', async () => {
    try {
      const voteResponse = await axios.post<{ id: number; message: string }>(
        `${API_URL}/votes`,
        { image_id: imageId, value: 1 },
        { headers }
      );

      console.log('Vote response:', voteResponse.data);

      expect(voteResponse.status).to.equal(201);
      expect(voteResponse.data.message).to.equal('SUCCESS');

      voteId = voteResponse.data.id;

      const votesList = await axios.get<{ id: number; image_id: string; value: number }[]>(
        `${API_URL}/votes`,
        { headers }
      );

      console.log('Votes list:', votesList.data);

      const vote = votesList.data.find((v) => v.image_id === imageId);
      expect(vote).to.not.be.undefined;
      expect(vote?.value).to.equal(1);
    } catch (error) {
      console.error('Error voting for image:', error);
      throw error;
    }
  });

  it('should remove image from favourites', async () => {
    try {
      if (!favouriteId) throw new Error('Favourite ID is not set');

      const deleteResponse = await axios.delete(`${API_URL}/favourites/${favouriteId}`, { headers });
      console.log('Delete response:', deleteResponse.data);

      expect(deleteResponse.status).to.equal(200);

      const favouritesList = await axios.get<{ id: number; image_id: string }[]>(
        `${API_URL}/favourites`,
        { headers }
      );

      console.log('Favourites after delete:', favouritesList.data);

      const favourite = favouritesList.data.find((item) => item.id === favouriteId);
      expect(favourite).to.be.undefined;
    } catch (error) {
      console.error('Error removing from favourites:', error);
      throw error;
    }
  });
});
