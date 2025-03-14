import axios from 'axios';
import { describe, it, before, after } from 'mocha';
import { expect } from 'chai';

const API_URL = 'https://petstore.swagger.io/v2';

let petId: number;

type Pet = {
  id: number;
  name: string;
  status: string;
  category: { id: number; name: string };
  photoUrls: string[];
  tags: { id: number; name: string }[];
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

before(async () => {
  try {
    const response = await axios.post<Pet>(
      `${API_URL}/pet`,
      {
        id: 12345,
        name: 'TestPet',
        status: 'available',
        category: { id: 1, name: 'Cat' },
        photoUrls: ['http://example.com/photo.jpg'],
        tags: [{ id: 1, name: 'cute' }],
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    petId = response.data.id;
    console.log('Created Pet ID:', petId);
    await sleep(1000);
  } catch (error) {
    console.error('Error creating pet:', error);
    throw error;
  }
});

after(async () => {
  try {
    if (petId) {
      await axios.delete(`${API_URL}/pet/${petId}`);
      console.log('Deleted Pet ID:', petId);
    }
  } catch (error) {
    console.error('Error deleting pet:', error);
  }
});

describe('Petstore API Contract Tests', function () {
  this.timeout(10000); 

  it('should retrieve the created pet', async () => {
    try {
      const response = await axios.get<Pet>(`${API_URL}/pet/${petId}`);

      console.log('Retrieved Pet:', response.data);

      expect(response.status).to.equal(200);
      expect(response.data.id).to.equal(petId);
      expect(response.data.name).to.equal('TestPet');
      expect(response.data.status).to.equal('available');
    } catch (error) {
      console.error('Error retrieving pet:', error);
      throw error;
    }
  });

  it('should update pet status', async () => {
    try {
      const updateResponse = await axios.put<Pet>(
        `${API_URL}/pet`,
        {
          id: petId,
          name: 'TestPet',
          status: 'sold',
          category: { id: 1, name: 'Cat' },
          photoUrls: ['http://example.com/photo.jpg'],
          tags: [{ id: 1, name: 'cute' }],
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log('Updated Pet:', updateResponse.data);
      expect(updateResponse.status).to.equal(200);

      let updatedPet: Pet | null = null;
      for (let i = 0; i < 5; i++) {
        await sleep(1000);
        const getResponse = await axios.get<Pet>(`${API_URL}/pet/${petId}`);
        updatedPet = getResponse.data;
        if (updatedPet.status === 'sold') break;
      }

      console.log('Verified Updated Pet:', updatedPet);
      expect(updatedPet?.status).to.equal('sold');
    } catch (error) {
      console.error('Error updating pet:', error);
      throw error;
    }
  });

  it('should delete the pet', async () => {
    try {
      const deleteResponse = await axios.delete(`${API_URL}/pet/${petId}`);

      console.log('Delete Response:', deleteResponse.data);

      expect(deleteResponse.status).to.equal(200);

      await axios.get(`${API_URL}/pet/${petId}`).catch((error) => {
        expect(error.response.status).to.equal(404);
      });
    } catch (error) {
      console.error('Error deleting pet:', error);
      throw error;
    }
  });
});
