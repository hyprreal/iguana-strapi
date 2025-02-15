module.exports = {
  async afterCreate(event) {
    const { result } = event; // The created entry

    try {
      const response = await fetch('https://project-iguana.netlify.app/api/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary authentication headers (e.g., Authorization)
        },
        body: JSON.stringify(result),
      });

      if (!response.ok) {
        throw new Error(`Error calling API endpoint: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error calling API endpoint:', error);
      // Handle the error appropriately (e.g., log it, display a message, etc.)
    }
  },
  async afterUpdate(event) {
    const { result } = event; // The created entry

    try {
      const response = await fetch('https://project-iguana.netlify.app/api/product', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary authentication headers (e.g., Authorization)
        },
        body: JSON.stringify(result),
      });

      if (!response.ok) {
        throw new Error(`Error calling API endpoint: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error calling API endpoint:', error);
      // Handle the error appropriately (e.g., log it, display a message, etc.)
    }
  },
  async afterDelete(event) {
    const { result } = event; // The created entry

    try {
      const response = await fetch('https://project-iguana.netlify.app/api/product', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary authentication headers (e.g., Authorization)
        },
        body: JSON.stringify(result),
      });

      if (!response.ok) {
        throw new Error(`Error calling API endpoint: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error calling API endpoint:', error);
      // Handle the error appropriately (e.g., log it, display a message, etc.)
    }
  }
};