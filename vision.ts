
const API_KEY = 'YOUR_GOOGLE_CLOUD_VISION_API_KEY';

export const detectText = async (base64: string) => {
  const body = {
    requests: [
      {
        image: {
          content: base64,
        },
        features: [
          {
            type: 'TEXT_DETECTION',
            maxResults: 1,
          },
        ],
      },
    ],
  };

  const response = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();

  if (result.responses && result.responses.length > 0) {
    return result.responses[0].fullTextAnnotation.text;
  } else {
    return null;
  }
};
