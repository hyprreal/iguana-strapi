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

      const data = await response.json(); // Process the response from your API endpoint
      console.log('API call successful:', data);
    } catch (error) {
      console.error('Error calling API endpoint:', error);
      // Handle the error appropriately (e.g., log it, display a message, etc.)
    }
  },
};