const chatDataUrl =
  'https://jsonblob.com/api/jsonBlob/4f421a10-5c4d-11e9-8840-0b16defc864d';

export const getMessagesFromBackend = async () => {
  try {
    let messages = await fetch(chatDataUrl);
    let messagesJson = await messages.json();

    return messagesJson;
  } catch (error) {
    console.error(error);
  }
};
