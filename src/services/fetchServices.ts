const fetchObjects = async (direccion: string) => {
  try {
      const response = await fetch(`http://localhost:9000/${direccion}`);
      if (!response.ok) {
          console.log(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      return responseData;
  } catch (err: any) {
      throw err;
  }
};

export default { fetchObjects };
