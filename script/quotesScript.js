async function fetchQuotes() {
  const quote = document.getElementById('quote');
  const speaker = document.getElementById('speaker');
  const title = document.getElementById('title');

  const url = 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'df34ae637amsh410ff16bdcbdf0ep1d1961jsn230b9bd1ec5c',
      'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (Array.isArray(data) && data.length > 0) {
      const result = data[0];
      quote.textContent = result.quote;
      speaker.textContent = `-${result.author}`;
      title.textContent = `-${result.category}`;
    } else {
      console.error('No quotes found');
    }
  } catch (error) {
    console.error(error);
  }
}

fetchQuotes();